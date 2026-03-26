// javascript execute code in a synchronous manner (one line at a time, after that line next line)
// console.log("Hello welcome")
// console.log("HEY GOOD EVENING")
// console.log(50 + 50)


// console.log("Hello welcome")
// console.log(jfdkjjjkffk)
// console.log("HEY GOOD EVENING")
// console.log(50 + 50)



// setTimeout(callback, timeout)
// setInterval(callback , interval)

// function newfn() {
//     console.log("Hello welcome to javascript")
// }
// setTimeout(newfn,5000)
// setInterval(newfn,3000)

// setTimeout(() => {
//     console.log("Time out executed")
// } , 4000 )



// console.log("first result")

// setTimeout(() => {
//     console.log("Second result")
// }, 3000)

// console.log("Third result")



// console.log("Start")

// setTimeout(() => {
//    console.log("Timeout 1") 
// }, 4000);

// setTimeout(() => {
//     console.log("Timeout 2")
// }, 1500)

// console.log("End")


// promises : wait a block of code
// syntax : new Promise(CALLBACK)

// const myPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Timeout function")
//         resolve('success')
//     }, 4000)
// })

// console.log("Start")
// myPromise
//     .then(() => {})
//     .then(() => console.log("End"))
//     .catch( (error)=> console.log(error))



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Timeout function")
        resolve('success')
    }, 4000)
})

async function run() {
    try {
        console.log("Start")

        await myPromise

        console.log("End")
        
    } catch (error) {
        console.log(error)
    }
}

run()