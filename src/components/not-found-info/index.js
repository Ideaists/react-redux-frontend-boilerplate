import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class NotFoundInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="not-found">
          <p>I'm the Not Found Info Component inside the Not Found Container</p>
          <p>HTML for this Page - src/components/not-found-info/index.js</p>
          <p>CSS for this Page - src/components/not-found-info/style.css</p>
      </div>
    );
  }
}

NotFoundInfo.propTypes = {
  
  /*
  name: PropTypes.string.isRequired,
  */
};

const mapStateToProps = state => {
  return {
    //Props
  }
}

export default connect(mapStateToProps)(NotFoundInfo)