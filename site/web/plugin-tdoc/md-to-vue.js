/* eslint-disable */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const DEFAULT_TABS = [
  { tab: 'demo', name: '示例' },
  { tab: 'api', name: 'API' },
  { tab: 'design', name: '指南' }
]

export default function mdToVue(options) {
  const mdSegment = customRender(options)
  const { demoCodesDefsStr, demoCodeInstallStr } = options

  const sfc = `
    <template>
      <td-doc-content ref="tdDocContent" page-status="hidden" platform="mobile">
        ${
          mdSegment.tdDocHeader
            ? `
          <td-doc-header
            slot="doc-header"
            ref="tdDocHeader"
            platform="mobile"
            spline="${mdSegment.spline}"
            component-name="${mdSegment.isComponent || ''}"
          >
          </td-doc-header>`
            : ''
        }
        ${
          mdSegment.isComponent
            ? `
          <td-doc-tabs ref="tdDocTabs" :tab="tab"></td-doc-tabs>
          <div v-show="tab === 'demo'">
            <div name="DEMO">${mdSegment.demoMd}</div>

            <td-doc-phone ref="tdDocPhone">
              <iframe src="${mdSegment.mobileUrl}" frameborder="0" width="100%" height="100%" style="border-radius: 0 0 6px 6px;"></iframe>
            </td-doc-phone>

          </div>
          <div v-show="tab === 'api'" name="API" style="width: 900px;">${mdSegment.apiMd}</div>
          <div v-show="tab === 'design'" name="DESIGN">${mdSegment.designMd}</div>
        `
            : `<div name="DOC" class="${mdSegment.docClass}">${mdSegment.docMd}</div>`
        }
        <div style="margin-top: 48px;">
          <td-doc-history time="${mdSegment.lastUpdated}"></td-doc-history>
        </div>
      </td-doc-content>
    </template>

    <script>
      import { defineComponent } from 'vue';
      import Prismjs from 'prismjs';
      import 'prismjs/components/prism-bash.js';
      ${demoCodesDefsStr}

      export default defineComponent({
        data() {
          return {
            ${demoCodeInstallStr}
          };
        },

        computed: {
          tab: {
            get() {
              return this.$route.query.tab || 'demo';
            },
            set(v) {
              if (this.$route.query.tab !== v)
                this.$router.push({ query: { tab: v } });
            }
          },
        },

        mounted() {
          const { tdDocContent, tdDocHeader, tdDocTabs, tdDocPhone } = this.$refs;
          const completeUrl = location.origin + '${mdSegment.mobileUrl}';

          if (tdDocHeader) {
            tdDocHeader.docInfo = {
              title: \`${mdSegment.title}\`,
              desc: \`${mdSegment.description}\`,
            };
          }

          if (tdDocTabs) {
            tdDocTabs.tabs = ${JSON.stringify(mdSegment.tdDocTabs)};
            tdDocTabs.onchange = ({ detail: currentTab }) => this.tab = currentTab;
          }

          if (tdDocPhone) {
            tdDocPhone.qrcodeUrl = completeUrl;
          }

          Prismjs.highlightAll();

          this.$emit('loaded', () => {
            tdDocContent.pageStatus = 'show';
          });
        },
      });
    </script>
  `

  return sfc
}

// 解析 markdown 内容
function customRender({ source, file, md }) {
  const { content, data } = matter(source)
  // md top data
  const pageData = {
    spline: '',
    toc: false,
    title: '',
    description: '',
    isComponent: false,
    isHook: false,
    tdDocHeader: true,
    tdDocTabs: DEFAULT_TABS,
    apiFlag: /#+\s*API/i,
    docClass: '',
    lastUpdated: Math.round(fs.statSync(file).mtimeMs),
    ...data
  }

  // md filename
  const reg = file.match(/([\w-]+)\.?([\w-]+)?\.md/)
  const componentName = reg && reg[1]

  // split md
  let [demoMd = '', apiMd = ''] = content.split(pageData.apiFlag)

  const mdSegment = {
    ...pageData,
    componentName,
    docMd: '<td-doc-empty></td-doc-empty>',
    demoMd: '<td-doc-empty></td-doc-empty>',
    apiMd: '<td-doc-empty></td-doc-empty>',
    designMd: '<td-doc-empty></td-doc-empty>'
  }

  // fix table | render error
  apiMd = apiMd.replace(/`[^`]+`/g, (str) => str.replace(/\|/g, '\\|'))

  if (pageData.isComponent) {
    mdSegment.demoMd = md.render.call(
      md,
      `${pageData.toc ? '[toc]\n' : ''}${demoMd.replace(/<!--[\s\S]+?-->/g, '')}`
    ).html
    mdSegment.apiMd = md.render.call(
      md,
      `${pageData.toc ? '[toc]\n' : ''}${apiMd.replace(/<!--[\s\S]+?-->/g, '')}`
    ).html
  } else {
    mdSegment.docMd = md.render.call(
      md,
      `${pageData.toc ? '[toc]\n' : ''}${content.replace(/<!--[\s\S]+?-->/g, '')}`
    ).html
  }

  // 移动端路由地址
  const prefix = `/mobile.html`
  mdSegment.mobileUrl = `${prefix}#/${componentName}`

  // 设计指南内容 不展示 design Tab 则不解析
  if (pageData.isComponent && pageData.tdDocTabs.some((item) => item.tab === 'design')) {
    const designDocPath = path.resolve(__dirname, `../../../src/${componentName}/docs/guide.md`)
    if (fs.existsSync(designDocPath)) {
      const designMd = fs.readFileSync(designDocPath, 'utf-8')
      mdSegment.designMd = md.render.call(md, `${pageData.toc ? '[toc]\n' : ''}${designMd}`).html
    }
  }

  return mdSegment
}
