import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//! Styled Components
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/customTheme'
//! i18next (Change Language)
import './assets/translation/index'
//! Components
import Layout from './components/Layout'


ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Layout>
				<App />
			</Layout>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);