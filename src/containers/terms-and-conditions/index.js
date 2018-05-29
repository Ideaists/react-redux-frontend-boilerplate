import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import TermsAndConditionsInfo from '../../components/terms-and-conditions-info'

class TermsAndConditions extends React.Component {  
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="terms-and-conditions">
          <h1>Welcome to the Terms and Conditions Page !</h1>
          <p>I'm the Terms and Conditions Container</p>
          <p>HTML for this Container - src/containers/terms-and-conditions/index.js</p>
          <p>CSS for this Container - src/containers/terms-and-conditions/style.css</p>
          <TermsAndConditionsInfo />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(TermsAndConditions)