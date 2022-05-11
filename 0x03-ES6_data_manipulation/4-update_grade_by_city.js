export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((item) => item.location === city).map((student) => {
    const dataItem = newGrades.filter((item) => item.studentId === student.id).map((pos) => pos.grade)[0];
    const grade = dataItem || 'N/A';
    return { ...student, grade };
  });
}
