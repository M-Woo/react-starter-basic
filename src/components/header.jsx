const React = require('react');

class Header extends React.Component {
  render() {
    if (!this.props.name) {
      return null;
    }
    return <h1>{this.props.name}</h1>;
  }
}

Header.propTypes = { name: React.propTypes.string };

module.exports = Header;
