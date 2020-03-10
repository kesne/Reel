import { Alert } from 'antd';

export default function Error({ errorCode, handleClose }) {
    if (!errorCode) return null;
    if (errorCode !== 401 && errorCode !== 500)
        throw new Error('Unexpected response code from server');
    const message =
        errorCode === 401
            ? 'Incorrect username or password.'
            : 'A problem occurred while trying to sign in.';
    return (
        <Alert
            type="error"
            message={message}
            style={{ marginBottom: '1rem' }}
            showIcon
            closable
            onClose={handleClose}
        />
    );
}
