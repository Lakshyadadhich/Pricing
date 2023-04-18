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
    IndianStone: 0,
    MakranaStone: 300,
    VietnamStone: 400
  };

  const carvinMapping = {
    Standard: 0,
    Premium: 200
  };

  console.log(murti);
  console.log(size); // Print size for debugging
  console.log(material);
  console.log(carvin);

  // Calculate the base price for the selected options
  let totalPrice = (calculatePriceAccSize(size) + carvinMapping[carvin] + materialMapping[material]) * quantity;

  document.getElementById("price").innerHTML = "Total Price: $" + totalPrice.toFixed(2);

  console.log(totalPrice);
}
