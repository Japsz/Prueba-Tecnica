import React, {useState, useEffect} from 'react';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CardFooter,
  Button,
  Alert
} from "reactstrap";

import {connect} from "react-redux";
import {checkLoginAction} from "../../store/user/action";
import {Redirect} from "react-router-dom";
const Login = (props) => {
  const {loading, errored, success, response, getLogin} = props;
  const [form, setForm] = useState({username: '', password: ''});

  const setValue = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
  };
  useEffect(() => {
    localStorage.removeItem('session-token')
  },[])
  const handleLogin = async (e) => {
    e.preventDefault()
    if(form.username !== '' && form.password !== ''){
      getLogin({...form})
    }
  };
  if(success){
    return <Redirect to={'/'}/>
  } else return (
    <Row className='m-5'>
      <Col md={{size: 8, offset:2}} sm={{size: 10, offset:1}} xs={{size: 10, offset: 1}}>
        <Card>
          <CardHeader>Inicia Sesión</CardHeader>
          <Form onSubmit={handleLogin}>
            <CardBody>
              <FormGroup>
                <Label for={'username'}>Usuario:</Label>
                <Input type={'text'} name={'username'} id={'username'} value={form.username} onChange={setValue} required/>
              </FormGroup>
              <FormGroup>
                <Label for={'password'}>Contraseña:</Label>
                <Input type={'password'} name={'password'} id={'password'} value={form.password} onChange={setValue} required/>
              </FormGroup>
              {
                errored ? <Alert color={'danger'}>{response.msg}</Alert> : null
              }
            </CardBody>
            <CardFooter>
              <Button color={'primary'} type={'submit'} disabled={loading}>Entrar</Button>
            </CardFooter>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
const mapStateToProps = state => ({
  loading: state.user.checkLoginLoading,
  success: state.user.checkLoginSuccess,
  errored: state.user.checkLoginError,
  response: state.user.checkLoginResponse,
})

const mapDispatchToProps = dispatch => ({
  getLogin: payload => dispatch(checkLoginAction(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);