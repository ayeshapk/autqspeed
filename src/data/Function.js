export function createTableData(MODEL, ENGINE, HP, Cooling, Fuel_Type,Cylinders,Engine_Disp,Weight) {
  return { MODEL, ENGINE: ENGINE, HP: HP, Cooling: Cooling, Fuel_Type: Fuel_Type ,Cylinders,Engine_Disp,Weight};
}

export const carTable = {
  rowA:[
    createTableData('2100C', 'Kawasaki', '18 1⁄2 HP', 'Air', 'Gas','2-cyl','603cc','970 lbs'),
  ],
  rowB:[
    createTableData('3400L', 'B&S Vanguard', '20HP', 'Air', 'Gas','2-cyl','627cc','1000 lbs'),
    createTableData('3400Y', 'Kubota', '22HP', 'Liquid', 'Diesel','3-cyl','898cc','1220 lbs'),
  ],
  rowC:[
    createTableData('4500K', 'B&S Vanguard', '31HP', 'Air', 'Gas','2-cyl','896cc','1340 lbs'),
    createTableData('4500P', 'Kawasaki', '31HP', 'Liquid', 'Gas','2-cyl','824cc','1575 lbs'),
    createTableData('4500Y', 'Kubota', '25HP', 'Liquid', 'Diesel','3-cyl','898cc','1655 lbs'),
    createTableData('4500Z', 'Kubota', '32.5HP', 'Liquid', 'Gas (Propane Ready)','3-cyl','962cc','1655 lbs'),
  ]
};

