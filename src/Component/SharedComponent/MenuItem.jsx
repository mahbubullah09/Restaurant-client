import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="mb-6">
            {/* Responsive layout: flex-row on medium screens and up, flex-col on small screens */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
                {/* Image */}
                <img
                    className="w-full md:w-[118px] rounded-bl-full rounded-r-full hidden md:block"
                    src={image}
                    alt={name}
                />

                {/* Content */}
                <div className="flex-1">
                    {/* Name and Price */}
                    <div className="flex justify-between text-sm md:text-xl font-semibold uppercase">
                        <h2>{name}</h2>
                        <h5 className="text-[#BB8506] ml-1">${price}</h5>
                    </div>

                    {/* Recipe */}
                    <h6 className="text-sm md:text-base text-[#737373] font-normal">
                        {recipe}
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
