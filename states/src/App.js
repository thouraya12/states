import React , {Component}  from'react'
import Profile from './Component/Profile'
import './Component/Style.css'
import './App.css'
export default class App extends Component{
  constructor(){
    super()
    this.state={
      show:true
    }
  }
  handleShow=()=>{
    this.setState({
      show : !this.state.show
    })
   
  }
  render(){
    let src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KkOJ1tBzpc4UApCajfL8VQ090m7WN7_SQA&usqp=CAU'
    return(
      <div className='App'>
        <button onClick={this.handleShow}> onClick</button>
        {
          this.state.show ? (
            <Profile
fullName="Michael Joseph Jackson"
adress=" American"
profession="signer songwriter, and dancer"
src={src}
          />):null
        }


      </div>
    )
  }

}
