const textoTarefa = document.querySelector('#texto-tarefa'); // Input
const criarTarefa = document.querySelector('#criar-tarefa'); // Botão
const listaTarefas = document.querySelector('#lista-tarefas'); // ol

criarTarefa.addEventListener('click', function () {
  let conteudo = textoTarefa.value;
  let listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.appendChild(document.createTextNode(conteudo));
  listaTarefas.appendChild(listItem);
  document.getElementById('texto-tarefa').value = '';
  
  const itemLista = document.querySelectorAll('li');
  for (index = 0; index < itemLista.length; index += 1){
    itemLista[index].addEventListener('click', function () {
      console.log('teste');
      listItem.className = 'selected';
    });
  }
});
// Source: https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript

