def getStudentRecord(student_list):
	student_details = {}
	student_details['Name'] = student_list[0]
	student_details['Age'] = student_list[1]
	student_details['Address'] = student_list[2]
	student_details['Courses'] = student_list[3]
	return student_details

def getAllStudentsRecords(username, student_details, department):
	department[username] = student_details
	return department

def displayStudentRecord(department, username):
	return department[useranme]
	
def displayCoursesOfStudent(department, username):
	for student in department:
		if student == username:
			for details, data in student.items():
				if details == 'courses':
					return student[details]




department = {} 
#student_details = {}
student_list = []
courses = []
	
{'Anna': {'Name': 'Chiamaka', 'Age': '12', 'Address': 'tyu 87 gh', 'Courses': ['physics']}}

student_name = input("Enter Student's name: ")
while student_name.isalpha() == False:
	print("Invalid Name. Please ", end= "")
	student_name = input("Enter Student's name: ")
student_age = int(input("Enter Student's age: "))
while student_name.isdigit() == False:
	print("Invalid age. Please ", end= "")
	student_age = input("Enter Student's age: ")
student_courses = input("Enter courses offered by the student: ")
while student_name.isalpha() == False:
	print("Invalid course name. Please ", end= "")
	student_courses = input("Enter courses offered by the student: ")

courses.append(student_courses)
student_address = input("Enter Student's address: ")

student_list.append(student_name)
student_list.append(student_age)
student_list.append(student_address)
student_list.append(courses)

student_username = input("Create a unique username: ")


 
student_details = getStudentRecord(student_list)
print(student_details)

print(getAllStudentsRecords(student_username, student_details, department))















