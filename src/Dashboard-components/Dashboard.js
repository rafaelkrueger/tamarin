import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarDashboard from "./NavbarDasboard/NavbarDashboard";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Produtos from "./Produtos/Produtos";
import Pedidos from "./Pedidos/Pedidos";
import Configurations from "./Configuration/Configuration";
import Site from "./Site/Site";
import Api from "../Api";
import "../App.css";
import Mensagens from "./Mensagens/Mensagens";

function Dashboard() {
  const params = useParams();
  const [dashboard, setDashboard] = useState(0);
  const [empresa, setEmpresa] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    Api.get(`https://tamarintec.herokuapp.com/empresa/${params.id}`)
      .then((res) => {
        setEmpresa(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <NavbarDashboard
        empresa={empresa}
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
      />
      <div className="row">
        <Sidebar
          params={params}
          empresa={empresa}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
          setDashboard={setDashboard}
        />
        {dashboard === 0 ? <Main empresa={empresa} /> : 0}
        {dashboard === 11 || dashboard === 12 || dashboard === 13 ? (
          <Produtos empresa={empresa} dashboard={dashboard} />
        ) : (
          0
        )}
        {dashboard === 2 ? <Pedidos empresa={empresa} /> : 0}
        {dashboard === 3 ? <Mensagens empresa={empresa} /> : 0}
        {dashboard === 51 || dashboard === 52 || dashboard === 53 ? (
          <Site empresa={empresa} dashboard={dashboard} />
        ) : (
          0
        )}
        {dashboard === 6 ? <Configurations empresa={empresa} /> : 0}
      </div>
    </>
  );
}

export default Dashboard;
