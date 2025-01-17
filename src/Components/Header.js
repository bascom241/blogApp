import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Passion from '../images/passion - Copy.png'
import  {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth>800? true :false);
    const closeNavHandler = ()=>{
        if(window.innerWidth<800){
            setIsNavShowing(false);
        } else{
            setIsNavShowing(true);
        }
    }
    return (
        <nav>

            <div className=' container nav__container'>
                <Link to='/' className='nav__logo'>
                    <img src={Passion} alt=''   onClick={closeNavHandler}/>
                </Link> 
                {isNavShowing && 
                <ul className='nav__menu'>
                    <li><Link to='/profile/dytfu' onClick={closeNavHandler}>AbdulBasit</Link></li>
                    <li><Link to='/create' onClick={closeNavHandler}>Create Post</Link></li>
                    <li><Link to='/author' onClick={closeNavHandler}>Authors</Link></li>
                    <li><Link to='/logout' onClick={closeNavHandler}>LogOut</Link></li>
                </ul>}
                <button className='nav__toggle-btn' onClick={()=> setIsNavShowing(!isNavShowing)}>
             {isNavShowing? <AiOutlineClose/>:<FaBars/>}
                
                </button>
            </div>
        </nav>
    )
}

export default Header
