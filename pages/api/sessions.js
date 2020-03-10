import User from '../../models/User';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        console.log(username, password);
        const user = await User.find({
            name: username,
            passwordHash: password,
        });

        if (user.length === 1) {
            res.status(200).json(user);
        } else if (user.length > 1) {
            res.status(500).end();
            console.log('Multiple users returned from database!');
        } else {
            res.status(401).json({
                message: 'No matching username & password found',
            });
        }
    } else {
        res.status(400).json({ message: 'Must use POST for this route' });
    }
};
