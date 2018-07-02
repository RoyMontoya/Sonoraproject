import React, {Component} from 'react';
import '../styles/NutPortfolio.css';
import ProfileBox from './ProfileBox';
import profile1 from '../img/profile1.jpg';
import profile2 from '../img/profile2.jpg';
import profile3 from '../img/profile3.jpeg';
import data from '../controllers/FirebaseController';

class NutPortfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    };
  }

  componentWillMount() {
    let self = this;
    data.firestore.collection("nutritionist").get().then(function(querySnapshot) {
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
        <h3>Nuestros Especialistas en Nutrición</h3>
        <div className="col-md-12">
          <div className="row profile-row">
            {profilesDiv}
          </div>
        </div>
      </div>
    </div>);
  }
}

export default NutPortfolio;
