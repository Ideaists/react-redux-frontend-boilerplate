import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class TermsAndConditionsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="terms-and-conditions">
          <p>I'm the Terms and Conditions Info Component inside the Terms and Conditions Container</p>
          <p>HTML for this Page - src/components/terms-and-conditions-info/index.js</p>
          <p>CSS for this Page - src/components/terms-and-conditions-info/style.css</p>
      </div>
    );
  }
}

TermsAndConditionsInfo.propTypes = {
  
  /*
  name: PropTypes.string.isRequired,
  */
};

const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(TermsAndConditionsInfo)