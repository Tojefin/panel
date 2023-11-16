<script>
	import { goto } from '$app/navigation';
	import menu from '$lib/configs/menu';
	import { onMount } from 'svelte';

	onMount(() => {
		if (menu[0].pages) {
			goto(
				`/panel/${menu[0].category.toLocaleLowerCase()}/${menu[0].pages[0].toLocaleLowerCase()}`
			);
		} else {
			goto(`/panel/${menu[0].category.toLocaleLowerCase()}`);
		}
	});
</script>
