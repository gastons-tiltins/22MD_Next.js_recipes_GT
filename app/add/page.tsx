'use client';
import {useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import axios from 'axios';

type Recipe = {
    name?: string;
    imageLink?: string;
    desc?: string;
    category?: string;
};

export default function addCard() {
    const router = useRouter();
    const [inputs, setInputs] = useState<Recipe>({});
    const [linkError, setLinkError] = useState<string>('');
    const [selectError, setSelectError] = useState<string>('');

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

    function validateImageUrl(url: any) {
        return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(inputs.imageLink);
        if (!validateImageUrl(inputs.imageLink)) {
            setLinkError('Link must end with jpg, jpeg, png, webp or gif.');
        } else if (!inputs.category) {
            setSelectError('Please select a category.');
        } else {
            handleAddRecipe(inputs);
        }
    };

    const handleAddRecipe = async (recipe: Recipe) => {
        axios
            .post(`http://localhost:3000/api/add`, inputs)
            .then(() => console.log('Recipe Added!'))
            .then(() => {
                router.push('/recipes');
            });
    };

    // {desc: '12312', imageLink: 'http://localhost:3000/_next/image?url=https%3A%2F%…_FgWf8lObnDBEApSPZ5SgrJfyfBCd2Dz7.jpg&w=3840&q=75', name: '123123', category: 'Drinks'}

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
                    <p className='help is-danger'>{linkError}</p>
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
                            <select
                                defaultValue='disabled'
                                name='category'
                                onChange={handleChange}
                                required
                            >
                                <option value='disabled'>
                                    Select dropdown
                                </option>
                                <option value='main'>Main course</option>
                                <option value='salad'>Salads</option>
                                <option value='desert'>Deserts</option>
                            </select>
                        </div>
                    </div>
                    <p className='help is-danger'>{selectError}</p>
                </div>
                <div className='buttons alignCenter'>
                    <button className='button is-success is-light is-medium'>
                        Add Recipe
                    </button>
                    <button
                        type='button'
                        className='button is-danger is-light is-medium'
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
