export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLen) {
    if (typeof newLen !== 'number') throw TypeError('Length must be a number');
    this._length = newLen;
  }

  get students() {
    return this._students;
  }

  set students(newStuds) {
    if (newStuds.constructor !== Array && newStuds.every((entry) => typeof entry === 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = newStuds;
  }
}
