import Image from 'next/image';

export default function GridCard({id, name, imageLink, desc, category}) {
    return (
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
                            <p className='subtitle is-6'>{category}</p>
                        </div>
                    </div>

                    <div className='content'>{desc}</div>
                </div>
            </div>
        </div>
    );
}
