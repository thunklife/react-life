var range = require('lodash.range');

module.exports = function conway(height, width){

  var cells = range(height).map(function(row){
      return range(width).map(function(){
        return false;
      });
    });
  return {
    firstGen: function(){
      return cells;
    },
    toggleCell: function(x,y){
      cells[x][y] = !cells[x][y];
      return cells;
    },
    nextGen: function(){
     return cells = cells.map(function(row, i){
        return row.map(function(cell,j){
         return isAlive(cell,i,j);
        });
      });
    }
  };

  function isAlive(cell,x,y){
    var neighbors = getNeighbors(x,y);
    if(cell){
     if(neighbors < 2) return false;
     if(neighbors == 2 || neighbors == 3) return true;
     if(neighbors > 3) return false;
    }

    return neighbors == 3;
  }

  function getNeighbors(x,y){
    var offsets = filteredxprod(something,[-1,0,1],[-1,0,1]);

    var ns = offsets.reduce(function(a,o){
      var newX = x + o[0],
          newY = y + o[1];
      if((newX < 0 || newY < 0) || (newX > cells[0].length-1 || newY > cells[1].length-1)) return a;
      a.push([newX,newY]);
      return a;
    }, []);

    return ns.reduce(function(a,n){
      return (cells[n[0]][n[1]]) ? ++a : a;
    },0);
  }

  function filteredxprod(f, xs,ys){
    if(!xs.length || !ys.length) return [];
    var x = xs.shift();
    return pair(x, ys).concat(filteredxprod(f, xs, ys));

    function pair(x, ys){
      if(!ys.length) return [];
      ys = [].slice.call(ys);
      var y = ys.shift();
      return f(x,y) ? ([[x, y]].concat(pair(x, ys))) : pair(x,ys);
    }
  }

  function something(x,y){
      return x || y;
  }

};
