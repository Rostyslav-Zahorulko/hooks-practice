import { useState, useEffect, useRef } from 'react';
import s from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Это интервал каждые 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Этот метод вызывается перед размонтированием компонента');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  console.log(intervalId);

  return (
    <div className={s.container}>
      <p className={s.clockface}>Current time: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
}

// _________________________________________________________________________________

// import { Component } from 'react';
// import s from './Clock.module.css';

// class OldClock extends Component {
//   constructor() {
//     super();

//     this.state = {
//       time: new Date(),
//     };

//     console.log('constructor');
//   }

//   intervalId = null;

//   componentDidMount() {
//     console.log('componentDidMount');

//     this.intervalId = setInterval(() => {
//       //   console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//     // console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     console.log('render');

//     return (
//       <div className={s.container}>
//         <p className={s.clockface}>
//           Current time: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Stop
//         </button>
//       </div>
//     );
//   }
// }

// export default OldClock;
