
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("INNER", a);
}

// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const ussername = "sumit"

    function tow(){
        const website = "youtube"
        // console.log(ussername)
    }
    // console.log(website)

    tow()
}

// one()

if(true){
    // const ussername = "sumit"
    // if(ussername === "sumit"){
        // const website = " youtube"
        // console.log(ussername + website);

    // }


    // console.log(website);
}
// console.log(ussername);




// ****************** interesting *****************

console.log(addone(5))

function addone(num) {
    return num + 1
    
}

addTow(5)
const addTow = function (num){
    return num + 2

}
