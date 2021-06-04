//If you use the name.addCourse function, you can add courses, and calculate the total number of credits you get.
//You can get a list of students in a class with course.classList() funtion, or course list of a student with student.courseList function



course = class {
    constructor(name, credits){
        this.name = name
        this.credits = credits
        this.students = []
    }
    classList(){
        console.log("These students are taking " + this.name)
        this.students.forEach(printName)
    }
}

printName = student => console.log(student.name, student.totalCredits)
printCourse = course => console.log(course.name, course.credits)

student = class {
    constructor(name, totalCredits){
        this.name = name
        this.totalCredits = totalCredits
        this.courses = []
    }
    courseList(){
        console.log(this.name + " is taking these courses:")
        this.courses.forEach(printCourse)
    }
    addCredits(credits){
        this.totalCredits = this.totalCredits + credits
        console.log("Course is added. Now, " + this.name + " has " + this.totalCredits + " credits.")
               
    }
    addCourse(course){
        console.log( this.name + " have taken this course: " + course.name)
        this.addCredits(course.credits)
        this.courses.push(course)
        course.students.push(this)
    } 
}

lala = new student('Lala', 0)
lele = new student('Lele', 0)
lulu = new student('Lulu', 0)
lolo = new student('Lolo', 0)

math101 = new course('Introduction to Mathematics', 5)
phys101 = new course('Introduction to Physics', 4)
ger101 = new course('Introduction to German', 4)
chem101 = new course('Introduction to Chemistry', 3)
cs101 = new course('Introduction to Computer Science', 2)

//If you use the name.addCourse function, you can add courses, and calculate the total number of credits you get.
