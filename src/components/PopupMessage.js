import { useState, useEffect } from "react";

const PopupMessage = ({ message, position, onClose, closingTime }) => {

    const [showMessage, setShowMessage] = useState(true);
    
    useEffect(() => {
        if(showMessage) {
            const timeout = setTimeout(() => {
                setShowMessage(false);
                onClose();
            }, closingTime);
          return () => clearTimeout(timeout);
        }
    },[showMessage]);

    return (
        <>
        {showMessage && (
          <div
            style={position}
            className="">
            {message}
          </div>
        )}
        </>
      )
    
}


export default PopupMessage;