function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
   arrayOfPeople.forEach((person) => {
    const createH1 = document.createElement("h1");
    const createH2 = document.createElement("h2");
    createH1.innerText = person.name;
    createH2.innerText = person.job;
    content.append(createH1, createH2);
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
