function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map to extract ids from the array of student objects
  return students.map((student) => student.id);
}

export default getListStudentIds;
