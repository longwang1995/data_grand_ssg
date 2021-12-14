<template>
	<footer>
		<div class="footer-top">
			<div class="container footer-nav flex">
				<div class="nav-item flex" v-for="item in nav">
					<img :src="item.img" alt="" />
					<span>{{ item.name }}</span>
				</div>
			</div>
		</div>
		<div class="footer-center">
			<div class="container">
				<div class="links-wrap flex" style="font-weight: normal">
					<div class="links-item" v-for="item in links">
						<ul>
							<li class="title">{{ item.title }}</li>
							<li class="link" v-for="link in item.list">
								<a :href="item.link">{{ link.name }}</a>
							</li>
							<template v-if="item.title === '联系我们'">
								<img width="96" height="96" style="margin-top: 30px" src="http://static.datagrand.com/images/qrcode_datagrand.png" alt="" />
								<li class="link" style="margin-top: 10px">官方微信公众号</li>
							</template>
						</ul>
					</div>
				</div>

				<div class="friend-link flex">
					<span>友情链接:</span>
					<a :href="item.link" target="_blank" v-for="item in friendLinks">{{ item.name }}</a>
				</div>

				<div class="copy-right flex">
					<img
						data-original="http://static.datagrand.com/images/copy-right-img.jpg"
						class="lazy copy-right-img"
						src="http://static.datagrand.com/images/copy-right-img.jpg"
						style="opacity: 1; top: 0px"
					/><span class="copy-right">Copyright DataGrand Tech Inc. All Rights Reserved.<a href="https://beian.miit.gov.cn/" target="_blank" class="hidden-xs"> 沪ICP备15028292号-1</a></span>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
const nav = [
	{
		img: 'http://static.datagrand.com/images/footer-word1-new.png',
		name: '详尽的技术文档',
	},
	{
		img: 'http://static.datagrand.com/images/footer-word2-new.png',
		name: '长期开发维护',
	},
	{
		img: 'http://static.datagrand.com/images/footer-word3-new.png',
		name: '定期培训和报告',
	},
	{
		img: 'http://static.datagrand.com/images/footer-word4-new.png',
		name: '毫秒级数据反馈',
	},
]

const links = [
	{
		title: '热门产品',
		list: [
			{ name: '机器人流程自动化(RPA)', link: '' },
			{ name: '文档智能审阅', link: '' },
			{ name: '文本挖掘引擎', link: '' },
			{ name: '光学字符识别(OCR)', link: '' },
			{ name: '智能搜索系统', link: '' },
			{ name: '智能推荐系统', link: '' },
			{ name: '智能知识图谱', link: '' },
		],
	},
	{
		title: '行业解决方案',
		list: [
			{ name: '银行机器人解决方案', link: '' },
			{ name: '证券机器人解决方案', link: '' },
			{ name: '财税机器人解决方案', link: '' },
			{ name: '政务机器人解决方案', link: '' },
			{ name: '供应链机器人解决方案', link: '' },
			{ name: '运营商机器人解决方案', link: '' },
			{ name: '智能制造解决方案', link: '' },
			{ name: '智能文本机器人解决方案', link: '' },
			{ name: '智慧法律解决方案', link: '' },
			{ name: '科技行业解决方案', link: '' },
			{ name: '电商行业解决方案', link: '' },
			{ name: '媒体行业解决方案', link: '' },
			{ name: '文娱行业解决方案', link: '' },
		],
	},
	{
		title: '帮助文档',
		list: [
			{ name: '数据上报常见问题', link: '' },
			{ name: '文本挖掘相关问题', link: '' },
			{ name: '数据抓取相关问题', link: '' },
			{ name: '接入文档', link: '' },
		],
	},
	{
		title: '关于达观',
		list: [
			{ name: '关于达观', link: '' },
			{ name: '新闻中心', link: '' },
			{ name: '加入我们', link: '' },
			{ name: '品牌标识', link: '' },
		],
	},
	{
		title: '联系我们',
		list: [
			{ name: '电话：400-175-9889', link: '' },
			{ name: '官方微信号：DataGrand_', link: '' },
			{ name: '邮箱：contact@datagrand.com', link: '' },
			{ name: '地址：上海市浦东新区亮秀路112号Y1座（总部）北京 | 深圳 | 成都 | 苏州 | 郑州（子公司）', link: '' },
		],
	},
]

const friendLinks = [
	{
		name: '百度',
		link: '//www.baidu.com',
	},
	{
		name: '百度',
		link: '//www.baidu.com',
	},
	{
		name: '百度',
		link: '//www.baidu.com',
	},
]
</script>
<style lang="less" scoped>
footer {
	width: 100%;
	background-color: #131b33;
	color: #ffffff99;
	font-weight: 600;
	.footer-top {
		border-bottom: 1px solid #ffffff99;
		padding: 25px 0;
		.footer-nav {
			margin: 0 auto;
			.nav-item {
				flex: 1;
				align-items: center;
				padding: 0 15px;
				img {
					height: 72px;
				}
				span {
					margin-left: 16px;
				}
			}
		}
	}

	.footer-center {
		display: flex;
		justify-content: center;
		.links-wrap {
			align-items: flex-start;
			padding: 40px 0;
			column-gap: 90px;
			.links-item {
				max-width: 300px;
			}
			li {
				line-height: 32px;
			}
			.title {
				padding-bottom: 11px;
				color: #fff;
				font-size: 16px;
				line-height: 32px;
			}
			.link {
				font-size: 14px;
				cursor: pointer;
			}
		}

		.friend-link {
			width: 100%;
			align-items: center;
			justify-content: center;
			padding: 30px 0;
			border-top: 1px solid hsla(0, 0%, 40.4%, 0.2);
			border-bottom: 1px solid hsla(0, 0%, 40.4%, 0.2);
			margin-top: 50px;
			a {
				margin-left: 1em;
				color: #aeaeae;
				font-size: 14px;
				cursor: pointer;
				text-decoration: none;
				transition: color 0.2s;
			}
		}
		.copy-right {
			line-height: 50px;
			text-align: center;
			font-size: 12px;
			color: #aeaeae;
			align-items: center;
			justify-content: center;
			img {
				width: 18px;
				margin-right: 8px;
			}
			a {
				color: #337ab7;
				text-decoration: none;
			}
		}
	}
}
</style>
