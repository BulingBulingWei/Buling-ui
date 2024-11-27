<template>
  <div class="picker-row">
    <BuButton type="outline" @click="visible = true">级联选择</BuButton>
  </div>
  <BuPopup v-model="visible" placement="bottom" close-on-overlay-click>
    <BuPicker
      v-model="data"
      :columns="roles"
      :field-names="{ label: 'name', value: 'val' }"
      @change="change"
      @confirm="confirm"
      @cancel="visible = false"
    ></BuPicker>
  </BuPopup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BuButton } from '@/components'
const visible = ref(false)
const data: any = ref([])

const roles = [
  {
    name: '战士',
    val: '战士',
    children: [
      {
        name: '夏侯惇',
        val: '夏侯惇'
      },
      {
        name: '吕布',
        val: '吕布'
      },
      {
        name: '铠',
        val: '铠'
      },
      {
        name: '狂铁',
        val: '狂铁'
      },
      {
        name: '曹操',
        val: '曹操'
      },
      {
        name: '赵云',
        val: '赵云'
      }
    ]
  },
  {
    name: '法师',
    val: '法师',
    children: [
      {
        name: '安琪拉',
        val: '安琪拉'
      },
      {
        name: '扁鹊',
        val: '扁鹊'
      },
      {
        name: '不知火舞',
        val: '不知火舞'
      },
      {
        name: '嫦娥',
        val: '嫦娥'
      },

      {
        name: '貂蝉',
        val: '貂蝉'
      },
      {
        name: '小乔',
        val: '小乔'
      }
    ]
  },
  {
    name: '辅助',
    val: '辅助',
    children: [
      {
        name: '孙膑',
        val: '孙膑'
      },
      {
        name: '蔡文姬',
        val: '蔡文姬'
      },
      {
        name: '庄周',
        val: '庄周'
      },
      {
        name: '大乔',
        val: '大乔'
      },

      {
        name: '刘邦',
        val: '刘邦'
      },
      {
        name: '明世隐',
        val: '明世隐'
      }
    ]
  },
  {
    name: '刺客',
    val: '刺客',
    children: [
      {
        name: '韩信',
        val: '韩信'
      },
      {
        name: '兰陵王',
        val: '兰陵王'
      },
      {
        name: '娜可露露',
        val: '娜可露露'
      },
      {
        name: '花木兰',
        val: '花木兰'
      },
      {
        name: '孙悟空',
        val: '孙悟空'
      },
      {
        name: '李白',
        val: '李白'
      }
    ]
  },
  {
    name: '射手',
    val: '射手',
    children: [
      {
        name: '狄仁杰',
        val: '狄仁杰'
      },
      {
        name: '后羿',
        val: '后羿'
      },
      {
        name: '百里守约',
        val: '百里守约'
      },
      {
        name: '虞姬',
        val: '虞姬'
      },
      {
        name: '鲁班七号',
        val: '鲁班七号'
      },
      {
        name: '孙尚香',
        val: '孙尚香'
      },
      {
        name: '马可波罗',
        val: '马可波罗'
      }
    ]
  }
]

const confirm = (val: any) => {
  alert('已选择：' + val.join(' -- '))
  visible.value = false
}

const change = (val: any) => {
  console.log('change', val)
}
</script>

<style lang="less" scoped>
.picker-row {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
