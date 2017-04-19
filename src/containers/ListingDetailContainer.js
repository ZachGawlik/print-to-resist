import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/listingDetailActions';
import ListingDetail from '../components/ListingDetail';

class ListingDetailContainer extends React.Component {
  static propTypes = {
    addPrinting: PropTypes.func.isRequired,
    getListing: PropTypes.func.isRequired,
    listing: PropTypes.object,
    match: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      copies: 0,
      isPrintInputOpen: false
    };
  }

  componentWillMount() {
    if (!this.props.listing) {
      this.props.getListing(this.props.match.params.listingId);
    }
  }

  handleCopiesChange = (event) => {
    this.setState({ copies: event.target.value });
  }

  handlePrinting = () => {
    const { copies } = this.state;
    this.props.addPrinting(
      this.props.listing.listingId,
      { copies }
    );
  }

  openPrintInput = () => {
    this.setState({ isPrintInputOpen: true });
  }

  render() {
    const { listing } = this.props;
    return listing && (
      <ListingDetail
        isPrintInputOpen={this.state.isPrintInputOpen}
        listing={listing}
        onCopiesChange={this.handleCopiesChange}
        onPrintingSubmit={this.handlePrinting}
        openPrintInput={this.openPrintInput}
      />
    );
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
