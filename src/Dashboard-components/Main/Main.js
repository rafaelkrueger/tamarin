import React, {useEffect, useState} from 'react'
import './Main.css'
import Api from '../../Api'

function Main({empresa}) {

  return (
    <main>
        <div className='main__container'>
          <h3>{empresa == undefined? <p>Loading</p>: <h3>{empresa.name}</h3>}</h3>
        </div>
        
    </main>
  )
}

export default Main