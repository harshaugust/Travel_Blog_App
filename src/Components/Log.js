import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Log.css'
import {Travel} from './Travel'

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
      ))}
    </div>
  );
}

export default Log;