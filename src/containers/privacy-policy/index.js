import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import PrivacyPolicyInfo from '../../components/privacy-policy-info'

class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="privacy-policy">
          <h1>Welcome to the Privacy Policy Page !</h1>
          <p>I'm the Privacy Policy Container</p>
          <p>HTML for this Container - src/containers/privacy-policy/index.js</p>
          <p>CSS for this Container - src/containers/privacy-policy/style.css</p>
          <PrivacyPolicyInfo />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(PrivacyPolicy)