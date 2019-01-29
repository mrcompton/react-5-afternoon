import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCredit } from './../../ducks/reducer';

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={() => this.props.updateCredit('Excellent')}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={() => this.props.updateCredit('Good')}>Good</button></Link>
                        <Link to="/wEight"><button onClick={() => this.props.updateCredit('Fair')}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={() => this.props.updateCredit('Poor')}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return{credit: reduxState.credit}
}

const mapDispatch = {updateCredit}

export default connect(mapStateToProps, mapDispatch)(WizardSeven);