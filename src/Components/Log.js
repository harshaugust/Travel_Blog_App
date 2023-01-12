import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Log.css'
import {Travel} from './Travel'

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
      ))}
    </div>
  );
}

export default Log;

/*

*/    