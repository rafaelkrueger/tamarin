import React from 'react'
import {useState, useEffect} from 'react'
import {useParams  } from "react-router-dom";
import NavbarDashboard from './NavbarDasboard/NavbarDashboard'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main';
import Produtos from './Produtos/Produtos'
import Pedidos from './Pedidos/Pedidos'
import Api from '../Api'
import '../App.css'

function Dashboard() {
  const params = useParams()
  const [dashboard, setDashboard] = useState(0)
  const [empresa, setEmpresa] = useState(null)

  const [sidebarOpen, setSidebarOpen] = useState(false)
    
  const openSidebar = () =>{
      setSidebarOpen(true)
  }

  const closeSidebar = () =>{
      setSidebarOpen(false)
  }
  

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
      <>
        <NavbarDashboard empresa={empresa} sidebarOpen={sidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar}/>
        <div className="row">
          <Sidebar params={params} empresa={empresa} sidebarOpen={sidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar} setDashboard={setDashboard} />
          {dashboard === 0?<Main empresa={empresa}/>: 0}
          {dashboard === 1?<Produtos empresa={empresa}/>: 0}
          {dashboard === 2?<Pedidos empresa={empresa}/>: 0}
        </div>
      </>
      )
}

export default Dashboard