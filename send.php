<!DOCTYPE html>
<html>
<head>
	
</head>
<body>

	<?php

	  $nome     = $_POST['nome'];
	  $cidade   = $_POST['cidade'];
	  $telefone = $_POST['telefone'];
	  $email    = $_POST['email'];
	  $msg      = $_POST['msg'];
	  $email_destino = "hemmoveis@gmail.com"; 

	  $html ="<html>
	            <body>
	              <h3>Contato enviado pelo cliente " . $nome . "</h3>
	               <p>
	                  Cidade : " . $cidade . "<br>
	                  Telefone : " .$telefone . "<br>
	                  E-mail : " . $email . "<br>
	                  Mensagem : " . $msg . "
	               </p>
	            </body>
	          </html>";

	    $headers = "Content-type: text/html; charset=iso-8859-1\r\n";      

	    if (!empty($nome)){
		    if (mail( $email_destino, "Contato do cliente : " . $nome, $html, $headers)){
	                
			}else{
		    	echo "Mensagem não enviada";
		    }
	    }
    ?>

</body>
   
</html>
