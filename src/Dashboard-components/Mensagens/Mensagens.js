import React, { useEffect, useState } from "react";
import "./Mensagens.css";
import EmptyProfile from "../../Images/empty-profile.png";
import socketIO from "socket.io-client";

function Mensagens({ empresa }) {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [active, setActive] = useState({
    id: "",
    name: "",
  });

  const sendMessage = (message, company, name, id) => {
    const completeMessage = {
      message: message,
      empresa: company,
      sender: name,
      id: empresa.messages[0]?._id,
    };
    socket?.emit("sendMessage", completeMessage);
  };

  useEffect(() => {
    const newSocket = socketIO.connect("https://tamarintec.herokuapp.com");
    setSocket(newSocket);
    return socket?.disconnect();
  }, []);

  return (
    <div clasName="mensagens">
      <div style={{ display: "flex" }}>
        {empresa?.messages?.length === 0 ? (
          <h3
            style={{
              marginTop: "17%",
              marginLeft: "23%",
              color: "rgba(0, 0, 0, 0.3)",
            }}
          >
            Nenhuma mensagem para você!
          </h3>
        ) : (
          <>
            <div className="col" id="message-column-users">
              {empresa.messages.map((list) => {
                return (
                  <>
                    <div
                      className="message-users-element"
                      onClick={() => {
                        setActive({
                          id: list?._id,
                          name: list?.name,
                        });
                      }}
                    >
                      <img
                        alt="profile"
                        style={{ width: "17%", marginRight: "5%" }}
                        id="message-profile-image"
                        src={EmptyProfile}
                      />
                      <h5 style={{ textAlign: "center", marginTop: "5%" }}>
                        {list.name !== "" ? list.name : "No Name"}
                      </h5>
                      <hr />
                    </div>
                  </>
                );
              })}
            </div>
            <div className="col" id="message-column-user-message">
              <div className="message-column-user-header">
                <h3>No Name</h3>
              </div>
              <div id="message-column-user-body">
                {empresa?.messages[0].messages?.map((value) => {
                  return (
                    <div className="message-column-user-body-it">
                      <p>{value.message}</p>
                    </div>
                  );
                })}
              </div>
              <div className="message-column-user-insert">
                <hr />
                <input
                  placeholder="Mande uma mensagem"
                  id="messagen-send-input"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <button
                  className="btn btn-success"
                  id="messagen-send-button"
                  onClick={() => {
                    sendMessage(message, empresa._id, empresa.name, active.id);
                    setMessage("");
                  }}
                >
                  Enviar!
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Mensagens;
