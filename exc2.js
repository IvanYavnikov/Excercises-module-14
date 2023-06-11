const jsonString = `
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
`

const data = JSON.parse(jsonString);
const list = data.list

result = {
  list: []
}

list.forEach (item => {
  const userList = {
    name: item.name,
    age: item.age,
    prof: item.prof
  }
  result.list.push (userList);
  
});
console.log(result);