// import User from '../../models/User';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        console.log(username, password);
        res.status(401).json({
            message: 'No matching username & password found',
        });
    } else {
        res.status(400).json({ message: 'Must use POST for this route' });
    }
};
