import { AiFillCopy, AiFillDelete } from "react-icons/ai";
import { Url } from "../model";

type ShortUrlCardProps = {
    key: string;
    url: Url;
    shortUrls: Url[];
    setShortUrls: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function ShortUrlCard({ key, url, shortUrls, setShortUrls }: ShortUrlCardProps) {
  return (
    <form className="short_url_card">
        <span className="short_url_card--text">{url.shortUrl}</span>

        <div>
            <span className="icon">
                <AiFillDelete />
            </span>
            <span className="icon">
                <AiFillCopy />
            </span>
        </div>
    </form>
    );
}