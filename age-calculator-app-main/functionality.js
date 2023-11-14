const form = document.querySelector("form");
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener("submit", (event)=>{
    // prevent page from reloading as we want to use it here
        event.preventDefault();
    
    // get form data
        const formData = new FormData(form);
        // console.log(formData.get("day"));
        // console.log(formData.get("month"));
        // console.log(formData.get("year"));

    // use form data to calculate age
        const day = formData.get("day");
        const month = formData.get("month");
        const year = formData.get("year");

        // create date object
            const birthDate = new Date(year, month - 1, day);
            const birthTime = birthDate.getTime();
        // get current date
            const currentDate = new Date(Date.now());
            const currentTime = currentDate.getTime();
        // calc age in milliseconds
            const millAge = currentTime - birthTime;
        // calc age in years months and days
            const aYears = Math.floor(millAge / 1000 / 60 / 60 / 24 / 365.25);
            const aMonths = Math.floor(millAge / 1000 / 60 / 60 / 24 % 365.25 / 30.436875);
            const aDays = Math.floor(millAge / 1000 / 60 / 60 / 24 % 365.25 % 30.436875);
        // populating the DOM with the calculated values
            const yyyy = document.querySelector(".years");
            const mm = document.querySelector(".months");
            const dd = document.querySelector(".days");
            yyyy.textContent = aYears;
            mm.textContent = aMonths;
            dd.textContent = aDays;
})