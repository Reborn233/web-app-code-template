<template>
  <van-empty image="error" />
  <p>{{$route.query?.message || '访问错误！'}}</p>
</template>
<style lang="scss" scoped>
p {
  color: $TEXT-COLOR-0;
  text-align: center;
  font-size: 14px;
}
</style>
