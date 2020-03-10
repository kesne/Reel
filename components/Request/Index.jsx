import styled from 'styled-components';
import Heading from '../SectionTitle.jsx';
import Form from './Form';
import withAuth from '../withAuth';

const Wrapper = styled.div`
    height: calc(100vh - 64px);
    width: 100%;
    background-color: #fafafa;
    padding-top: 2rem;
`;
const Content = styled.div`
    width: 80%;
    margin: 0 auto;
`;

function Index() {
    return (
        <Wrapper>
            <Content>
                <Heading text="Request a Tutor" />
                <Form />
            </Content>
        </Wrapper>
    );
}

export default withAuth(Index);
