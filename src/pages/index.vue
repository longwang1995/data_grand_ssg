<template>
	<div class="index-page">
		<div class="banner">
			<swiper :autoplay="true" style="margin: 0 auto">
				<swiper-slide v-for="item in banner">
					<img :src="item.src" alt="" />
				</swiper-slide>
			</swiper>
		</div>
		<div class="section flex" style="justify-content: center; background: #fff">
			<div class="container" style="width: 100%">
				<p class="title">领先的文本处理技术和智能办公机器人服务</p>
				<p class="sub-title">您所需要的人工智能企业服务，达观数据以业界领先的水平为您提供</p>
				<div class="container serve-container">
					<div class="serve flex">
						<div class="serve-item flex" v-for="item in service" @mouseenter="handleMouseenter(item)" @mouseleave="handleMouseleave()">
							<img :src="item.img" alt="" />
							<span class="name">{{ item.name }}</span>
							<div class="bottom-line"></div>
						</div>
					</div>
				</div>
				<div class="serve-content flex">
					<div class="container flex">
						<div class="serve-text-item" v-for="item in serviceItem">
							<p class="title">{{ item.title }}</p>
							<p class="text">{{ item.text }}</p>
						</div>
					</div>
				</div>
				<div class="container serve-container">
					<div class="serve flex">
						<div class="serve-item flex" v-for="item in service2" @mouseenter="handleMouseenter(item)" @mouseleave="handleMouseleave()">
							<img :src="item.img" alt="" />
							<span class="name">{{ item.name }}</span>
							<div class="bottom-line"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section flex" style="justify-content: center; background: url('http://static.datagrand.com/images/index-solution-bg-new.png')">
			<div class="container">
				<p class="title" style="color: #fff">成熟领先的文本处理和智能办公机器人解决方案</p>
				<p class="sub-title" style="color: #fff">达观数据已定制多种行业解决方案，助力企业快速实现智能化升级</p>
				<div class="plan flex">
					<div class="plan-item" v-for="item in plans">
						<img :src="item.img" alt="" />
						<div class="content">
							<p class="title">{{ item.title }}</p>
							<p class="context">{{ item.context }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section flex" style="justify-content: center; background: url('http://static.datagrand.com/images/index-partners-bg.png')">
			<div class="container">
				<p class="title">他们都信赖达观数据</p>
				<p class="sub-title">与各行业建立良好的合作关系，基于彼此间的高度信任实现长期性、战略性的协同发展关系</p>
				<div class="plan flex">
					<img src="http://static.datagrand.com/images/index-partners.png" alt="" style="width: 100%" />
				</div>
			</div>
		</div>

		<div class="section flex" style="justify-content: center; background: url('http://static.datagrand.com/images/index-news-bg.png')">
			<div class="container">
				<p class="title" style="color: #fff">新鲜动态</p>
				<p class="sub-title" style="color: #fff">科技前沿、大咖直播、活动展会，达观精彩不停</p>
				<div class="dt flex">
					<div class="dt-left">
						<p class="title">达观数据携手CCF</p>
						<p class="text">举办第五届“达观杯”自然语言处理文本分类竞赛 ，开赛报名中！</p>
					</div>
					<div class="dt-right">
						<div class="box-xl box-top" style="width: 460px; background-image: url(http://static.datagrand.com/images/index-news2-bg.png)">
							<p class="title">再获国家级荣誉！</p>
							<p class="text">达观数据入选工信部专精特新“小巨人”企业</p>
						</div>
						<div class="box-xs box-top" style="width: 332px; background-image: url(http://static.datagrand.com/images/index-news3-bg.png)">
							<p class="title">“捐书送希望·儿童节献礼”</p>
							<p class="text">达观数据为甘肃贫困小学捐建爱心图书室</p>
						</div>
						<div class="box-xs box-bottom" style="width: 385px; background-image: url(http://static.datagrand.com/images/index-news4-bg.png)">
							<p class="title">荣获吴文俊人工智能科技进步奖</p>
							<p class="text">达观数据成为2018年度上海地区唯一一家入选的人工智能企业</p>
						</div>
						<div class="box-xl box-bottom" style="width: 406px; background-image: url(http://static.datagrand.com/images/index-news5-bg.png)">
							<p class="title">世界人工智能大会亮点频出</p>
							<p class="text">达观数据与浦东青联携手多位科技专家话智能</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section flex" style="justify-content: center; background: url('http://static.datagrand.com/images/index-save-bg-v2.png')">
			<div class="container">
				<p class="title">提供安全合规的文本智能处理服务</p>
				<p class="sub-title">权威认证的文本智能处理服务，充分保障您的业务安全与稳定</p>
				<div class="rz flex">
					<div class="rz-item flex" v-for="item in rz">
						<div class="img-wrap">
							<img :src="item.img" alt="" />
						</div>
						<span class="text" v-html="item.text"></span>
					</div>
				</div>
			</div>
		</div>

		<div class="section flex" style="justify-content: center; background: #fff">
			<div class="container">
				<p class="title">知名投资机构助力 领跑文本智能处理领域</p>
				<div class="plan flex">
					<img src="http://static.datagrand.com/images/index-abouts-v2.jpg" alt="" style="width: 100%" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'main',
	setup() {
		return {
			modules: [Pagination, Autoplay],
		}
	},
}
</script>
<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { useHead } from '@vueuse/head'

