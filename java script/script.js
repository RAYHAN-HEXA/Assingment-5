let accountBalance = 1000000000; // Initial account balance
let totalDonated = 0; // Track total donations
let donationCount = 0; // Track number of donations

// Function to handle donations
function donate(donationName, inputId) {
    const donationInput = document.getElementById(inputId);
    const donationAmount = parseFloat(donationInput.value);

    // Input Validation
    if (!donationAmount || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    if (donationAmount > accountBalance) {
        alert("Insufficient balance.");
        return;
    }

    // Update account balance and total donated amount
    accountBalance -= donationAmount;
    totalDonated += donationAmount;
    donationCount++; // Increment donation count

    // Add to history
    const historyList = document.getElementById("history-list");
    const date = new Date().toLocaleString();
    const historyItem = document.createElement("li");
    historyItem.textContent = `${date}: Donated BDT ${donationAmount} to ${donationName}`;
    historyList.appendChild(historyItem);

    // Clear input
    donationInput.value = "";

    // Update balance display in the navbar
    const balanceDisplay = document.querySelector(".balance-display");
    balanceDisplay.textContent = `${totalDonated} BDT`;

    // Update the donation count in the navbar
    const donationCountDisplay = document.querySelector(".donation-count-display");
    donationCountDisplay.textContent = ` (${donationCount})`;

    // Show donation confirmation alert
    alert(`Congratulations! You have donated BDT ${donationAmount}. Thank you for your generosity!`);
}

// Function to show the confirmation modal
function showModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.remove('hidden');
}

// Function to close the confirmation modal
function closeModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('hidden');
}

// Button functionality
document.getElementById("donation-btn").onclick = function () {
    document.getElementById("donation-section").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
};

document.getElementById("history-btn").onclick = function () {
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
};

// Close confirmation modal on button click
document.getElementById("close-modal-btn").onclick = function () {
    closeModal();
};
