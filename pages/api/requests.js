import Request from '../../models/Request';
import verifyToken from '../../utils/verifyToken';

export default async (req, res) => {
    const [,token] = (req.headers.authentication || '').split('Bearer ');
    const decodedToken = verifyToken(token);

    if (!decodedToken) {
        throw new Error('FUK U');
    }

    console.log(decodedToken.id);

    switch (req.method) {
        case 'GET': {
            const requests = await Request.find();
            res.status(200).json(requests);
            break;
        }
        case 'POST': {
            if (!req.body.nonClassDescription)
                req.body.nonClassDescription = null;
            res.status(200).json('Holy Guacermole!');
            break;
        }
        case 'PATCH': {
            break;
        }
        case 'DELETE': {
            break;
        }
        default:
            throw new Error('What the FUCK just happened?');
            break;
    }
};
