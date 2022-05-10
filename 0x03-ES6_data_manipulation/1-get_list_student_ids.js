export default function getListStudentIds(studs) {
  if (!Array.isArray(studs)) {
    return [];
  }
  return studs.map((student) => student.id);
}
