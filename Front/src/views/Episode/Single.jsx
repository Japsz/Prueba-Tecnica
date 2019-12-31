import React from 'react';
import {Card, CardBody, CardFooter, CardSubtitle, CardTitle} from "reactstrap";
import './Single.css'
import {Button} from "reactstrap";

const Single = props => {

  const {obj} = props

  return (
    <Card className='m-2'>
      <CardBody>
      <CardTitle><strong>{obj.episode}</strong> - {obj.name}</CardTitle>
      <CardSubtitle>Emisión: {obj.air_date}</CardSubtitle>
    </CardBody>
      <CardFooter>
        <div className="float-right favorites">
          <Button color={'primary'} href={`/episodes/${obj.id}`}>Ver Comentarios</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Single;