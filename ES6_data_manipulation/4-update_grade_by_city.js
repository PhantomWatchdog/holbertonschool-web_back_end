export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const filteredStudents = listOfStudents.filter(student => student.location === city);
    return filteredStudents.map(student => {
      const newGrade = newGrades.find(grade => grade.studentId === student.id);
      if (newGrade) {
        student.grade = newGrade.grade;
      } else {
        student.grade = 'N/A';
     }
      return student;
    });
}
