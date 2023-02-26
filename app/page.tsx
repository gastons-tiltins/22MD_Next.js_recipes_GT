import Image from 'next/image';
import {Inter} from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({subsets: ['latin']});

export default function Home() {
    return (
        <div className='aboutContainer'>
            <h1 className='is-size-1'>Welcome to Recipes website!</h1>
            <p className='is-size-4'>
                Recipes are step-by-step instructions for making a specific dish
                or beverage. They typically include a list of ingredients,
                measurements, cooking times and temperatures, as well as any
                special techniques or tools required. Recipes can be written for
                a wide range of skill levels, from beginner to advanced, and can
                cover a variety of cuisines and dietary restrictions. Following
                a recipe can be a fun and rewarding way to explore new flavors
                and expand your culinary skills.
            </p>
        </div>
    );
}
