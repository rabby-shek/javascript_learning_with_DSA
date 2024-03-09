class GrageRounder{
    constructor(grades){
        this.grades = grades;
    }

    roundGrades(){
        return  this.grades.map((grade) => this.roundGrade(grade));
    }

    roundGrade(grade){
        if(grade < 38){
            return grade;
        }
        const nextMultipleOf5 = Math.ceil(grade/5) * 5;
        return (nextMultipleOf5 - grade < 3) ? nextMultipleOf5 : grade;

    }
    
}

const grades = [73, 67, 38,33 ];

const gradeRounder = new GrageRounder(grades);
const roundGrades = gradeRounder.roundGrades();

console.log(roundGrades);


