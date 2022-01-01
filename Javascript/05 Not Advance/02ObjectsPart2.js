var User = {
    name: "",
    getuserName : function(){
        console.log(`Username is ${this.name}`);
    },
};

var hitesh = Object.create(User)
console.log(hitesh);
hitesh.name = "Hitesh Choudhary"
hitesh.getuserName()




var sam = Object.create(User, {
    name: { value : "sammy"},
    courseCount :{value : 3}
})


sam.getuserName()