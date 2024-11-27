<template>
  <div class="space-wrap">
    <strong>1. Direction:</strong>
    <div class="space-wrap">
      <BuSpace direction="column" fill class="space">
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
      </BuSpace>
    </div>

    <strong>2. Justify-content:</strong>
    <div class="space-wrap">
      <BuSpace justify="center" fill class="space">
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
      </BuSpace>
    </div>
    <div class="space-wrap">
      <BuSpace justify="flex-end" fill class="space">
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
      </BuSpace>
    </div>
    <strong>3. Align-items:</strong>
    <div class="space-wrap">
      <BuSpace align="center" fill class="space">
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
      </BuSpace>
    </div>
    <div class="space-wrap">
      <BuSpace align="flex-end" fill class="space">
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
      </BuSpace>
    </div>
    <strong>3. Gap:</strong>
    <div class="space-wrap">
      <BuSpace :gap="`20px`" fill class="space">
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
        <BuButton block>Hello</BuButton>
      </BuSpace>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.space-wrap {
  padding: 24px;
  font-size: 28px;

  .space {
    height: 300px;
    background-color: #eaeaea;
    flex-wrap: wrap;
  }
}
</style>
