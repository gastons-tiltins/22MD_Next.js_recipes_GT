'use client';
import {useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import axios from 'axios';

type PageProps = {
    params: {
        id: string;
    };
};

function SingleCard({params: {id}}: PageProps) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/api/recipes/${id}`).then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) return <h1 className='alignCenter'>Loading...</h1>;
    if (!data) return <h1 className='alignCenter'>No data</h1>;

    const {_id, name, imageLink, desc, category} = data[0];

    const handleDelete = async (id: any) => {
        axios
            .put(`http://localhost:3000/api/delete`, {_id: id})
            .then(() => console.log('Deleted!'))
            .then(() => {
                router.push('/recipes');
            });
    };

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
                            <button onClick={() => handleDelete(id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCard;
