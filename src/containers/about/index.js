import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import AboutInfo from '../../components/about-info'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="about">
          <h1>Welcome to the About Page !</h1>
          <p>I'm the About Container</p>
          <p>HTML for this Container - src/containers/about/index.js</p>
          <p>CSS for this Container - src/containers/about/style.css</p>
          <AboutInfo />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(About)