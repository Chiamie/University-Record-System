import re

def display_main_menu():
	menu = """
	1. Student
	2. Department Info
	0. Exit
	"""
	print(menu)

def display_student_menu():
	student_menu = """
			1. Add Student
			2. View Student Profile
			3. Update Student Profile
			4. View Student Subjects
			"""
	print(student_menu)
	

def display_student_profile_menu():
	student_profile__menu = """
			1. View Student Details
			2. View City
			3. View Zip Code
			"""
	print(student_profile__menu)

def display_update_student_profile_menu():
	update_student_profile__menu = """
			1. Change Name
			2. Change Age
			3. Change City
			4. Change ZipCode
			"""
	print(update_student_profile__menu)

def display_student_subjects_menu():
	student_subjects__menu = """
			1. Subjects offered by Student
			2. Add Subject
			3. Remove Subject
			"""
	print(student_subjects__menu)


def display_department_info_menu():
	department_info_menu = """
		1. Department Subjects
		2. Number of Students in Department
		3. View all Students with their Details
		"""
	print(department_info_menu)

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
	return department[username]
	
def get_courses_student_offer(department, username):
	for student in department:
		if student == username:
			student_courses = department[student]['Courses']		
		
	return student_courses

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


	
def check_validity_to_add_new_course(department_courses, student_courses, course):
	if course not in student_courses:
		if course in department_courses:
			return "valid"
		else:
			return f"{course} is not offered in this department"
	return "You are already offering this course"

def remove_course_and_update(department, username, student_courses, course):		
	for student in department:
		if student == username:
			for key in department[student]:
				if key == 'Courses':
					for element in department[student][key]:
						if element == course:
							department[student][key].remove(element)
							break
	return department

def modify_student_profile(department, user_name, user_input, field_to_modify):
	for student in department:
		if student == user_name:
			for key in department[student]:
				if key == field_to_modify:
					if key == 'Address' and user_input.isdigit() == True:
						address = department[student][key].split("/")
						print(address)
						address.pop(-1)
						print(address)
						address.append(user_input)
						print(address)
						department[student][key] = "/".join(address)
						break
					elif key == 'Address' and user_input.isalpha() == True:
						address = department[student][key].split("/")
						print(address)
						address.pop(2)
						print(address)
						address.insert(2, user_input)
						print(address)
						department[student][key] = "/".join(address)
						break

						
					
					department[student][key] = user_input
					break
	return department

def get_number_of_students_in_department(department):
	count = 0
	for student, details in department.items():
		count += 1
	return count
	
	

def display_save_icon():
	print(">>>>Saved Successfully<<<<<")
	
def display_updated_icon():
	print(">>>>>Updated Successfully>>>>")
	user_response = input("Do you want to view the updated profile: ")
	return user_response

def check_pattern(user_input):
	pattern = r"\d+/[a-zA-Z]+Street/[a-zA-Z]+/[a-zA-Z]+/\d+"
	return bool(re.fullmatch(pattern, user_input))
	
	
	
	
	
	
	
	