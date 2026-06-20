const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 90 },
    { name: "Eve", score: 88 }
];

const calculateGrade = (score) => {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
};

const processedStudents = students.map(student => {
    return {
        name: student.name,
        score: student.score,
        grade: calculateGrade(student.score),
        status: calculateGrade(student.score) === 'F' ? 'Fail' : 'Pass'
    };
});

const passed = processedStudents.filter((s) => s.status === 'Pass').length;

const topStudent = processedStudents.reduce((top, student) => {
    return student.score > top.score ? student : top;
}, processedStudents[0]);

const ranked = processedStudents.sort((a, b) => b.score - a.score);

const output = document.getElementById('output');
output.innerHTML = `
    <h2>Student Grades</h2>
    <ul>
        ${processedStudents.map(student => `<li>${student.name}: ${student.score} (${student.grade}) - ${student.status}</li>`)}
    </ul>
    <p>Total Passed: ${passed}</p>
    <p>Top Student: ${topStudent.name} with a score of ${topStudent.score} (${topStudent.grade})</p>
    <h3>Ranked Students</h3>
    <ol>
        ${ranked.map(student => `<li>${student.name}: ${student.score} (${student.grade}) : </li>`)}
    </ol>
`;