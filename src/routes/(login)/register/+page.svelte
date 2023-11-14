<script>
	import { goto } from '$app/navigation';
	import request from '$lib/scripts/request';

	let form = {
		email: 'tojefin@gmail.com',
		password: '1234',
		password_confirm: '1234'
	};

	const login = request('/api/auth/login');

	async function submit() {
		if (form.password != form.password_confirm) {
			throw new Error('Пароли не совпадают');
		}
		console.log('login');

		await login.send({
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			},
			body: JSON.stringify(form)
		});

		if (!$login.error) {
			console.log($login.error);
			goto('/panel');
		}
	}
</script>

<section>
	<h1>REGISTER</h1>

	<form on:submit={submit}>
		<input bind:value={form.email} id="email" type="email" />
		<input bind:value={form.password} id="password" type="password" />
		<input bind:value={form.password_confirm} id="password-confirm" type="password" />
		<button type="submit">submit →</button>
	</form>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100vh;
	}

	h1 {
		font-size: 100px;
		font-style: normal;
		font-weight: 700;
		line-height: 140%;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
	input {
		border: 1px solid #000;
		padding: 10px 20px;
	}
	button {
		border: 1px solid #000;
		padding: 10px 20px;
		background: #000;
		color: #fff;

    &:hover{
      background: #222;
    }
	}
</style>
