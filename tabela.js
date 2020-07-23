adicionarNovo = () => {

    let novoInput = document.getElementById('tarefa');

    let tableBody = document.getElementById('tbody');

    let countRow = tableBody.getElementsByTagName('tr').length + 1;

    let tr = document.createElement('tr'),
        id = document.createElement('td'),
        descricao = document.createElement('td'),
        status = document.createElement('td');

    id.innerHTML = `${countRow}`;
    descricao.innerHTML = `${novoInput.value}`;
    status.innerHTML = 'A Fazer';

    tr.appendChild(id);
    tr.appendChild(descricao);
    tr.appendChild(status);

    tableBody.appendChild(tr);

}