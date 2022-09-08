const serverData = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(serverData, 'text/xml');
const students = xmlDOM.querySelectorAll('student');

const mainObj = new Object();
mainObj.list = [];

students.forEach(student => {
    const obj = new Object();

    obj.name = student.querySelector('first').textContent + ' ' + student.querySelector('second').textContent;
    obj.age = student.querySelector('age').textContent;
    obj.prof = student.querySelector('prof').textContent;
    obj.lang = student.querySelector('name').getAttribute('lang');

    mainObj.list.push(obj);
});

console.log(mainObj);

// Result =============
// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ];
// }
