import React, { useEffect, useState } from 'react'
import './Cardapio.css'
import Api from '../../Api'
import FileBase64 from 'react-file-base64'

function Cardapio({empresa}) {

  const [category, setCategory] = useState("")


  const [newProduct, setnewProduct] = useState({
    product:"",
    description:"",
    value:0,
    image:"",
    category:""
  })


      const convertBase64 = (file) =>{
        return new Promise((resolve, reject)=>{
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () =>{
                resolve(fileReader.result)
            }

            fileReader.onerror = (error)=>{
                reject(error)
            }
        })
    }




  return (
    <div id='cardapio' className='row' >
    <div>

      <h2 style={{textAlign:"center", borderBottom:"0.5px black solid", marginInline:"20%", paddingBottom:"0.5%"}}>{empresa.name} - esse é seu cardapio!</h2>
          <div className="row" style={{marginBottom:"10%", marginTop:"10%", width:"100%",}}>    
          {empresa.categorias.map((val)=>{
            return(
              <>
              <h1>{val}</h1>
              {empresa.cardapio.filter((list)=>{
                return list.category.includes(val)
              }).map((list, key)=>{
                return(
                  <>
                  <div className="row" id="row-cardapio">
                    <div className="col">
                      <img style={{width:"100%"}} src={list.image}/>
                    </div>
                    <div className="col" id="product-desc-col">
                      <h3>{list.product}</h3>
                      <p>{list.description}</p>   
                      <hr/>
                      <h5>R${list.value}</h5>  
                      <button onClick={()=>{
                        Api.post(`https://tamarintec.herokuapp.com/delete-produto`, {
                        empresa:empresa._id,
                        nomeProduto:list.product
                      })
                      .then((res)=>{
                        console.log(res.data)
                      })
                      .catch((err)=>{
                        console.log(err)
                      })                        
                      }} className="btn btn-danger">DELETAR PRODUTO</button>                 
                    </div>
                  </div> 
                  </>
                )
              })}      
            </>
          )})}
      </div>
    </div>
    <div className='col' id="insert-col">
      <h2>INSIRA UM PRODUTO</h2>
      <img src={newProduct.image == ""?'':newProduct.image} style={{width:"30%", height:"25%",marginBottom:"5%", borderRadius:10}} />
      <br/>
      <div class="input-group mb-3">
          <input name="testImage" onChange={async (e)=>{
            console.log(e.target.files[0])
              const file = e.target.files[0]
              const base64 = await convertBase64(file)
              setnewProduct({...newProduct, image:base64})                   
          }} type="file" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
      <br/>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">Nome Produto</span>
      </div>
      <input type="text" onChange={(e)=>{
          setnewProduct({...newProduct, product:e.target.value})
      }} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
    </div>
    <div class="input-group mb-3">
    <textarea onChange={(e)=>{
          setnewProduct({...newProduct, description:e.target.value})
              }} id="iptMessage" className="form-control mb-3" placeholder="Digite uma descrição"></textarea>
    </div>
    <br/>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">R$</span>
      </div>
      <input type="text" onChange={(e)=>{
          setnewProduct({...newProduct, value:e.target.value})
        }} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
    </div>
    <br/><br/>

        <h3>Selecione a categoria:</h3>
        <br/>
        <div className='input-buttons'>
          <select className="select-category" onChange={(e)=>{setnewProduct({...newProduct, category:e.target.value})}}>
          {empresa.categorias.map((list)=>{
            return(
              <>
              <option value={list}>{list}</option>
              </>
            )})}          
          </select>

        <button onClick={(e)=>{
          console.log(newProduct.image)
          Api.post(`https://tamarintec.herokuapp.com/set-produto`, {
           empresa:empresa._id,
           product:newProduct.product, 
           description:newProduct.description, 
           category:newProduct.category, 
           value:newProduct.value,
           image:"rafael" 
           })
              .then((res)=>{
                console.log(res.data)
              })
              .catch((err)=>{
                console.log(err)
                
              })
          }} id="insert-button" className="btn btn-success">INSERIR PRODUTO</button>
        </div>
        </div>

        <div className='col' id="insert-category">
        <div>
          <h4>INSIRA UMA CATEGORIA SE NECESSÁRIO</h4>
            <br/>
            <div class="input-group-prepend">
            </div>
            <input type="text" onChange={(e)=>{
              setCategory(e.target.value)
              }} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            <br/>
            <button className='btn btn-success' onClick={()=>{
                console.log(category)
                Api.post(`https://tamarintec.herokuapp.com/set-categoria`, {empresa:empresa._id, category:category})
                .then((res)=>{
                  console.log(res.data)
                })
                .catch((err)=>{
                  console.log(err)
                })
            }}>INSERIR CATEGORIA</button>
              </div>
        <div>
            <h4 className='category-delete'>Suas Categorias:</h4>
                  <table className="table">
                    <tbody>
                  {empresa == undefined? '':
                    empresa.categorias.map((list, key)=>{
                      return(
                        <>
                        <tr>
                        <th scope="row">{list._id}</th>
                        <td>{list}</td>
                        <td><button 
                        className='btn btn-danger'
                        onClick={()=>{
                          Api.post(`https://tamarintec.herokuapp.com/delete-categoria`, {
                          empresa:empresa._id,
                          category:list
                        })
                        .then((res)=>{
                          console.log(res.data)
                        })
                        .catch((err)=>{
                          console.log(err)
                        })                        
                        }}>DELETAR</button></td>
                        </tr>      
                        </>)
                    })}
            </tbody>
          </table>
        </div>
        </div>

    </div>
  )
}

export default Cardapio