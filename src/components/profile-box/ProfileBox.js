import React, {Component} from 'react';

class ProfileBox extends React.Component{
  render(){
    return(
      <div className="col-md-3 profile-box">
        <img src={this.props.image}/>
        <h4>{this.props.name}</h4>
        <p>{this.props.profession}</p>
      </div>
    );
  }
}

export default ProfileBox;
