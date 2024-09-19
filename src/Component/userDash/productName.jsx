import { IoIosArrowDroprightCircle } from "react-icons/io";


const ProductName = ({Items}) => {

    console.log(Items);
    return (
        <div>
            {
                Items.map((data,idx)=>(
                    <h2 key={idx} className="flex  items-center gap-2"> <IoIosArrowDroprightCircle/>{data.name}</h2>
                ))
            }
            
        </div>
    );
};

export default ProductName;