import styled from 'styled-components';
import Form from './Form';

const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 64px);

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fafafa;
`;

const Block = styled.div`
    width: 20rem;
    padding: 2rem;

    background-color: white;
    border-radius: 2px;
    border: 1px solid #8f8f8f;
`;

const Heading = styled.h2`
    margin: 0;
    font-family: 'Lato', sans-serif;
`;

export default function() {
    return (
        <Wrapper>
            <Block>
                <Heading>Sign In</Heading>
                <Form />
            </Block>
        </Wrapper>
    );
}
