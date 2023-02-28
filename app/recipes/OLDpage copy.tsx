import axios from 'axios';
import {Inter} from 'next/font/google';
// import styles from './page.module.css';
import GridCard from '@/components/GridCard/GridCard';

const inter = Inter({subsets: ['latin']});

const getResults = async () => {
    const res = await axios.get('http://localhost:3000/api/readData');
    return res.data;
};

export default async function Home() {
    const data: any = await getResults();
    return (
        <div className='recipesContainer'>
            <div className='cardGrid'>
                {/* <h1>{JSON.stringify(data)}</h1> */}
                {data.map((item: any) => (
                    <GridCard
                        id={item._id}
                        name={item.name}
                        imageLink={item.imageLink}
                        desc={item.desc}
                        category={item.category}
                    />
                ))}
            </div>
        </div>
    );
}