useHead({
	title: '首页',
})

import product1 from 'img/product-logo-01.png'
import product2 from 'img/product-logo-02.png'
import product3 from 'img/product-logo-03.png'
import product4 from 'img/product-logo-04.png'
import product5 from 'img/product-logo-05.png'
import product6 from 'img/product-logo-06.png'
import product7 from 'img/product-logo-07.png'
import product8 from 'img/product-logo-08.png'
import product9 from 'img/product-logo-09.png'
import product10 from 'img/product-logo-10.png'
const banner = [
	{
		src: 'http://static.datagrand.com/images/index-idps-new-banner-v3.png',
	},
	{
		src: 'http://static.datagrand.com/images/index-idps-new-banner-v3.png',
	},
	{
		src: 'http://static.datagrand.com/images/index-idps-new-banner-v3.png',
	},
	{
		src: 'http://static.datagrand.com/images/index-idps-new-banner-v3.png',
	},
]

const plans = [
	{
		title: '银行机器人解决方案',
		context:
			'基于对银行业务的深刻洞察，创新集成流程机器人、计算机视觉、NLP、知识图谱等自动化领域前沿技术，全面赋能银行信贷审批、国际业务、风险管控、智能营销、运营管理财务税务等业务流程，提升风险管理水平和流程运营效率，优化用户体验，助力银行业“数智”化全面升级',
		img: 'http://static.datagrand.com/images/index-solutions-01.png',
	},
	{
		title: '证券机器人解决方案',
		context:
			'是机器视觉、OCR、NLP、RPA与证券业务的融合与协同，深入投资银行、资产管理、融资融券等业务场景，可快速识别招股说明书、债券募集说明书等复杂金融文档，计算财务指标、全面复核披露风险，自动执行业务流程，有效提升证券行业创新金融服务，促进业务快速健康发展',
		img: 'http://static.datagrand.com/images/index-solutions-02.png',
	},
	{
		title: '财税机器人解决方案',
		context:
			'致力于为企业提供完整的财税解决方案，自动化处理长耗时、高重复的财税业务并提高其准确率。集成达观自研的OCR和智能文档处理系统（IDPS），从会计、税务、审计、资金管理、档案、总账等领域为企业全方位赋能，真正为企业做到智能自动化升级',
		img: 'http://static.datagrand.com/images/index-solutions-03.png',
	},
	{
		title: '政务机器人解决方案',
		context:
			'基于对政务业务的深刻洞察，创新集成流程自动化机器人、计算机视觉、NLP、知识图谱等人工智能领域前沿技术，打破系统、数据、流程孤岛和壁垒，实现人机协作，全面赋能政府业务流程智能化，优化民生服务体验，助力政府单位“数智”化全面升级',
		img: 'http://static.datagrand.com/images/index-solutions-04.png',
	},
	{
		title: '供应链机器人解决方案',
		context:
			'综合应用NLP、OCR、智能搜索询价、知识图谱等AI技术，强化全链条数据协同，打通生产、运输、仓储、分销等供应链信息流，降低跨部门多环节的人工成本并提高运营效率，助力数据密集型和依靠经验场景向数字化、智能化转型升级',
		img: 'http://static.datagrand.com/images/index-solutions-05.png',
	},
	{
		title: '运营商机器人解决方案',
		context:
			'围绕运营商“降本增效”的主营发展战略，通过以业务为中心、精细化运营为基础的数字化信息系统建设，帮助运营商提升运营效率、优化营销效果和积累数据资产，促进其“虚拟员工”的转型策略，从根本上满足运营商“向IT要人工”的战略需求',
		img: 'http://static.datagrand.com/images/index-solutions-06.png',
	},
	{
		title: '智能制造解决方案',
		context:
			'基于对制造业多个场景探索理解，利用RPA、计算机视觉、NLP等人工智能领域前沿技术，创新推出失效知识图谱，助力制造业更全面、更精准、更高效的故障分析；以及智能工单、智能财税、智能报关和档案管理等一系列智能办公机器人，深度赋能制造业各细分领域',
		img: 'http://static.datagrand.com/images/index-solutions-07.png',
	},
	{
		title: '智能文本机器人解决方案',
		context: '为企业提供各类文本、票据、单证、表格治理解决方案，实现合同关键要素自动抽取及录入、制度规范性审计扩大人均产能，为员工减负，助力企业降本增效，实现数字化转型',
		img: 'http://static.datagrand.com/images/index-solutions-08.png',
	},
	{
		title: '智能能源行业解决方案',
		context:
			'达观数据智能能源行业解决方案，基于对电力、油气、新能源等行业多场景的探索理解，利用机器人流程自动化、计算机视觉、自然语言处理等人工智能领域前沿技术，提供智能行政公文处理、智能财税、智能工单、知识管理和故障分析等一系列智能解决方案，深度赋能各细分领域，赋能能源行业释放人力，加速数字化转型升级',
		img: 'http://static.datagrand.com/images/index-solutions-09.png',
	},
]

