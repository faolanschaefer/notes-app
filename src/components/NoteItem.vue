<template>
	<div class="wrapper">
		<div class="banner">
			<img src="../assets/back.png" alt="back" />
			<input type="text" id="note-title" />
			<img src="../assets/save_dirty.png" alt="save" />
		</div>
		<div class="body">
			<textarea elastic id="note-body"></textarea>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper {
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
}
.wrapper * {
	box-sizing: border-box;
}
div {
	margin: auto;
	width: 100%;
}
.body {
	height: 500px;
}
.banner {
	width: 100%;
	height: 50px;
	background-color: forestgreen;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
}
.banner img {
	object-fit: cover;
	height: 100%;
	padding: 10px;
}
#note-title,
#note-body {
	width: 100%;
	height: 100%;
	background-color: #00000000;
	border: 0px;
}
#note-title {
	text-align: center;
	font-size: 2em;
}
#note-body {
	font-size: 1.5em;
	line-height: calc(1.5em + 4px);
	background: repeating-linear-gradient(
		white,
		white calc(1.5em + 2px),
		#9198e5 calc(1.5em + 3px),
		#9198e5 calc(1.5em + 4px)
	);
}
</style>
