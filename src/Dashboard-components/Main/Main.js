import React, { useState } from "react";
import "./Main.css";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from "recharts";

function Main({ empresa }) {
  const data = [
    {
      name: "Jan",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "Fev",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "Mar",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "Abr",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "Maio",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "Junho",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "Julho",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "Agosto",
      uv: 0,
      pv: 0,
      amt: 0,
    },

  ];

  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  const [screen, setScreen] = useState(window.outerWidth);

  return (
    <>
      <div id="main">
        <div className="row" id="cards-main">
          <br />
          <br />
          <h3>
            Seu Ecommerce:{" "}
            <a
              href={`https://uni-ecommerce.netlify.app/${empresa?.site}`}
              target="_blank"
              rel="noreferrer"
            >
              {empresa?.name}
            </a>{" "}
          </h3>
          <div className="col" id="cards-main-component">
            <div className="card-main-content">
              <div className="col">
                <h6 className="main-card-h6">Quantidade de Produtos</h6>
                <h3 className="main-card-h3">
                  {empresa == undefined ? "" : empresa.produto.length}
                </h3>
                <p id="main-card-p">Ver todos Produtos</p>
              </div>
              <div className="col" id="pie-chart-main">
                <PieChart width={430} height={100} id="pie-chart">
                  <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#3ea175"
                  />
                </PieChart>
              </div>
            </div>
          </div>

          <div className="col" id="cards-main-component">
            <div className="card-main-content">
              <div className="col">
                <h6 className="main-card-h6">Número de Pedidos</h6>
                <h3 className="main-card-h3">
                  {empresa == undefined ? "" : empresa.pedidos.length}
                </h3>
                <p id="main-card-p">Ver todos Pedidos</p>
              </div>
              <div className="col" id="pie-chart-main">
                <PieChart width={430} height={100} id="pie-chart">
                  <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#3ea175"
                  />
                </PieChart>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="main-graphics" style={{ marginTop: "4%" }}>
          <div className="col" id="main-graphic-1">
            <h4 id="main-graphic-title">TOTAL OBTIDO</h4>
            <h3>R$0.00</h3>
            <p id="main-graphic-subtitle">Seu lucro bruto obtido é de R$</p>
          </div>
          <div className="col" id="main-graphic-2">
            <h3
              id="main-graphic-title"
              style={{
                textAlign: "center",
                marginTop: "-3.5%",
                marginBottom: "3.5%",
              }}
            >
              INFORMAÇÕES MENSAIS
            </h3>
            <AreaChart
              width={screen > 600 ? 730 : 230}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
