import { Button } from './components/Button';
import { useState,useEffect } from 'react';
import './style.css'
function App() {

  const [v1,setV1]=useState('')
  const [v2,setV2]=useState('')
  const[operador,setOperador] = useState('')
  const[display,setDisplay]=useState('')
  const[intera,setIntera]=useState(0)
  const[result,setResult] = useState('')

  const valores = [0,1,2,3,4,5,6,7,8,9]

  function handleClick(e){
    console.log(intera)
    const info = e.target.value
    if(info==='='){
      if(operador==='+'){
        setResult(parseInt(v1)+parseInt(v2))
      }
      if(operador=="-"){
        setResult(parseInt(v1)-parseInt(v2))
      }
      if(operador=="/"){
        setResult(parseInt(v1)/parseInt(v2))
      }
      if(operador=="*"){
        setResult(parseInt(v1)*parseInt(v2))
      }
      
      const result = document.querySelector('#result')
      result.style.opacity = '1'
    }
    else{
      if(info==='+'){
        setIntera(1)
        setOperador(info)
        let text = display + info
        setDisplay(text)
      }
      else if(info==='-'){
        setIntera(1)
        setOperador(info)
        let text = display + info
        setDisplay(text)
      }
      else if(info==='*'){
        setIntera(1)
        setOperador(info)
        let text = display + info
        setDisplay(text)
      }
      else if(info==='/'){
        setIntera(1)
        setOperador(info)
        let text = display + info
        setDisplay(text)
      }
      else{
        if(intera == 0){
          if(info!=='=' && info!=='+' && info!='-' && info!='/' && info!=='*'){
            let num = v1 + info
            setV1(num)
            let text = display + num
            setDisplay(text)
          }
        }
        else{
          if(info!='=' && info!='+' && info!='-' && info!='/' && info!='*'){
            let num2 = v2 + info
            setV2(num2)
            let text = display + num2
            setDisplay(text)
          }
    
        }
        
      }
  
    }
    }
    
  

  return (
   <div className='container'>
    <div className="display">
      <div className="num1">{v1}</div>
      <div className="operador"> {`${operador}`} </div>
      <div className="num2">{v2}</div>
      <div className="resultado" id='result'>{result}</div>
    </div>
   <div className='tecla_number'>
    {valores.map((valor)=>(
        <Button  onClick={handleClick} valor={valor}/>
    ))}
    <input type="button" value="=" className='btn_igl'onClick={handleClick}/>
   </div>
   <div className="operator">
    <input type="button" value="-" className='btn' onClick={handleClick}/>
    <input type="button" value="*" className='btn' onClick={handleClick}/>
    <input type="button" value="/" className='btn' onClick={handleClick}/>
    <input type="button" value="+" className='btn_plus'onClick={handleClick}/>
   </div>
    

   </div>
  )
}

export default App
