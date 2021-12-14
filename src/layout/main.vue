<template>
	<div class="main">
		<Header></Header>
			<router-view></router-view>
		<Footer></Footer>
	</div>
</template>
<script setup>
import Header from './Header/index.vue'
import Footer from './Footer/index.vue'
</script>
<style scoped></style>
