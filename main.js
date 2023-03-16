const btnEL= document.getElementById("btn");
const jokeEL = document.getElementById("joke");
const apikey = "cL8CrpQmMTDg3PHxJQLAXA==cnmP6Jjslk85uhPZ";
const options={
    method: "get",
    headers: {
        "X-Api-Key": apikey,
    },
    
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";




async function getjoke(){
    const response  = await fetch(apiURL,options);
    const data = await response.json();

    jokeEL.innerText = data[0].joke;
}
btnEL.addEventListener("click",getjoke);