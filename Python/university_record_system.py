import university_record_system_functions


department_courses = ["Math", "Physics", "Computer Science", "Biology", "Chemistry", "Statistics", "English", "Economics", "History", "Philosophy", "Sociology",
"Political Science", "Art", "Music", "Engineering", "Law", "Medicine", "Business", "Psychology", "Geography"]
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
					validity = university_record_system_functions.check_validity_to_add_new_course(department_courses, courses, student_course)
					if validity == "valid":
						courses.add(student_course)
					else:
						print(validity)
						
					user_response = input("Do you want to enter another course(yes/no): ")
					user_response = user_response.lower()
					while user_response != "no":
						student_course = input("Enter course offered by the student: ")
						while student_course.isalpha() == False:
							print("Invalid course name. Please ", end= "")
							student_course = input("Enter course offered by the student: ")
						student_course = student_course.capitalize()
						validity = university_record_system_functions.check_validity_to_add_new_course(department_courses, courses, student_course)
						if validity == "valid":
							courses.add(student_course)
						else:
							print(validity)
						user_response = input("Do you want to enter another course(yes/no): ")
						user_response = user_response.lower()
					
					student_address = input("Enter Student's address(house_number/street_name/city/state/zip_code): ")
					validity = university_record_system_functions.check_pattern(student_address)
					while validity == False:
						print("Invalid address format. Follow the provided format. Ensure you put Street immediately after the street name.")
						student_address = input("Enter Student's address(house_number/street_name/city/state/zip_code): ")
						validity = university_record_system_functions.check_pattern(student_address)
						
					
						
					
					university_record_system_functions.display_save_icon()
					student_list.insert(0, student_name)
					student_list.insert(1, student_age)
					student_list.insert(2, student_address)
					student_list.insert(3, courses)

					student_user_name = input("Create a unique username: ")
					print(student_list)
			
					student_details = university_record_system_functions.get_student_record(student_list)
					print(student_details)

					department = university_record_system_functions.get_all_students_records(student_user_name, student_details, department)

					university_record_system_functions.display_save_icon()

				
				case 2:
					university_record_system_functions.display_student_profile_menu()
					student_profile_menu_selection = int(input("Select an option: "))
					match(student_profile_menu_selection):
						case 1:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								student_data = university_record_system_functions.display_student_record(department, student_user_name)
								for key, data in student_data.items():
									print(f"{key}: {data}")
								
						case 2:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								print(university_record_system_functions.get_city_of_student_address(department, student_user_name))
						case 3:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								print(university_record_system_functions.get_zip_code_of_student_address(department, student_user_name))
						
				case 3:
					print(university_record_system_functions.display_update_student_profile_menu())
					update_student_profile_menu_selection = int(input("Select an option: "))
					match(update_student_profile_menu_selection):
						case 1:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								user_input = input("Enter the new name: ")
								updated_name = university_record_system_functions.modify_student_profile(department, student_user_name, user_input, 'Name')
								response = university_record_system_functions.display_updated_icon()
								response = response.lower()
								if response == "yes":
									for key, data in updated_name.items():
										print(f"{key}: {data}")

						case 2:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								user_input = input("Enter the new age: ")
								updated_age = university_record_system_functions.modify_student_profile(department, student_user_name, user_input, 'Age')
								response = university_record_system_functions.display_updated_icon()
								response = response.lower()
								if response == "yes":
									for key, data in updated_age.items():
										print(f"{key}: {data}")

						case 3:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								user_input = input("Enter the new city: ")
								updated_city = university_record_system_functions.modify_student_profile(department, student_user_name, user_input, 'Address')
								response = university_record_system_functions.display_updated_icon()
								response = response.lower()
								if response == "yes":
									for key, data in updated_city.items():
										print(f"{key}: {data}")

						case 4:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								user_input = input("Enter the new zip code: ")
								updated_zip_code = university_record_system_functions.modify_student_profile(department, student_user_name, user_input, 'Address')
								response = university_record_system_functions.display_updated_icon()
								response = response.lower()
								if response == "yes":
									for key, data in updated_zip_code.items():
										print(f"{key}: {data}")

							
					
				case 4:
					university_record_system_functions.display_student_subjects_menu()
					student_subjects_menu_selection = int(input("Select an option: "))
					match(student_subjects_menu_selection):
						case 1:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								student_courses = university_record_system_functions.get_courses_student_offer(department, student_user_name)
								for course in student_courses:
									print(course)
						case 2:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								course = input("Enter course name: ")
								course = course.capitalize()
								student_courses = university_record_system_functions.get_courses_student_offer(department, student_user_name)
								validity = university_record_system_functions.check_validity_to_add_new_course(department_courses, student_courses, course)
								if validity == "valid":
									courses.add(course)
									university_record_system_functions.display_save_icon()
								else:
									print(validity)
						case 3:
							student_user_name = input("Enter your username: ")
							validity = university_record_system_functions.check_if_user_name_exits(student_user_name, department)
							if validity == "no":
								print(f"{student_user_name} not found")
							else:
								course = input("Enter course name you dont want to offer again: ")
								course = course.capitalize()
								student_courses = university_record_system_functions.get_courses_student_offer(department, student_user_name)
								updated_student_courses = university_record_system_functions.remove_course_and_update(department, student_user_name, student_courses, course)
								response = university_record_system_functions.display_updated_icon()
								response = response.lower
								if response == 'yes':
									for course in student_courses:
										print(course)
									
								
							

		case 2:
			university_record_system_functions.display_department_info_menu()
			department_info_menu_selection = int(input("Select an option: "))
			match(department_info_menu_selection):
				case 1:
					print("The following are the subjects we offer in this department:")
					number = 1
					for subject in department_courses:
						print(f"{number}. {subject}")
						number += 1
				case 2:
					print(f"The number of students in this department is {university_record_system_functions.get_number_of_students_in_department(department)}")
				case 3:
					print(f'{"STUDENT":<12}DETAILS')
					for student, details in department.items():
						print(f"{student:<12}{details}")
					
		case 0:
			department_portal = False
			

							
			

