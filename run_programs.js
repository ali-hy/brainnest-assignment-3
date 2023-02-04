var runAgain = true;
const print = console.log;

do{
  const chosenProgram = window.prompt("Pick a program (enter a value from 1 to 3)");

  switch(chosenProgram){
    case '1':
      mathematicalShapesProgram();
      break;
    case '2':
      numberCheck();
      break;
    case '3':
      game();
      break;
    default:
      print("Choice not valid.");
  }

  const runAgainInput = prompt("Do you want to run another program?(y/n)\n");
  switch(runAgainInput){
    case 'y':
    case 'Y':
      print("%cre-running program...", "color: lightblue; font-size:16pt;");
      break;
    default:
      runAgain = false;
      print("%cEXITING PROGRAM", "color: red; font-weight: bold; font-size:16pt;");
      break;
  }
}while(runAgain)