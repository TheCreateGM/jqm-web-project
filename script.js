// Use the JQM pagecreate event to ensure the script runs when the page is ready
// Replace 'orderPage' with the actual ID you gave the data-role="page" div in order.html
$(document).on("pagecreate", "#orderPage", function () {
  // Attach a submit handler to the form
  $("#registrationForm").on("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    var name = $("#name").val().trim();
    var packageValue = $("input[name='package']:checked").val(); // Get the value (50 or 100)
    var numProjects = parseInt($("#noproject").val()); // Get number of projects and convert to integer

    var outputDiv = $("#output");
    outputDiv.html("<!-- Output will appear here -->"); // Clear previous output using html to remove previous content

    // --- JavaScript Validation ---

    // Validate Name
    if (name === "") {
      outputDiv.html(
        "<p style='color: red;'>Error: Please enter your Name.</p>",
      );
      return; // Stop execution if validation fails
    }

    // Validate Package selection
    if (!packageValue) {
      // Checks if a radio button is checked
      outputDiv.html(
        "<p style='color: red;'>Error: Please select a Package.</p>",
      );
      return;
    }

    // Validate Number of Projects
    if (isNaN(numProjects) || numProjects <= 0) {
      outputDiv.html(
        "<p style='color: red;'>Error: Please enter a valid Number of Projects (at least 1).</p>",
      );
      return;
    }

    // --- JavaScript Calculation ---

    var packageCost = parseInt(packageValue); // Already 50 or 100 from radio button value
    var totalCost = packageCost * numProjects;

    // --- Display Output on Page ---

    var resultHtml = "<p><b>Registration Details:</b></p>";
    resultHtml += "<p>Name: " + name + "</p>";
    resultHtml +=
      "<p>Package Cost per project: RM " + packageCost.toFixed(2) + "</p>"; // Format cost with 2 decimal places
    resultHtml += "<p>Number of Projects: " + numProjects + "</p>";
    resultHtml +=
      "<p><b>Total Estimated Cost: RM " + totalCost.toFixed(2) + "</b></p>"; // Format total with 2 decimal places

    outputDiv.html(resultHtml);
    outputDiv.css("color", "green"); // Style success message text color

    // Optional: Clear the form after successful processing
    // $("#registrationForm")[0].reset();
    // outputDiv.append("<p>Form submitted successfully!</p>"); // Add a success message after calculation
  });
});
