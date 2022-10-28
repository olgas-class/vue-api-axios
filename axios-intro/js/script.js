// const myJson = `
// {
//     "users": [
//         {
//             "nome": "Olga",
//             "cognome": "Demina"
//         },
//         {
//             "nome": "Adriano",
//             "cognome": "Grimaldi"
//         }
//     ]
// }
// `;
// console.log(myJson);
//
// const myObj = JSON.parse(myJson);
//
// console.log(myObj);

let newNumber;
axios
  .get("https://ﬂynn.boolean.careers/exercises/api/random/int")
  .then(function (resp) {
    // Il codice che va eseguito quando la risposta arriva
    console.log("Arrivata!");
    newNumber = resp.data;
    console.log(newNumber.response);
  });

console.log("La chiamata è fatta, Sono in attesa");

axios
  .get("https://flynn.boolean.careers/exercises/api/random/word")
  .then(function (resp) {
    const word = resp.data.response;
    console.log(word);
  });

axios
  .get("https://flynn.boolean.careers/exercises/api/random/name")
  .then(function (resp) {
    const rndName = resp.data.response;
    console.log(rndName);
  });


  const userMin = parseInt(prompt("Numero minimo")); // 5
  const userMax = parseInt(prompt("Numero massimo")); // 40
  const userQty = parseInt(prompt("Quanti numeri vuoi?")); // 3

  axios
    .get(`https://flynn.boolean.careers/exercises/api/array/integers?min=${userMin}&max=${userMax}&items=${userQty}`)
    .then(function(resp) {
        console.log(resp);
    });