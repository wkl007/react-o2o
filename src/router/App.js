import React, {Component} from 'react';
import HomeServer from '../api/home'

class App extends Component {

  componentDidMount() {
     HomeServer.getAdData().then(res => {
      /* console.log(res);*/
     }).catch(err => {
       console.log(err);
     })
  }

  render() {
    return (
      <div className="App">
        22222
      </div>
    );
  }
}

export default App;
