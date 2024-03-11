import React, { Component } from 'react';
import '../SummerSale.css'; 
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
    return (
      <div className='bg'>
<div className="pannar pannar-2 text-bg-success p-5  ">
                <div className="textOne ">
                    <span className='fs-6'>20% OFF</span>
                    <h1 className='display-2 fw-bold '>HAPP <br /> HOURS</h1>
                    <span className='fs-6'>15 New To 7 Dec</span>
                </div>

                <img className='w-50 p-3 d-none d-sm-block img-fluid img-headPhone' src="/images/wirliss.png" alt="headPhone" />

                <div className="textTwo ">
                    <span className='fs-6'>Beats Solo Air</span>
                    <h1 className='display-5 fw-bold'>Summer Sale</h1>
                    <p className='fs-6'>Company that’s grown from 270 to 480 employees <br /> in the last 12 months.</p>
                    <button className='btn btn-light rounded-pill px-4'>Shop</button>
                </div>

            </div>
            <div className="cards py-5 d-flex flex-column justify-content-center">
                <h1 className='mx-auto fw-bold'>Recent News</h1>
                <p className='mx-auto '>There are many variations passages</p>
              
            </div>

      </div>
    );
  }
}

export default SummerSale;
