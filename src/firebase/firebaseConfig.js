import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD02B5h8f19SjjGe_3ryMQucMjATvLrrCE",
  authDomain: "react-blog-app-c7d21.firebaseapp.com",
  databaseURL: "https://react-blog-app-c7d21-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-c7d21",
  storageBucket: "react-blog-app-c7d21.appspot.com",
  messagingSenderId: "369212497760",
  appId: "1:369212497760:web:ea5a5b520ee6636ba8c805"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database=firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {database as default,googleAuthProvider,firebase}

/*
// dogrudan set
set(ref(database), {
    title: "test3",
    author:{
        name:"furu"
    }

});

//title ozelligine gectik
set(ref(database,"title"),"app title");

set(ref(database,"author/name"),"furuuuu");

set(ref(database,"tags"),["a","b","c"]);
*/
/*
set(ref(database,"descr"),"app description")
.then(()=>{
  console.log("data inserted",new Date(Date.now()).toUTCString())
  set(ref(database,"items"),["item1","item2","item3"]).then(()=>{
    console.log("items inserted")
  }).catch((e)=>{
    console.log("item insert error: ",e)
  })
})
.catch((e)=> {
  console.log("insert error",e)
});
*/
/*
remove(ref(database,"items")).then(()=>{
  console.log("deleted")
}).catch((e)=>{
  console.log("Delete-Error",e)
})
*/

/*
set(ref(database),null)
*/
/*
update(ref(database),{
  "author/name":"Furu",
  descr:'my descrr'
})
*/
/*
update(ref(database,"author"),{
  name:"Furuuuu",
})*/

// onValue veritabanını dinliyor değişiklik olursa uygulama etkileniyor
// sadece bir defa bilgi almak istersek get kullanabiliriz
/*
get(ref(database,"author/name")).then((snapshot)=>console.log(snapshot.val()))

onValue(ref(database,"author/name"),(snapshot)=>{
  console.log(snapshot.val())
})
*/
/*
const blogs = {
  101:{
    id:"0",
    title:"A"
  },
  102:{
    id:"1",
    title:"B"
  },
  103:{
    id:"1",
    title:"C"
  }
}

const users = {
  "furkan":{
    id:"0",
    title:"Furu1"
  },
  "furkan2":{
    id:"1",
    title:"Furu2"
  },
}
*/
/*
set(ref(database),{
  blogs,
  users
})*/

/*
get(ref(database,"blogs/101")).then((snapshot)=>console.log(snapshot.val()))

get(ref(database,"users/furkan")).then((snapshot)=>console.log(snapshot.val()))


push(ref(database,"users"),{
  id:'TestUser',
  title:'asdasd'
})
*/
/*
push(ref(database,"cars"),{
  brand:'Chevrolet',
  model:'Camaro'
})
push(ref(database,"cars"),{
  brand:'Nissan',
  model:'GTR'
})
*/
/*
get(ref(database,"cars"))
    .then((snapshot)=>{
      const cars=[]

      snapshot.forEach((car)=>{
        cars.push({
          id:car.key,
          ...car.val()
        })
      });

      console.log(cars)
    })
*/
/*
onValue(ref(database,"cars"),(snapshot)=>{
  const cars=[]

      snapshot.forEach((car)=>{
        cars.push({
          id:car.key,
          ...car.val()
        })
      });
      console.log(cars)
})
*/
/*
onChildRemoved(ref(database,"cars"),(snapshot)=>{
  console.log(snapshot.key,snapshot.val())
})

onChildChanged(ref(database,"cars"),(snapshot)=>{
  console.log(snapshot.key,snapshot.val())
})

onChildAdded(ref(database,"cars"),(snapshot)=>{
  console.log(snapshot.key,snapshot.val())
})

push(ref(database,"cars"),{
  brand:'Ford',
  model:'Mustang'
})

console.log("Application Started",new Date(Date.now()).toUTCString())
*/