import styled from 'styled-components';

const H1 = styled.h1`
    margin: 0;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Raleway', sans-serif;
`;

export default function Title() {
    return (
        <div>
            <H1>Reel</H1>
        </div>
    );
}
