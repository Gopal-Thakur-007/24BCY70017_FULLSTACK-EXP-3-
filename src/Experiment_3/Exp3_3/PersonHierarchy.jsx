import React from 'react';
import './PersonHierarchy.css';

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }

  getDetails() {
    return {
      type: 'Person',
      name: this.name,
      age: this.age,
      introduction: this.introduce()
    };
  }
}

// Student class extending Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }

  getDetails() {
    return {
      type: 'Student',
      name: this.name,
      age: this.age,
      major: this.major,
      introduction: this.introduce()
    };
  }
}

// Teacher class extending Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }

  getDetails() {
    return {
      type: 'Teacher',
      name: this.name,
      age: this.age,
      subject: this.subject,
      introduction: this.introduce()
    };
  }
}

const PersonHierarchy = () => {
  // Create instances
  const people = [
    new Person('Alex Johnson', 30),
    new Student('Emma Watson', 20, 'Computer Science'),
    new Teacher('Dr. James Wilson', 45, 'Mathematics')
  ];

  return (
    <div className="person-hierarchy-container">
      <h1 className="hierarchy-title">Person Class Hierarchy</h1>
      
      <div className="persons-list">
        {people.map((person, index) => {
          const details = person.getDetails();
          return (
            <div key={index} className="person-card">
              <h2 className="person-name">
                {details.name} ({details.type})
              </h2>
              <p className="person-age">Age: {details.age}</p>
              <p className="person-intro">{details.introduction}</p>
              {details.major && (
                <p className="person-detail">
                  <strong>Major:</strong> {details.major}
                </p>
              )}
              {details.subject && (
                <p className="person-detail">
                  <strong>Teaching:</strong> {details.subject}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="hierarchy-info">
        <h3>Class Hierarchy Demonstration</h3>
        <ul>
          <li><strong>Person (Base Class):</strong> Contains name, age, and basic introduce() method</li>
          <li><strong>Student (Extends Person):</strong> Adds major property and overrides introduce()</li>
          <li><strong>Teacher (Extends Person):</strong> Adds subject property and overrides introduce()</li>
          <li><strong>Polymorphism:</strong> Each class has its own implementation of introduce()</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonHierarchy;