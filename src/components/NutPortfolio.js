import React, {Component} from 'react';
import '../styles/NutPortfolio.css'
import ProfileBox from './ProfileBox'
import profile1 from '../img/profile1.jpg'
import profile2 from '../img/profile2.jpg'
import profile3 from '../img/profile3.jpeg'

class NutPortfolio extends React.Component {
  render() {
    return (<div className="container">
      <div className="profile-contianer">
        <h3>Nuestros Especialistas en Nutrición</h3>
        <div className="col-md-12">
          <div className="row profile-row">
            <ProfileBox name="Ariana Grande" profession="Maestra en Nutrición humana" image={profile1}/>
            <ProfileBox name="Daniel Radcliff" profession="Licenciado en ciencias Nutricionales" image={profile2}/>
            <ProfileBox name="Eva Green" profession="Doctora en dietologia" image={profile3}/>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default NutPortfolio;
