import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import NotFoundInfo from '../../components/not-found-info'

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="not-found">
          <h1>404 Page not Found !</h1>
          <p>I'm the Not Found Container</p>
          <p>HTML for this Container - src/containers/not-found/index.js</p>
          <p>CSS for this Container - src/containers/not-found/style.css</p>
          <NotFoundInfo />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(NotFound)