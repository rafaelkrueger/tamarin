import "../App.css";
import Api from "../Api";
import { React, useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Load from "../Gifs/load.gif";
//importação de pagamentos

function News() {
  const [news, setNews] = useState();

  useEffect(() => {
    Api.get("https://tamarintec.herokuapp.com/news/programming")
      .then((res) => {
        setNews(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid" id="news">
        <div className="card-news">
          {news == undefined ? (
            <>
              {" "}
              <img
                src={Load}
                style={{
                  width: "5%",
                  height: "10%",
                  marginLeft: "47%",
                }}
              />
            </>
          ) : (
            news.map((list) => (
              <>
                <div class="card-md-8" id="news-card">
                  <div class="row" id="news-card-information">
                    <div class="col-md-6">
                      <img
                        id="news-img"
                        src={list.urlToImage}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col" id="content-news">
                      <div class="card-body">
                        <h5 class="card-title">{list.title}</h5>
                        <p class="card-text">{list.description}</p>
                        <p class="card-text">
                          {list.content.split(0, 70)}...{" "}
                          <a href={list.url}>Mais sobre a materia</a>
                        </p>
                        <p class="card-text">
                          <small class="text-muted">{list.author} </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
