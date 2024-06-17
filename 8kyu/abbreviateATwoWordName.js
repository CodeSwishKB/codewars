function abbrevName(name) {
  // code away
  let fName = name.split(" ").shift().charAt(0).toUpperCase();
  let lName = name.split(" ").pop().charAt(0).toUpperCase();
  return `${fName}.${lName}`;
}
