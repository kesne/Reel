import styled from 'styled-components';
import Title from './Title';
import Item from './Item';

const Header = styled.header`
    position: fixed;
    width: 100vw;
    height: 64px;

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
                <Item text="Test1" href="test1" />
                <Item text="Test2" href="test2" />
            </Nav>
        </Header>
    );
}
