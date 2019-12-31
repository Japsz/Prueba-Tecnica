import React from 'react';
import { Row, Toast, ToastBody} from "reactstrap";
import {connect} from "react-redux";

const Single = ({obj: {text, profileId}, idLogged}) => {
  return (
    <Toast className={'px-1'}>
      <ToastBody>
        <Row className='m-3'>
          {text}
        </Row>
        {
          parseInt(profileId) === parseInt(idLogged) ?
            <>
              <hr/>
              <Row className='mb-2 mr-1 float-right'>
                Creado por Ti
              </Row>
            </> : null
        }
      </ToastBody>
    </Toast>
  );
};
const mapStateToProps = state => ({
  idLogged: state.user.info.id
})
export default connect(mapStateToProps)(Single);