import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

export default function() {
    const handleSubmit = values => {
        console.log(values);
    };

    return (
        <Form onFinish={handleSubmit}>
            <h2>Request a Tutor</h2>
            <Form.Item
                name="classID"
                label="Class"
                rules={[{ required: true }]}
            >
                <Select placeholder="Please select a class">
                    <Option value="ENG150">Intro to Literary Analysis</Option>
                    <Option value="PHIL150">Symbolic Logic</Option>
                    <Option value="MATH140">Calculus II</Option>
                    <Option value="OTHER">Other (extracurricular)</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="tutorType"
                label="Tutoring Type"
                rules={[{ required: true }]}
            >
                <Select placeholder="Please select a tutoring type">
                    <Option value="WRITING">Writing</Option>
                    <Option value="CONTENT">Content</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true }]}
            >
                <Input.TextArea
                    rows={4}
                    placeholder="What do you need help with?"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Request
                </Button>
            </Form.Item>
        </Form>
    );
}
