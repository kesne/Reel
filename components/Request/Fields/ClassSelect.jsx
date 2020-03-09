import { Form, Select } from 'antd';
const { Item } = Form;
const { Option } = Select;

export default function ClassSelect({ handleChange }) {
    return (
        <Item
            name="classID"
            label="Class"
            rules={[{ required: true, message: 'Please select a class!' }]}
        >
            <Select placeholder="Select a Class" onChange={handleChange}>
                <Option value="ENG 150">Intro to Literary Analysis</Option>
                <Option value="PHIL 150">Symbolic Logic</Option>
                <Option value="MATH 140">Calculus II</Option>
                <Option value="OTHER">Other (extracurricular)</Option>
            </Select>
        </Item>
    );
}
