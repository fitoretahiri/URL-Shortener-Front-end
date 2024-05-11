import React, { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import InputField from './components/InputField'
import { Url } from './model';
import ShortUrlsList from './components/ShortUrlsList';

function App() {
  const [url, setUrl] = useState<string>('');
  const [shortUrls, setShortUrls] = useState<Url[]>([]);

  //duhet me check dikun nese url ne array veq ekziston mos me kthy ma
  const handleAddUrl = async(e: React.FormEvent) => {  
    e.preventDefault()
    try{
      const response = await fetch('http://localhost:3000/url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({long_url: url})
      })
      const data = await response.json()
      if (!data.key){
        throw new Error('Error creating short URL. No Url was provided in input field or the provided string was not a valid url.')
      }
      setShortUrls([...shortUrls, {key: data.key, long_url: data.long_url, shortUrl: data.short_url}])
      setUrl('')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='App'>
      <span className='Header'>QuickSnip</span>
      <InputField url={url} setUrl={setUrl} handleAddUrl={handleAddUrl}/>
      <ShortUrlsList shortUrls={shortUrls} setShortUrls={setShortUrls} />
      <Footer />
    </div>
  )
}

export default App
