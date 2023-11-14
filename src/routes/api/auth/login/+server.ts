import { error } from '@sveltejs/kit';

export async function POST({request, cookies}) {
  const user = await request.json()
  if (user.email != 'tojefin@gmail.com' || user.password != '1234') {
		throw error(400, 'Invalid email or password');
	}

	return new Response(JSON.stringify('{success: true}'), cookies.set('authed', 'true', {maxAge: 3600*24, path: '/'}));
}