import university_record_system_functions


department_courses = ["Math", "Physics", "Computer Science", "Biology", "Chemistry", "Statistics", "English", "Economics", "History", "Philosophy", "Sociology",
"Political Science", "Art", "Music", "Engineering", "Law", "Medicine", "Business", "Psychology"]
department = {} 
student_list = []

department_portal = True
while department_portal:
	university_record_system_functions.display_main_menu()
	main_menu_selection = int(input("Select an option: "))
	match(main_menu_selection):
		case 1:
			university_record_system_functions.display_student_menu()
			student_menu_selection = int(input("Select an option: "))
			match(student_menu_selection):
				case 1:
					courses = set()
					student_name = input("Enter Student's name: ")
					while student_name.isalpha() == False:
						print("Invalid Name. Please ", end= "")
						student_name = input("Enter Student's name: ")
	
					student_age = input("Enter Student's age: ")
					while student_age.isdigit() == False:
						print("Invalid age. Please ", end= "")
						student_age = input("Enter Student's age: ")

					student_course = input("Enter course offered by the student: ")
					while student_course.isalpha() == False:
						print("Invalid course name. Please ", end= "")
						student_course = input("Enter course offered by the student: ")

					student_course = student_course.capitalize()
					courses.add(student_course)
					user_response = input("Do you want to enter another course(yes/no): ")
					user_response = user_response.lower()
					while user_response != "no":
						student_course = input("Enter course offered by the student: ")
						while student_course.isalpha() == False:
							print("Invalid course name. Please ", end= "")
							student_course = input("Enter course offered by the student: ")
						student_course = student_course.capitalize()
						courses.add(student_course)
						user_response = input("Do you want to enter another course(yes/no): ")
						user_response = user_response.lower()

					
					student_address = input("Enter Student's address(house_number/strt_name/city/state/zip_code): ")
	
					student_list.insert(0, student_name)
					student_list.insert(1, student_age)
					student_list.insert(2, student_address)
					student_list.insert(3, courses)

					student_username = input("Create a unique username: ")
					print(student_list)
			
					student_details = university_record_system_functions.get_student_record(student_list)
					print(student_details)

					department = university_record_system_functions.get_all_students_records(student_username, student_details, department)

					

				
				case 2:
					university_record_system_functions.display_student_profile_menu()
					student_profile_menu_selection = int(input("Select an option: "))
					match(student_profile_menu_selection):
						case 1:
							student_username = input("Enter your username: ")
							print(university_record_system_functions.display_student_record(department, student_username))
						case 2:
							student_username = input("Enter your username: ")
							print(university_record_system_functions.get_city_of_student_address(department, student_username))
						case 3:
							student_username = input("Enter your username: ")
							print(university_record_system_functions.get_zip_code_of_student_address(department, student_username))
						
				case 3:
					print(university_record_system_functions.display_update_student_profile_menu())

							


			

							
			

