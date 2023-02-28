import connectMongo from '../../../utils/dbCon';
import Recipe from '../../../models/recipesModel';
import {NextApiRequest, NextApiResponse} from 'next';

async function byCategory(req: NextApiRequest, res: NextApiResponse) {
    const {category} = req.query;
    console.log(category);
    await connectMongo();
    const result = await Recipe.find({category: category});
    res.status(200).json(result);
}

export default byCategory;
