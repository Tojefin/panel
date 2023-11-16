import { writable } from 'svelte/store';

const defaultOptions = {
	method: 'GET',
	credentials: 'include',
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
};

export default function (url) {
	const state = writable({
		loading: false,
		error: false,
		data: null,
		send: undefined
	});

	async function send(options) {
		state.update((old) => ({ ...old, loading: true, error: false }));

		let path = options?.addPath ? url + options?.addPath : url
		let	apiUrl = options?.query ? path + '?' + new URLSearchParams(options.query) : path;
		options = { ...defaultOptions, ...options };

		try {
			let response = await fetch(apiUrl, options);
			state.update((old) => ({ ...old, loading: false }));
			let json = await response.json();
			state.update((old) => ({ ...old, data: json }));
			return response;
		} catch (e) {
			state.update((old) => ({ ...old, error: e, loading: false }));
		}
	}

	state.send = send;
	return state;
}