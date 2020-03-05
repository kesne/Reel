import styled from 'styled-components';
import Title from './Title';
import Item from './Item';

const Header = styled.header`
    position: fixed;
    width: 100vw;
    height: 64px;
    padding: 0 8px;
    box-sizing: border-box;

    display: flex;

    background-color: gray;
`;
const Nav = styled.nav`
    list-style-type: none;
    margin: 0 0 0 auto;
    padding: 0;

    display: flex;
`;

export default function() {
    return (
        <Header>
            <Title />
            <Nav>
                <Item text="Request a Tutor" href="request" />
                <Item text="Sign In" href="sign_in" />
            </Nav>
        </Header>
    );
}
