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

type GridCard = {
    _id: string;
    name: string;
    imageLink: string;
    desc: string;
    category: string;
};

export default function addCard() {
    const router = useRouter();
    const [inputs, setInputs] = useState({});

    const handleChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]: value}));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(inputs);
    };

    return (
        <div className='addForm'>
            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <label className='label'>Recipe name</label>
                    <div className='control'>
                        <input
                            onChange={handleChange}
                            className='input'
                            type='text'
                            placeholder='Text input'
                            name='name'
                            required
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Image Link</label>
                    <div className='control'>
                        <input
                            onChange={handleChange}
                            className='input'
                            type='url'
                            placeholder='Text input'
                            name='imageLink'
                            required
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Recipe Description</label>
                    <div className='control'>
                        <textarea
                            onChange={handleChange}
                            className='textarea'
                            placeholder='Textarea'
                            name='desc'
                            required
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Category</label>
                    <div className='control'>
                        <div className='select'>
                            <select onChange={handleChange}>
                                <option value='Main course'>Main course</option>
                                <option value='Deserts'>Deserts</option>
                                <option value='Drinks'>Drinks</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='buttons alignCenter'>
                    <button className='button is-success is-light'>
                        Success
                    </button>
                    <button type='button' className='button is-danger is-light'>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
