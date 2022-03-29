import React , {Component}  from'react'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            counter : 0,
            intervall : null
        }
    }
    componentDidMount(){
        this.setState({
            intervall : setInterval(()=>{
                this.setState({
                    counter : this.state.counter +1
                })
            },1000)
        })
    }
    componentWillUnmount(){
        clearInterval(this.state.intervall)
    }
  render () {
      const {fullName , adress, profession , src}=this.props
      return(
          <div>
              <h1> { this.state.counter}</h1>
              <h1> {fullName}</h1>
              <h1> {adress} </h1>
              <h1> { profession} </h1>
              <img src={src} alt="jakson" width="500px"/>
            
          </div>
      )
  }
}