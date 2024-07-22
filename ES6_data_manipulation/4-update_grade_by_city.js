export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const filteredStudents = listOfStudents.filter((student) => student.location === city);

  return filteredStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    let grade;
    if (newGrade) {
      grade = newGrade.grade;
    } else {
      grade = 'N/A';
    }
    return { ...student, grade };
  });
}
