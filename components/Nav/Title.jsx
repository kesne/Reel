import styled from 'styled-components';

const H1 = styled.h1`
    margin: 0;
    height: 100%;
`;

export default function Title() {
    return (
        <div style={{ padding: 8 }}>
            <H1>Reel</H1>
        </div>
    );
}
