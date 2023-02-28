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
    const [main, setMain] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/api/readData').then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) return <h1 className='alignCenter'>Loading...</h1>;
    if (!data) return <h1 className='alignCenter'>No data</h1>;

    const filterRecipes = (props: string) => {
        if (props === 'all') {
            setLoading(true);
            axios.get('http://localhost:3000/api/readData').then((res) => {
                setData(res.data);
                setLoading(false);
            });
        } else {
            setLoading(true);
            axios
                .get(`http://localhost:3000/api/category/${props}`)
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                });
        }
    };

    const handleSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        axios.get(`http://localhost:3000/api/search/${input}`).then((res) => {
            setData(res.data);
            setLoading(false);
        });
        console.log(input);
        setInput('');
    };

    return (
        <div>
            <div className='recipesContainer'>
                <div className='cardGrid'>
                    <div className='colSpan2'>
                        <button
                            onClick={() => filterRecipes('all')}
                            className='button is-info is-light'
                        >
                            All Recipes
                        </button>
                        <button
                            onClick={() => filterRecipes('main')}
                            className='button is-info is-light'
                        >
                            Main courses
                        </button>
                        <button
                            onClick={() => filterRecipes('salad')}
                            className='button is-info is-light'
                        >
                            Salads
                        </button>
                        <button
                            onClick={() => filterRecipes('desert')}
                            className='button is-info is-light'
                        >
                            Deserts
                        </button>
                    </div>
                    <div className='alignRight'>
                        <form onSubmit={handleSearch}>
                            <div className='field has-addons'>
                                <div className='control'>
                                    <input
                                        onChange={(e) =>
                                            setInput(e.target.value)
                                        }
                                        className='input'
                                        type='text'
                                        placeholder='Find a recipe'
                                        name='search'
                                    />
                                </div>
                                <div className='control'>
                                    <button className='button is-info'>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
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
