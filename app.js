
var names = ["Areej", "Sura", "Noor", "Haya","saja"];


var grades = [80, 60, 75, 40,30];


function markCalculate(params){
    for (var i = 0; i < names.length; i++) {
  var name = names[i];
  var grade = grades[i];

  console.log(name + " - " + grade);

  if (grade > 50) {
    console.log("Congratulations, " + name + "! You passed with a grade of " + grade);
  } else {
    console.log("Failed, " + name + ". Your grade is " + grade);
  }
}
}

markCalculate()