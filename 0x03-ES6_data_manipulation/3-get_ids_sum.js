export default function getStudentIdsSum(studs) {
  if (!Array.isArray(studs)) {
    return [];
  }
  return students.map((student) => student.id)
    .reduce((prevValue, nowValue) => prevValue + nowValue);
}
