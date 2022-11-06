import React from "react";
import "./Sidebar.css";
import { BiSitemap, BiFoodMenu, BiMoney, BiUser } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineMessage, AiOutlineMenu } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

function Sidebar({
  params,
  empresa,
  setSidebarOpen,
  sidebarOpen,
  closeSidebar,
  setDashboard,
}) {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={empresa == undefined ? "..." : empresa.logo} alt="logo" />
          <h1>{empresa == undefined ? "..." : empresa.name}</h1>
        </div>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <a
            href={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.outerWidth < 600) {
                setSidebarOpen(!sidebarOpen);
              }
              setDashboard(0);
            }}
          >
            <BiSitemap color="white" className="icons-style" />
            Home
          </a>
        </div>
        <h2>Admin</h2>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.outerWidth < 600) {
                setSidebarOpen(!sidebarOpen);
              }
              setDashboard(1);
            }}
          >
            <BiFoodMenu color="white" className="icons-style" />
            Produtos
          </Link>
        </div>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.outerWidth < 600) {
                setSidebarOpen(!sidebarOpen);
              }
              setDashboard(2);
            }}
          >
            <TbTruckDelivery color="white" className="icons-style" />
            Pedidos
          </Link>
        </div>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.outerWidth < 600) {
                setSidebarOpen(!sidebarOpen);
              }
              setDashboard(3);
            }}
          >
            <AiOutlineMessage color="white" className="icons-style" />
            Mensagens
          </Link>
        </div>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.outerWidth < 600) {
                setSidebarOpen(!sidebarOpen);
              }

              setDashboard(4);
            }}
          >
            <BiMoney color="white" className="icons-style" />
            Orçamento
          </Link>
        </div>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.outerWidth < 600) {
                setSidebarOpen(!sidebarOpen);
              }

              setDashboard(5);
            }}
          >
            <CgWebsite color="white" className="icons-style" />
            Website
          </Link>
        </div>
        <h2>Plataforma</h2>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.outerWidth < 600) {
                setSidebarOpen(!sidebarOpen);
              }

              setDashboard(6);
            }}
          >
            <BiUser color="white" className="icons-style" />
            Usuários
          </Link>
        </div>
        <div className="sidebar__link">
          <Link
            to={`/admin/${params}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.outerWidth < 600) {
                setSidebarOpen(!sidebarOpen);
              }

              setDashboard(7);
            }}
          >
            Política de Privacidade
          </Link>
        </div>
        <hr />
        <div className="sidebar__logout">
          <Link to="/">Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
