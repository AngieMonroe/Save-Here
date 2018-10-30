import React, { Component } from 'react';


class Geolocalizacion extends Component {  
    constructor(props) {
      super(props);
      this.state = {
        url: 'https://geocoder.api.here.com/6.2/geocode.json'
            + '?app_id=' + this.props.app_id
            + '&app_code=' + this.props.app_code
            + '&searchtext=425+W+Randolph+Chicago',
        data: null
      }
      console.log(this.state.url)

    }
    componentDidMount(){
        fetch(this.state.url)
        .then(res => res)
        .then(data => this.setState = {
            data
        })
    }
    
    render() {
        console.log(this.state.data)

      return (
        <div>
        
        </div> )
    }
  }
export default Geolocalizacion;