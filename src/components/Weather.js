import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city}
                {this.props.country}
                {this.props.temperature}
                {this.props.humidity}
                {this.props.description}
                {this.props.error}
            </div>
        );
    }
}

export default Weather;