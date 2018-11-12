import React, { Component } from 'react';
import {validateFormInput} from '../validator';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { SigninRequest } from '../actions';


class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  /**
   * 
   * @returns {void} 
   * @param {any} event
   * @memberof SignupForm
   */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  /**
   * This method validates the input from the state object 
   * and chcecks if its valid and makes an api call to the backend
   * 
   * @param {any} event 
   * @memberof SigninForm
   * @returns {void}
   */
  onSubmit(event) {
    event.preventDefault();
    const { errors, isValid } = validateFormInput(this.state);
    if (isValid) {
      this.setState({ isLoading: true });
      this.props.SigninRequest(this.state)
        .then(() => {
          this.props.history.push('/');
        })
        .catch((err) => {
         console.log(err.response.data)
         console.log(err)
        
        });
    } else {
      console.log(errors)
    }
  }


  render() {
    return (
      <form className="form-signin">
        <img className="mb-4" src="test" alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">Please signin</h1>
          <label htmlFor="inputEmail" className="sr-only">Username</label>
          <input 
            type="email" 
            name="username"
            value={this.state.username}
            id="inputUsername" 
            className="form-control" 
            placeholder="username" 
            required 
            onChange={this.onChange}
            autoFocus
          />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" 
              name="password"
              id="inputPassword" 
              value={this.state.password}
              className="form-control" 
              placeholder="Password" 
              onChange={this.onChange}
              required
            />
              <div className="checkbox mb-3">
                <p>
                  Don't have an account <Link to="/signup">Signup</Link>
                </p>
              </div>
              <button className="btn btn-auth btn-lg btn-primary btn-block" type="submit" onClick={this.onSubmit}>Signin</button>
              {/* <p className="mt-5 mb-3 text-muted">login with  <button className="btn btn-primary" >facebook</button></p> */}
          </form>
    )
  }
}
export default connect (null, {SigninRequest})(withRouter(Signin));