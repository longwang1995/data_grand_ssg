<template>
	<div class="login">login</div>
</template>
<script>
export default {
	layout: 'main',
}
</script>
<script setup>
import { useHead } from '@vueuse/head'

useHead({
	title: '登录',
})
</script>
<style lang="less" scoped></style>
