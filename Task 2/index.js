const serverData = `
    {
        "list": [
            {
                "name": "Petr",
                "age": "20",
                "prof": "mechanic"
            },
            {
                "name": "Vova",
                "age": "60",
                "prof": "pilot"
            }
        ]
   }
`;

const data = JSON.parse(serverData);

console.log(data);

//Result
// {
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ];
// }
