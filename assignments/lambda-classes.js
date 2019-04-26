// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }

    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(attrs) {
    super(attrs);
    this.speacialty = attrs.speacialty;
    this.favLanguage = attrs.favLanguage;
    this.catchphrase = attrs.catchphrase;
    }

    demo() {
        return `Today we are learning about ${this.speacialty}.`;
    }

    grade() {
        return `${this.name} receives a perfect score on ${this.speacialty}.`;
    }
}

const jett = new Instructor({
    name: 'Jett',
    age: 30, 
    location: 'Cinncinati',
    gender: 'Male',
    favLanguage: 'JavaScript', 
    specialty: 'back-end',
    catchphrase: `I'll be back`
});

const nettie = new Instructor({
    name: 'Nettie',
    age: 27, 
    location: 'Miami',
    gender: 'Female',
    favLanguage: 'Python', 
    specialty: 'Front-End',
    catchphrase: `My favorite date is April 25th`
});

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }

    listsSubjects() {
        return this.favSubjects;
    }

    PRAssignment() {
        return `${this.name} has begun submitted a PR for ${this.speacialty}.`;
    }

    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.speacialty}.`;
    }
}

const nala = new Student({
    name: 'Nala',
    age: 20, 
    location: 'Brooklyn',
    gender: 'Female',
    previousBackground: 'Sales',
    className: 'webpt45',
    favSubjects: [
        'HTML', 'JavaScript', 'CSS'
    ],
});

const kelli = new Student({
    name: 'Kelli',
    age: 26, 
    location: 'Chicago',
    gender: 'Female',
    previousBackground: 'Law',
    className: 'webpt45',
    favSubjects: [
        'HTML', 'JavaScript', 'Python'
    ],
});

const bran = new Student({
    name: 'Bran',
    age: 32, 
    location: 'Winterfell',
    gender: 'Male',
    previousBackground: 'Raven',
    className: 'webpt45',
    favSubjects: [
        'SQL', 'JavaScript', 'CSS'
    ],
});

class ProjectManagers extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }

    standUp() {
        return `${this.name} announces to channel stand up times!`;
    }

    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${this.speacialty}.`;
    }
}

const aria = new Projectmanagers({
    name: 'Bran',
    age: 32, 
    location: 'Winterfell',
    gender: 'Male',
    gradClassName: 'CS23',
    favInstructor: 'Nettie'
});

const sanza = new ProjectManagers({
    name: 'Sanza',
    age: 29, 
    location: 'Winterfell',
    gender: 'Female',
    gradClassName: 'WebPT9',
    favInstructor: 'Jett'
});