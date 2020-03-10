import Layout from '../components/Layout';
import Request from '../components/Request';
import Router from 'next/router';
import * as cookies from '../utils/cookies';
import verifyToken from '../utils/verifyToken';

export default function RequestPage() {
    return (
        <Layout tabTitle="Reel - Request">
            <Request />
        </Layout>
    );
}

// RequestPage.getInitialProps = async ctx => {
//     const rawToken = cookies.get(ctx)('token');
//     const token = verifyToken(rawToken);
//     console.log(rawToken);
//     console.log(token);
//     if (!token) {
//         // cookies.remove('token');
//         Router.push({
//             pathname: '/sign_in',
//             query: { from: Router.pathname },
//         });
//     }
//     return {};
// };
