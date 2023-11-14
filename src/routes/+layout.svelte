<script>
	// import { Notify } from '$lib/blocks';
	import './styles.scss';
</script>

<div class="app">
	<!-- <Notify /> -->
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.app {
		overflow: hidden;
	}
</style>