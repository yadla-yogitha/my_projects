import pandas as pd

def get_student_details():
    roll_number = input("Enter Roll Number: ")
    name = input("Enter Name: ")
    age = input("Enter Age: ")
    phone_number = input("Enter Phone Number: ")
    percentage = input("Enter Percentage: ")
    grade = input("Enter Grade: ")  # Added prompt for grade input
    return roll_number, name, age, percentage, phone_number, grade

def main():
    data = []
    while True:
        roll_number, name, age, phone_number, percentage, grade = get_student_details()
        data.append({'Roll Number': roll_number, 'Name': name, 'Age': age, 'Phone Number': phone_number, 'Percentage': percentage, 'Grade': grade})

        print("Successfully added to the list.")
        choice = input("Do you want to add another student? (yes/no): ")
        if choice.lower() != 'yes':
            break

    # Convert data list to a pandas DataFrame
    df = pd.DataFrame(data)

    # Write the DataFrame to an Excel file
    output_file = 'student_details.xlsx'
    df.to_excel(output_file, index=False)
    print(f"Data successfully written to {output_file}.")

if __name__ == "__main__":
    main()
