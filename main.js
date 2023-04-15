class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index >= 0) {
            this.attendance[index] = true;
        } else {
            console.log('Відмінна відвідуваність');
        }
    }

    absent() {
        const index1 = this.attendance.indexOf(null);
        if (index1 >= 0) {
            this.attendance[index1] = false;
        } else {
            console.log('Відмінна відвідуваність');
        }
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade);
        return sum / this.grades.length;
    }

    getAttendancePercentage() {
        if (this.attendance.filter(Boolean).length === 0) {
            return 0;
        }
        return this.attendance.filter(Boolean).length / 25;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendancePercentage = this.getAttendancePercentage();
        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return 'Молодець!';
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            return 'Добре, але можна краще';
        } else {
            return 'Редиска!';
        }
    }
}

const student1 = new Student('Дмитро', 'Бойченко', 2001);
student1.grades = [100, 95, 95, 96];
student1.present();
student1.present();
student1.present();
student1.present();
console.log(`Вік: ${student1.getAge()}, Середня оцінка: ${student1.getAverageGrade()}, Відвідуваність: ${student1.getAttendancePercentage()}, ${student1.summary()}`);

const student2 = new Student('Данило', 'Вакуленко', 2000);
student2.grades = [90, 95, 95, 90];
student2.present();
student2.present();
student2.present();
student2.absent();
console.log(`Вік: ${student2.getAge()}, Середня оцінка: ${student2.getAverageGrade()}, Відвідуваність: ${student2.getAttendancePercentage()}, ${student2.summary()}`);

const student3 = new Student('Павло', 'Борщ', 1999);
student3.grades = [70, 75, 80, 65];
student3.present();
student3.present();
student3.absent();
student3.absent();
console.log(`Вік: ${student3.getAge()}, Середня оцінка: ${student3.getAverageGrade()}, Відвідуваність: ${student3.getAttendancePercentage()}, ${student3.summary()}`);
