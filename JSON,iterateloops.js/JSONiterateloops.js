// JSON, iterate over all for loops (for,forin,for of ,forEach):
//a. for
let myResume = {
    name : "Anitha Kumar",
    age : "23",
    gender : "Female",
    Nationality : "Indian",
    email : "anithakumarak162k@gmail.com",
    phone : "6380122641",
    summary : "Expertise in microbial taxonomy, identification, and microbiome analysis",
    address : {
        city : "Chennai",
        state : "Tamilnadu",
        country : "India"
    },
    work : "Fresher",
    skill : ["ms excel","Microbiology Research"],
    education : {
        college : "Annamalai University",
        degree : "b.sc(Hons)Agriculture",
        year : 2022
    },
    additionaleducation : ["Diploma degree in ABM","Diploma degree in HNM"],
    project : ["Flour mill visit and create the project about process","Disect and produce plant pollination","Make biomicrobial fertilizer"],
    hobbies : ["reading","story writing","playing badminton"]
}

//a. for
let arr = Object.keys(myResume)
for (let i = 0; i < arr.length; i++) {
    key = arr[i]
    console.log(key, myResume[key])
}

//b. for in
for (let key in myResume ) {
    console.log(key, myResume[key])
}

//c. for of
for (let key of Object.keys(myResume)) {
    console.log(key, myResume[key])
}

//d. forEach
Object.keys(myResume).forEach(key => {
    console.log(key, myResume[key]);
})
   

