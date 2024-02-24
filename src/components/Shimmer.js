import React from 'react'

const ShimmerCard = () => {
  return (
    <div className="w-[280px] mr-[50px] mb-5 text-left relative">
      {/* Shimmer effect overlay */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Content */}
      <div className="relative">
        {/* Placeholder image */}
        <div className="w-full h-[160px] bg-gray-300 rounded-lg"></div>
        
        {/* Placeholder text */}
        <div className="mt-2">
          <div className="w-[60%] h-4 bg-gray-300 rounded"></div>
          <div className="w-[50%] h-4 bg-gray-300 rounded mt-1"></div>
          <div className="w-[70%] h-4 bg-gray-300 rounded mt-1"></div>
          <div className="w-[40%] h-4 bg-gray-300 rounded mt-1"></div>
        </div>
      </div>
    </div>
  );
};

const ShimmerComponent = () => {
  return (
   <div className="flex justify-center m-[50px] flex-wrap">
      {[...Array(11)].map((_,index) => (
        <ShimmerCard  key={index} />
      ))}
   </div>
  )
}

export default ShimmerComponent;


// export const TopItemsShimmer = () => {
//     return (
//       <div className="flex justify-center p-5" key="div2">
//             {[...Array(5)].map((_, index) => (
//               <div key={index} className='bg-gray-700'>
//               {/* <div>{item.action.text}</div> */}
//                 <img className="w-[140px] mx-4" src="" alt="" />
//             </div>
//             ))}
  
//       </div>
//     );
// }