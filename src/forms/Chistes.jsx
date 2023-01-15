import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { getRandomJokes } from '../services/chistesServices';

const Chistes = () => {
    const [jokes, setJokes] = useState(null);
    let [megusta, setMegusta] = useState(0);
    let [Nomegusta, setNomegusta] = useState(0);
    
    const obtainJokes = () =>{
        getRandomJokes()
        .then((response ) =>{
            if(response.status === 200){
                setJokes(response.data.value)
            }
            console.log(response);
        })
        .catch((error) =>{
            alert('WE can nott connect ', error)
        })
    }
    function Gustar(){
        megusta +=1;
        setMegusta(megusta); 
    }
    function NoGustar(){
        Nomegusta +=1;
        setNomegusta(Nomegusta); 
    }

    return (

             <div className='chistes'>
             <h1>API Chuck Norris</h1>
            {
                jokes != null ?
                (
                    <div>
                    {/* <img alt='avatar' src={jokes.picture.large}></img> */}
                          <p>JOKE: {jokes} </p>
                          <Button endIcon color="primary" onClick={Gustar}>
                            Like
                            </Button>
                            <Button  color="secondary" onClick={NoGustar}>
                            Not Like
                            </Button>
                          {/* <p>Random Joke: {jokes.value}</p>
                          <img alt='avatar' src={jokes.icon_url}></img> */}
                         
                    </div>
              
                    )
                : 
                (   <div>
                    <p>Generate new Jokes</p> 
                </div>
                    )
            }
            <br></br>
            <Button   onClick={obtainJokes} variant="contained">  Generate Random Jokes</Button>
            <br></br>
            {
                megusta || Nomegusta > 0 ?
               (  <div>
                    <p className='like'>Your Jokes Funny: {megusta}</p>
                    <p className='not'>Not Funny: {Nomegusta}</p>
               </div> 
                
                )
                :
                <p></p>
            }
        
        </div>

       
    );
}

export default Chistes;
