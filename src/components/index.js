import {useState,useEffect} from 'react'
import axios from 'axios';
import './styles.css'
import { SiTinder } from "react-icons/si";
import { ImUser } from "react-icons/im";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaTimes,FaHeart} from "react-icons/fa";

function Home() {
    const [users,setUsers] = useState([]);
    const [IsLoading,setIsLoading] = useState(false);
    
    useEffect((arr)=>{
      // .then(console.log())
      axios("https://randomuser.me/api/?results=1")
      .then((res)=>setUsers(res.data.results))
      .catch((e)=> console.log(e))
      .finally(()=> setIsLoading(false));
    },[]);

    return (
    <div className='tinder'>
        {IsLoading && <div>Loading...</div>}
          {users.map((user)=>(
                    <div key={user.id}>
                      <header className="App-header">
                      <div><ImUser/></div>
                      <div><SiTinder/></div>
                      <div><HiChatBubbleLeftRight/></div>
                      </header>
                      <div style={{
                        backgroundImage:`url('${user.picture.large}')`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        width:400,
                        height:400,
                        }} className='App-content'>
                      <div className='content'>
                          <h5>{user.name.first} {user.name.last}, {user.dob.age}</h5>
                          <h6>{user.location.city}/{user.location.country}</h6>
                      </div>
                      </div>
                      <footer className='App-footer'>
                        <div><FaTimes/></div>
                        <div><FaHeart/></div>
                      </footer>
                    </div>
          ))}
    </div>
  )
}

export default Home
