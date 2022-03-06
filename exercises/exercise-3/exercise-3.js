let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [HotCakes, ApplePie, EggMcMuffin, SausageMcMuffin, HotCoffee, HashBrown] = order
console.log("QTY" + "       " + "ITEM" + "                 " + "TOTAL");
console.log(`${HotCakes.quantity}       ${HotCakes.itemName}              ${HotCakes.unitPrice}`)
console.log(`${ApplePie.quantity}       ${ApplePie.itemName}              ${ApplePie.unitPrice}`)
console.log(`${EggMcMuffin.quantity}       ${EggMcMuffin.itemName}           ${EggMcMuffin.unitPrice}`)
console.log(`${SausageMcMuffin.quantity}       ${SausageMcMuffin.itemName}       ${SausageMcMuffin.unitPrice}`)
console.log(`${HotCoffee.quantity}       ${HotCoffee.itemName}             ${HotCoffee.unitPrice}`)
console.log(`${HashBrown.quantity}       ${HashBrown.itemName}             ${HashBrown.unitPrice}`)
