var React = require('react');

var Cell = React.createClass({
  cellClicked: function(e){
    console.log(e);
  },
  render: function(){
    var alive = !!this.props.alive;
    return (
      <span className='grid-cell' onClick={this.cellClicked}></span>
    )
  }
});

module.exports = Cell;
