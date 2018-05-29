import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class LoginInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="login">
          <p>I'm the Login Info Component inside the Login Container</p>
          <p>HTML for this Page - src/components/login-info/index.js</p>
          <p>CSS for this Page - src/components/login-info/style.css</p>
      </div>
    );
  }
}

LoginInfo.propTypes = {
  
  /*
  name: PropTypes.string.isRequired,
  */
};

const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(LoginInfo)