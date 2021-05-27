fetch('input.json')
  .then(response => response.json())
  .then(data => {
    let output = data;
    // change your data here //
    output.homeTown = output.homeTown.city;
    output.power = output.power.power.value;
    // change your data here -- ends //

    let jsonData = document.getElementById('json-data');
    jsonData.innerHTML = JSON.stringify(output,  null, 4);
  });