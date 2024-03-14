

const SharedCover = ({bimg, title, subTitle}) => {
    return (
        <div>
            <div className="hero min-h-[70vh]" style={{ backgroundImage: `url("${bimg}")` }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content bg-[#15151599] px-72 py-16">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedCover;