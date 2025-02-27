const student = {
    name: 'Caleb Gebke',
    course: 'JavaScript',
    grade: '30/30',
    displayInfo() {
        return `${this.name} is taking the course ${this.course} and expects to earn ${this.grade}`;
    }
}

const student1 = {
    name: 'Sarah',
    course: 'JavaScript',
    grade: '95',
}
const student2 = {
    name: 'John',
    course: 'Python',
    grade: '88',
}
const student3 = {
    name: 'Alice',
    course: 'C++',
    grade: '92',
}

function displayStudentInfo(student) {
    return `${student.name} is taking the course ${student.course} and expects to earn ${student.grade}`;
}

function dispalayStudentInfo(name, course, grade){
    return `${name} is taking the course ${course} and expects to earn ${grade}`;
}

function add2Nums (x, y){
    return x + y;
}
const sum = add2Nums(300, 200);
console.log(sum);