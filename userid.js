function getStringFromUrl(url){
  const getStringFromUrl = url.split('/')
  const index = getStringFromUrl[2]
  return index;
}


function getSpecificIndex(users,index){
  const specificindex = users[index]
 return specificindex;
}

// create node js server
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const users = [
        {
            name: "Iliyas Hassan",
            email: "hassan@gmail.com"
        },
        {
            name: "Jamiu Olalekan",
            email: "olalekan@gmail.com",
        },
        {
            name: "Abdul Qudus Oyelami",
            email: "oyelamiqudus@gmail.com"
        }
    ]
    console.log(url);
    if (url === "/user") {
        res.end(`These are the registered users: ${JSON.stringify(users)}`);
    }
    else if (url.match(/^\/user\/\d$/)) {
        console.log("this is trying to access a specific resource.");
        const arrayOfStrings = url.split("/");
        console.log(arrayOfStrings);
        const index = arrayOfStrings[2];
        const userAtIndex = users[index]
        res.end(`You made a request with the path id: ${JSON.stringify(userAtIndex)}`);
    }
    else if (url.match(/\/user\/\d\/.+/)){
      console.log('this is try to run the special resources');
      const index = getStringFromUrl(url)
      
      if(index > users.length -1){
        res.end ('this resquest is not available');
        return;
      }
      // const user2 = { 
      //   name : "arije muhammed",
      //   age :  25,
      //   email : 'arijemuhammed14@gmail.com',
      // }
  
       const biodata = users[2] 
      res.end (`These are the users biodata ${JSON.stringify(biodata)}`);
   }
    else {
        const devName = "Akoni Mayowa";
        res.end('Hello from' + ' ' + devName);
    }
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});