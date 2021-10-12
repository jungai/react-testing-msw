import { Select } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';

import { getSongs, IGetMusicsResult } from '../../data_services/songs';

export const SelectKodMusic = (): React.ReactElement => {
	const { data, isLoading } = useQuery<IGetMusicsResult, Error, IGetMusicsResult>('musics', () => getSongs(), {
		retry: false,
	});

	return (
		<Select
			mode="multiple"
			allowClear
			style={{ width: '100%' }}
			placeholder="เลือกเพลงที่คุณชอบ"
			onChange={(val) => {
				console.log('val', val);
			}}
			loading={isLoading}
			disabled={isLoading}
			options={data?.result.map((song) => ({ label: song.name, value: song.artist }))}
		/>
	);
};

export default SelectKodMusic;
