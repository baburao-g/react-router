import React from "react";
import axios from "axios"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      currentAmount: 0
    };
  }
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1,
      currentAmount: this.price
    }));
  }
  async componentDidMount() {
    const x = await axios(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.wazirx.com/api/v2/tickers/shibinr?1:' + Math.random())}`)
      // .then(({ data: { contents } }) => this.setState({ currentAmount: JSON.parse(contents).ticker.buy }));
      .then(({ data: { contents } }) => JSON.parse(contents).ticker.buy);
    this.price = x;
    if (!this.interval) this.tick();
    this.interval = setInterval(() => this.tick(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <table>
          <tr>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
          <tr>
            <td> SHIB </td>
            <td> {this.state.currentAmount}</td>
            <td> {this.state.seconds}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Home;
