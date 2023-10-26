const fs = require('fs');

fs.promises.readFile('data.json', 'utf8')
    .then((data) => JSON.parse(data))
    .then((jsonData) => jsonData
        .filter((x) => x.ku === '13' && parseFloat(x.value) > 5)
        .map((x) => x.value.toString())
        .join('\n')
    )
    .then((filteredData) => fs.promises.writeFile('output.txt', filteredData, 'utf8'))
    .then(() => console.log('The data is processed and saved to a file output.txt'))
    .catch((error) => console.error('Error: ', error));
