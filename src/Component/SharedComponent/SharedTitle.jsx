

const SharedTitele = ({heading, subHeading}) => {
    return (
        <div className=" mx-auto text-center md:w-4/12 my-8">
            <p className="text-red-700 mb-2 font-semibold">---{subHeading}---</p>
            <h2 className="text-3xl uppercase border-y-4 border-[#E8E8E8] py-2">{heading}</h2>
            
        </div>
    );
};

export default SharedTitele;