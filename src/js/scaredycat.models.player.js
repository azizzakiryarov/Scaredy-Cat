scaredycat.models.Player = class {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  getPlayer() {
    return `${this.name}${this.age}`;
  }
};
