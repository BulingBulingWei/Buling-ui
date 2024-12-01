<template>
  <div class="form-wrap">
    <BuForm layout="vertical">
      <BuFormItem label="用户名" required arrow>
        <input type="text" class="input" />
      </BuFormItem>

      <BuFormItem label="手机号" required arrow>
        <input type="text" class="input" />
      </BuFormItem>

      <BuFormItem label="常住地址" required arrow help="请输入详细的地址哦~">
        <input type="text" class="input" />
      </BuFormItem>
    </BuForm>
  </div>
  <div class="form-wrap">
    <BuForm layout="horizontal" label-width="1.8rem">
      <BuFormItem label="用户名" required>
        <input type="text" class="input" />
      </BuFormItem>

      <BuFormItem label="手机号" required>
        <input type="text" class="input" />
      </BuFormItem>

      <BuFormItem label="常住地址" required error="请输入正确的地址哦~">
        <input type="text" class="input" />
      </BuFormItem>
    </BuForm>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.form-wrap {
  padding: 40px 24px;
  --bu-textarea-bg-color: #f5f6fa;
}
.input {
  padding: 0;
  width: 100%;
  display: flex;
  border: none;
  flex: 1;
  outline: none;
  height: 50px;
}
</style>
