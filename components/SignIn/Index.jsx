import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Heading from '../SectionTitle';
import Form from './Form';
import Error from './Error';

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
    const [loading, setLoading] = useState(false);
    const [errorStatus, setErrorStatus] = useState(null);
    async function onSubmit(values) {
        setLoading(true);
        try {
            const res = await axios.post('/api/sessions', values);
            localStorage.setItem('reel:token', res.data.token);
            const params = new URLSearchParams(location.search);
            Router.push(params.get('from') || '/');
        } catch(err) {
            setErrorStatus(err.response.status)
        } finally {
            setLoading(false)
        }
    };

    return (
        <Wrapper>
            <Content>
                <Error
                    errorCode={errorStatus}
                    handleClose={e => setErrorStatus(null)}
                />
                <Heading text="Sign In" />
                <Form handleSubmit={onSubmit} loading={loading} />
            </Content>
        </Wrapper>
    );
}
