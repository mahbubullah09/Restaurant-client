import React from 'react';
import { Parallax } from 'react-parallax';

const SharedItemCover = ({bimg, title, subTitle}) => {
    return (
        <Parallax
        blur={{ min: -10, max: 10 }}
        bgImage={bimg}
        bgImageAlt="the dog"
        strength={-10}
    >
        <div>
            <div className="hero min-h-[50vh]">
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content bg-[#15151599] px-4 py-8 md:px-12 md:py-12 lg:px-24 lg:py-16 xl:px-72">
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

export default SharedItemCover;