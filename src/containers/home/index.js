import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import HomeInfo from '../../components/home-info'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="home">
          <h1>Welcome to the Home Page !</h1>
          <p>I'm the Home Container</p>
          <p>HTML for this Container - src/containers/home/index.js</p>
          <p>CSS for this Container - src/containers/home/style.css</p>
          <HomeInfo />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(Home)