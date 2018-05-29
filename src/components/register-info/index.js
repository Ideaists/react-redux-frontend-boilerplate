import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class RegisterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="register">
          <p>I'm the Register Info Component inside the Register Container</p>
          <p>HTML for this Page - src/components/register-info/index.js</p>
          <p>CSS for this Page - src/components/register-info/style.css</p>
      </div>
    );
  }
}

RegisterInfo.propTypes = {
  
  /*
  name: PropTypes.string.isRequired,
  */
};

const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(RegisterInfo)