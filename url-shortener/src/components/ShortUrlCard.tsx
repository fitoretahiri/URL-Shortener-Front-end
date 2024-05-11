import React, {useState} from "react";
import { AiFillCopy, AiFillDelete } from "react-icons/ai";
import { Url } from "../utils/model";
import Notification from "./Notification";

type ShortUrlCardProps = {
    url: Url;
    shortUrls: Url[];
    setShortUrls: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function ShortUrlCard({ url, shortUrls, setShortUrls }: ShortUrlCardProps) {  
    const [showNotification, setShowNotification] = useState<boolean>(false);

    const handleDelete = (key: string) => {
        setShortUrls(shortUrls.filter((url) => url.key !== key));
    };
  
    const handleCopy = async (short_url: string) => {
        try {
            await navigator.clipboard.writeText(short_url);
            console.log('Text copied to clipboard:', short_url);
            setShowNotification(true);
        } catch (error) {
            console.error('Error copying text:', error);
            setShowNotification(false);
        }
    };
    return (
    <form className="short_url_card">
        <span className="short_url_card--text">{url.shortUrl}</span>

        <div>
            <span className="icon" onClick={() => handleDelete(url.key)}>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleCopy(url.shortUrl)}>
                <AiFillCopy />
            </span>
        </div>
        <Notification message="Copied to clipboard" isVisible={showNotification} setShowNotification={setShowNotification} />
    </form>
    );
}