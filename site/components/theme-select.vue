<template>
  <div class="selectBox">
    <div :class="lightIconClass" @click="changeMode('light')">
      <svg width="32" height="32" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M506.95168 690.92352a178.97472 178.97472 0 1 0 10.1888-357.79584 178.97472 178.97472 0 0 0-10.1888 357.79584zM509.44 306.42176a21.79072 21.79072 0 0 0 21.78048-21.79072v-58.04032a21.79072 21.79072 0 0 0-43.5712 0v58.04032c0 12.032 9.75872 21.79072 21.79072 21.79072z m157.71648 65.20832a21.7088 21.7088 0 0 0 15.57504-5.9392l42.1888-39.86432a21.79072 21.79072 0 0 0-29.92128-31.67232l-42.1888 39.86432a21.79072 21.79072 0 0 0 14.336 37.61152z m130.89792 121.856l-58.03008-1.6384a21.79072 21.79072 0 1 0-1.2288 43.55072l58.01984 1.64864a21.79072 21.79072 0 0 0 1.2288-43.56096zM687.50336 658.97472a21.79072 21.79072 0 0 0-31.67232 29.93152l39.86432 42.1888c4.13696 4.37248 9.64608 6.656 15.21664 6.81984a21.79072 21.79072 0 0 0 16.45568-36.74112l-39.86432-42.1888z m-176.47616 58.65472a21.79072 21.79072 0 0 0-22.39488 21.15584l-1.6384 58.01984a21.79072 21.79072 0 1 0 43.55072 1.2288l1.6384-58.0096a21.79072 21.79072 0 0 0-21.15584-22.39488z m-175.90272-61.7984l-42.1888 39.86432a21.79072 21.79072 0 0 0 29.92128 31.67232l42.1888-39.86432a21.79072 21.79072 0 0 0-29.92128-31.67232z m-28.7232-144.81408a21.79072 21.79072 0 0 0-21.15584-22.39488l-58.01984-1.6384a21.79072 21.79072 0 1 0-1.2288 43.55072l58.0096 1.6384a21.79072 21.79072 0 0 0 22.39488-21.15584z m30.12608-145.9712c4.13696 4.37248 9.64608 6.656 15.22688 6.8096a21.79072 21.79072 0 0 0 16.45568-36.74112l-39.87456-42.1888a21.79072 21.79072 0 1 0-31.66208 29.93152l39.85408 42.1888z"
          :fill="`${themeMode === 'light' ? '#ffbd2e' : '#8a8a8a'}`"
          p-id="5614"
          data-spm-anchor-id="a313x.search_index.0.i9.5f8f3a81pbvqT8"
          class="selected"
        ></path>
      </svg>
    </div>
    <div :class="darkIconClass" @click="changeMode('dark')">
      <svg
        t="1731855556540"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="13183"
        width="32"
        height="32"
      >
        <path
          d="M496.16 527.872c-63.04-63.072-79.968-154.208-52.032-233.088-30.496 10.784-59.328 27.68-83.712 52.032-87.488 87.488-87.488 229.344 0 316.8 87.456 87.456 229.248 87.52 316.736 0 24.448-24.384 41.28-53.216 52.032-83.712C650.368 607.808 559.2 590.912 496.16 527.872z"
          :fill="`${themeMode === 'dark' ? '#fff' : '#8a8a8a'}`"
          p-id="13184"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const themeMode = ref('light')

const lightIconClass = computed(() => [
  `icon-box`,
  { ['light-selected']: themeMode.value === 'light' }
])

const darkIconClass = computed(() => [
  `icon-box`,
  { ['dark-selected']: themeMode.value === 'dark' }
])

function changeMode(mode) {
  if (['dark', 'light'].includes(mode)) {
    const targetNode = document.documentElement
    targetNode.setAttribute('theme-mode', mode)
    themeMode.value = mode
  }
}
</script>

<style lang="less">
@backgroundColor: rgba(162, 162, 162, 0.122);

.selectBox {
  width: fit-content;
  border-radius: 4px;
  background-color: @backgroundColor;
  padding: 3px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 2px;
  }
}

.dark-selected {
  background-color: rgba(255, 255, 255, 0.247);
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.247);
}
.light-selected {
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.727);
}

.icon-box:hover {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
