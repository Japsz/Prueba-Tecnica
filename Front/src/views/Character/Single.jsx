import React from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import './Single.css'

const Single = props => {
  const {obj} = props

  return (
    <Card className='m-2'>
      <CardImg variant={'top'} src={obj.image}/>
      <CardBody>
        <CardTitle><strong>{obj.name}</strong> <small>{obj.gender}</small></CardTitle>
        <CardSubtitle>{obj.species} - {obj.status}</CardSubtitle>
      </CardBody>
      <CardFooter>
        <Button color={'primary'} className='float-right' href={`/characters/${obj.id}`}>Ver Comentarios</Button>
      </CardFooter>
    </Card>
  );
};


export default Single;