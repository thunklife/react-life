var React = require('react');
var Cell = require('./Cell');

var Grid  = React.createClass({
  render: function(){
    var click = this.props.cellClick;
    var grid = this.props.gridData.map(function(row, x){
      var cells = row.map(function(alive, y){
        return (
          <Cell alive={alive} x={x} y={y} click={click}/>
        );
      });
      return (
        <div className='grid-row'>
          {cells}
        </div>
      );
    });

    return (
      <div className='grid'>
      {grid}
      </div>
    );
  }
});

module.exports = Grid;
