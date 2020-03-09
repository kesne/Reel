import styled from 'styled-components';
import Heading from '../SectionTitle.jsx';
import Form from './Form';

const Wrapper = styled.div`
    width: 100%;
`;
const Content = styled.div`
    width: 80%;
    margin: 2rem auto;
`;

export default function() {
    return (
        <Wrapper>
            <Content>
                <Heading text="Request a Tutor" />
                <Form />
            </Content>
        </Wrapper>
    );
}
