import Image from 'next/image';

export default function Home() {
    return (
        <header>
            <section className="container">
                <div className="row">
                    <div className="col-9 col-md-4">
                        <Image
                            src="/logohorcor.png"
                            alt="Picture of the author"
                            width={274}
                            height={78}
                            // layout="fill"
                            // objectFit="contain"
                        />
                    </div>
                </div>
            </section>
        </header>
    );
}
