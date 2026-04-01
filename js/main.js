import { renderizarTarefas, adicionarTarefa, removerTarefa } from './logica.js';

const input = document.getElementById('input');
const button = document.getElementById('button');
const list = document.getElementById('list');

renderizarTarefas();

button.addEventListener('click', () => adicionarTarefa(input));

// Adicionar tarefa ao apertar "Enter"
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarTarefa(input);
});