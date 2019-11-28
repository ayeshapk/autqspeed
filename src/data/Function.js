export function createTableData(MODEL, ENGINE_POWER, RATED_PAYLOAD, HEAPED_CAPACITY, GUARANTEE) {
  return { MODEL, ENGINE_POWER, RATED_PAYLOAD, HEAPED_CAPACITY, GUARANTEE };
}

export const carTable = {
  rowA:[
    createTableData('Mazda 3 2017', 159, 6.0, 24, 4.0),
    createTableData('Mazda 3 2018', 237, 9.0, 37, 4.3),
    createTableData('Mazda 3 2019', 262, 16.0, 24, 6.0),
    createTableData('Mazda 2 2018', 305, 3.7, 67, 4.3),
    createTableData('Mazda 2 2019', 356, 16.0, 49, 3.9),
  ],
  rowB:[
    createTableData('Nisson Note 2017', 159, 6.0, 24, 4.0),
    createTableData('Nisson Note 2018', 237, 9.0, 37, 4.3),
    createTableData('Nisson Note 2019', 262, 16.0, 24, 6.0),
    createTableData('Nisson Note 2 2018', 305, 3.7, 67, 4.3),
    createTableData('Nisson Note 2 2019', 356, 16.0, 49, 3.9),
  ],
  rowC:[
    createTableData('Toyota Aqua 2017', 159, 6.0, 24, 4.0),
    createTableData('Toyota Aqua 2018', 237, 9.0, 37, 4.3),
    createTableData('Toyota Aqua 2019', 262, 16.0, 24, 6.0),
    createTableData('Toyota Aqua + 2018', 305, 3.7, 67, 4.3),
    createTableData('Toyota Aqua + 2019', 356, 16.0, 49, 3.9),
  ]
};

