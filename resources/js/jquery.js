$(document).ready(function() {
	var users = [];
	var key = 0;

	$("#name").keyup(function() {
		$("#name2").val($(this).val());
	});

	$("#username").keyup(function() {
		$("#username2").val($(this).val());
	});

	$("#email").keyup(function() {
		$("#email2").val($(this).val());;
	});
	
	$( "#salvar" ).click(function() {
		if(valida_form()){
			$("#box").show();

			var user = {
				nome: $("#name").val(),
				username: $("#username").val(),
				email: $("#email").val()
			}

			users.push(user);

			if(users.length == 1){
				$("#box").append("<hr>");
				$("#box").append("<h1><strong>Usuários</strong></h1>");
			}

			var divUsers = document.getElementById('users');
			var divNewUsers = document.createElement('div');

			divNewUsers.setAttribute('id', 'divNewUsers' + key);
			divUsers.appendChild(divNewUsers);

	    	$('#divNewUsers' + key).append("<strong>Nome</strong>: " + user.nome +  "<br />");
	    	$('#divNewUsers' + key).append("<strong>Username</strong>: "+ user.username +  "<br />");
	    	$('#divNewUsers' + key).append("<strong>Email</strong>: " + user.email +  "<br />");
	    	$('#divNewUsers' + key).append('<input type="button" id=removeUser' + key + ' value="Remover Usuário"><br /><br />');
	    	
			$("#form").trigger("reset");

			key++;

			console.log(users);
		}
	});

	$(document).on('click','#users div', function(){
		var id = $(this).attr("id"); 
		
		users.splice(id,1);

		$(this).remove();

        if(users.length == 0){
        	$("#box").hide();
        	$("#box").empty();
        }
        console.log(users);
	});	
});

function valida_form(){
	if($("#name").val().trim().length == 0){
		$("#name").val("");
		$("#name").focus();

		return false;
	}

	else if($("#username").val().trim().length == 0){
		$("#username").val("");
		$("#username").focus();

		return false;	
	}

	else if($("#email").val().trim().length == 0){
		$("#email").val("");
		$("#email").focus();

		return false;	
	}


	return true;	
}