const rz = [
	{
		img: 'http://static.datagrand.com/images/certification-authority-01-v3.png',
		text: '国家级高新技术企业',
	},
	{
		img: 'http://static.datagrand.com/images/certification-authority-02-v3.png',
		text: '国际权威信息安全领域<br>ISO27001信息安全管理<br>体系认证',
	},
	{
		img: 'http://static.datagrand.com/images/certification-authority-03-v3.png',
		text: '国家级高新技术企业',
	},
	{
		img: 'http://static.datagrand.com/images/certification-authority-04-v3.png',
		text: '国家级高新技术企业',
	},
	{
		img: 'http://static.datagrand.com/images/certification-authority-05-v3.png',
		text: '国家级高新技术企业',
	},
	{
		img: 'http://static.datagrand.com/images/certification-authority-06-v3.png',
		text: '国家级高新技术企业',
	},
	{
		img: 'http://static.datagrand.com/images/certification-authority-07-v3.png',
		text: '国家级高新技术企业',
	},
	{
		img: 'http://static.datagrand.com/images/certification-authority-08-v3.png',
		text: '国家级高新技术企业',
	},
	{
		img: 'http://static.datagrand.com/images/certification-authority-09-v3.png',
		text: '国家级高新技术企业',
	},
	{
		img: 'http://static.datagrand.com/images/certification-authority-10-v3.png',
		text: '国家级高新技术企业',
	},
]

