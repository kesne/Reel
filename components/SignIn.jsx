import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 64px);

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #dddddd;
`;

const Block = styled.div`
    width: 20rem;
    height: 20rem;

    padding: 2rem;

    background-color: white;
    border-radius: 5px;
    border: 2px solid black;
`;

const H2 = styled.h2`
    margin: 0;

    text-align: center;
    font-family: 'Lato', sans-serif;
`;

export default function SignIn() {
    return (
        <Wrapper>
            <Block>
                <H2>Sign In</H2>
            </Block>
        </Wrapper>
    );
}
