var React = require('react');
var Grid = require('./Grid');
var conway = require('./conway');
var game, interval;

var Life = React.createClass({
  componentWillMount: function(){
    game = conway(this.props.height, this.props.width);
    this.setState({cells: game.firstGen()});
  },
  cellClick: function(x,y){
    this.setState({cells: game.toggleCell(x,y)});
  },
  run: function(){
    interval = setInterval(function(){
    this.setState({cells: game.nextGen()});
    }.bind(this), 50);
  },
  pause: function(){
    clearInterval(interval);
  },
  render: function(){
    return(
      <div>
        <Grid gridData={this.state.cells} cellClick={this.cellClick} />
        <button onClick={this.run}>Run</button>
        <button onClick={this.pause}>Pause</button>
      </div>
    )
  }
});

module.exports = Life;
