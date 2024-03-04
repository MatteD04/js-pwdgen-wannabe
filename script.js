//generare una password

//chiedere all'utente il nome, il cognome e il colore preferito
const userName= prompt("Qual'è il tuo nome");
const userSurname= prompt("Qual'è il tuo cognome");
const userColor= prompt("Qual'è il tuo colore preferito");

//scrivo il messaggio da dare all'utente
const userMessage = 'Usa questa password ' + userName + userSurname + userColor + '23' + ' sarà super efficace';
console.log(userMessage);

//scrivo il messaggio che si visualizzerà
document.getElementById('message').innerHTML = userMessage;