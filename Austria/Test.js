const CO2e_Strommix = 200;
const CO2e_Photovoltaik = 50;

// sources is your generated pv in kWh
// Function to calculate CO2e emissions
function calculateCO2e(sources) {
  var res = document.getElementById("result");

  var co2eResult = sources * (CO2e_Strommix - CO2e_Photovoltaik);

  res.innerHTML = co2eResult;
  return co2eResult;
}

// Export the function to make it accessible from other files
module.exports = calculateCO2e;

