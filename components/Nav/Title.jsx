import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
`;

const A = styled.a`
    font-size: 2rem;
    color: white;
    font-family: 'Raleway', sans-serif;
    &:hover {
        color: rgba(255, 255, 255, 0.6);
    }
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
