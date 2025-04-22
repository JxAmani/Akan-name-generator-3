function calculateAkanName() {
    const birthdateInput = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
    const resultDiv = document.getElementById('result');

    if (!birthdateInput || !gender) {
        resultDiv.textContent = 'Please enter both your date of birth and gender.';
        return;
    }

    const birthdate = new Date(birthdateInput);
    const year = birthdate.getFullYear();
    const YY = year % 100; // Last two digits of the year
    const MM = birthdate.getMonth() + 1; // Month (1-12)
    const DD = birthdate.getDate(); // Day of the month (1-31)
    const CC = Math.floor(year / 100); // First two digits of the year (century)

    // Your Provided Formula (with corrections for syntax)
    const dayOfWeek = Math.floor((CC / 4) - 2 * CC - 1) + Math.floor((5 * YY / 4)) + Math.floor((26 * (MM + 1)) / 10) + DD - 1;
    const dayIndex = dayOfWeek % 7;

    // Ensure the dayIndex is within the valid range (0-6)
    const adjustedDayIndex = (dayIndex + 7) % 7;

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName = '';
    if (gender === 'male') {
        akanName = maleNames[adjustedDayIndex];
    } else if (gender === 'female') {
        akanName = femaleNames[adjustedDayIndex];
    }

    if (akanName) {
        resultDiv.textContent = `Your Akan name is: ${akanName}`;
    } else {
        resultDiv.textContent = 'There was an error calculating your Akan name.';
    }
}