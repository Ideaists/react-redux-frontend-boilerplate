import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class PrivacyPolicyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="privacy-policy">
          <p>I'm the Privacy Policy Info Component inside the Privacy Policy Container</p>
          <p>HTML for this Page - src/components/privacy-policy-info/index.js</p>
          <p>CSS for this Page - src/components/privacy-policy-info/style.css</p>
      </div>
    );
  }
}

PrivacyPolicyInfo.propTypes = {
  
  /*
  name: PropTypes.string.isRequired,
  */
};

const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(PrivacyPolicyInfo)