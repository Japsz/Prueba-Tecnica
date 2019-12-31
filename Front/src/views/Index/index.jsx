import React from 'react';
import NavBar from '../../components/NavBar'
import {Col, Container, Jumbotron, Row} from "reactstrap";
import {Switch, Route} from "react-router-dom";

import Episode from '../Episode'
import Character from '../Character'
import Comentarios from "../../components/Comentario";

const Index = () => {
  return (
    <>
     <NavBar/>
     <Switch>
       <Route exact path={'/characters'} component={Character}/>
       <Route exact path={'/episodes'} component={Episode}/>
       <Route exact path={'/characters/:id'} render={(props) => { return <Comentarios tipo={'character'} {...props}/>}}/>
       <Route exact path={'/episodes/:id'} render={(props) => { return <Comentarios tipo={'episode'} {...props}/>}}/>
       <Route exact path={'/'} render={() => (
         <Container>
           <Row className='my-4'>
             <Col lg={{size: 8, offset: 2}} md={{size: 10, offset: 1}} xs={12} sm={{size: 10, offset: 1}}>
               <Jumbotron>
                 <h1 className='display-3'>La App de Rick and Morty</h1>
                 <p className='lead'>Para los Ricks menos Mortys</p>
               </Jumbotron>
             </Col>
           </Row>
         </Container>
       )}/>
     </Switch>
    </>
  );
};

export default Index;