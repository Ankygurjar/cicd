import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component{
  state ={
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    image: ''
  }

  responseFacebook = (response) => {
    this.setState({
      userId: response.id,
      name: response.name,
      email: response.email,
      image: response.picture.data.url
    })
  }

  render(){
    let fbContent;

    fbContent = (
    <FacebookLogin
    appId="502295267359523"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />

  )

    return(
      <div className="facebook">
        {fbContent}
        <p>{this.state.isLoggedIn}</p>
        <p><b>Id : </b>{this.state.userId}</p>
        <p><b>Name : </b>{this.state.name}</p>
        <p><b>Email : </b>{this.state.email}</p>
        <b>Image : </b><img src={this.state.image} />
      </div>
    )

  }
}
