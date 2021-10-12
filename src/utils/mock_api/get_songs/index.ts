import { rest } from 'msw';

const fakeEndpoint =
	(baseUrl: string | undefined) =>
	(url = '/') => {
		return new URL(url, baseUrl).toString();
	};

const jungaiBaseUrl = fakeEndpoint('https://www.jungai.me');

export const getSongs = rest.get(jungaiBaseUrl('/api/v1/musics'), (_req, res, ctx) => {
	return res(
		ctx.status(200),
		ctx.json({
			result: [
				{
					name: 'Bbibbi',
					artist: 'iu',
				},
				{
					name: 'Next Level',
					artist: 'aespa',
				},
				{
					name: 'Gone',
					artist: 'ROSÉ',
				},
				{
					name: 'The Feels',
					artist: 'twice',
				},
			],
		}),
	);
});

export const songsHandler = [getSongs];
