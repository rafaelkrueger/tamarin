import React from 'react'
import {useState, useEffect} from 'react'
import {useParams  } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import Site from './Site/Site'
import Cardapio from './Cardapio/Cardapio'
import Pedidos from './Pedidos/Pedidos';
import Mensagens from './Mensagens/Mensagens';
import NavbarDashboard from './NavbarDasboard/NavbarDashboard'
import Api from '../Api'
import '../App.css'

function Dashboard({sidebarOpen, setSidebarOpen, openSidebar, closeSidebar}) {
  const params = useParams()
  const [dashboard, setDashboard] = useState(0)
  const [empresa, setEmpresa] = useState(null)
  

  useEffect(()=>{
    Api.get(`https://tamarintec.herokuapp.com/empresa/${params.id}`)
        .then((res)=>{
            console.log(res.data)
            setEmpresa(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
  })

    return (  
    <div className='container'>
        <Sidebar params={params.id} empresa={empresa} sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} setDashboard={setDashboard} />
        {dashboard == 0? <Main empresa={empresa} /> : ''}
        {dashboard == 2? <Cardapio empresa={empresa}/> : ''}
        {dashboard == 3? <Pedidos empresa={empresa}/> : ''}
        {dashboard == 4? <Mensagens empresa={empresa}/> : ''}
        <NavbarDashboard params={params.id} empresa={empresa} sidebarOpen={sidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar}/>
    </div>
  )
}

export default Dashboard