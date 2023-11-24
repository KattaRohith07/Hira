function predict() {
    var predictionType = document.getElementById('predictionType').value;
    if (!predictionType) {
        alert('Please select an option before predicting.');
        return;
    }
    var dateInput = window.prompt("Enter the date (YYYY-MM-DD):");
    var timeInput = window.prompt("Enter the time (HH:mm):");
    if (!dateInput || !timeInput) {
        alert('Invalid date or time. Please try again.');
        return;
    }
}

