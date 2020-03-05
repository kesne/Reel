import Link from 'next/link';
import styled from 'styled-components';

const H1 = styled.h1`
    margin: 0;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Raleway', sans-serif;
    cursor: pointer;
`;

export default function Title() {
    return (
        <div>
            <Link href="/">
                <H1>
                    <a>Reel</a>
                </H1>
            </Link>
        </div>
    );
}
