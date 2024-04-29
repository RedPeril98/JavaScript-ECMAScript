// Задание 1: Управление библиотекой книг

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
  }
}

// Пример использования класса Book
const book1 = new Book("Война и мир", "Лев Толстой", 960);
book1.displayInfo();
// Вывод:
// Title: Война и мир
// Author: Лев Толстой
// Pages: 960

const book2 = new Book("Трудно быть богомd", "Аркадий и Борис Стругацкие", 256);
book2.displayInfo();
// Вывод:
// Title: Трудно быть богом
// Author: Аркадий и Борис Стругацкие
// Pages: 256

// Задание 2: Управление списком студентов

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grade: ${this.grade}`);
  }
}

// Создание экземпляра класса Student
const student1 = new Student("John Smith", 16, "10th grade");

// Вызов метода displayInfo с использованием call
student1.displayInfo.call(student1);

// Вызов метода displayInfo с использованием apply
student1.displayInfo.apply(student1);

// Пример использования bind
const displayInfoFunction = student1.displayInfo.bind(student1);
displayInfoFunction();