const service = [
	{
		img: product1,
		name: '文本挖掘引擎',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
	{
		img: product2,
		name: '智能推荐系统',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
	{
		img: product3,
		name: '智能知识图谱',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
	{
		img: product4,
		name: '文档智能审阅',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
	{
		img: product5,
		name: '智能搜索系统',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
]

const service2 = [
	{
		img: product6,
		name: '客户意见洞察系统',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
	{
		img: product7,
		name: '光学字符识别(OCR)',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
	{
		img: product8,
		name: '机器人流程自动化(RPA)',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
	{
		img: product9,
		name: '数据挖掘分析',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
	{
		img: product10,
		name: '文本审核',
		list: [
			{
				title: '合同文档自动解析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: '文件信息分析提取',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'HR人岗精准匹配',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
			{
				title: 'VOC客户意见分析',
				text: '自动化处理大量合同文档，快速应对审阅、查找、校对等工作',
			},
		],
	},
]

const serviceItem = ref([])
const handleMouseenter = (item) => {
	serviceItem.value = item.list
}

const handleMouseleave = () => {
	serviceItem.value = []
}
</script>
<style lang="less" scoped>
.banner {
	background-color: #333;
	width: 100%;
	img {
		width: 1920px;
		height: 620px;
		margin: 0 auto;
		display: block;
	}
}
.section {
	background-size: cover;
	.container {
		flex-direction: column;
		align-items: center;
		padding: 80px 0;
		.serve-container {
			margin: 0 auto;
			padding: 0;
		}
		.serve-content {
			width: 100%;
			// height: 20px;
			background: #f8fbff;
			justify-content: center;
			.container {
				flex-direction: row;
				padding: 0;
				flex-wrap: wrap;
				.serve-text-item {
					width: 25%;
					padding: 20px 10px;
					box-sizing: border-box;
					.title {
						font-size: 16px;
						color: #333;
						margin-bottom: 10px;
						text-align: left;
					}
					.text {
						color: #999;
						line-height: 1.5;
						font-size: 14px;
					}
				}
			}
		}
		.title {
			font-size: 30px;
			margin-bottom: 24px;
			text-align: center;
		}
		.sub-title {
			font-size: 16px;
			color: #666;
			text-align: center;
			margin: 24px auto;
		}
		.plan {
			flex-wrap: wrap;
			justify-content: space-between;
			row-gap: 24px;
			margin-top: 48px;
			.plan-item {
				background: rgba(35, 42, 87, 0.4);
				width: 387px;
				color: #fff;
				.content {
					height: 230px;
					padding: 20px 14px 48px;
					box-sizing: border-box;
					text-align: center;
					.title {
						font-size: 20px;
						margin-bottom: 20px;
					}
					.context {
						font-size: 14px;
						line-height: 24px;
						color: #d1cfcf;
					}
				}
			}
		}
		.rz {
			flex-wrap: wrap;
			column-gap: 12px;
			row-gap: 12px;
			margin-top: 48px;
			.rz-item {
				width: 230px;
				height: 240px;
				background: #fff;
				flex-direction: column;
				align-items: center;
				.img-wrap {
					width: 100%;
					height: 130px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				img {
					max-height: 86px;
					max-width: 173px;
				}
				.text {
					text-align: center;
					line-height: 1.8;
				}
			}
		}
		.serve {
			flex-wrap: wrap;

			.serve-item {
				width: 20%;
				flex-direction: column;
				align-items: center;
				padding: 24px 0;
				cursor: pointer;
				box-sizing: border-box;
				position: relative;
				&:hover .bottom-line {
					position: absolute;
					width: 100%;
					bottom: 0;
					left: 0;
					height: 2px;
					background-image: linear-gradient(270deg, #1e9591, #1e9591), linear-gradient(#1e9591, #1e9591);
					background-blend-mode: normal, normal;
				}
				img {
					max-width: 45px;
					max-height: 45px;
				}
				.name {
					font-size: 18px;
					margin-top: 18px;
				}
			}
		}
		.dt {
			column-gap: 10px;
			height: 537px;
			align-items: stretch;
			text-align: left;
			color: #fff;
			.title {
				font-size: 24px;
				font-weight: 500;
				text-align: left;
			}
			.text {
				font-size: 16px;
				margin-top: 20px;
				line-height: 36px;
			}
			.dt-left {
				background-image: url(http://static.datagrand.com/images/index-news1-bg.png);
				width: 388px;
				height: 100%;
				background-size: cover;
				padding: 134px 93px 0 40px;
				box-sizing: border-box;
			}

			.dt-right {
				flex: 1;
				display: flex;
				flex-wrap: wrap;
				column-gap: 10px;
				row-gap: 10px;
				div {
					background-size: cover;
					box-sizing: border-box;
				}
				.box-top {
					height: 267px;
					padding: 70px 0 0 35px;
				}
				.box-bottom {
					height: 260px;
					padding: 70px 0 0 20px;
				}
				.box-xl {
					width: 460px;
				}
				.box-xs {
					width: 38px;
				}
			}
		}
	}
}
</style>
