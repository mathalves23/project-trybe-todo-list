const inputText = document.querySelector('#texto-tarefa'); // Input
const button = document.querySelector('#criar-tarefa'); // Botão
const listaTarefas = document.querySelector('#lista-tarefas'); // ol

button.addEventListener('click', function () {
  // Adiciona elemento li na ol:
  const array = inputText.value;
  let listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.appendChild(document.createTextNode(array));
  listaTarefas.appendChild(listItem);
  document.getElementById('texto-tarefa').value = '';
  // Adiciona a cor cinza no selecionado:
  const itemLista = document.querySelectorAll('li');
  for (index = 0; index < itemLista.length; index += 1){
    itemLista[index].addEventListener('click', function () {
      listItem.className = 'selected';
    });
  }
  // Seleciona apenas um:
});
// Source: https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript

// Botão Apaga tudo:
let apagaTudo = document.querySelector('#apaga-tudo');
 apagaTudo.addEventListener('click', function () {
   listaTarefas.innerHTML = '';
 });