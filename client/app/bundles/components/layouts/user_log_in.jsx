import React from 'react';
import ReactOnRails from 'react-on-rails';
import axios from 'axios';
import _ from 'lodash';

export default class UserLogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  render() {
    return (
      <div className="regwrap">
        <div className="row">
          <div className="col-md-6 regform">
            <div className="title-widget-bg">
              <div className="title-widget">{I18n.t('login')}</div>
            </div>
            <form role="form" onSubmit={this.handleSubmit.bind(this)}
              encType="multipart/form-data">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email"
                  onChange={this.handleChange.bind(this)} name="email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="password"
                  name="password" onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group">
                <button type='submit' className="btn btn-default btn-red btn-sm">Sign In</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="title-widget-bg">
              <div className="title-widget">Register</div>
            </div>
            <p>
              New User? By creating an account you be able to shop faster, be up to date on an order
            </p>
            <button className="btn btn-default btn-yellow">Register Now</button>
          </div>
        </div>
      </div>
    );
  }

  handleChange(event) {
    let attribute = event.target.name;
    Object.assign(this.state.user, {[attribute]: event.target.value});
    this.setState({
      user: this.state.user
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let user = this.state.user;
    let formData = new FormData();
    for (let key of Object.keys(user)) {
      formData.append('user[' + key + ']', user[key]);
    }

    if (Object.keys(user).length == 0) {
      formData.append('user[key]', null);
    }
    formData.append('authenticity_token', ReactOnRails.authenticityToken());
    axios.post('/users/sign_in.json' ,
      formData)
    .then(response => {
      this.setState({
        user: {},
        changeImage: false,
      });
      window.location.href = '/';
    })
    .catch(error => this.setState({errors: error.response.data.errors}));
  }
}
