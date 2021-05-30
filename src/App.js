import React from "react";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }
    
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    handleSubmit = event => {
      event.preventDefault();
      
      const requiredUserName = 'james';
      const requiredPassword = '4404';
      const failureNotification = document.getElementById('onFailure');

       if(this.state.userName === requiredUserName && this.state.password === requiredPassword) {
        console.log(this.state);
        failureNotification.style.display = "none";       
        this.setState({
          userName: '',
          password: ''
        });
        alert("Thank you for submitting the form")

       } else {  
        
         failureNotification.style.display = "block";
       }    
    };

  render() {
    const { userName, password } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userName">userName</label>
        <input
          name="userName"
          type="text"
          placeholder="Enter your userName"
          value={userName}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
          required
        />
        <p id="onFailure">*Username and password does not much*</p>
        <button type="submit">Login</button>
      </form>
    );
  }

  
}

export default App;