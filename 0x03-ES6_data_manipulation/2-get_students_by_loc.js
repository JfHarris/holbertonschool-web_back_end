export default function getStudentsByLocation(studArray, city) {
  return studArray.filter((item) => item.location === city);
}
