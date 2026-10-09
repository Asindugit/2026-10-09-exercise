# Student Management System

A simple and responsive Student Management System web page built using **HTML, CSS, and JavaScript**.

This project demonstrates message boxes, a login form, CSS styling, and a student marks table.

## Features

* **Responsive Navigation Bar** — Home, Students, and Login links.
* **Success Message** — Displays when both username and password are entered.
* **Warning Message** — Displays when only one field is empty.
* **Error Message** — Displays when both fields are empty.
* **Login Form** — Includes username and password input fields.
* **Input Focus Effect** — Blue border when an input field is focused.
* **Button Hover Effect** — Login button changes to blue when hovered.
* **Student Marks Table** — Displays student names, subjects, and marks.
* **Alternate Table Rows** — Uses `tr:nth-child(even)` to style even-numbered rows.
* **Responsive Design** — Supports desktop and mobile screen sizes.

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```text
StudentManagement/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Make sure all three files are in the same folder.
4. Open `index.html` in your web browser.
5. Enter a username and password to test the message boxes.

## Login Message Conditions

| Username | Password | Message |
| -------- | -------- | ------- |
| Empty    | Empty    | Error   |
| Entered  | Empty    | Warning |
| Empty    | Entered  | Warning |
| Entered  | Entered  | Success |

## CSS Concepts Demonstrated

This project demonstrates the following CSS concepts:

* External CSS using `<link>`
* Class and ID selectors
* CSS background and text colors
* `:focus` pseudo-class
* `:hover` pseudo-class
* `tr:nth-child(even)` selector
* Flexbox navigation layout
* Media queries for responsive design
* Borders, padding, margins, and box shadows

## JavaScript Concepts Demonstrated

* `document.getElementById()`
* `addEventListener()`
* `event.preventDefault()`
* Variables and constants
* `if`, `else if`, and `else`
* Logical AND (`&&`) and OR (`||`)
* String `trim()` method
* Showing and hiding HTML elements using the `hidden` property

## Important Note

This project is a frontend demonstration. The login form does not verify actual user credentials or connect to a database. A backend authentication system is required for a real login application.

## Future Improvements

* Add real user authentication.
* Connect the application to a database.
* Add student registration and management features.
* Add functionality to insert, update, and delete student marks.
* Improve form validation and error handling.

## Author

**Asindu Himansha**

Software Engineering Undergraduate

## License

This project is available for educational and learning purposes.
