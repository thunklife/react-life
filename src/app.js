var React = require('react');
var range = require('lodash.range');
var Cell = require('./Cell');

var Life = React.createClass({
  render: function(){
    var grid = range(20).map(function(row){
      return range(20).map(function(){
        return 0;
      });
    }).map(function(row){
      var cells = row.map(function(x,i){
        return (
          <Cell alive={x} />
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

React.render(
  <Life />,
  document.getElementById('main')
);
