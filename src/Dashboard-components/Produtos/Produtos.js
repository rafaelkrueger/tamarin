import React, { useEffect, useState } from 'react'
import './Produtos.css'
import Api from '../../Api'
import FileBase64 from 'react-file-base64'

function Produtos({empresa}) {

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
    <div className='col' id="insert-col">
      <h2>INSIRA UM PRODUTO</h2>
      <img src={newProduct.image == ""?'':newProduct.image} style={{width:"20%", height:"5%",marginBottom:"10%", borderRadius:10}} />
      <br/>
      <div class="input-group mb-3">
          <input name="testImage" onChange={async (e)=>{
            const fileReader = new FileReader()
            const file = e.target.files[0]
            const base64 = await convertBase64(file)
            setnewProduct({...newProduct, image:base64})    
            console.log(newProduct.image)               
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
          <option value="">Categoria</option>
          {empresa == undefined?'':empresa.categorias.map((list)=>{
            return(
              <>
              <option value={list}>{list}</option>
              </>
            )})}          
          </select>
        <button onClick={(e)=>{
          console.log(newProduct)
          Api.post(`https://tamarintec.herokuapp.com/set-produto`, {
           empresa:empresa._id,
           product:newProduct.product, 
           description:newProduct.description, 
           category:newProduct.category, 
           value:newProduct.value,
           image:newProduct.image
           })
              .then((res)=>{
                console.log(res.data)
              })
              .catch((err)=>{
                console.log(err.message)
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
                  <table className="table table-secondary" id="category-table">
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
        <div>

<h2 style={{marginTop:"10%",textAlign:"center", borderBottom:"0.5px black solid", marginInline:"20%", paddingBottom:"0.5%"}}>{empresa == undefined?'':empresa.name} - esses são seus produtos!</h2>
    <div className="row" style={{marginBottom:"10%", marginTop:"10%", width:"100%",}}>    
    {empresa == undefined || empresa.produto.length == 0?<div><h3 style={{textAlign:"center", color:"rgba(0,0,0,0.4)"}}>Insira um Produto para começarmos!</h3></div>:empresa.categorias.map((val)=>{
      return(
        <table class="table table-dark" id="table-users" style={{marginBottom:"10%"}}>
        <thead class="thead-dark">
          <tr>
          <th className='row-table' scope="col">Produto</th>
          <th className='row-table' scope="col">Categoria</th>
          <th className='row-table' scope="col">Valor</th>
          <th className='row-table' scope="col">DELETAR</th>
          </tr>
      </thead>
      <tbody>
        <>
        {empresa.produto.filter((list)=>{
          return list.category.includes(val)
        }).map((list, key)=>{
          return(
            <>
            <tr>
        <td>{list.product}</td>
        <td>{list.category}</td>
        <td>{list.value}</td>
        <td>
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
        </td>
        </tr>

            </>
          )
        })} 
        </>           
      </tbody>
      </table>
        )
      })}
  </div>
  </div>

    </div>
  )
}

export default Produtos