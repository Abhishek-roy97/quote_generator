import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'


function App() {
    const [suggestion, setSuggestion] = useState('');
    const url = 'https://api.adviceslip.com/advice';

    useEffect(() => {
      fetchFromAPI()
  
    }, [])
    


    const fetchFromAPI = async () => {
        try{
            const res = await axios.get(url);
            setSuggestion(res?.data?.slip)
        }
        catch(error){
          console.log(error);
        }

    }
    
    

  return (
    <div className="app">
        <div className="card">
          <h1 className="heading">{suggestion?.advice}</h1>
          <button className="button" onClick={() =>{
            fetchFromAPI()
          }}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  
}

export default App