import React, {Component} from 'react';
import '../styles/NutPortfolio.css';
import ProfileBox from './ProfileBox';
import profile1 from '../img/coach1.jpg';
import profile2 from '../img/coach2.jpg';
import profile3 from '../img/coach3.jpg';

class CoachPortfolio extends React.Component {
  render() {
    return (<div className="container">
      <div className="profile-contianer">
        <h3>Nuestros Fitness Coach</h3>
        <div className="col-md-12">
          <div className="row profile-row">
            <ProfileBox name="Chris Evans" profession="Licenciado en entramiento deportivo" image={profile1}/>
            <ProfileBox name="Jason Momoa" profession="Tricampeon de Nado" image={profile2}/>
            <ProfileBox name="Connor McGregor" profession="MMA champion" image={profile3}/>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default CoachPortfolio;
