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
    const [data, setData] = useState<GridCard[]>();
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/api/readData').then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;

    return (
        <div>
            <div className='recipesContainer'>
                <div className='cardGrid'>
                    <div className='colSpan2'>
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

                    {/* <h1>{JSON.stringify(data)}</h1> */}
                    {data.map((item: GridCard) => (
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
        </div>
    );
}

export default Cards;
