import { useState } from 'react';
import { Form, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import Fields from './Fields/Index';

const Group1 = styled.div`
    display: flex;
    justify-content: space-between;
`;
const MiddleItem = styled.div`
    flex: 1;
    margin: 0 8rem 0 2rem;
`;

export default function() {
    const [classIsOther, setClassIsOther] = useState(false);
    const [form] = Form.useForm();

    const handleClassChange = value => {
        if (value === 'OTHER') {
            setClassIsOther(true);
            if (form.getFieldValue('tutorType') === 'CONTENT')
                form.resetFields(['tutorType']);
        } else setClassIsOther(false);
    };

    const handleSubmit = values => {
        form.resetFields();
        setClassIsOther(false);
        axios
            .post('/api/requests', values, {
                headers: {
                    Authentication: `Bearer ${localStorage.getItem('reel:token')}`
                }
            })
            .then(response => console.log(response));
        // console.log(values);
    };

    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Group1>
                <Fields.ClassSelect handleChange={handleClassChange} />
                <MiddleItem>
                    {classIsOther ? <Fields.NonClass /> : null}
                </MiddleItem>
                <Fields.TypeSelect disableContent={classIsOther} />
            </Group1>
            <Fields.Description />
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Request
                </Button>
            </Form.Item>
        </Form>
    );
}
