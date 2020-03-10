import Router from 'next/router';

const withAuth = Page => {
    return () => {
        if (false) {
            Router.push({
                pathname: '/sign_in',
                query: { from: Router.pathname },
            });
            //must have return or errors are given
            return <div />;
        } else {
            return <Page />;
        }
    };
};

export default withAuth;
