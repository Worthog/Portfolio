import moment from 'moment'



// if (!Object.entries) {
//   Object.entries = function( obj ){
//     var ownProps = Object.keys( obj ),
//         i = ownProps.length,
//         resArray = new Array(i); // preallocate the Array
//     while (i--)
//       resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
//     return resArray;
//   };
// }

export const objectToArray = (object) => {
   if (object) {
     return Object.entries(object).map(e => Object.assign(e[1], {id: e[0]}))
   }
}


// export const keyobjectToArray = (object) => {
  
//     let arr = [];
//     Object.keys(object).forEach ( key => {
//       const value = object[key];   
//       arr.push( [key], value ); 

//     });
    
//     console.log("Arr=", arr);   
//     return arr 
    
//   }



// Above code soes not work on safari - use object.keys instead. 

// var arr = Object.keys(obj).map(function (key) {
//   return { [key]: obj[key] };
// });

export const newobjectToArray = (object) => {
  if (object) {
    // first assign id to object gettingit from the object
    
    // var newobject = object.map(e => Object.assign(e[1], {id: e[0]}))
    // console.log ("Newobject =" , newobject ); 
    // var value = 
    let arr = [];
    arr = Object.keys(object).map(function (key) {
      return { [key]: object[key] };
    });
    


   
    console.log("Arr=", arr);   
    return arr 
    // return Object.entries(object).map(e => Object.assign(e[1], {id: e[0]}))

    // Object.keys(object).forEach( key => {
    //   let value = object[key];
    //   arr.push( key={key}, value={value});              
    //   });

   

  
  


  }
}


export const createNewEvent = (user, photoURL, event) => {
  event.date = moment(event.date).toDate();
  return {
    ...event,
    hostUid: user.uid,
    hostedBy: user.displayName,
    hostPhotoURL: photoURL || '/assets/user.png',
    created: Date.now(),
    attendees: {
      [user.uid]: {
        going: true,
        joinDate: Date.now(),
        photoURL: photoURL || '/assets/user.png',
        displayName: user.displayName,
        host: true
      }
    }
  }
}

export const createDataTree = dataset => {
    let hashTable = Object.create(null);
    dataset.forEach(a => hashTable[a.id] = {...a, childNodes: []});
    let dataTree = [];
    dataset.forEach(a => {
        if (a.parentId) hashTable[a.parentId].childNodes.push(hashTable[a.id]);
        else dataTree.push(hashTable[a.id])
    });
    return dataTree
};