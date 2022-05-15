const firstName = "Dedi";
const lastName = "Kusnadi";
const fullName =  `${firstName} ${lastName}`;
const role = "Software Engineer";
const birthYear = 2000;
const gender = "Male";
const about = "I am eager to learn more and improve my skills in IT. I am able to work in teams and individuals. I experienced in developing various application programs using various programming languages and frameworks. I am also interested with new technology.";
const from = "Bogor, ID";
const liveIn = "Bogor, ID";
const linkedIn = "https://www.linkedin.com/in/dedi-kusnadi-388a89155/";

const educations = [
    { year: "2019 - Present", name: "Indraprasta PGRI University", description: "Computer Science" },
    { year: "2015 - 2018", name: "Wikrama Bogor Vocational High School", description: "Software Engineering" },
];

const experiences = [
    { year: "October 2020 - Present", name: "PT. Odeo Teknologi Indonesia", job: "Software Engineer", descriptions: [
        "Successfully implemented an integrated Warehouse Management System with various e-commerce platforms (JD.ID, Tokopedia, Blibli, Lazada and Zalora) using Laravel Framework",
        "Successfully implemented a new feature for BMT Paylater and Customer Information using Golang."
    ] },
    { year: "July 2019 - September 2020", name: "PT. Mitreka Solusi Indonesia", job: "Programmer", descriptions: [
        "Successfully re-engineering information systems and investment licensing services electronically from PHP to Python as BE using Django REST API",
        "Successfully made a daily report in mobile application of the ESDM RI using Flutter",
        "Successfully made an official travel application using Laravel Framework"
    ] },
    { year: "December 2018 - June 2019", name: "PT. Cranium Royal Aditama", job: "Programmer", descriptions: [
        "Successfully made a game application called klukoo as Mobile and API Developer using Flutter and Laravel Framework",
        "Successfully made a psychological test application using Laravel Framework"
    ] },
    { year: "May 2018 - November 2018", name: "PT. Solusi Awan Cerdas Indonesia", job: "Programmer", descriptions: [
        "Successfully made a car repair shop ERP application using Laravel Framework"
    ] },
];

$(document).ready(function () {
    setElementText($('.first-name'), firstName);
    setElementText($('.last-name'), lastName);
    setElementText($('.full-name'), fullName);
    setElementText($('.role'), role);
    setElementText($('.age'), (new Date()).getFullYear() - birthYear);
    setElementText($('.gender'), gender);
    setElementText($('.about'), about);
    setElementText($('.from'), from);
    setElementText($('.live-in'), liveIn);
    $('#copyright').text((new Date()).getFullYear());
    $('#linkedIn').text("LinkedIn").attr('href', linkedIn)
    renderEducations();
    renderExperiences();
});

function setElementText(element, text) {
    element.each(function(i, obj) {
        $(obj).text(text);
    });
}

function renderEducations() {
    let html = "";
    educations.forEach(element => {
        html += `<li>` +
            `<div class="title">${element.year}</div>` +
            `<div class="details">` +
            `<h5>${element.name}</h5>` +
            `<small class="fg-theme">${element.description}</small>` +
            `</div>` +
        `</li>`;
    });
    $('#education').html(html);
}

function renderExperiences() {
    let html = "";
    experiences.forEach(element => {
        html += `<li>` + 
        `<div class="title">${element.year}</div>` +
        `<div class="details">` +
          `<h5>${element.job}</h5>` +
          `<small class="fg-theme">${element.name}</small>` +
          element.descriptions.map(function (desc) {
              return `<p>${desc}</p>`
          }).join(`<br>`)+
        `</div>` +
      `</li>`;
    });
    $('#experience').html(html);
}