
import { FontAwesomeIcon, faTrash } from './FontAwesome'

export const MenuCard = () => {
    return (
        <div className="food-item p-5 m-8 w-[80%] md:w-[60%] mx-auto md:flex md:justify-between items-center">
            <div className="md:w-[50%] items-center mb-3 md:mb-0">
                <div className="w-[50%] h-4 my-2 bg-gray-300 rounded mt-1"></div>
                <div className="w-[70%] h-4 my-2 bg-gray-300 rounded mt-1"></div>
                <div className="w-[30%] h-4 bg-gray-300 rounded mt-1"></div>
            </div>
            <div className="w-[25%] md:w-[15%] items-center">
                <div className="w-full h-[50px] my-2 bg-gray-300 rounded-lg"></div>
                <div className="w-[50%] h-4 bg-gray-300 rounded mt-1"></div>
            </div>
        </div>
    );
}


const MenuShimmer = () => {
    return (
        <div className="flex flex-col m-2 flex-wrap">
            {[...Array(11)].map((_, index) => (
                <div  key={index}>
                    <MenuCard key={index} />
                    <div className="w-[60%] mx-auto h-[1px]  bg-gray-300 "></div>
                </div>
            ))}
        </div>
    )
}

export default MenuShimmer;
