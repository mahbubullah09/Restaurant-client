import img from "../../assets/home/featured.jpg";
import SharedTitele from "../SharedComponent/SharedTitle";
import "./feature.css";

const FromMenu = () => {
    const today = new Date().toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="feature-item p-8 md:p-16 lg:p-24 my-10">
            <SharedTitele
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            />

            {/* Responsive flex layout: stack vertically on small screens and horizontally on larger screens */}
            <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto ">
                {/* Image */}
                <img
                    className="w-full md:w-[400px] lg:w-[550px] p-4 md:p-8"
                    src={img}
                    alt="From Our Menu"
                />

                {/* Content */}
                <div className="flex-1 mt-4 md:mt-0 md:ml-8">
                    <p className="text-base  lg:text-xl mb-4">
                        {today} <br />
                        WHERE CAN I GET SOME? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="mt-4 py-2 px-4 text-white border border-t-0 border-x-0 border-b-3 text-sm md:text-lg">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FromMenu;
