var gradovi = [
    {
        num: 1,
        naziv: "Podgorica",
        regija: "Srednja",
        populacija: 150000,
        znamenitost1: "Dvorac Petrovića",
        znamenitost2: "Gorica",
        znamenitost3: "Medun",
        foto: "podgorica.jpg"
    },
    {
        num: 2,
        naziv: "Nikšić",
        regija: "Srednja",
        populacija: 60000,
        znamenitost1: "Carev most",
        znamenitost2: "Trebjesa",
        znamenitost3: "Krupac",
        foto: "niksic.jpg"
    },
    {
        num: 3,
        naziv: "Budva",
        regija: "Južna",
        populacija: 20000,
        znamenitost1: "Stari grad",
        znamenitost2: "Slovenska plaža",
        znamenitost3: "Ostrvo sv Nikola",
        foto: "budva.jpg"
    },
    {
        num: 4,
        naziv: "Bijelo Polje",
        regija: "Sjeverna",
        populacija: 20000,
        znamenitost1: "Đalovića pećina",
        znamenitost2: "Novakovića pećina",
        znamenitost3: "Lim",
        foto: "bijelopolje.jpg"
    },
]
function displayCitiesAsTable() {
    let tableContent = "";
    gradovi.forEach((grad) => { //
        tableContent += `<tr>
        <td>${grad.num}</td>
        <td><a id="link" href="http://google.com/search?q=${grad.naziv}" target="blank">${grad.naziv}</a></td>
        <td>${grad.regija}</td>
        <td>${grad.populacija}</td>
        <td><ul>
        <li>${grad.znamenitost1}</li>
        <li>${grad.znamenitost2}</li>
        <li>${grad.znamenitost3}</li>
        </ul></td>
        <td><img src=${grad.foto} height = "100px" width="190px"></td>
        </tr>`
    });
    document.getElementById('cities_body').innerHTML = tableContent;
}




displayCitiesAsTable();


