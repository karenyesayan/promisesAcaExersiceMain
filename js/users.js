import {usersRequest} from './users.api.js';
export {getUsers};
// import {main} from './index.js';




// const getUsers = () => {
//     console.log(`Loading ...`);

//     const getData = async () => {
//         let resolvedData = await usersRequest();
//         let obj = await JSON.parse(resolvedData);
//         console.log(obj);
//       }

//       getData();

//     console.log(`Users are loaded`);
    

//     }


const getUsers = () => {
    

    const getData = async () => {
        console.log(`Loading ...`);
        let resolvedData = await usersRequest();
        let obj = await JSON.parse(resolvedData);
        console.log(obj);
        console.log(`Users are loaded`);
      }

      getData();

    
    

    }


// const getUsers = () => {
    
//     new Promise((resolve, reject) => {
//         console.log(`Loading ...`);
//         let resolvedData = usersRequest();
//         resolve(resolvedData);
      
//       }).then((data) => { 
      
//         let obj =  JSON.parse(data);
//         return obj;
      
//       }).then((obj) => { 
      
//         console.log(obj);
      
//       }).then((result) => {
//         console.log(`Users are loaded`);
      
//       });

//     }


