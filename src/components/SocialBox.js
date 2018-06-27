import React, {Component} from 'react';
import '../styles/SocialBox.css'
import { SocialIcon } from 'react-social-icons';

class SocialBox extends React.Component{
  render(){
    return(
        <div className="col-md-12 no-padding">
          <div className="row">
            <div className="social-box">
              <h5>Follow us on:</h5>
                <SocialIcon className="social-icon" network="facebook" url="http://jaketrent.com" />
                <SocialIcon className="social-icon" network="twitter" url="http://jaketrent.com" />
                <SocialIcon className="social-icon" network="instagram" url="http://jaketrent.com" />
            </div>
          </div>
        </div>
    );
  }
}

export default SocialBox;
