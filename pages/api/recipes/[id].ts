import connectMongo from '../../../utils/dbCon';
import Recipe from '../../../models/recipesModel';
import {NextApiRequest, NextApiResponse} from 'next';

async function deleteRecord(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.query;
    await connectMongo();
    const result = await Recipe.find({_id: id});
    res.status(200).json(result);
}

export default deleteRecord;
