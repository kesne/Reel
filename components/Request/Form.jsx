import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

import Fields from './Fields';

export default function() {
    const handleSubmit = values => {
        console.log(values);
    };

    return (
        <Form onFinish={handleSubmit} layout="vertical">
            <Fields.ClassSelect />
            <Fields.TypeSelect />
            <Fields.Description />
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Request
                </Button>
            </Form.Item>
        </Form>
    );
}
