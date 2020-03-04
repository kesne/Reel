import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a`
    height: 100%;
    padding: 8px 16px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
        border-bottom: 3px solid black;
        padding-top: 11px;
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
