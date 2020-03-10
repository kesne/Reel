import cookies from 'next-cookies';

export const set = (key, val) => {
    document.cookie = `${key}=${val}`;
};

export const remove = key => {
    document.cookie = `${key}=;`;
};

export const get = ctx => key => {
    return cookies(ctx)[key];
};
