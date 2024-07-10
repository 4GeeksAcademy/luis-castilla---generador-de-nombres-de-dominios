let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extenciones = [".com", ".net"];
let nuevo = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let x = 0; x < adj.length; x++) {
    for (let z = 0; z < noun.length; z++) {
      for (let h = 0; h < extenciones.length; h++) {
        nuevo.push(pronoun[i] + adj[x] + noun[z] + extenciones[h]);
      }
    }
  }
}
console.log(nuevo);