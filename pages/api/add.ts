import connectMongo from '../../utils/dbCon';
import Recipe from '../../models/recipesModel';
import {NextApiRequest, NextApiResponse} from 'next';

async function addRecord(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();
    const result = await Recipe.create(req.body);
    res.json(result);
}

export default addRecord;
