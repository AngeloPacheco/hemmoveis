

$(function(){

	$(".ttp").tooltip({
		delay:{show:1000, hide:5000}
	});

	$(".ppv").popover({
		trigger: 'hover focus'
	});

	$(".btnjs").button();
})


$(function() {    
      $('a[href*=#]:not([href=#])').not(".carousel-control").click(function() { 
           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) { 
              var target = $(this.hash); 
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); 
              if (target.length) { 
                  $('html,body').animate({ 
                      scrollTop: target.offset().top 
                  }, 1000); 
                  return false; 
              } 
          } 
      }); 
  }); 


/*
$("#contato").click(function(){
  
  if($("input[name='nome']").val() != "") {

      $.ajax({
          dataType:'html',
          url:"send.php",
          type:"POST",
          data:({nome:$("input[name='nome']").val(),
                cidade:$("input[name='cidade']").val(),
                email:$("input[name='email']").val(),
                telefone:$("input[name='telefone']").val(),
                msg:$("textarea[name='msg']").val()}),


        
             
        success:function(data){

          var $wrapper = document.querySelector('.wrapper'),
            HTMLNovo = 'Mensagem enviada com sucesso<br>';
            $wrapper.insertAdjacentHTML('afterbegin', HTMLNovo);             
        }, complete: function(data){}
      
      });
  }
});
*/

$('#contato').submit(function(e) {
    e.preventDefault();
    const nome = $('input[name="nome"]').val();
    const cidade=$("input[name='cidade']").val();
    const email = $('input[name="email"]').val();
    const telefone = $("input[name='telefone']").val();
    const msg = $('textarea[name="msg"]').val();
    $.ajax({
        url: 'send.php', // caminho para o script que vai processar os dados
        type: 'POST',
        data: {nome: nome, cidade: cidade, email: email, telefone: telefone, msg: msg},
        success: function(response) {
          document.getElementById("nome").value = "";
          document.getElementById("cidade").value = "";
          document.getElementById("email").value = "";
          document.getElementById("telefone").value = "";
          document.getElementById("msg").value = "";
        
          $('input[type=submit]').click(function() {
              $(this).attr('disabled', 'disabled');
              $(this).parents('form').submit()
          });

        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
    return false;
});


function limpar(){
    with (document) {
        getElementById("nome").value = "";
        getElementById("cidade").value = "";
        getElementById("email").value = "";
        getElementById("telefone").value = "";
        getElementById("msg").value = "";
    }
}
