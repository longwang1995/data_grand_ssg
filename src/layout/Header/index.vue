<template>
	<header>
		<div class="container flex">
			<div class="logo">
        <img src="../../assets/img/logo.png" alt="">
      </div>
			<div class="nav">
				<ul class="flex">
					<li v-for="item in navList">
						<span>{{ item.name }}</span>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup>
const navList = [
	{
		name: '官网首页',
	},
	{
		name: '产品服务',
	},
	{
		name: '解决方案',
	},
	{
		name: '合作伙伴',
	},
	{
		name: '新闻中心',
	},
	{
		name: '关于我们',
	},
	{
		name: '加入我们',
	},
]
</script>
<style lang="less" scoped>
header {
	align-items: stretch;
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: center;
  border-bottom: 1px solid #fafafa;
	.nav {
		margin-left: auto;
		li {
			line-height: 70px;
			padding: 0 12px;
			cursor: pointer;
		}
	}
}
</style>
