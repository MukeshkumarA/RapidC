import { useState, useEffect } from "react";

const PopupMessage = ({ message, position, onClose }) => {

    const [showMessage, setShowMessage] = useState(true);
    
    useEffect(() => {
        if(showMessage) {
            const timeout = setTimeout(() => {
                setShowMessage(false);
                onClose();
            }, 1000);
          return () => clearTimeout(timeout);
        }
    },[showMessage]);

    return (
        <>
        {showMessage && (
          <div
            style={position}
            className="w-[30%] mx-auto inline-block bg-orange-500 p-2 rounded-md shadow-md text-white text-center text-lg font-semibold">
            {message}
          </div>
        )}
        </>
      )
    
}


export default PopupMessage;