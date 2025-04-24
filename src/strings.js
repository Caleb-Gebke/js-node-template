const Name = 'Caleb Gebke';
const CourseName = 'CIS 177';
const Grade = '30/30';
const Assignment = `${Name} in class ${CourseName} will receive the grade ${Grade}`;
console.log(Assignment);
// Output:  Caleb Gebke in class CIS 177 will receive the grade 30/30
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

// biome-ignore lint/suspicious/noRedeclare: <explanation>
function displayStudentInfo(name, course, grade){
    return `${name} is taking the course ${course} and expects to earn ${grade}`;
}

function add2Nums (x, y){
    return x + y;
}
const sum = add2Nums(300, 200);
console.log(sum);