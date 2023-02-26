import connectMongo from '../../utils/dbCon';
import Recipe from '../../models/recipesModel';
import {NextApiRequest, NextApiResponse} from 'next';

async function readData(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();
    const result = await Recipe.find();
    res.json(result);
}

export default readData;
