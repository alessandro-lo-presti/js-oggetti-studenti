// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var studente = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30
};

// - Stampare a schermo attraverso il for in tutte le proprietà.
for(var i in studente) {
  console.log(studente[i]);
}

// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studenti = [
  {
    nome: "Mario",
    cognome: "Rossi",
    eta: 20
  },
  {
    nome: "Giuseppe",
    cognome: "Verdi",
    eta: 30
  },
  {
    nome: "Filippo",
    cognome: "Neri",
    eta: 40
  },
  {
    nome: "Claudio",
    cognome: "Gialli",
    eta: 50
  }
];

for(i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + " " + studenti[i].cognome);
}


// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nome = prompt("Inserisci nome").toLowerCase();
nome = nome.charAt(0).toUpperCase() + nome.slice(1);

var cognome = prompt("Inserisci cognome").toLowerCase();
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);

var eta = 0;

var sentinella = true;

while(sentinella) {
  eta = parseInt(prompt("Inserisci un età valida"));
  if(eta > 0 && eta < 100 && !isNaN(eta)) {
    sentinella = false;
  }
}

studenti.push({
  nome: nome,
  cognome: cognome,
  eta: eta
});
