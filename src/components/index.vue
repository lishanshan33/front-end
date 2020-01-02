<template>
	<el-container router>
		<el-aside width="400px">
			<el-menu router default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">导航一</span>
					</template>
					<el-menu-item-group>
						<span slot="title">分组一</span>
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<span slot="title">选项4</span>
						<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="/home">
					<i class="el-icon-menu"></i>
					<span slot="title">导航二</span>
					
				</el-menu-item>
				<el-menu-item index="/nav">
					<i class="el-icon-menu"></i>
					<span slot="title">导航三</span>
					
				</el-menu-item>
			
				<el-menu-item index="/card">
					<i class="el-icon-setting"></i>
					<span slot="title">导航四</span>
					
				</el-menu-item>
				<el-submenu index="/card">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">导航五</span>
					</template>
					<el-menu-item-group>
						<span slot="title">分组一</span>
						<el-menu-item index="5-1">选项1</el-menu-item>
						<el-menu-item index="5-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="5-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="5-4">
						<span slot="title">选项4</span>
						<el-menu-item index="5-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
			</el-menu >
			Aside</el-aside>

		<el-container>
			<el-header>Header</el-header>
			<roter-link>
				
			<el-main>Main</el-main>
			
			</roter-link>
		</el-container router>
	</el-container>
</template>

<script>
</script>

<style>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>