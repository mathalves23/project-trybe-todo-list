const textoTarefa = document.querySelector('#texto-tarefa'); // Input
const criarTarefa = document.querySelector('#criar-tarefa'); // Botão
const listaTarefas = document.querySelector('#lista-tarefas'); // ol

criarTarefa.addEventListener('click', function () {
  let conteudo = textoTarefa.value;
  let listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(conteudo));
  listaTarefas.appendChild(listItem);
});
// Source: https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript

