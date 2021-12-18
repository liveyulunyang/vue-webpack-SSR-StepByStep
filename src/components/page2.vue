<template>
	<div id="testComponent">
		This is {{name}}.
	</div>


</template>
<script>
	export default {
		data(){
			return{
				name:"about"
			}
		},
		metaInfo: {
			title: 'page2',
			titleTemplate: '%s | My Awesome SSR Webapp',
			meta: [{
				vmid: 'description',
				name: 'description',
				content: 'my standard description',
			}]
		}
	};

</script>
<style></style>