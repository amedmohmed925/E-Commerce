import React, { Component } from 'react';
import './SummerSale.css'; 
import CardsSectionThree from './Cards'; 

class SummerSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const now = new Date();
      const end = new Date(now.getFullYear(), 6, 30); 
      const diff = (end - now) / 1000;
      const days = Math.floor(diff / 86400);
      const hours = Math.floor((diff % 86400) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = Math.floor(diff % 60);
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className='bg'>

        <div className="summer-sale-container">
          <div className="left-content">
            <h1>Summer Sale HAPP HOUR</h1>
          </div>
          <div className="middle-content">
            <h2>Special Offer!</h2>
            <img src="./WhatsApp Image 2024-03-10 at 15.56.25_8dca38fd.jpg" alt="Special Offer" className="special-offer-image" />
            <p>Get 50% off on all products</p>
          </div>
          <br></br>
          <div className="right-content">
            <div className="countdown">
              <span>{days}</span>
              <span>{hours}</span>
              <span>{minutes}</span>
              <span>{seconds}</span>
            </div>
            <button>Shop Now</button>
          </div>
        </div>

        <CardsSectionThree /> 
        
      </div>
    );
  }
}

export default SummerSale;
