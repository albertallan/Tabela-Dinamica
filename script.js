function salvar(){

    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var datanasc = document.getElementById('datanascimento').value;
    var email = document.getElementById('email').value;

    var linha = "<tr>";
    linha +="<td>"+nome+"</td>";
    linha +="<td>"+cpf+"</td>";
    linha +="<td>"+datanasc+"</td>";
    linha +="<td>"+email+"</td>";
    linha +="</tr>";

    tabela.innerHTML += linha;
    return false;
}