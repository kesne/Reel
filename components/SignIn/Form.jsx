import { useState } from 'react';
import styled from 'styled-components';

const FormBlock = styled.form`
    margin-top: 2rem;
`;
const Input = styled.input`
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.25rem;
    box-sizing: border-box;

    font-size: 1rem;
    border-radius: 5px;
`;
const Button = styled.button`
    display: block;
    margin: 1rem auto;
    padding: 0.5rem;

    border-radius: 5px;
    font-size: 1rem;
`;

const Danger = styled.h3`
    color: red;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-style: italic;
`;

export default function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Username: ', username);
        console.log('Password: ', password);
        setUsername('');
        setPassword('');
    };

    return (
        <FormBlock onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit">Submit</Button>

            <Danger>
                Look out! Submit currently logs both inputs to the console!
            </Danger>
        </FormBlock>
    );
}
