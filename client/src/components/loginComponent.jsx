import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Alert } from 'reactstrap';
import axios from 'axios';
import '../styles/loginComponentStyle.css';
import { toast } from 'react-toastify';

class Login extends Component {
    state = {
        username:'',
        password:'',
        form:true,
        data:[],
        pesan:'',
    }

    _onChangeUsername = (e) => this.setState({username:e.target.value});
    _onChangePassword = (e) => this.setState({password:e.target.value});

    _loggingIn = (e) => {
        e.preventDefault();
        let {username,password} = this.state;
        if(username.length > 0 && password.length >0) {
            axios.post('/login_user',{
                username,
                password
            })
            .then(response=>{
                console.log(response.data.detail.length)
                if(response.data.detail.length > 0) {
                    this.props.changeLogStatus(true);
                    this.props.history.push({pathname:'/',state:{detail:response.data.detail[0]}});
                } else {
                    this.setState({form:false,pesan:'wah, username/passwordnya salah ferguso'})
                }
            })
            .catch(err=>console.log(`terjadi kesalahan ${err}`));
        } else {
            toast('Form tidak boleh kosong ferguso',{position:toast.POSITION.BOTTOM_CENTER});
        }
    }
    render() {
        const {data} = this.state;
        return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                    <form className="login100-form validate-form flex-sb flex-w" onSubmit={this._loggingIn}> 
                        <span className="login100-form-title p-b-32">
                            Admin Login
                        </span>
                        <span className="txt1 p-b-11">
                            Username
                        </span>
                        <div className="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
                            <input className="input100" type="text" name="username" onChange={this._onChangeUsername}/>
                            <span className="focus-input100"></span>
                        </div>
                        <span className="txt1 p-b-11">
                            Password
                        </span>
                        <div className="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
                            
                            <input className="input100" type="password" name="pass" onChange={this._onChangePassword}/>
                            <span className="focus-input100"></span>
                        </div>	
                        <div className="flex-sb-m w-full p-b-48">
                            <div>
                                <a href="#" className="txt3">
                                    Forgot Password?
                                </a>
                            </div>
                            <div>
                            {this.state.form ? (<span></span>) : (
                                                              <Alert color="danger" className="alert">{this.state.pesan}
                                                              </Alert>)}
                            </div>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="dropDownSelect1"></div>
		</div>
        )
    }
}

export default withRouter(Login);