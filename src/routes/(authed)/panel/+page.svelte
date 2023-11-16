<script>
	import { goto } from '$app/navigation';
	import menu from '$lib/configs/menu';
	import { onMount } from 'svelte';

	onMount(() => {
    goto(`/panel/${menu[0].category.toLocaleLowerCase()}/${menu[0].pages[0].toLocaleLowerCase()}`)
	});
</script>