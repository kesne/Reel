import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './Nav';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;

const Main = styled.main`
    padding-top: 64px;
`;

export default function Layout({ children, tabTitle }) {
    return (
        <div>
            <Head>
                <title>{tabTitle}</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyle />

            <Nav />
            <Main>{children}</Main>
        </div>
    );
}
