function start2(){
  const ASchrauben = [{}, {}, {}];
  const METRISCH = 0;
  const METRISCHFEIN = 1;
  const TRAPEZ = 2;
  const ROHRG = 3;
  
  let i = 1;
  let k = 0;
  const z = 3;
  
  while (i <= z) {
    console.log(`Laenge          der ${i}-ten Schraube:`);
    ASchrauben[i].fLaenge = parseFloat(prompt());
    console.log(`Gewindelaenge   der ${i}-ten Schraube: `);
    ASchrauben[i].fGLaenge = parseFloat(prompt());
    console.log(`Nenndurchmesser der ${i}-ten Schraube: `);
    ASchrauben[i].iDurchmesser = parseInt(prompt());
    console.log(`Gewinde         der ${i}-ten Schraube: `);
    console.log("Metrisch (0), Metrisch Feingewinde (1), Trapezgew. (2), Rohrgew. (3)");
    k = parseInt(prompt());
    switch (k) {
      case 0:
        ASchrauben[i].Gewinde = METRISCH;
        break;
      case 1:
        ASchrauben[i].Gewinde = METRISCHFEIN;
        break;
      case 2:
        ASchrauben[i].Gewinde = TRAPEZ;
        break;
      case 3:
        ASchrauben[i].Gewinde = ROHRG;
        break;
      default:
        break;
    }
    i = i + 1;
  }
  i = 1;
  
  while (i <= z) {
    console.log(`Laenge          der ${i}-ten Schraube: ${ASchrauben[i].fLaenge}`);
    console.log(`Gewindelaenge   der ${i}-ten Schraube: ${ASchrauben[i].fGLaenge}`);
    console.log(`Nenndurchmesser der ${i}-ten Schraube: ${ASchrauben[i].iDurchmesser}`);
    console.log(`Gewinde         der ${i}-ten Schraube: ${ASchrauben[i].Gewinde}`);
    i = i + 1;
  }
}