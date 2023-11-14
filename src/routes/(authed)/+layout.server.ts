import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	if (!cookies.get('authed')) {
		throw redirect(303, `/login`);
	}
};