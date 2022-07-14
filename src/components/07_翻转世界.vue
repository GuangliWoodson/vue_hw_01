<template>

	<div>
		<h1>{{ message }}</h1>
		<button @click="btn">逆转世界</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "HELLO, WORLD",
		};
	},
	methods: {
		btn() {
			this.message = this.message.split("").reverse().join("")
		}
	}
};
</script>