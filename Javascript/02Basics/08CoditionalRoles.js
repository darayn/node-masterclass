var user = "admin"


switch (user) {
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
        console.log("you get create/delete access");
        break;
    case "testprep":
        console.log("you get access to prepare test");
        break;
    case "user":
        console.log("you get access to consume content");
        break;    
    default:
        console.log("trial user");
        break;
}