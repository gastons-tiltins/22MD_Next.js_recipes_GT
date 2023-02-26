import Image from 'next/image';

export default function GridCard() {
    return (
        <div>
            <div className='card'>
                <div className='card-image'>
                    <figure className='image is-4by3'>
                        <Image
                            src='/soup.jpeg'
                            alt='me'
                            // width={1000}
                            // height={1000}
                            fill
                        />
                    </figure>
                </div>
                <div className='card-content'>
                    <div className='media'>
                        <div className='media-left'>
                            <figure className='image is-48x48'>
                                <img
                                    src='https://bulma.io/images/placeholders/96x96.png'
                                    alt='Placeholder image'
                                />
                            </figure>
                        </div>
                        <div className='media-content'>
                            <p className='title is-4'>John Smith</p>
                            <p className='subtitle is-6'>@johnsmith</p>
                        </div>
                    </div>

                    <div className='content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href='#'>#css</a> <a href='#'>#responsive</a>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}