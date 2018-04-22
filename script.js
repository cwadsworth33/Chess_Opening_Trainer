class Opening {
  constructor(fen, title){
    this.fen = fen;
    this.title = title;
    this.children = [];
  }

  addChild(child){
    this.children.push(child);
  }
}

var globals = {
  openings: []
};

$(function(){
  $('.sidenav').sidenav();
  var board1 = ChessBoard('board1',
  {position: 'start',
  draggable: true
  });

  $("#sidenav-my_openings").click(function(){
    initializeMyOpenings();
    $('.sidenav').sidenav('close');
  });

  $("#sidenav-new_openings").click(function(){
    initializeNewOpening();
    $('.sidenav').sidenav('close');
  });

  $("#add-opening").click(function(){
    var name = $("#opening_name").val();
    var opening = new Opening("", name);
    globals.openings.push(opening);
    $("#opening_name").val('');
    initializeMyOpenings();
  });
});


var initializeMyOpenings = function(){
  hideAll();
  $("#board-and-menu").removeClass("hide");
  $("#display-menu-collection").html('<div class="collection-header">' +
    '<h4 id="collection-title">My Openings</h4>' +
  '</div>');
  for(var i=0; i<globals.openings.length; i++){
    var c = $("<a class='collection-item blue-text' href='#'>" + globals.openings[i].title + "</a>");
    $("#display-menu-collection").append(c);
  }
};

var initializeNewOpening = function(){
  hideAll();
  $("#new-opening-form-container").removeClass("hide");
};

var hideAll = function(){
  $("#board-and-menu").addClass("hide");
  $("#new-opening-form-container").addClass("hide");
  $("#home-page").addClass("hide");
}
