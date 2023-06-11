const parser = new DOMParser();

const xmlString = `
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

result = { 
  list: []
}

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student")

studentNode.forEach (studentNode => {
  const nameNode = studentNode.querySelector("name");
  const firstName = nameNode.querySelector("first");
  const secondName = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const langAtr = nameNode.getAttribute('lang');
  
  const students = {
  lang: langAtr,
  name: `${firstName.textContent} ${secondName.textContent}`,
  age: ageNode.textContent,
  prof: profNode.textContent,
}
  result.list.push (students)
  console.log(result);
});