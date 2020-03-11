import Router from 'next/router';
import ClientOnly from './ClientOnly';

const withAuth = Page => {
    const Component = props => {
        const hasUser = !!localStorage.getItem('reel:token');

        if (!hasUser) {
            Router.push({
                pathname: '/sign_in',
                query: { from: Router.pathname },
            });

            return null;
        } else {
            return <Page {...props} />;
        }
    };

    return props => {
        return (
            <ClientOnly>
                <Component {...props} />
            </ClientOnly>
        );
    };
};

export default withAuth;
