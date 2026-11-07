// 1. Create Student Class
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. Calculate Average using reduce
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // 3. Calculate Grade
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // 4. Final Result
    getFinalResult() {
        if (this.calculateAverage() >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 5. Create Students Array
const studentsList = [
    new Student(1, "Ahmed", [90, 85, 95], 90),
    new Student(2, "Mona", [45, 48, 42], 80),
    new Student(3, "Ali", [70, 75, 80], 85),
    new Student(4, "Sara", [40, 45, 48], 70)
];

// 6. Print All Students Reports
console.log("===== Students Reports =====");

studentsList.forEach(student => {
    console.log({
        Name: student.name,
        Average: student.calculateAverage(),
        Grade: student.getGrade(student.calculateAverage()),
        Result: student.getFinalResult()
    });
});

// 7. Filter Students Between 40 and 49
const strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// 8. Add 5 Grace Marks using map
const studentsAfterGrace = strugglingStudents.map(student => {
    return {
        id: student.id,
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: student.calculateAverage() + 5
    };
});

// 9. Calculate Total New Averages using reduce
const totalNewAverages = studentsAfterGrace.reduce(
    (sum, student) => sum + student.newAverage, 0
);

// 10. Calculate Grace Average safely
const graceAverage = studentsAfterGrace.length > 0
    ? totalNewAverages / studentsAfterGrace.length
    : 0;

// 11. Print Final Results
console.log("===== Students Who Received Grace Marks =====");
console.table(studentsAfterGrace);

console.log("Average After Grace Marks:", graceAverage);