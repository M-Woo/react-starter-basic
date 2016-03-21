const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./components/header');

class App extends React.Component {
  render() {
    return <Header name="Josh" />;
  }
}

ReactDOM.render(<App />, document.body);
