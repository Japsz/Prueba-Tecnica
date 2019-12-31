import React, {useEffect} from 'react';
import {getComments} from "../../../store/comments/action";
import Single from '../Single'
import {Alert, Card, CardBody, CardHeader, Spinner} from "reactstrap";
import {connect} from "react-redux";
const All = (props) => {
  const {comments, loading, errored, id, tipo, getComments} = props

  useEffect(() => {
    getComments(id, tipo)
  },[id, tipo, getComments])
  return (
    <Card className='w-100'>
      <CardHeader>Todos los comentarios ({comments.length})</CardHeader>
      <CardBody>
        {
          loading ?
            <Spinner color={'primary'} className={'mx-auto'}/>
            : (errored ?
              <Alert color={'danger'}>Hubo un error al cargar los comentarios</Alert>
              : (comments.map(item => {
                  return <Single obj={item} key={item.id}/>
                })
              )

            )
        }
      </CardBody>
    </Card>
  );
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
  loading: state.comments.getCommentByIdLoading,
  errored: state.comments.getCommentByIdError,
  success: state.comments.getCommentByIdSuccess,
})

const mapDispatchToProps = dispatch => ({
  getComments: (id, type) => dispatch(getComments(id, type))
})

export default connect(mapStateToProps, mapDispatchToProps)(All);