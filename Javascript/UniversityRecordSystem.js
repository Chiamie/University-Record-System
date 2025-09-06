const prompt = require('prompt-sync')();

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

function isAlpha(string){
	const format = /[a-zA-Z]/;
	for(let char of string){
		if(!format.test(char)){
			return false;
		}
	}
	return true;
}
	
function isDigit(string){
	const format = /[0-9]/;
	for(let char of string){
		if(!format.test(char)){
			return false;
		}
	}
	return true;
}

function capitalize(string){
	stringArray = string.split("");
	firstCharacter = stringArray.shift();
	stringArray.unshift(firstCharacter.toUpperCase());
	string  = stringArray.join("");
	
	return string;
}

function checkValidityToAddNewCourse(departmentCourses, studentCourses, course){
	if (!studentCourses.includes(course)){
		if (departmentCourses.includes(course))
			return "valid";
		else
			return `${course} is not offered in this department`;
	}
	return "You are already offering this course"
}

function checkPattern(userInput){
	const pattern = /^\/d+\/[a-zA-Z]+Street\/[a-zA-Z]+\/[a-zA-Z]+\/\d+$/;
	return pattern.test(userInput);
}

function removeCourseAndUpdate(department, username, course){
	for (let student in department){
		if (student == username){
			for (let key in department[student]){
				if (key == "Courses"){
					for (let element in department[student][key]){
						if (department[student][key][element] = course){
							elementIndex = department[student][key].indexOf(course);
							department[student][key].splice(elementIndex, 1);
						}
					}
				}
			}
		}
	}
	return department;
}

function displaySaveIcon(){
	console.log(">>>>Saved Successfully<<<<<");
}
function displayUpdatedIcon(){
	console.log(">>>>>Updated Successfully>>>>");
	userResponse = prompt("Do you want to view the updated profile: ");
	return userResponse;
}









const departmentCourses = ["Math", "Physics", "Computer Science", "Biology", "Chemistry", "Statistics", "English", "Economics", "History", "Philosophy", "Sociology",
"Political Science", "Art", "Music", "Engineering", "Law", "Medicine", "Business", "Psychology", "Geography"];
let department = {};
let studentList = [];

let departmentPortal = true;
while (departmentPortal){
	displayMainMenu();
	let mainMenuSelection = parseInt(prompt("Select an option: "));
	switch(mainMenuSelection){
		case 1:
			displayStudentMenu();
			let studentMenuSelection = parseInt(prompt("Select an option: "))
			switch(studentMenuSelection){
				case 1:
					let courses = [];
					let studentName = prompt("Enter Student's name: ");
					while (isAlpha(studentName) == false) {
						console.log("Invalid Name. Please ");
						studentName = prompt("Enter Student's name: ");
					}
				
					let studentAge = prompt("Enter Student's age: ");
					while (isDigit(studentAge) == false){
						console.log("Invalid age. Please " + "");
						studentAge = prompt("Enter Student's age: ");
					}

					let studentCourse = prompt("Enter course offered by the student: ");
					while (isAlpha(studentCourse) == false){
						console.log("Invalid course name. Please ");
						studentCourse = prompt("Enter course offered by the student: ");
					}
					
					studentCourse = capitalize(studentCourse);
					let validity = checkValidityToAddNewCourse(departmentCourses, courses, studentCourse);
					if (validity == "valid")
						courses.push(studentCourse);
					else
						console.log(validity);
						
					let userResponse = prompt("Do you want to enter another course(yes/no): ");
					userResponse = userResponse.toLowerCase();
					while (userResponse != "no"){
						studentCourse = prompt("Enter course offered by the student: ");
						while (isAlpha(studentCourse) == false){
							console.log("Invalid course name. Please ");
							studentCourse = prompt("Enter course offered by the student: ");
						}
						studentCourse = capitalize(studentCourse);
						validity = checkValidityToAddNewCourse(departmentCourses, courses, studentCourse);
						if (validity == "valid")
							courses.push(studentCourse);
						else
							console.log(validity);
						userResponse = prompt("Do you want to enter another course(yes/no): ");
						userResponse = userResponse.toLowerCase();
					}
					
					let studentAddress = prompt("Enter Student's address(house_number/street_name/city/state/zip_code): ");
					validity = checkPattern(studentAddress);
					while (validity == "false"){
						console.log("Invalid address format. Follow the provided format. Ensure you put Street immediately after the street name.")
						studentAddress = prompt("Enter Student's address(house_number/street_name/city/state/zip_code): ")
						validity = checkPattern(studentAddress);
						
					}
						
					
					displaySaveIcon();
					studentList.unshift(studentName, studentAge, studentAddress, courses);
					
					studentUserName = prompt("Create a unique username: ");
					console.log(studentList);
			
					studentDetails = getStudentRecord(studentList);
					console.log(studentDetails);

					department = getAllStudentsRecords(studentUserName, studentDetails, department);

					displaySaveIcon();

	
			}
		case 0: 
			departmentPortal = false;
	}
	
}