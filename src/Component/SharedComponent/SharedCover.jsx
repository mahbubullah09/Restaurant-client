import { Parallax } from 'react-parallax';

const SharedCover = ({bimg, title, subTitle}) => {
    return (

        <Parallax
        blur={{ min: -100, max: 100 }}
        bgImage={bimg}
        bgImageAlt="the dog"
        strength={-100}
    >
        <div>
            <div className="hero min-h-[70vh]">
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content bg-[#15151599] px-72 py-16">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
      
    );
};

export default SharedCover;