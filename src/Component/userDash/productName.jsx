import { IoIosArrowDroprightCircle } from "react-icons/io";


const ProductName = ({Items}) => {

    // console.log(Items);
    return (
        <div>
            {
                Items.map((data,idx)=>(
                    <h2 key={idx} className="flex items-center  justify-start gap-1 text-left"> {idx+1}.{data.name}</h2>
                ))
            }
            
        </div>
    );
};

export default ProductName;