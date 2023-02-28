'use client';
import {useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import GridCard from '@/components/GridCard/GridCard';
import axios from 'axios';

type PageProps = {
    params: {
        id: string;
    };
};

type GridCard = {
    _id: string;
    name: string;
    imageLink: string;
    desc: string;
    category: string;
};

function Cards({params: {id}}: PageProps) {
    const router = useRouter();
    const [data, setData] = useState<GridCard[]>();
    const [isLoading, setLoading] = useState(false);
    const [showAll, setShowAll] = useState(true);
    const [category, setCategory] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/api/readData').then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) return <h1 className='alignCenter'>Loading...</h1>;
    if (!data) return <h1 className='alignCenter'>No data</h1>;

    const ShowAllData = () => {
        return (
            <>
                <h1>ALL DATA</h1>
            </>
        );
    };

    return (
        <div>
            <div className='recipesContainer'>
                <div className='cardGrid'>
                    <div className='colSpan2'>
                        <button
                            onClick={() => setShowAll(true)}
                            className='button is-info is-light'
                        >
                            All Recipes
                        </button>
                        <button className='button is-info is-light'>
                            Main course
                        </button>
                        <button className='button is-info is-light'>
                            Deserts
                        </button>
                        <button className='button is-info is-light'>
                            Drinks
                        </button>
                    </div>
                    <div className='field '>
                        <div className='control searchField'>
                            <input
                                className='input '
                                type='text'
                                placeholder='Search recipe..'
                            />
                        </div>
                    </div>
                    {data.map((item: GridCard) => (
                        <GridCard
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            imageLink={item.imageLink}
                            desc={item.desc}
                            category={item.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cards;
