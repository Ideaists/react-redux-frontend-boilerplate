import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class AboutInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="about">
          <p>I'm the About Info Component inside the About Container</p>
          <p>HTML for this Page - src/components/about-info/index.js</p>
          <p>CSS for this Page - src/components/about-info/style.css</p>
      </div>
    );
  }
}

AboutInfo.propTypes = {
  
  /*
  name: PropTypes.string.isRequired,
  */
};


const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(AboutInfo)