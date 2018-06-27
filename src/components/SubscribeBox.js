import React, {Component} from 'react';
import '../styles/SubscribeBox.css'

class SubscribeBox extends React.Component {

  render() {
    return (<div className="col-md-12 subscribe-box">
      <h5>Subscribe!</h5>
      <p>You will receive notifications about our articles and promotions.</p>
        <form role="form">
            <div className="form-group">
              <input type="email" className="form-control" id="" placeholder="Enter email"/>
          </div>
              <button type="submit" className="btn btn-success">Subscribirse</button>
        </form>
    </div>);
  }
}

export default SubscribeBox;
