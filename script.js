const inputText = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
// const btnRemoveFinalizados = document.querySelector('#remover-finalizados');
// const salvar = document.querySelector('#salvar-tarefas');

// função adiciona item na lista
function addItem() {
  const newElement = document.createElement('li');
  newElement.innerText = inputText.value;
  newElement.className = 'selected';
  listaTarefas.appendChild(newElement);
  inputText.value = '';
}; // Source: https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
button.addEventListener('click', addItem);

// função adiciona cor no item selecionado
function selectItem(event) {
  for (let i = 0; i < listaTarefas.children.length; i += 1) {
    listaTarefas.children[i].style.backgroundColor = 'white';
  }
  if (event.target.className === 'selected' || event.target.className === 'completed') {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}
listaTarefas.addEventListener('click', selectItem);

// Botão Apaga tudo:
apagaTudo.addEventListener('click', function () {
  listaTarefas.innerHTML = '';
});
