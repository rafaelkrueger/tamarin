import React, { useState, useEffect } from "react";
import "./Sidebar.css";

import { BiSitemap, BiFoodMenu, BiMoney } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BsGear } from "react-icons/bs";
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
  const [dropProducts, setDropProducts] = useState(false);
  const [dropWebsite, setDropWebsite] = useState(false);
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
              setDropProducts(!dropProducts);
            }}
          >
            <BiFoodMenu color="white" className="icons-style" />
            Produtos
            <IoIosArrowDown style={{ marginLeft: "5%" }} />
            {dropProducts ? (
              <>
                <ul style={{ listStyle: "none" }}>
                  <li
                    onClick={() => {
                      if (window.outerWidth < 600) {
                        setSidebarOpen(!sidebarOpen);
                      }
                      setDashboard(11);
                    }}
                    style={{ marginBottom: "5%" }}
                  >
                    Inserir Produtos
                  </li>
                  <li
                    onClick={() => {
                      if (window.outerWidth < 600) {
                        setSidebarOpen(!sidebarOpen);
                      }

                      setDashboard(13);
                    }}
                    style={{ marginBottom: "5%" }}
                  >
                    Remover e Alterar
                  </li>
                  <li
                    onClick={() => {
                      if (window.outerWidth < 600) {
                        setSidebarOpen(!sidebarOpen);
                      }

                      setDashboard(12);
                    }}
                    style={{ marginBottom: "-4%" }}
                  >
                    Cupoms da loja
                  </li>
                </ul>
              </>
            ) : (
              ""
            )}
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
              setDropWebsite(!dropWebsite);
            }}
          >
            <CgWebsite color="white" className="icons-style" />
            Website
            <IoIosArrowDown style={{ marginLeft: "5%" }} />
            {dropWebsite ? (
              <>
                <ul style={{ listStyle: "none" }}>
                  <li
                    onClick={() => {
                      if (window.outerWidth < 600) {
                        setSidebarOpen(!sidebarOpen);
                      }
                      setDashboard(51);
                    }}
                    style={{ marginBottom: "5%" }}
                  >
                    Estilos do Site
                  </li>
                  <li
                    onClick={() => {
                      if (window.outerWidth < 600) {
                        setSidebarOpen(!sidebarOpen);
                      }

                      setDashboard(53);
                    }}
                    style={{ marginBottom: "5%" }}
                  >
                    Estilo dos Slides
                  </li>
                  <li
                    onClick={() => {
                      if (window.outerWidth < 600) {
                        setSidebarOpen(!sidebarOpen);
                      }

                      setDashboard(52);
                    }}
                    style={{ marginBottom: "-4%" }}
                  >
                    Estilo dos Produtos
                  </li>
                </ul>
              </>
            ) : (
              ""
            )}
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
            <BsGear color="white" className="icons-style" />
            Configurações
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
