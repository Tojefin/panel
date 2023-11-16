<script>
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import menu from '$lib/configs/menu';
	import { onMount } from 'svelte';

	let loaded = false;

	let categoryLinks = [];
	let pages = [];

	let activeCategory = $page.url.pathname.split('/')[2];
	let activePage = $page.url.pathname.split('/')[3];

	afterNavigate(() => {
		activeCategory = $page.url.pathname.split('/')[2];
		activePage = $page.url.pathname.split('/')[3];

		menu.forEach((elm) => {
			if (elm.category.toLocaleLowerCase() == $page.url.pathname.split('/')[2]) {
				if (elm.pages) {
					pages = elm.pages;
				} else {
					pages = [];
				}
			}
		});
	});

	onMount(() => {
		menu.forEach((elm) => {
			if (elm.pages) {
				categoryLinks.push({
					name: elm.category.toLocaleLowerCase(),
					href: `/panel/${elm.category.toLocaleLowerCase()}/${elm.pages[0]?.toLocaleLowerCase()}`
				});
			} else {
				categoryLinks.push({
					name: elm.category.toLocaleLowerCase(),
					href: `/panel/${elm.category.toLocaleLowerCase()}`
				});
			}
		});
		loaded = true;
	});
</script>

<section>
	{#if loaded}
		<aside>
			{#each categoryLinks as { href, name }}
				<a {href} class:active={name == activeCategory}>
					{name.split('')[0]}
				</a>
			{/each}
		</aside>
		<header>
			<h1>{$page.url.pathname.split('/')[2]}</h1>
			<div>
				{#each pages as page}
					<a
						href={`./${page.toLocaleLowerCase()}`}
						class:active={page.toLocaleLowerCase() == activePage}
					>
						{page.toLocaleLowerCase()}
					</a>
				{/each}
			</div>
		</header>
		<div class="content">
			<slot>
				<h1>Panel</h1>
			</slot>
		</div>
	{/if}
</section>

<style lang="scss">
	section {
		width: 100vw;
		height: 100vh;
	}
	aside {
		border-right: 1px solid #adadad;
		height: 100%;
		width: 80px;
		position: fixed;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		padding-top: 15px;
		z-index: 1;
		background: #000;
		align-items: center;
		gap: 25px;

		a {
			display: flex;
			height: 50px;
			width: 50px;
			justify-content: center;
			align-items: center;
			background: #000;
			color: #fff;
			font-size: 32px;
			transition: all ease 0.25s;

			&.active {
				background: #fff;
				color: #000;
			}
		}
	}
	header {
		border-bottom: 2px solid #e0e0e0;
		height: 80px;
		width: 100%;
		position: fixed;
		top: 0;
		margin-left: 80px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		z-index: 1;
		padding-left: 25px;

		div {
			display: flex;
			gap: 20px;
		}

		a.active {
			border-bottom: 2px solid #000;
			height: 112%;
		}
	}
	.content {
		padding: 60px 0 0 80px;
	}
</style>
