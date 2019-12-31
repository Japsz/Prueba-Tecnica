import React, {useState} from 'react';
import {Button, Card, CardBody, Form, FormGroup, Input, InputGroup} from "reactstrap";
import {addCommentAction} from "../../../store/comments/action";
import {connect} from "react-redux";

const Index = (props) => {
  const [form, setForm] = useState({text: '', [`${props.tipo}Id`]: props.id, profileId: props.idLogged})
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addComment(form, props.tipo)
  }
  return (
    <Card className='w-100'>
      <CardBody>
        <Form inline onSubmit={handleSubmit}>
          <FormGroup className='m-auto w-auto'>
            <InputGroup className='w-100'>
              <Input type='textarea' name={'text'} placeholder={'¡Escribe tu comentario!'} value={form.text} onChange={({target: {name, value}}) => {setForm({...form, [name]: value})}}/>
              <Button type={'submit'} color={'primary'} disabled={props.loading} className='p-1'>Enviar</Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
const mapStateToProps = state => ({
  idLogged: state.user.info.id,
  loading: state.comments.addCommentLoading,
  errored: state.comments.addCommentError,
})
const mapDispatchToProps = dispatch => ({
  addComment: (obj, type) => dispatch(addCommentAction(obj, type))
})
export default connect(mapStateToProps, mapDispatchToProps)(Index);