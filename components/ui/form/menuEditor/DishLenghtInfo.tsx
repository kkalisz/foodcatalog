import React from "react";
type DishLenghtInfoProps = {
    children: number
}
const DushLenghtInfo = ({ children }: DishLenghtInfoProps) => {
    return <div className=" 
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-full
                border
                border-gray-300
                text-sm
                font-medium
                self-center
                shrink-0">
        {children}
    </div>;
}

export default DushLenghtInfo;