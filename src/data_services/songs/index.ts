import ky from 'ky';

export interface IGetMusics {
	name: string;
	artist: string;
}

export type IGetMusicsResult = { result: IGetMusics[] };

export function getSongs(): Promise<IGetMusicsResult> {
	return ky.get('https://www.jungai.me/api/v1/musics').json<IGetMusicsResult>();
}
