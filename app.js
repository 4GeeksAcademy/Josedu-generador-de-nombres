let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let dominio = [".com", ".org"];

const dominiosNombres = [];
for (let i = 0; i < pronouns.length; i++)
  for (let j = 0; j < adjectives.length; j++)
    for (let k = 0; k < nouns.length; k++)
      for (let l = 0; l < dominio.length; l++)
        dominiosNombres.push(
          `${pronouns[i]}${adjectives[j]}${nouns[k]}${dominio[l]}`
        );

console.log(dominiosNombres);
