function calculatePrice() {
  // Get the selected options
  const murti = document.getElementById("item").value;
  const size = parseInt(document.getElementById("size").value); // Convert size to an integer
  const material = document.getElementById("Material").value;
  const carvin = document.getElementById("Carvin_Type").value;
  const quantity = parseInt(document.getElementById("quantity").value); // Convert quantity to an integer

  const murtiMapping = {
    MarbelganeshMurti: 3000,
    MarbelradhaKrishnaMurti: 4000,
    MarbelBudhaStatue: 3000,
    MarbelSaiBabaStatue: 3000,
    MarbelRamDarbarStatue: 3000
  };

  function calculatePriceAccSize(size) {
    let basePrice = murtiMapping[murti];
    let increment = 3;
    let percentIncrease = 0.3;
    let totalIncrease = 0;

    if (size <= 6) {
      return basePrice;
    } else {
      for (let i = 9; i <= size; i += increment) {
        totalIncrease += (basePrice * percentIncrease);
        basePrice += (basePrice * percentIncrease);
      }
      return basePrice;
    }
  }

  const materialMapping = {
    "1": "IndianStone",
    "2": "MakranaStone",
    "3": "VietnamStone"
  };

  function calculatePriceAccMate(calculatePriceAccSize, material) {
    const selectedMaterial = materialMapping[material];
    if (selectedMaterial === "IndianStone") {
      return calculatePriceAccSize;
    } else {
      return calculatePriceAccSize * 2;
    }
  }

  const carvinMapping = {
    Standard: 0,
    Premium: 0.2
  };

  console.log(murti);
  console.log(size); // Print size for debugging
  console.log(material);
  console.log(carvin);

  // Calculate the base price for the selected options
  let basePrice = calculatePriceAccSize(size);
  if (materialMapping[material] !== "IndianStone") {
    basePrice *= 2; // Double the base price for materials other than IndianStone
  }
  let carvinAddon = basePrice * carvinMapping[carvin]; // Calculate the carvin addon
  let totalPrice = (basePrice + carvinAddon) * quantity; // Add the carvin addon to the base price and calculate the total price

  document.getElementById("price").innerHTML = "Total Price: $" + totalPrice.toFixed(2);

  console.log(totalPrice);
}
