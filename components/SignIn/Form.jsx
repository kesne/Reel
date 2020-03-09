import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const Submit = styled(Button)`
    float: right;
`;

export default function SignInForm() {
    const handleSubmit = values => {
        console.log(values);
    };

    return (
        <Form onFinish={handleSubmit} layout="vertical">
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    { required: true, message: 'Please enter your username' },
                ]}
            >
                <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    { required: true, message: 'Please enter your password' },
                ]}
            >
                <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
                <Submit type="primary" htmlType="submit">
                    Sign In
                </Submit>
            </Form.Item>
        </Form>
    );
}
