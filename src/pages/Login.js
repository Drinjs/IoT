import { useState, Component } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import actions from '../store/actions'
import { useAuth } from './components/Auth'

const mapStateToProps = (state)=> {
  return { 
    user: state.user
  }
}

const mapDispatchToProps = (dispatch)=> {
  return { 
    login: dispatch(actions.increase())
  }
}

class Login extends Component {
  handleSubmit(event) {
    event.preventDefault();
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
    let from = location.state?.from?.pathname || "/";
    // let formData = new FormData(event.currentTarget);
    // let username = formData.get("username");

    // auth.signin(username, () => {
    //   // Send them back to the page they tried to visit when they were
    //   // redirected to the login page. Use { replace: true } so we don't create
    //   // another entry in the history stack for the login page.  This means that
    //   // when they get to the protected page and click the back button, they
    //   // won't end up back on the login page, which is also really nice for the
    //   // user experience.
    //   navigate(from, { replace: true });
    // });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </div> 
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
