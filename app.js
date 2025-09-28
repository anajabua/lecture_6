// Homework Task – Movie Downloader Simulation Task Description: You are building a fake movie downloader.

// Each “download” is just a Promise with a timeout. Create three functions: 
// downloadMovie1() → resolves "Movie 1 downloaded" after 1 second 
// downloadMovie2() → resolves "Movie 2 downloaded" after 2 seconds 
// downloadMovie3() → resolves "Movie 3 downloaded" after 3 seconds 


function downloadMovie1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Movie 1 downloaded"), 1000)
  })
}

function downloadMovie2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Movie 2 downloaded"), 2000)
  })
}

function downloadMovie3() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Movie 3 downloaded"), 3000)
  })
}

// Part A – Sequential Write an async function that downloads all three 
// movies one by one (using await for each). Print the result of each movie as soon as it finishes. 

async function downloadSequential() {

  const movie1 = await downloadMovie1()
  console.log(movie1)

  const movie2 = await downloadMovie2()
  console.log(movie2)

  const movie3 = await downloadMovie3()
  console.log(movie3)
}


// Part B – Parallel with Promise. all Write an async function that downloads all three movies 
// at the same time. Use Promise.all and print the array of results. 

async function downloadParallel() {

  const results = await Promise.all([
    downloadMovie1(),
    downloadMovie2(),
    downloadMovie3()
  ])

  console.log(results)
}


// Part C – Fastest with Promise.race Write an async function that starts all three downloads.
// Use Promise.race to print which movie finishes first.

async function downloadFastest() {

  const finishFirst = await Promise.race([
    downloadMovie1(),
    downloadMovie2(),
    downloadMovie3()
  ])

  console.log("Finishes first:", finishFirst)
}


(async function main() {
  await downloadSequential()

  await downloadParallel()

  await downloadFastest()
})()
