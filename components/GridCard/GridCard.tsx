import Link from 'next/link';
import Image from 'next/image';

type Recipe = {
    id: string;
    name: string;
    imageLink: string;
    desc: string;
    category: string;
};

export default function GridCard({
    id,
    name,
    imageLink,
    desc,
    category,
}: Recipe) {
    category = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <div>
            <Link href={`/recipes/${id}`}>
                <div className='card'>
                    <div className='card-image'>
                        <figure className='image is-4by3'>
                            <Image
                                className='aspectRatio'
                                src={imageLink}
                                alt={name}
                                // width={300}
                                // height={200}
                                fill
                            />
                        </figure>
                    </div>
                    <div className='card-content'>
                        <div className='media'>
                            <div className='media-content'>
                                <p className='title is-4'>{name}</p>
                                {/* <p className='title is-4'>{id}</p> */}
                                <p className='subtitle is-6'>{category}</p>
                            </div>
                        </div>
                        <div className='content cutoffText is-size-5'>
                            {desc}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
