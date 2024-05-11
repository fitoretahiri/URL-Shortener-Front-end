import { useRef } from 'react';
import '../App.css'

type InputFieldProps = {
    url: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    handleAddUrl: (e: React.FormEvent) => void;
}

export default function InputField ({ url, setUrl, handleAddUrl }: InputFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form 
            className="input"
            onSubmit={(e) => {
                handleAddUrl(e);
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                type="input"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
                className="input-field"
            />
            <button type="submit" className="submit-button">
                Shorten
            </button>
        </form>
  );
}