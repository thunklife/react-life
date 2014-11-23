var React = require('react');

var Cell = React.createClass({
  getInitialState: function(){
    return {
      alive: false 
    };
  },
  componentWillMount: function(){
    this.setState({alive: this.props.alive});
  },
  cellClicked: function(e){
   this.setState({alive: !this.state.alive}); 
  },
  render: function(){
    var className = this.state.alive ? 'alive' : '';
    return (
      <span className={className + ' grid-cell'} onClick={this.cellClicked}></span>
    )
  }
});

module.exports = Cell;
