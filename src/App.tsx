import React from 'react';

import { SelectKodMusic } from './components/SelectKodMusic';
import { worker } from './utils/mock_api';

export const App = (): React.ReactElement => {
	worker().start();

	return (
		<div className="w-full">
			<SelectKodMusic />
		</div>
	);
};

export default App;
