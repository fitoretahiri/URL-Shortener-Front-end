import React, {useState, useEffect} from "react";

export default function Notification ({ message, isVisible, setShowNotification }) {
    const [show, setShow] = useState(isVisible);

    useEffect(() => {
        let timeout;
        if (isVisible) {
            setShow(true);
            timeout = setTimeout(() => {
                setShow(false);
                setShowNotification(false);
            }, 1000); 
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [isVisible, setShowNotification]);

    return show ? <div className="notification">{message}</div> : null;
}