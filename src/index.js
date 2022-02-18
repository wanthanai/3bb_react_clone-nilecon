import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//! Styled Components
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/customTheme'


ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);