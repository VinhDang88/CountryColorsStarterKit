class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://i.kym-cdn.com/entries/icons/mobile/000/030/157/womanyellingcat.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700" );
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "https://i.kym-cdn.com/photos/images/newsfeed/001/439/881/ed5.png" )
let brazil = new Country("Brazil", "Portguese", "Oi", ["blue", "yellow", "green"], "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2013%2F05%2Fb31.jpg&q=60" )
//let country;

function SwitchCountry() {
    
    let input = document.querySelector("#CountryList");

    if (input.value === "USA") {

        DisplayCountry(usa);
    }
    else if (input.value === "Mexico") {
        DisplayCountry(mexico);
    }
    else if (input.value === "Algeria") {
        DisplayCountry(algeria);  
    }

    else if (input.value === "Brazil") {
        DisplayCountry(brazil);
    }

}

function DisplayCountry(country) {
    let countryName = document.querySelector("#CountryName");
    let officalLanguage = document.querySelector("#OfficialLanguage")
    let helloWorld = document.querySelector("#HelloWorld")
    let color1 = document.querySelector("#Color1")
    let color2 = document.querySelector("#Color2")
    let color3 = document.querySelector("#Color3")
    let countryFlag = document.querySelector("#countryFlag");

    countryName.innerText = country.name;
    officalLanguage.innerText = country.lang;
    helloWorld.innerText = country.greeting;
    color1.style.backgroundColor = country.colors[0];
    color2.style.backgroundColor = country.colors[1];
    color3.style.backgroundColor = country.colors[2];
    countryFlag.setAttribute("src", country.flag);
}
