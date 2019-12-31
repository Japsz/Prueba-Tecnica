import React from 'react';
import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import {connect} from "react-redux";
import {getSingleEpisodeAction} from "../../store/episodes/actions";

const Single = props => {
  const {obj , id, getInfo} = props
  React.useEffect(() => {
      getInfo(`/api/episode/${id}`)
  }, [id, getInfo])
  return (
    <Card className='my-2 pl-0'>
      <CardBody>
        <CardTitle><strong>{obj.episode}</strong> - {obj.name}</CardTitle>
        <CardSubtitle>Emisión: {obj.air_date}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = state => ({
  obj: state.episodes.episode,
})
const mapDispatchToProps = dispatch => ({
  getInfo: payload => dispatch(getSingleEpisodeAction(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Single);