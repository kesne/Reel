import styled from 'styled-components';

const H1 = styled.h1`
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Title() {
    return (
        <div>
            <H1>Reel</H1>
        </div>
    );
}
