'use client';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import axios from 'axios';

type PageProps = {
    params: {
        id: string;
    };
};

type Recipe = {
    _id: string;
    name: string;
    imageLink: string;
    desc: string;
    category: string;
}[];

export default async function singleRecipe({params: {id}}: PageProps) {
    const [rec, setRec] = useState<Recipe[]>([]);

    const fetchRecipe = async () => {
        const res = await axios.get(`http://localhost:3000/api/recipes/${id}`);
        const recipe: Recipe = await res.data;
        return recipe;
    };

    const handleDelete = async (id: any) => {
        const res = await axios.post(`http://localhost:3000/api/delete/`, {id});

        const data = await fetchRecipe();
        const {_id, name, imageLink, desc, category} = data[0];
        return (
            <div className='singleCard'>
                <div>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <Image
                                    className='aspectRatio'
                                    src={imageLink}
                                    alt={name}
                                    // width={1000}
                                    // height={1000}
                                    fill
                                />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-content'>
                                    <p className='title is-4'>{name}</p>
                                    <p className='title is-4'>{id}</p>
                                    <p className='subtitle is-6'>{category}</p>
                                </div>
                            </div>
                            <div className='content'>{desc}</div>
                            <div>
                                <button
                                    className='button is-danger is-light'
                                    onClick={() => handleDelete(id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
