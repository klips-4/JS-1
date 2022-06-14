// // const arr =[1,2,3,5,8];
// // const arr1 =[7,6,5];
// //
// // const notArr = 123;
// //
// // // // console.log(Array.isArray(arr));
// // // // console.log(Array.isArray(notArr));
// // //
// // // console.log(arr.length);
// // // console.log(arr.indexOf(2,2));
// // // console.log(arr.lastIndexOf(2));
// // // console.log(arr.concat(arr1));
// //
// // console.log(arr.push(1));
// // console.log(arr);
// //
// // console.log(arr.push(2));
// // console.log(arr);
// //
// // console.log(arr.pop());
// // console.log(arr);
// //
// // console.log(arr.shift());
// // console.log(arr);
//
// const obj = {
//     name: 'John',
//     age: 18,
//     working: true
// }
//
// console.log(obj)
// const obj_keys = Object.keys(obj);
// for (let i = 0; i < obj_keys.length; i++){
//     console.log(obj_keys[i] + ': ' + obj[obj_keys[i]])
// }


const employes = [];
const oldEmployes = [{
    name: '12',
    working: true
},{
    name: '11',
    working: true
},{
    name: '10',
    working: true
}];

for (let i = 0; i < oldEmployes.length;) {
    let tempEmployes = {...oldEmployes[i]}; //распаковка объекта --- {... }
    tempEmployes.Id = ++i;
    employes.push(tempEmployes);
}

// console.log(employes)
// console.log(oldEmployes)

const newEmployes = [{
    name: '17',
    working: true
},{
    name: '143',
    working: true
},{
    name: '234234',
    working: true
}];

const startLenth = employes.length;
for (let i = 0; i < newEmployes.length;) {
    let tempEmployes = {...newEmployes[i]}; //распаковка объекта --- {... }
    tempEmployes.Id = startLenth + i + 1;
    employes.push(tempEmployes);
}

/**
 *
 * @param employesNew
 */
function addEmployes(employesNew) {
    const startId = employes.length + 1;
        for (let i = 0; i < employes.length; i++) {
            let tempEmployes = {...employesNew[i]};
            tempEmployes.Id = startId + 1;
            employes.push(tempEmployes);
        }
}

addEmployes(employes)
console.log(employes)