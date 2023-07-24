import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/arkan.jpg' alt='Arkan' width={300} height={300}  />
            </div>
            <h1>Hi I`am Arkan</h1>
            <p>
                I`m a Frontend Developer - I think that I`m a good person to work with your projects.
            </p>
        </section>
    )
}

export default Hero