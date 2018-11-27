import React, {Component} from 'react';
import SideBar from './sidebarComponent';
import MainMenu from './mainmenuComponent';
import {withRouter} from 'react-router-dom';

class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:props.location.state.detail,
        }
    }
    render() {
        return (
            <div>
                <SideBar data_user={this.state.data}/>
                <MainMenu/>
            </div>
        )
    }
}

export default withRouter(Parent);