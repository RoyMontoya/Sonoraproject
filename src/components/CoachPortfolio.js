import React, {Component} from 'react';
import '../styles/NutPortfolio.css';
import ProfileBox from './ProfileBox';
import data from '../controllers/FirebaseController'

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
    let profilesDiv = [];

    const fill_profiles = this.state.profiles.forEach((profile) =>{
      profilesDiv.push(<ProfileBox name={profile.name} profession={profile.profession} image={profile.image}/>)
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
