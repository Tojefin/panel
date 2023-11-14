<section>
	<aside>
		<a href="/login">L</a>
	</aside>
	<header>
		<a href="/login">login</a>
		<a href="/register">register</a>
		<a href="#">eeee</a>
		<a href="#">zzzz</a>
	</header>
	<div>
		<slot>
			<h1>Panel</h1>
		</slot>
	</div>
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
    justify-content: center;
    padding-top: 15px;
		z-index: 1;

		a {
			display: flex;
			height: 50px;
			width: 50px;
			justify-content: center;
			align-items: center;
			background: #000;
			color: #fff;
			font-size: 32px;
		}
	}
	header {
		border-bottom: 1px solid #adadad;
		height: 60px;
		width: 100%;
		position: fixed;
		top: 0;
		margin-left: 80px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		z-index: 1;
	}
	div {
		padding: 60px 0 0 80px;
	}
</style>
