import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import VehicleForm from '../vehicleForm/VehicleForm';
import RoutingForm from '../map/routingForm';
import './sidebar.css';

export class Sidebar extends Component {
    state = {
            vehicleForm: "off",
            routing: "off"     
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            routing: "on"
        })
    }

    buttonSelect = (event) => {
        console.log("event", event.target);
        this.setState({
            vehicleForm: "off",
            routing: "off",
            [event.target.id]: "on"
        })

   
    }
    render() {
        console.log(this.props);
        return (
            <div id = 'overlayNav' className = {`overlay ${this.props.sidebarOpen ? 'open': 'close'}`}>
                <div >
                    <i className="fas fa-arrow-circle-left" onClick = {this.props.toggleSidebar}></i>
                    </div>
                
                
                <div className = 'overlay-content'>
                    
                    <div >

                        <div className="sidebar-tabs">

                        <p  
                        
                        className={` route-tab ${this.state.routing === `on` ? `selected` : `sidebar-tab`} `}
                        id="routing"
                        
                        onClick={this.buttonSelect}>Route</p>

                        <p className={`${this.state.vehicleForm === `on` ? `selected` : `sidebar-tab`}   `}
                        id="vehicleForm"
                        onClick={this.buttonSelect}>Add a Vehicle</p>

                        </div>


                        

                        
                        <div className={`${this.state.routing}`}>
                        <RoutingForm   
                        onChangeHandler={this.props.onChangeHandler}
                        initMap={this.props.initMap}
                        routeChangeHandler={this.props.routeChangeHandler}
                        start={this.props.start}
                        end={this.props.end}
                        />
                        </div>

                        {localStorage.token ? <div className={`${this.state.vehicleForm}`}>
                        <VehicleForm/>
                        </div> : 
                        <div className={`login-to-add ${this.state.vehicleForm}`}>
                        <NavLink to="/auth" style={{ marginRight: 10 }}>
                        Login or create an account to add information about your vehicle.
                        </NavLink></div>}
                        
                    </div>
                </div>    
                <div id = 'mainsidebar'>
                    {/* <button className = 'openbtn' onClick = {this.props.toggleSidebar}>Options</button> */}
                    {/* // button to bring out sidebar */}
                </div>            
            </div>            
        )        
    }
}

export default Sidebar