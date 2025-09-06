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
	console.log(studentSubjectsMenu);
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
	let zipCode;
	for (let student in department){
		if (student == username){
			let studentAddress = department[student]['Address'];
			let studentAddressList = studentAddress.split("/");
			zipCode = studentAddressList[4];
		}
	}
	return zipCode;
}
	
function getCityOfStudentAddress(department, username){
	let studentCity;
	for (let student in department){
		if (student == username){
			let studentAddress = department[student]['Address'];
			let studentAddressList = studentAddress.split("/");
			studentCity = studentAddressList[2];
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
						if (department[student][key][element] == course){
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

function checkIfUserNameExits(userName, department){
	for (let student in department){
		if (userName == student)
			return "yes";
	}
	return "no";
}

function modifyStudentProfile(department, userName, userInput, fieldToModify){
	for (let student in department){
		if (student == userName){
			for (let key in department[student]){
				if (key == fieldToModify){
					if (key == 'Address' && isDigit(userInput) == true){
						let address = department[student][key].split("/");
						console.log(address);
						address.pop();
						console.log(address);
						address.push(userInput);
						console.log(address);
						department[student][key] = address.join("/");
						break;
					}
					else if (key == 'Address' && isAlpha(userInput) == true){
						address = department[student][key].split("/");
						console.log(address);
						address.splice(2, 1);
						console.log(address);
						address.splice(2, 0, userInput);
						console.log(address);
						department[student][key] = address.join("/");
						break;
					}
						
					
					department[student][key] = userInput;
					break;
				}
			}
		}
	}
	return department;
}

function getNumberOfStudentsInDepartment(department){
	let count = 0;
	for (let student in department){
		count += 1;
	}
	return count;
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
					
										
	
				case 2:
					displayStudentProfileMenu();
					studentProfileMenuSelection = parseInt(prompt("Select an option: "));
					switch(studentProfileMenuSelection){
						case 1:
							studentUserName = prompt("Enter your username: ");
							validity = checkIfUserNameExits(studentUserName, department)
							if (validity == "no")
								console.log(`${studentUserName} not found`);
							else{
								studentData = displayStudentRecord(department, studentUserName);
								for (let key in studentData){
									console.log(`Key: ${key}, Value: ${studentData[key]} `);
								}
							}
							
							
								
						case 2:
							studentUserName = prompt("Enter your username: ");
							validity = checkIfUserNameExits(studentUserName, department);
							if (validity == "no")
								console.log(`${studentUserName} not found`);

							else
								console.log(getCityOfStudentAddress(department, studentUserName));
														
						case 3:
							studentUserName = prompt("Enter your username: ");							
							validity = checkIfUserNameExits(studentUserName, department);
							if (validity == "no")
								console.log(`${studentUserName} not found`);
							else
								console.log(getZipCodeOfStudentAddress(department, studentUserName));
							
					}
					
					
				case 3:
					console.log(displayUpdateStudentProfileMenu());
					updateStudentProfileMenuSelection = parseInt(prompt("Select an option: "));
					switch(updateStudentProfileMenuSelection){
						case 1:
							studentUserName = prompt("Enter your username: ");
							validity = checkIfUserNameExits(studentUserName, department);
							if (validity == "no")
								console.log(`${studentUserName} not found`);
							else{
								userInput = prompt("Enter the new name: ");
								let updatedProfile = modifyStudentProfile(department, studentUserName, userInput, 'Name');
								let response = displayUpdatedIcon();
								response = response.toLowerCase();
								if (response == "yes"){
									for (let key in updatedProfile){
										console.log(`${key} => `);
										for(let key1 in updatedProfile[key]){
											console.log(`${key1}: ${updatedProfile[key][key1]} `)
										}
									}
								}
							}
							
						case 2:
							studentUserName = prompt("Enter your username: ");
							validity = checkIfUserNameExits(studentUserName, department);
							if (validity == "no")
								console.log(`${studentUserName} not found`);
							else{
								userInput = prompt("Enter the new age: ");
								updatedProfile = modifyStudentProfile(department, studentUserName, userInput,  'Age')
								response = displayUpdatedIcon();
								response = response.toLowerCase();
								if (response == "yes"){
									for (let key in updatedProfile){
										console.log(`${key} => `);
										for(let key1 in updatedProfile[key]){
											console.log(`${key1}: ${updatedProfile[key][key1]} `);
										}
									}
								}
							}
							
						case 3:
							studentUserName = prompt("Enter your username: ");
							validity = checkIfUserNameExits(studentUserName, department);
							if (validity == "no")
								console.log(`${studentUserName} not found`);

							else{
								userInput = prompt("Enter the new city: ");
								updatedProfile = modifyStudentProfile(department, studentUserName, userInput,  'Address')
								response = displayUpdatedIcon();
								response = response.toLowerCase();
								if (response == "yes"){
									for (let key in updatedProfile){
										console.log(`${key} => `);
										for(let key1 in updatedProfile[key]){
											console.log(`${key1}: ${updatedProfile[key][key1]} `);
										}
									}
								}
								
							}
							
							
						case 4:
							studentUserName = prompt("Enter your username: ");
							validity = checkIfUserNameExits(studentUserName, department);
							if (validity == "no")
								console.log(`${studentUserName} not found`);

							else{
								userInput = prompt("Enter the new zip code: ");
								updatedProfile = modifyStudentProfile(department, studentUserName, userInput,  'Address')
								response = displayUpdatedIcon();
								response = response.toLowerCase();
								if (response == "yes"){
									for (let key in updatedProfile){
										console.log(`${key} => `);
										for(let key1 in updatedProfile[key]){
											console.log(`${key1}: ${updatedProfile[key][key1]} `);
										}
									}
								}
							}
						}
						
					
					case 4:
						displayStudentSubjectsMenu();
						let studentSubjectsMenuSelection = parseInt(prompt("Select an option: "));
						switch(studentSubjectsMenuSelection){
							case 1:
								studentUserName = prompt("Enter your username: ");
								validity = checkIfUserNameExits(studentUserName, department);
								if (validity == "no")
									console.log(`${studentUserName} not found`);
								else{
									let studentCourses = getCoursesStudentOffer(department, studentUserName);
									for (let index = 0; index < studentCourses.length; index++){
										console.log(studentCourses[index]);
									}
								}
								

							case 2:
								studentUserName = prompt("Enter your username: ");
								validity = checkIfUserNameExits(studentUserName, department);
								if (validity == "no")
									console.log(`${studentUserName} not found`);
								else{
									course = prompt("Enter course name: ");
									course = capitalize(course);
									studentCourses = getCoursesStudentOffer(department, studentUserName);
									validity = checkValidityToAddNewCourse(departmentCourses, studentCourses, course);
									if (validity == "valid"){
										courses.push(course);
										displaySaveIcon();
									}else
										console.log(validity);
								}
								
							case 3:
								studentUserName = prompt("Enter your username: ");
								validity = checkIfUserNameExits(studentUserName, department);
								if (validity == "no")
									console.log(`${studentUserName} not found`);
								else{
									course = prompt("Enter course name: ");
									course = capitalize(course);
									studentCourses = getCoursesStudentOffer(department, studentUserName);
									//removeCourseAndUpdate(department, username, course)
									let updatedStudentCourses = removeCourseAndUpdate(department, studentUserName, course);
									response = displayUpdatedIcon();
									response = response.toLowerCase();
									if (response == 'yes'){
										for (let index = 0; index < studentCourses.length; index++){
											console.log(studentCourses[index]);
										}
									}
								}
								
							}
							
		case 2:
			displayDepartmentInfoMenu();
			departmentInfoMenuSelection = parseInt(prompt("Select an option: "));
			switch(departmentInfoMenuSelection){
				case 1:
					console.log("The following are the subjects we offer in this department:");
					let number = 1
					for (let index = 0; index < departmentCourses; index++){
						console.log(`${number}. ${departmentCourses[index]}`);
						number++;
					}
				case 2:
					console.log(`The number of students in this department is ${getNumberOfStudentsInDepartment(department)}`)
				case 3:
					consloe.log("STUDENT\tDETAILS");
					for (let student in department){
						console.log(`${student} =>`);
						for (let key in department[student]){
							console.log(`${key}; {department[student][key]}`);
						}
					}
			}
		}
		case 0: 
			departmentPortal = false;
	
	
}

}