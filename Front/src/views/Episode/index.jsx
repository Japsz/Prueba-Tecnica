import React, {useEffect} from 'react';
import {Container, Row, Col, Button, Spinner} from "reactstrap";
import {connect} from "react-redux";
import {getEpisodesAction} from "../../store/episodes/actions";
import Episode from "./Single";


const Index = props => {

  const {episodes, loading, errored, getEpisodes} = props

  useEffect(() => {
    getEpisodes('/api/episode')
  }, [getEpisodes])

  const handlerClick = ({target: {value}}) => {
    props.getEpisodes(value)
  }

  return (
    <Container>
      <Row>
        <h1 className='display-1'>
          Episodios:
        </h1>
      </Row>
      {
        loading ?
          <Row>
            <Col  className='mx-auto' >
              <Spinner color={'primary'}/>
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
                    episodes.results.map((item) => {
                      return(
                        <Col md={4}>
                          <Episode key={item.id} obj={item}/>
                        </Col>
                      )
                    })
                  }
                </Row>
                <Row>
                  <Col md={4}>
                    {episodes.info.prev !== '' ? <Button type='button' variant={'primary'} className='float-right' value={episodes.info.prev} onClick={handlerClick}>Anterior</Button> : null}
                  </Col>
                  <Col md={{span: 4, offset: 4}}>
                    {episodes.info.next !== '' ? <Button type='button' variant={'primary'} value={episodes.info.next} onClick={handlerClick}>Siguiente</Button> : null}
                  </Col>
                </Row>
              </>
          )
      }
    </Container>
  );

};

const mapStateToProps = state => ({
  episodes: state.episodes.episodes,
  loading: state.episodes.episodesLoading,
  errored: state.episodes.episodesError
})

const mapDispatchToProps = dispatch => ({
  getEpisodes: payload => dispatch(getEpisodesAction(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Index);