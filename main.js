$(document).on("pagecreate", "#support", function () {
  $("#registrationForm").on("submit", function (event) {
    event.preventDefault();

    // Get form values
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var packageValue = $("input[name='package']:checked").val();
    var packageText = $("input[name='package']:checked").next("label").text();
    var numProjects = parseInt($("#noproject").val());

    // Validate inputs
    if (name === "") {
      showError("Please enter your full name");
      return;
    }

    if (email === "" || !email.includes("@")) {
      showError("Please enter a valid email address");
      return;
    }

    if (!packageValue) {
      showError("Please select a service package");
      return;
    }

    if (isNaN(numProjects) || numProjects < 1) {
      showError("Please enter a valid number of projects (minimum 1)");
      return;
    }

    // Calculate total
    var packageCost = parseInt(packageValue);
    var totalCost = packageCost * numProjects;

    // Generate random order number
    var orderNumber = "AXO-" + Math.floor(Math.random() * 1000000);

    // Store order data for receipt
    var orderData = {
      orderNumber: orderNumber,
      name: name,
      email: email,
      package: packageText,
      projects: numProjects,
      price: packageCost,
      total: totalCost,
      date: new Date().toLocaleDateString(),
    };

    // Store in session storage
    sessionStorage.setItem("currentOrder", JSON.stringify(orderData));

    // Redirect to receipt page
    $.mobile.changePage("#receipt", { transition: "slide" });
  });

  function showError(message) {
    $("#output").html(
      '<div class="ui-body ui-body-a ui-corner-all">' +
        '<p style="color: red;">Error: ' +
        message +
        "</p>" +
        "</div>",
    );
  }
});

// Populate receipt page
$(document).on("pagebeforeshow", "#receipt", function () {
  var orderData = JSON.parse(sessionStorage.getItem("currentOrder"));

  if (orderData) {
    $("#receipt-order-number").text(orderData.orderNumber);
    $("#receipt-date").text(orderData.date);
    $("#receipt-name").text(orderData.name);
    $("#receipt-email").text(orderData.email);
    $("#receipt-package").text(orderData.package);
    $("#receipt-projects").text(orderData.projects);
    $("#receipt-price").text("RM " + orderData.price.toFixed(2));
    $("#receipt-total").text("RM " + orderData.total.toFixed(2));
  }
});

// Print receipt
$(document).on("click", "#printReceipt", function () {
  window.print();
});

// Music player functionality
$(document).on("pagecreate", "#home", function () {
  var music = document.getElementById("lofiMusic");
  var musicButton = $("#toggleMusic");
  var isPlaying = false;

  // Toggle music playback
  musicButton.on("click", function (e) {
    e.preventDefault();

    if (isPlaying) {
      music.pause();
      musicButton.removeClass("ui-icon-pause").addClass("ui-icon-music");
    } else {
      music.play();
      musicButton.removeClass("ui-icon-music").addClass("ui-icon-pause");
    }

    isPlaying = !isPlaying;
  });

  // Pause music when leaving home page
  $(document).on("pagecontainerhide", function (event, ui) {
    if (ui.prevPage.attr("id") === "home") {
      music.pause();
      musicButton.removeClass("ui-icon-pause").addClass("ui-icon-music");
      isPlaying = false;
    }
  });
});
