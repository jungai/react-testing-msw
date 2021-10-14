import { ConfigProvider } from 'antd';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

// tailwind for layout
import './style/tailwind.css';

// antd
import 'antd/dist/antd.css';

import { App } from './App';

const app = document.getElementById('app');
ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<ConfigProvider direction="ltr" componentSize="large">
			<App />
		</ConfigProvider>
	</QueryClientProvider>,
	app,
);
