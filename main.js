// function calculatePrice() {
//   //Get the selected options
//   const murti = document.getElementById("item").value;
//   const size = document.getElementById("size").value;
//   const material = document.getElementById("Material").value;
//   const carvin = document.getElementById("Carvin_Type").value;
//   const quantity = document.getElementById("quantity").value;

//   const murtiMapping = {
//     MarbelganeshMurti: 3000,
//     MarbelradhaKrishnaMurti: 3000,
//     MarbelBudhaStatue: 3000,
//     MarbelSaiBabaStatue: 3000,
//     MarbelRamDarbarStatue: 3000
//   }

//   const sizeMapping = {
//     "6Inch": 0,
//     "9Inch": 200,
//     "12Inch": 300,
//     "15Inch": 400,
//     "18Inch": 500,
//     "21Inch": 600,
//     "24Inch": 700,
//     "27Inch": 800,
//     "30Inch": 900,
//     "33Inch": 1000,
//     "36Inch": 1100,
//     "39Inch": 1200,
//     "42Inch": 1400,
//     "45Inch": 1600,
//     "48Inch": 1800

//   }

//   const materialMapping = {
//     IndianStone: 0,
//     MakranaStone: 300,
//     VietnamStone: 400
//   }

//   const carvinMapping = {
//     Standard: 0,
//     Premium: 200

//   }

//   console.log(murti);
//   console.log(size);
//   console.log(material);
//   console.log(carvin);

//   const totalPrice = (murtiMapping[murti] + sizeMapping[size] + carvinMapping[carvin] + materialMapping[material]) * quantity;

//   document.getElementById("price").innerHTML = "Total Price: $" + totalPrice;

//   console.log(totalPrice);
// }

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

// function calculatePrice() {
//   //Get the selected options
//   const murti = document.getElementById("item").value;
//   const size = document.getElementById("size").value;
//   const material = document.getElementById("Material").value;
//   const carvin = document.getElementById("Carvin_Type").value;
//   const quantity = document.getElementById("quantity").value;

//   const murtiMapping = {
//     MarbelganeshMurti: 3000,
//     MarbelradhaKrishnaMurti: 3000,
//     MarbelBudhaStatue: 3000,
//     MarbelSaiBabaStatue: 3000,
//     MarbelRamDarbarStatue: 3000
//   };

//   function calculatePrice(frameSize) {
//     let basePrice = 100;
//     let increment = 3;
//     let percentIncrease = 0.3;

//     if (frameSize <= 6) {
//       return basePrice;
//     } else {
//       let additionalInches = frameSize - 6;
//       let numIncrements = Math.floor(additionalInches / increment);
//       let totalIncrease = basePrice * percentIncrease * numIncrements;
//       return basePrice + totalIncrease;
//     }
//   }

//   const materialMapping = {
//     IndianStone: 0,
//     MakranaStone: 300,
//     VietnamStone: 400
//   };

//   const carvinMapping = {
//     Standard: 0,
//     Premium: 200
//   };

//   // Calculate the base price for the selected options
//   let totalPrice = (murtiMapping[murti] + base + carvinMapping[carvin] + materialMapping[material]) * quantity;

//   document.getElementById("price").innerHTML = "Total Price: $" + totalPrice.toFixed(2);

//   console.log(totalPrice);
// }


//   const finalPriceMapping = {
//     'six_Inch': 0,
//     'nine_Inch': murtiMapping[murti]*sizeMapping['six_Inch']*0.3,
//     'tweleve_Inch': murtiMapping[murti]*sizeMapping['nine_Inch']*0.3,
//     'fifteen_Inch': murtiMapping[murti]*sizeMapping['twelve_Inch']*0.3,
//     'eighteen_Inch':  murtiMapping[murti]*sizeMapping['fifteen_Inch']*0.3,
//     'twentyone_Inch':  murtiMapping[murti]*sizeMapping['eighteen_Inch']*0.3,
//     'twentryfour_Inch':  murtiMapping[murti]*sizeMapping['twentyone_Inch']*0.3,
//     'twentyseven_Inch':  murtiMapping[murti]*sizeMapping['twentryfour_Inch']*0.3,
//     'thirty_Inch':  murtiMapping[murti]*sizeMapping['twentyseven_Inch']*0.3,
//     'thirtythree_Inch': murtiMapping[murti]*sizeMapping['thirty_Inch']*0.3,
//     'thirtysix_Inch':  murtiMapping[murti]*sizeMapping['thirtythree_Inch']*0.3,
//     'thirtynine_Inch':  murtiMapping[murti]*sizeMapping['thirtysix_Inch']*0.3,
//     'fortytwo_Inch':  murtiMapping[murti]*sizeMapping['thirtynine_Inch']*0.3,
//     'fortyfive_Inch':  murtiMapping[murti]*sizeMapping['fortytwo_Inch']*0.3,
//     'fortyeight_Inch':  murtiMapping[murti]*sizeMapping['fortyfive_Inch']*0.3
// }
// const sizeMapping = {
  //   six_Inch: 0,
  //   nine_Inch: 0.3,
  //   tweleve_Inch: 0.3,
  //   fifteen_Inch: 0.3,
  //   eighteenInch: 0.3,
  //   twentyone_Inch: 0.3,
  //   twentryfour_Inch: 0.3,
  //   twentyseven_Inch: 0.3,
  //   thirty_Inch: 0.3,
  //   thirtythree_Inch: 0.3,
  //   thirtysix_Inch: 0.3,
  //   thirtynine_Inch: 0.3,
  //   fortytwo_Inch: 0.3,
  //   fortyfive_Inch: 0.3,
  //   fortyeight_Inch: 0.3
  // }