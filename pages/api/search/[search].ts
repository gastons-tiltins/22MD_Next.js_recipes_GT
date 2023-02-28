import connectMongo from '../../../utils/dbCon';
import Recipe from '../../../models/recipesModel';
import {NextApiRequest, NextApiResponse} from 'next';

async function searchByName(req: NextApiRequest, res: NextApiResponse) {
    const {search} = req.query;
    console.log(search);
    await connectMongo();
    let re = new RegExp(`${search}`, `i`);
    const result = await Recipe.find({name: re});
    res.status(200).json(result);
}

export default searchByName;
