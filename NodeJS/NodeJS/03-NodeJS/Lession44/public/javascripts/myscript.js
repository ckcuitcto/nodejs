$(document).ready(function() {
	$(window).load(function(){
    $('#myModal').modal('show');
  });

  $('#myModal').modal({
   	backdrop: 'static', 
   	keyboard: false
  });

  $("#btnAdd").click(function(event) {
		if($.trim($("#txtUser").val()) === "") {
      $("#error_msg").html('<div class="alert alert-danger" role="alert"><a href="#" class="alert-link">Vui lòng nhập Username</a></div>');
		} else {
			$(this).parent().parent().parent().parent().modal('hide');
		}
	});
});

var socket = io.connect("http://localhost:3000");
/*************************  Connected *************************/
var flag_user = false;
socket.on("online",function (data) {
  if (flag_user == false) {
    data.forEach(function (val,key) {
      updateUser(val["name"],false);
    });
    flag_user = true;
  }
});

var flag_message = false;
socket.on("message",function (data) {
  if (flag_message == false) {
    data.forEach(function (val,key) {
      updateMessage (val["name"],val["messages"])
    });
    flag_message = true;
  }
})

/************************* List User *************************/
$("#btnAdd").click(function () {
  var user = $("#txtUser").val();
  if (user != "") {
    socket.emit("join",user);
    updateUser(user,true);
    userChecked (user);
  }
})

socket.on("user_list",function (data) {
  updateUser(data,false);
});

function userChecked (user) {
  $.ajax({
    url: '/session-join/'+user,
    type: 'GET',
    dataType: 'html',
  });
}

function updateUser (user,active) {
    var active;
    var onlined = $("#listUser").attr('onlined');
    if (active == true || onlined == user) {
      active = 'style="background: rgba(112, 107, 117, 0.16);"';
    }

    var xhtml = '<li attr-name-user="'+user+'" class="media" '+active+'>';
    xhtml += '<div class="media-body">';
    xhtml += '<div class="media">';
    xhtml += '<a class="pull-left" href="#">';
    xhtml += '<img class="media-object img-circle" style="max-height:40px;" src="images/user.png" />';
    xhtml += '</a>';
    xhtml += '<div class="media-body" >';
    xhtml += '<h5>'+user+'</h5>';
    xhtml += '</div>';
    xhtml += '</div>';
    xhtml += '</div>';
    xhtml += '</li>';
    $("#listUser").append(xhtml);
}

/*************************  Messages *************************/
$("#btnSend").click(function () {
  if ($("#listUser").attr('onlined') == "") {
    var user = $("#txtUser").val();
  } else {
     var user = $("#listUser").attr('onlined');
  }
  var message = $("#txtMessage").val();
  var data = {user : user , message : message};
  socket.emit("message",data);
  updateMessage(data.user,data.message);
  add_message (message);
});

function add_message (message) {
  $.ajax({
    url: '/insert-message',
    type: 'POST',
    dataType: 'html',
    data: {message: message}
  });
}

socket.on("message_list",function (data) {
  updateMessage(data.user,data.message);
});

function updateMessage (name,message) {
  var xhtml = '<li class="media">';
  xhtml += '<div class="media-body">';
  xhtml += '<div class="media">';
  xhtml += '<a class="pull-left" href="#">';
  xhtml += '<img class="media-object img-circle" src="images/user.png" />';
  xhtml += '</a>';
  xhtml += '<div class="media-body" >'+message+'<br />';
  xhtml += '<small class="text-muted">'+name+'</small>';
  xhtml += '<hr />';
  xhtml += '</div>';
  xhtml += '</div>';
  xhtml += '</div>';
  xhtml += '</li>';
  $("#listMessage").append(xhtml);
}


