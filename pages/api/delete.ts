import connectMongo from '../../utils/dbCon';
import Recipe from '../../models/recipesModel';
import {NextApiRequest, NextApiResponse} from 'next';

async function deleteRecord(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();
    const result = await Recipe.findByIdAndDelete(req.body);
    res.json(result);
}

export default deleteRecord;
