

function displayMainMenu(){
	const menu = `
	1. Student
	2. Department Info
	0. Exit
	`;
	console.log(menu);
}
function displayStudentMenu(){
	const studentMenu = `
			1. Add New Student
			2. View Student Profile
			3. Update Student Profile
			4. View Student Subjects
			`;
	console.log(studentMenu);
}

function displayStudentProfileMenu(){
	const studentProfileMenu = `
			1. View Student Details
			2. View City
			3. View Zip Code
			`;
	console.log(studentProfileMenu);
}
function displayUpdateStudentProfileMenu(){
	const updateStudentProfileMenu = `
			1. Change Name
			2. Change Age
			3. Change City
			4. Change ZipCode
			`;
	console.log(updateStudentProfileMenu);
}
function displayStudentSubjectsMenu(){
	const studentSubjectsMenu = `
			1. Subjects offered by Student
			2. Add Subject
			3. Remove Subject
			`
	console,log(studentSubjectsMenu);
}

function displayDepartmentInfoMenu(){
	const departmentInfoMenu = `
		1. Department Subjects
		2. Number of Students in Department
		3. View all Students with their Details
		`;
	console.log(departmentInfoMenu);
}
function getStudentRecord(studentList){
	let studentDetails = {};
	studentDetails['Name'] = studentList[0];
	studentDetails['Age'] = studentList[1];
	studentDetails['Address'] = studentList[2];
	studentDetails['Courses'] = studentList[3];
	return studentDetails;
}
function getAllStudentsRecords(username, studentDetails, department){
	department[username] = studentDetails;
	return department;
}
function displayStudentRecord(department, username){
	return department[username];
}

function getCoursesStudentOffer(department, username){
	for (let student in department){
		if (student == username)
			studentCourses = department[student]['Courses']		
	}
	return studentCourses;
}
function getZipCodeOfStudentAddress(department, username){
	for (let student in department){
		if (student == username){
			let studentAddress = department[student]['Address'];
			let studentAddressList = studentAddress.split("/");
			let zipCode = studentAddressList[-1];
		}
	}
	return zipCode;
}
	
function getCityOfStudentAddress(department, username){
	for (let student in department){
		if (student == username){
			let studentAddress = department[student]['Address'];
			let studentAddressList = studentAddress.split("/");
			let studentCity = studentAddressList[2];
		}
	}
	return studentCity;
}

	

