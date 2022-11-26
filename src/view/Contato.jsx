import "./css/Contato.css"

const Contato = () => {

  return (
    <body>
    <form name="meu_form">
    
      <h1>Entre em contato</h1>
      <label for="nome">Nome</label>
      <input type="text" id="nomeid" placeholder="João Silva" required="required" name="nome" />
      
      <label for="fone">Fone</label>
      <input type="tel" id="foneid" placeholder="(XX) X XXXX-XXXX" name="fone" />
      
      <label for="email">Email</label>
      <input type="email" id="emailid" placeholder="joaosilva@email.com" name="email" />
      
      <label for="msg">Mensagem</label>
      <textarea placeholder="Deixe sua mensagem"></textarea>
    
      <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
    </form>
    </body>
  );
};

export default Contato;
