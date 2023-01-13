import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Log.css'
import {Travel} from './Travel'

<<<<<<< HEAD
const Log = (props) =>{  
  return (
    <div className='container'>
      {Travel.map((item)=>(
        <Card className='card' style={{ width: '18rem'}}>
          <Card.Img variant="top" src={item.img}/>
          <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.date}</Card.Text>
          <Card.Text>
          {item.desc}
          </Card.Text>
          </Card.Body>
        </Card>
=======
const Log = (props) =>{
  
  const [data,setData] = useState('')

  const url = 'http://localhost:3000/logs'

  useEffect(()=>{
    fetch(url)
    .then((response)=> 
    {
      if(!response.ok)
      {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json()
    })
    .then((result)=> setData(result))
    .catch((err)=>{
      console.log(err.message)
    })
  },[])

  return (
    <div className='container'>
      {data && data.map(({id,name,img,date,desc})=>(
        <Card className='card' style={{ width: '18rem'}} key={id}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Card.Text>
         {desc}
        </Card.Text>
      </Card.Body>
    </Card>
>>>>>>> c863846e4a8443e3ef4eb296850692d0eab27308
      ))}
    </div>
  );
}

export default Log;