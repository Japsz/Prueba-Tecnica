import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import {connect} from "react-redux";
import {getSingleCharacterAction} from "../../store/characters/actions";

const Single = props => {
  const {obj , id, getInfo} = props
  React.useEffect(() => {
      getInfo(`/api/character/${id}`)
  }, [id, getInfo])
  return (
    <Card className='my-2 pl-0'>
      <CardImg variant={'top'} src={obj.image}/>
      <CardBody>
        <CardTitle><strong>{obj.name}</strong> <small>{obj.gender}</small></CardTitle>
        <CardSubtitle>{obj.species} - {obj.status}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = state => ({
  obj: state.characters.character,
})
const mapDispatchToProps = dispatch => ({
  getInfo: payload => dispatch(getSingleCharacterAction(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Single);