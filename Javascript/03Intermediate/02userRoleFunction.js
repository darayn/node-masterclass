 


 var getUserRole = function (name, role){
     switch (role) {
         case "admin":
             return `${name} is admin with all access`
            //  break; // this is not necessary
         case "subadmin":
             return `${name} is subadmin with access to create and delete `
            //  break;
         case "testprep":
             return `${name} is testprep with access to create a test`
            //  break;
         case "user":
             return `${name} is user to consume content`
            //  break;
     
         default:
            return `${name} is trial user`

            //  break;
     }
 }

 console.log(getUserRole("hitesh", "testprep"))


 var getRole = getUserRole("DHanesh", "user")
 console.log(getRole);