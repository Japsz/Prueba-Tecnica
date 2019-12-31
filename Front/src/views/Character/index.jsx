import React, {useEffect} from 'react';
import {Container, Row, Col, Button} from "reactstrap";
import {connect} from "react-redux";
import {getCharactersAction} from "../../store/characters/actions";
import Character from "./Single";

const Index = props => {

  const {characters, loading, errored, getCharacters} = props

  useEffect(() => {
    getCharacters('/api/character')
  }, [getCharacters])

  const handlerClick = ({target: {value}}) => {
    props.getCharacters(value)
  }
  return (
    <Container>
      <Row>
        <h1 className='display-1'>
          Personajes
        </h1>
      </Row>
      {
        loading ?
          <Row>
            <Col md={12}>
              <div className='loader'>Cargando...</div>
            </Col>
          </Row>
          : (
            errored ?
              <Row>
                <Col md={12}>
                  <div className='m-auto'>Hubo un error al cargar </div>
                </Col>
              </Row>
              :
              <>
                <Row>
                {
                  characters.results.map((item) => {
                    return(
                      <Col md={4} key={item.id}>
                        <Character obj={item}/>
                      </Col>
                    )
                  })
                }
                </Row>
                <Row>
                  <Col md={4}>
                    {characters.info.prev !== '' ? <Button type='button' variant={'primary'} className='float-right' value={characters.info.prev} onClick={handlerClick}>Anterior</Button> : null}
                  </Col>
                  <Col md={{span: 4, offset: 4}}>
                    {characters.info.next !== '' ? <Button type='button' variant={'primary'} value={characters.info.next} onClick={handlerClick}>Siguiente</Button> : null}
                  </Col>
                </Row>

              </>
          )
      }
    </Container>
  );
};

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: state.characters.charactersLoading,
  errored: state.characters.charactersError
})

const mapDispatchToProps = dispatch => ({
  getCharacters: payload => dispatch(getCharactersAction(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Index);