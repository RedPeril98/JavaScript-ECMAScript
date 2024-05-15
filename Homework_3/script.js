// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

// Класс Employee (сотрудник)
class Employee {
  constructor(name) {
      this.name = name;
  }

  displayInfo() {
      console.log(`Name: ${this.name}`);
  }
}

// Класс Manager (менеджер)
class Manager extends Employee {
  constructor(name, department) {
      super(name);
      this.department = department;
  }

  displayInfo() {
      super.displayInfo();
      console.log(`Department: ${this.department}`);
  }
}

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// Класс Product (продукт)
class Product {
  constructor(name, price) {
      this.name = name;
      this.price = price;
  }
}

// Класс Order (заказ)
class Order {
  constructor(orderNumber) {
      this.orderNumber = orderNumber;
      this.products = [];
  }

  addProduct(product) {
      this.products.push(product);
  }

  getTotalPrice() {
      let totalPrice = 0;
      this.products.forEach(product => {
          totalPrice += product.price;
      });
      return totalPrice;
  }
}

// Пример использования класса
const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600

// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.

// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

class ZooAnimal {
  #name;
  #age;
  #gender;
  static MAX_AGE = 20;

  constructor(name, age, gender) {
      this.#name = name;
      this.#age = age;
      this.#gender = gender;
  }

  changeName(newName) {
      this.#name = newName;
  }

  changeAge(newAge) {
      if (newAge <= ZooAnimal.MAX_AGE) {
          this.#age = newAge;
      } else {
          console.log("New age exceeds the maximum allowed age for this animal.");
      }
  }
}

// Пример использования класса
const lion = new ZooAnimal("Leo", 5, "male");
console.log(lion); // Вывод: ZooAnimal { #name: 'Leo', #age: 5, #gender: 'male' }

lion.changeName("Simba");
console.log(lion); // Вывод: ZooAnimal { #name: 'Simba', #age: 5, #gender: 'male' }

lion.changeAge(10);
console.log(lion); // Вывод: ZooAnimal { #name: 'Simba', #age: 10, #gender: 'male' }

lion.changeAge(25); // Вывод: New age exceeds the maximum allowed age for this animal.
console.log(lion); // Вывод: ZooAnimal { #name: 'Simba', #age: 10, #gender: 'male' }
