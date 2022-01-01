const uno = () => {
    return "I am One";
}
// const dos =  () => {
//     setTimeout(()=>{
//         return "I am Two"
//     },3000)
// }


const dos =  () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("I am Two")
        },3000)
    })

}
const tres = () => {
    return "I am Three";
}


uno();
dos();
tres();


const callMe = async () => {
    let valOne = uno()
    console.log(valOne);
    let valTwo = await dos()
    console.log(valTwo);
    let valThree = tres()
    console.log(valThree);
}

callMe()