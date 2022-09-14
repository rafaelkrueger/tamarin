import React, { useEffect, useState } from 'react'
import Api from '../../Api'
import './Mensagens.css'

function Mensagens({empresa}) {

  return (
    <div clasName="mensagens">
        <h3 style={{marginTop:"25%", marginLeft:"15%"}}>As mais recentes mensagens do {empresa.name}</h3>

        <div>
        {empresa.message == undefined?<h3>Nenhuma mensagem para você hoje!</h3>:empresa.message.map((list,key)=>{
        <div class="card" id="card-id">                    
        <div class="card-body">
            <h3 className="card-top-title">Mensagem do Cliente:</h3>
            <p class="card-text">{list.mensagem}</p>
            <br/>
            <h3 className='card-description'>Informações:</h3>
            <p class="card-text">{list.nome}</p>
            <p class="card-text">{list.email}</p>
            <p class="card-text">{list.numero}</p>
        </div>
      </div>
        })}
        
    </div>
  </div>
  )
}

export default Mensagens