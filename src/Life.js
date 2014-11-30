var React = require('react');
var Grid = require('./Grid');
var conway = require('./conway');
var running = false;
var game, interval;

var Life = React.createClass({
  getInitialState: function(){
    return {running: false};
  },
  componentWillMount: function(){
    game = conway(this.props.height, this.props.width);
    this.setState({cells: game.firstGen(true)});
  },
  cellClick: function(x,y){
    if(this.state.running) return;
    this.setState({cells: game.toggleCell(x,y)});
  },
  run: function(){
    if(this.state.running){
      clearInterval(interval)
    }
    if(!this.state.running){
      interval = setInterval(function(){
        this.setState({cells: game.nextGen()});
      }.bind(this), 50);
    }
    this.setState({running: !this.state.running});
  },
  clear: function(){
    this.replaceState({
      cells: game.firstGen(),
      running: false
    });
    clearInterval(interval);
  },
  render: function(){
    var icon = 'play',
        buttonText = 'Play';

    if(this.state.running){
      icon = 'pause';
      buttonText = 'Pause';
    }
    icon += " icon";
    return(
      <div>
        <Grid gridData={this.state.cells} cellClick={this.cellClick} />
        <div className="controls">
          <div className="ui blue button labeled icon" onClick={this.run}>
            <i className={icon}></i>
            {buttonText} 
          </div>
          <div className="ui black button pull-right" onClick={this.clear}>Clear</div>
        </div>
      </div>
    )
  }
});

module.exports = Life;
