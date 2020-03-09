import styled from 'styled-components';
import Form from './Form';
import Heading from '../SectionTitle';

const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 64px);
    padding-top: 4rem;

    background-color: #fafafa;
`;

const Content = styled.div`
    width: 20rem;
    padding: 2rem;
    margin: 0 auto;

    background-color: white;
    border-radius: 2px;
    border: 1px solid #8f8f8f;
`;

export default function() {
    return (
        <Wrapper>
            <Content>
                <Heading text="Sign In" />
                <Form />
            </Content>
        </Wrapper>
    );
}
