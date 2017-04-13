import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/listingDetailActions';
import ListingDetail from '../components/ListingDetail';

class ListingDetailContainer extends React.Component {
  static propTypes = {
    getListing: PropTypes.func.isRequired,
    listing: PropTypes.object,
    match: PropTypes.object.isRequired,
  };

  componentWillMount() {
    if (!this.props.listing) {
      this.props.getListing(this.props.match.params.listingId);
    }
  }

  render() {
    const { listing } = this.props;
    return listing && <ListingDetail listing={this.props.listing} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  listing: state.listings.entities[ownProps.match.params.listingId] || null,
  status: state.listings.status
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  actionCreators,
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingDetailContainer);
