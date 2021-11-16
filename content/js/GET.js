// GET

fetch("https://estagio.eficazmarketing.com/api/user")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    
    for (let i = 0; i < data.length; i++) {
      // if (i<10){  //limite de envio, para não sobrecarregar as páginas
        var newRow = $("<tr>");
        var cols = "";
        cols += `<td class="d-none"> ${data[i]["id"]} </td>`;
        cols += `<td> ${data[i]["nome"]} </td>`;
        cols += `<td class="data_email"> ${data[i]["email"]} </td>`;
        cols += `<td> ${data[i]["rua"]},${data[i]["numero"]} <br> ${data[i]["bairro"]} <br> ${data[i]["cep"]} <br>  ${data[i]["cidade"]} -  ${data[i]["uf"]}</td>`;
        
        cols += `<td> ${data[i]["telefone"]} </td>`;
        cols += '<td class="group-button">';
        cols += '<button class="bc-green">Alterar</button>'; 
        cols += `<bUtton class="bc-red" onclick="del(${data[i]["id"]})">Excluir</bUtton>`; 
        cols += '</td>';

        newRow.append(cols);
        $("tbody").append(newRow);
      // }
}

  })
  .catch((error) => console.error('Whoops! Erro:', error.message || error))

