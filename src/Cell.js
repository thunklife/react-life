var React = require('react');

var Cell = React.createClass({
  cellClicked: function(e){
    var x = this.props.x;
    var y = this.props.y;
    this.props.click(x,y);
   
  },
  render: function(){
    var className = this.props.alive ? 'alive' : '';
    return (
      <span className={className + ' grid-cell'} onClick={this.cellClicked}></span>
    )
  }
});

module.exports = Cell;
