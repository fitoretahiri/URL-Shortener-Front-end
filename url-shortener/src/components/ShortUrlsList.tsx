import React from 'react';
import '../App.css';
import { Url } from '../model';
import ShortUrlCard from './ShortUrlCard';

type Props = {
  shortUrls: Url[];
  setShortUrls: React.Dispatch<React.SetStateAction<Url[]>>;
}

export default function ShortUrlsList({ shortUrls, setShortUrls }: Props) {
  return (
    <div className='short-url'>
      {shortUrls.map((url) => (
        <ShortUrlCard 
            key={url.key}
            url = {url}
            shortUrls={shortUrls}
            setShortUrls={setShortUrls}
        />
      ))}
    </div>
  );
}
