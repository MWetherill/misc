// create a class 'Person' that has takes the arguments 'name' and 'age'.
// create a method within the class that compares the age of two seperate people

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if (this.age > other.age) {
      console.log(other.name + ' is younger than me.')
    } else if (this.age < other.age) {
      console.log(other.name + ' is older than me.')
    } else {
      console.log(other.name + ' is the same age as me.')
    }
		
	}
}

p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);