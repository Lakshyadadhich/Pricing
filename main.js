function calculatePrice() {
  //Get the selected options
  const murti = document.getElementById("item").value;
  const size = document.getElementById("size").value;
  const material = document.getElementById("Material").value;
  const carvin = document.getElementById("Carvin_Type").value;
  const quantity = document.getElementById("quantity").value;

  const murtiMapping = {
    MarbelganeshMurti: 2000,
    MarbelradhaKrishnaMurti: 2500,
    MarbelBudhaStatue: 3000,
    MarbelSaiBabaStatue: 3500,
    MarbelRamDarbarStatue: 4000
  }

  const sizeMapping = {
    "6Inch": 100,
    "9Inch": 200,
    "12Inch": 300,
    "15Inch": 400,
    "18Inch": 500,
    "22Inch": 600,
    "28Inch": 700,
    "34Inch": 800,
    "40Inch": 900,
    "44Inch": 1000
  }

  const materialMapping = {
    IndianStone: 200,
    MakranaStone: 300,
    VietnamStone: 400
  }

  const carvinMapping = {
    Standard: 100,
    Premium: 200

  }

  console.log(murti);
  console.log(size);
  console.log(material);
  console.log(carvin);

  const totalPrice = (murtiMapping[murti] + sizeMapping[size] + carvinMapping[carvin] + materialMapping[material] ) *quantity;

  document.getElementById("price").innerHTML = "Total Price: $" + totalPrice;

  console.log(totalPrice);

}