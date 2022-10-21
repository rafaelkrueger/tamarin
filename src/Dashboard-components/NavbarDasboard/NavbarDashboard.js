import React from 'react'
import './NavbarDashboard.css'
import {BiSitemap, BiFoodMenu, BiMoney, BiUser} from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai'

function NavbarDashboard({params,empresa, sidebarOpen, closeSidebar, openSidebar}) {
  return (
    
    <div className='navbar-dashboard'>
        <div className='nav_icon' onClick={()=>{
            if(sidebarOpen){
                closeSidebar()                
            }else{
                openSidebar()
            }
        }}>
            <AiOutlineMenu color="white"/>
        </div>
        <div className='navbar__right'>

            <a>
                <img src={empresa == undefined?"...":empresa.logo} width="30" style={{borderRadius:20}} />
            </a>

        </div>
    </div>
  )
  
}

export default NavbarDashboard