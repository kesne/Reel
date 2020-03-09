import { Typography } from 'antd';
import styled from 'styled-components';

const Head = styled(Typography.Title)`
    font-family: 'Lato', sans-serif;
`;

export default function({ text }) {
    return <Head level={3}>{text}</Head>;
}
