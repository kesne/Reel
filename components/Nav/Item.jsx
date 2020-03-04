import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a`
    display: block;
    box-sizing: border-box;
    height: 100%;
    padding: 8px;

    cursor: pointer;

    &:hover {
        border-bottom: 3px solid black;
    }
`;

export default function Item({ text, href, pseudo }) {
    return (
        <li>
            <Link href={href || '/'} as={pseudo || href || '/'}>
                <A>{text}</A>
            </Link>
        </li>
    );
}
