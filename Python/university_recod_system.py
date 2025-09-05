def get_student_record(student_list):
	student_details = {}
	student_details['Name'] = student_list[0]
	student_details['Age'] = student_list[1]
	student_details['Address'] = student_list[2]
	student_details['Courses'] = student_list[3]
	return student_details

def get_all_students_records(username, student_details, department):
	department[username] = student_details
	return department

def display_student_record(department, username):
	return department[useranme]
	
def display_courses_of_student(department, username):
	for student in department:
		if student == username:
			for details, data in student.items():
				if details == 'courses':
					return student[details]


def get_zip_code_of_student_address(department, username):
	for student in department:
		if student == username:
			student_address = department[student]['Address']
			student_address_list = student_address.split("/")
			zip_code = student_address_list[-1]
	return zip_code
	
def get_city_of_student_address(department, username):
	for student in department:
		if student == username:
			student_address = department[student]['Address']
			student_address_list = student_address.split("/")
			student_city = student_address_list[2]
	return student_city





department = {} 
#student_details = {}
student_list = []

	
{'Anna': {'Name': 'Chiamaka', 'Age': '12', 'Address': 'tyu 87 gh', 'Courses': ['physics']}}

user_input = 'yes'
while user_input != "-1":
	courses = set()
	student_name = input("Enter Student's name: ")
	while student_name.isalpha() == False:
		print("Invalid Name. Please ", end= "")
		student_name = input("Enter Student's name: ")
	
	student_age = input("Enter Student's age: ")
	while student_age.isdigit() == False:
		print("Invalid age. Please ", end= "")
		student_age = int(input("Enter Student's age: "))

	student_courses = input("Enter courses offered by the student: ")
	courses.add(student_courses)
	user_response = input("Do you want to enter another course(yes/no): ")
	user_response = user_response.lower()
	while user_response != "no":
		student_courses = input("Enter courses offered by the student: ")
		courses.add(student_courses)
		user_response = input("Do you want to enter another course(yes/no): ")

	while student_courses.isalpha() == False:
		print("Invalid course name. Please ", end= "")
		student_courses = input("Enter courses offered by the student: ")
		courses.add(student_courses)

	student_address = input("Enter Student's address(house_number/strt_name/city/state/zip_code): ")
	
	student_list.insert(0, student_name)
	student_list.insert(1, student_age)
	student_list.insert(2, student_address)
	student_list.insert(3, courses)

	student_username = input("Create a unique username: ")
	print(student_list)
	student_details = get_student_record(student_list)
	print(student_details)

	print(get_all_students_records(student_username, student_details, department))

	user_input = input("Do you want to perform another one: ")
	
print(get_zip_code_of_student_address(department, 'Annabeauty'))
	
print(get_city_of_student_address(department, 'Annabeauty'))











