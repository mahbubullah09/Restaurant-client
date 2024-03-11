import img from "../../assets/home/featured.jpg"
import SharedTitele from "../SharedComponent/SharedTitle";

import "./feature.css"

const FromMenu = () => {
    return (
        <div className="feature-item bg-fixed p-24 my-10">
            <SharedTitele subHeading={'Check it out'}
                heading={"FROM OUR MENU"} />

            <div className="flex justify-center items-center ">
                <img className="w-[648px] p-8 " src={img} alt="" />

                <div className="flex-1">
                    <p className=" text-2xl ">March 20, 2023 <br />
                        WHERE CAN I GET SOME? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className=" mt-4 py-2 px-4 text-white border border-t-0 border-x-0 border-b-3 text-lg">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default FromMenu;