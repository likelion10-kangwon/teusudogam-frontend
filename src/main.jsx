import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

import { AuthorizationProvider } from 'contexts/authorization-context';
import { MyInformationProvider } from 'contexts/my-information-context';

const app = document.getElementById('app');

const theme = {
    colors: {
        white: '#ffffff',
        black: '#000000',
        blackText: '#333333',
        whiteText: '#ffffff',
        primary1: '#7262A8',
        primary2: '#3E355C',
        primary3: '#282436',
        gray1: '#dddddd',
    },
};

const root = createRoot(app);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AuthorizationProvider>
                    <MyInformationProvider>
                        <App />
                    </MyInformationProvider>
                </AuthorizationProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
