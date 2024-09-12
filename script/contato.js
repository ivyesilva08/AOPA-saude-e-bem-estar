const form = document.querySelector('form');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validação básica (opcional, mas recomendável)
  if (!nome.value || !sobrenome.value || !email.value || !assunto.value || !mensagem.value) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Aqui você pode usar AJAX para enviar os dados para o servidor
  // Exemplo básico:
  const data = {
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email.value,
    assunto: assunto.value,
    mensagem: mensagem.value
  };

  fetch('seu_servidor.php', { // Substitua 'seu_servidor.php' pelo caminho do seu script
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao enviar a mensagem!');
    }
    return response.json();
  })
  .then(data => {
    console.log('Mensagem enviada com sucesso:', data);
    // Limpe o formulário após o envio
    form.reset();
    // Exiba uma mensagem de sucesso ao usuário
    alert('Mensagem enviada com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao enviar a mensagem:', error);
    // Exiba uma mensagem de erro ao usuário
    alert('Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
  });
});