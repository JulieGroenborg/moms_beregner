//Laver funktionen "momsBeregner", sender 2 parametrer med (den ene er lavet som default-parameter).
//Jeg laver en variabel, som består af parametrene og er selve beregneren.
//Så console.logger jeg resultatet, så jeg kan se dette i konsollen.
function momsBeregner(beloeb, moms = 25) {
  let result = beloeb + (beloeb * moms) / 100;
  console.log(result);
}

//Hér kalder jeg funktionen "momsBeregner", og sender værdien 200/parameteret beloeb med.
momsBeregner(200);
