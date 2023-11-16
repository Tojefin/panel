import { error } from '@sveltejs/kit';
import bcrypt from 'bcrypt'
import db from '$lib/scripts/database';

export async function POST({request, cookies}) {
  const body = await request.json()

	const user = await db.user.findFirst({
		where: {
			email: body.email,
		},
	})

	if (!user) {
    const hash = await bcrypt.hash(body.password, 10)

		await db.user.create({
      data: {
        email: body.email,
        password: hash,
      },
    })
		return new Response(JSON.stringify('{success: true}'), cookies.set('authed', 'true', {maxAge: 3600*24, path: '/'}));
	} else {
		throw error(400, 'Email already used');
	}
}