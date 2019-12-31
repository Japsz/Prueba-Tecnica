import React, {Suspense} from 'react';
import {Col, Container, Row, Spinner} from "reactstrap";
import Add from './Add'
import All from './All'
import LazyCharacter  from '../../components/Character/Single.jsx'
import LazyEpisode  from '../../components/Episode/Single.jsx'
import {useParams} from 'react-router-dom'

const Comentarios = (props) => {
  const {tipo} = props
  const {id} = useParams()
  return (
    <Container>
      <Row>
        <Col xs={12} sm={{size:10, offset: 1}} md={{size:3, offset:1}} lg={{size:4, offset: 1}}>
          <Suspense fallback={<Spinner color={'primary'}/>}>
            {
              tipo === 'character' ? <LazyCharacter id={id}/> : (tipo === 'episode' ? <LazyEpisode id={id}/>: null)
            }
          </Suspense>
        </Col>
        <Col xs={12} sm={12} md={{size:5}} lg={{size:5}} className='bg-secondary my-2' >
          <Row className='m-1 align-content-center justify-content-center'>
            <Add tipo={tipo} id={id}/>
          </Row>
          <Row className='m-1 align-content-center justify-content-center'>
            <All tipo={tipo} id={id}/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};



export default Comentarios;