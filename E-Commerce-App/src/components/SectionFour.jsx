
import React, { Component } from 'react';
import '../StyleSectionFour.css';
import Cards from './CardsSectionFour';

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
    // حساب الزمن المتبقي
    const calculateTimeLeft = () => {
      const difference = +new Date('2024-12-31') - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    // تحديث العداد 
    this.interval = setInterval(() => {
      this.setState({ ...calculateTimeLeft() });
    }, 1000);
  }
  render() {
    const { days, hours, minutes, seconds } = this.state;
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
            <div className="countdown">
              <span>{days}</span>
              <span>{hours}</span>
              <span>{minutes}</span>
              <span>{seconds}</span>
            </div>
            <button className='btn btn-light rounded-pill px-4'>Shop</button>
          </div>
        </div>
        <div className="cards py-5 d-flex flex-column justify-content-center">
          <h1 className='mx-auto fw-bold'>Recent News</h1>
          <p className='mx-auto '>There are many variations passages</p>
        </div>
        <Cards />
      </div>
    );
  }
}

export default SummerSale;
