function retrieveDogPics() {
  fetch(`https://dog.ceo/api/breed/${getUserInput()}/images/random`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("An error occured. Please try again."));
}

function displayResults(responseJson) {
  if (responseJson.code === 404) {
    alert(`${responseJson.message}`);
    $("#type-of-dog").val("");
    console.log(responseJson);
    return;
  }
  else {
    $("section").html(`<h2>It's a ${getUserInput()}!</h2><div id="result-container"></div>`);
    $("#result-container").append(
      `<img src="${responseJson.message}" class="result-img" alt="Cool Doggo" />`
    );

    $(".result").removeClass("hidden");
    $("#type-of-dog").val("");
    } 
  }

function getDogListener() {
  $("form").submit((event) => {
    event.preventDefault();
    retrieveDogPics();
  });
}

function getUserInput() {
  const type = $("#type-of-dog").val();
  return type;
}

function handler() {
  getDogListener();
}

$(handler);
