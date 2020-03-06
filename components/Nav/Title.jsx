import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;

const A = styled.a`
    font-size: 2rem;
    color: black;
    font-family: 'Raleway', sans-serif;
`;

export default function Title() {
    return (
        <Wrapper>
            <Link href="/" passHref>
                <A>Reel</A>
            </Link>
        </Wrapper>
    );
}
