import React from 'react'

export default class Container extends React.Component{

    constructor(){
        super()
        this.state={
            city:"Aden",
            cities:["Aden","Sana'a","Taiz"],
            weather:"",
            
        }

    }

    componentDidMount(){
        fetch(`http://api.weatherstack.com/current?access_key=9c5d884fbb53e36a3f2351ef8152fc08&query=${this.state.city}`).then(data=>{
            return data.json()
            
        }).then(result=>{
            console.log(result)
            this.setState({
                weather:result
            })
        })
    }
    render(){
        return(
            <div></div>
        )
    }
}