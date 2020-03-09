import { useState } from 'react';
import { Form, Button } from 'antd';
import styled from 'styled-components';
import Fields from './Fields';

const Group1 = styled.div`
    display: flex;
    justify-content: space-between;
`;
const MiddleItem = styled.div`
    flex: 2;
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
        setClassIsOther(false);
        form.resetFields();
        console.log(values);
    };

    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Group1>
                <Fields.ClassSelect
                    handleChange={handleClassChange}
                    style={{ flex: '2' }}
                />
                <MiddleItem>
                    {classIsOther ? <Fields.NonClass /> : null}
                </MiddleItem>
                <Fields.TypeSelect
                    disableContent={classIsOther}
                    style={{ flex: '3' }}
                />
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
