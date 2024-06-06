 
const person = {
  firstName: "Redoy",
  lastName: "khan",
  mobile:+8801943147885,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("p1").innerHTML 
= person.fullName() + " " + "number is: " + person.mobile;