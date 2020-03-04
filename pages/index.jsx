import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Nav from '../components/Nav/';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;

export default () => (
    <div>
        <Head>
            <title>Reel - Home</title>
        </Head>
        <GlobalStyle />
        <Nav />
    </div>
);
