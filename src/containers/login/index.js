import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import LoginInfo from '../../components/login-info'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="login">
          <h1>Welcome to the Login Page !</h1>
          <p>I'm the Login Container</p>
          <p>HTML for this Container - src/containers/login/index.js</p>
          <p>CSS for this Container - src/containers/login/style.css</p>
          <LoginInfo />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(Login)