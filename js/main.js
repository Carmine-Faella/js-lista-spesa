const arrayLista = ['Mele', 'Pere', 'Banane', 'Arance', 'Anguria', 'Uva'];

let listaSpesa = document.getElementById('lista');

let i = 0;

while( i < arrayLista.length ){

    listaSpesa.innerHTML += `<li>${arrayLista[i]}</li>`

    i++;
};