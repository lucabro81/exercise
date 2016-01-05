/**
 * Fill in the object constructor with the methods specified in the tests.
 * 
 * Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
 * 
 * All functions that take an argument have an arity of 1, and the argument will be a string.
 * 
 * These methods must be the only available means for interacting with the object.
 */

var Person = function(firstAndLast) {
  
    var first = firstAndLast.split(' ')[0];
    var last = firstAndLast.split(' ')[1];
  
    this.setFirstName = function(firstName) {
      first = firstName;
    };
  
    this.setLastName = function(lastName) {
      last = lastName;
    };
  
    this.setFullName = function(fullName) {
      first = fullName.split(' ')[0];
      last = fullName.split(' ')[1];
    };

    this.getFirstName = function() {
      return first;
    };
  
    this.getLastName = function() {
      return last;
    };
  
    this.getFullName = function() {
      return first + ' ' + last;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();