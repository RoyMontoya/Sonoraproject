import React, {Component} from 'react';
import './style.css';
import ProfileBox from '../profile-box/ProfileBox';
import data from '../../controllers/FirebaseController'

class CoachPortfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    };
  }

  componentWillMount() {
    let self = this;
    data.firestore.collection("coaches").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        self.setState({profiles: [...self.state.profiles, doc.data()]});
      });
    });
  }

  render() {
    let profilesDiv = this.state.profiles.map((profile) =>{
      return (<ProfileBox name={profile.name} profession={profile.profession} image={profile.image}/>)
    });

    return (<div className="container">
      <div className="profile-contianer">
        <h3>Nuestros Fitness Coach</h3>
        <div className="col-md-12">
          <div className="row profile-row">
            {profilesDiv}
          </div>
        </div>
      </div>
    </div>);
  }
}

export default CoachPortfolio;
