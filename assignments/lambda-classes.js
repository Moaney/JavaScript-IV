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