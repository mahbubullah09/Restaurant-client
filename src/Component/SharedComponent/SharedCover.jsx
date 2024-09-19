import { Parallax } from 'react-parallax';

const SharedCover = ({ bimg, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -100, max: 100 }}
      bgImage={bimg}
      bgImageAlt="the background image"
      strength={-100}
    >
      <div>
        <div className="hero min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]">
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content bg-[#15151599] px-4 py-8 md:px-12 md:py-12 lg:px-24 lg:py-16 xl:px-72">
            <div className="max-w-md lg:max-w-2xl">
              <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
              <p className="mb-5 text-sm md:text-base lg:text-lg">{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SharedCover;
