const button = document.querySelector("#creator");

button.addEventListener("click", function () {
  const api_key = "RBPOlPeuprbZYFGh5ZZzapjSlEiLElU8tUsQbumv";

  const myRequest = new Request(
    "https://api.challonge.com/v1/tournaments.json?" + `api_key=${api_key}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: "tournament 1",
        description: "hahahaa"
      })
    }
  );

  fetch(myRequest)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
});
