<template>
	<div>
		<input type="text" @keydown.enter="enterFn">
		<hr>
		<input type="text" @keydown.esc="escFn">
	</div>
</template>

<script>
export default {
	methods: {
		enterFn() {
			console.log("enter");
		},
		escFn() {
			console.log("esc");
		}
	}
}
</script>