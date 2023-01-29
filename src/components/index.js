import {useState,useEffect} from 'react'
import axios from 'axios';
import './styles.css'
import { SiTinder } from "react-icons/si";
import { ImUser } from "react-icons/im";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaTimes, FaStar ,FaHeart} from "react-icons/fa";

function Home() {
  const {users,setUsers} = useState([]);
  const {loading,setIsLoading} = useState(false);
  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users")
    .then((data) => setUsers(data))
    .catch((e)=> console.log(e))
    .finally(()=> setIsLoading(false));
  },[])
    return (
    <div className='tinder'>
        <header className="App-header">
            <div><ImUser/></div>
            <div><SiTinder/></div>
            <div><HiChatBubbleLeftRight/></div>
        </header>
        <div className='App-content'>
            <div className='content'>
                <h5>Anna 19</h5>
                <h6>University of San Francisco</h6>
                <h6>1 mile away</h6>
            </div>
        </div>
        <footer className='App-footer'>
            <div><FaTimes/></div>
            <div><FaHeart/></div>
        </footer>
    </div>
  )
}

export default Home
