const form = document.querySelector("form")

const results = document.querySelector("#results")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    
    if(height < 0 || isNaN(height) || height ==="" ){
        results.innerHTML = `Please Enter Valid height`;
    } else if(weight < 0 || isNaN(weight) || weight ==="" ){
        results.innerHTML = `Please Enter Valid weight`;
    } else {
        let status
        const bmi = ((weight/(height*height))*1000).toFixed(2)
        if (bmi < 18.6){
            status = "Need to gain some weight!"
        } else if (bmi > 24.9 ){
            status = "Need to lose some weight!"
        } else {
            status = "It's normal. Keep it up"
        }
        results.innerHTML = `Your BMI weight is : ${bmi} <br>${status}`;
    }
})
