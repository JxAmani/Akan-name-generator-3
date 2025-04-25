# Akan Name Generator
#### A web application that assigns users traditional Ghanaian Akan names based on their date of birth and gender, April 20, 2025
#### By **Jeremy Amani**

## Description
The Akan Name Generator is an interactive and culturally-inspired web application that calculates the day of the week a user was born and assigns them a traditional Akan name from Ghana based on their gender. Akan names are deeply rooted in Ghanaian culture, where children are named after the day of the week they are born, and each name holds cultural and historical significance.

This project not only celebrates the rich heritage of the Akan people but also brings cultural education and fun engagement to users worldwide. Simply enter your date of birth and select your gender — the app handles the rest! It determines the exact day of the week you were born and provides your corresponding male or female Akan name.

### Features
- User-friendly interface for selecting date of birth and gender
- Instant display of the day of the week and matching Akan name
- Input validation to ensure only valid dates and gender selections are accepted
- Educational insight into Ghanaian naming traditions
- Lightweight, responsive, and accessible design

## Setup/Installation Requirements
* Clone or download the repository from [Akan Name Generator Repository](https://github.com/JxAmani/Akan-Name-Generator.git) on GitHub
* Navigate into the project folder
* Open the `index.html` file in any modern web browser
* No server setup or installation required
* Internet access not required after loading the page
* Ensure JavaScript is enabled in your browser
* Optionally, run BDD test files using Jest or Mocha from your terminal (Node.js must be installed)

## Behavior-Driven Development (BDD)
This application was developed with a behavior-driven approach to ensure clarity in expected user behaviors and outputs.

### BDD Scenarios
1. **Given** a user enters their date of birth and gender, **when** they submit the form, **then** the app should return their Akan name.
2. **Given** a user enters an invalid date (e.g., a future date or wrong format), **when** they submit the form, **then** the app should show an error message prompting them to enter a valid date.
3. **Given** a user leaves the gender field empty, **when** they submit the form, **then** the app should ask them to choose a gender.

### Tools for BDD
- **Cucumber** – For defining user behavior in a structured format
- **Jest** – For unit and integration testing of the logic
- **Mocha/Chai** – Optional JavaScript testing frameworks used for BDD-style assertions

## Technologies Used
- **HTML** – For building the structure of the web interface
- **CSS** – For styling, layout, and responsive design
- **JavaScript** – Core logic for calculating day of the week and assigning Akan names
- **Git** – Version control for codebase management
- **Jest / Mocha / Chai** – For testing BDD scenarios
- **Cucumber** – For writing human-readable test cases

## Known Bugs
- No known bugs at this time

## Support and Contact Details
📧 **Email**: Akannaming007@gmail.com
📱 **Phone**: 08123456789
🌐 **GitHub**: [Akan Name Generator Repository](https://github.com/JxAmani/Akan-Name-Generator.git)

Feel free to open an issue or fork the repo to contribute.

## License
This project is licensed under the MIT License.
Copyright (c) 2025 **Jeremy Amani**