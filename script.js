class Move {
  constructor(move, title){
    this.move = move;
    this.title = title;
    this.children = [];
  }

  addChild(child){
    this.children.push(child);
  }
}

$(function(){
  $('.sidenav').sidenav();
  var board1 = ChessBoard('board1',
  {position: 'start',
  draggable: true
  });
  board1.move('e2-e4', 'c7-c5');

});
