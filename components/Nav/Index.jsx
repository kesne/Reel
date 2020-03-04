import styled from 'styled-components';

const Header = styled.header`
    position: fixed;
    width: 100vw;
    height: 64px;

    display: flex;

    background-color: gray;
`;

export default function() {
    return <Header></Header>;
}
