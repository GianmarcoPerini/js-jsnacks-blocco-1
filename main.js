    // SOMMA CON FOR E WHILE

/**
 *  let somma = 0;
 *
 *  for (let i = 0; i < 5; i++){
 *  let numeriPerSomma = parseInt(prompt("Inserisci 5 numeri")) 
 *  somma += numeriPerSomma
 *  }
 *
 *  let n = 0;
 *
 *  while (n < 5) {
 *      let numeriPerSomma = parseInt(prompt("Inserisci 5 numeri"))
 *      somma += numeriPerSomma
 *      n++
 *  }
 *
 *  console.log(somma);
 */


    // GENERATORE NOMI

/** 
 *  listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
 *  listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];
 *  listaPartecipanti = []
 *
 *  for ( let i = 0; i < 8; i++){
 *      let nomeRandom = listaNomi[Math.floor(Math.random()*listaNomi.length)];
 *      let cognomeRandom = listaCognomi[Math.floor(Math.random()*listaCognomi.length)];
 *      let partecipanti = nomeRandom + " " + cognomeRandom
 *      listaPartecipanti.push(partecipanti)
 *  }
 * 
 *  for (n = 0; n < listaPartecipanti.length; n++){
 *      listaPartecipanti.sort()
 *      document.getElementById("lista").innerHTML += "<li>" + listaPartecipanti[n] + "</li>"
 *  }
 */


    // PAREGGIATORE ARRAY
/** 
 *  let listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan"] 
 *  let listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman"]
 *  let i = 0
 *
 *  while (listaNomi.length < listaCognomi.length){
 *      listaNomi.push(listaCognomi[Math.floor(Math.random()*listaCognomi.length)])
 *      i++
 *  }
 *
 *  while (listaNomi.length > listaCognomi.length){
 *      listaCognomi.push(listaNomi[Math.floor(Math.random()*listaNomi.length)])
 *      i++
 *  }
 *
 *  for(n = 0; n < listaNomi.length; n++){
 *      document.getElementById("lista-nomi").innerHTML += "<li>" + listaNomi[n] + "</li>"
 *      document.getElementById("lista-cognomi").innerHTML += "<li>" + listaCognomi[n] + "</li>"
 *  }
 */