import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import RegisterInfo from '../../components/register-info'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="register">
          <h1>Welcome to the Register Page !</h1>
          <p>I'm the Register Container</p>
          <p>HTML for this Container - src/containers/register/index.js</p>
          <p>CSS for this Container - src/containers/register/style.css</p>
          <RegisterInfo />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(Register)