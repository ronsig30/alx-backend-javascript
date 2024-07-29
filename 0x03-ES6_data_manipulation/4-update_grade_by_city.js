function updateStudentGradeByCity(students, city, newGrades) {
  // Check if the input is an array and city is a string
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  // Filter students by the specified city
  return students
    .filter((student) => student.location === city) // Step 1: Filter by city
    .map((student) => {
      // Find the grade for the current student
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // Return the updated student object with the grade or "N/A"
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
