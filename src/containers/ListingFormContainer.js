import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListingForm from '../components/ListingForm';
import * as actionCreators from '../actions/listingFormActions';

const mapStateToProps = (state) => ({
  status: state.listingFormStatus
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  actionCreators,
  dispatch
);

const ListingFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingForm);

export default ListingFormContainer;
