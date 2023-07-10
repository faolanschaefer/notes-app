<template>
	<div class="title-area">
		<input type="text" id="note-title" />
	</div>
	<div class="body-area">
		<input type="text" id="note-body" />
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
	margin: auto;
	padding: 10px;
	width: 75%;
}
.title-area {
	height: 50px;
}
.body-area {
	height: 500px;
}
div input[type="text"]{
	width: 100%;
	height: 100%;
}
</style>
