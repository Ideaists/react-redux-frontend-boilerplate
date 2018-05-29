import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class HomeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="home">
          <p>I'm the Home Info Component inside the Home Container</p>
          <p>HTML for this Page - src/components/home-info/index.js</p>
          <p>CSS for this Page - src/components/home-info/style.css</p>
      </div>
    );
  }
}

HomeInfo.propTypes = {
  
  /*
  name: PropTypes.string.isRequired,
  */
};


const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(HomeInfo)