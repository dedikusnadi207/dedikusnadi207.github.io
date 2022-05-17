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

const skillTypes = [
    {name: "All", data: "*"},
    {name: "Programming Language", data: ".programming-language"},
    {name: "Framework", data: ".framework"},
    {name: "DBMS", data: ".dbms"},
    {name: "Caching", data: ".caching"},
    {name: "Versioning", data: ".versioning"},
];

const skillItems = [
    {name: "PHP", image: "assets/img/php.png", type: "programming-language"},
    {name: "Javascript", image: "assets/img/js.png", type: "programming-language"},
    {name: "Golang", image: "assets/img/go.webp", type: "programming-language"},
    {name: "Python", image: "assets/img/python.png", type: "programming-language"},
    {name: "Laravel", image: "assets/img/laravel.png", type: "framework"},
    {name: "Django REST", image: "assets/img/django.png", type: "framework"},
    {name: "PostgreSQL", image: "assets/img/postgresql.png", type: "dbms"},
    {name: "MySQL", image: "assets/img/mysql.png", type: "dbms"},
    {name: "Redis", image: "assets/img/redis.png", type: "caching"},
    {name: "Git", image: "assets/img/git.png", type: "versioning"},
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
    renderSkillTypes();
    renderSkillItems();
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

function renderSkillTypes() {
    let html = "";
    skillTypes.forEach(element => {
        html += `<button class="btn btn-theme-outline ${html == '' ? 'selected' : '' }" data-filter="${element.data}">${element.name}</button>`;
    });
    $("#skill-types").html(html);
}

function renderSkillItems() {
    let html = "";
    skillItems.forEach(element => {
    //     html += `<div class="grid-item apps wow zoomIn">
    //     <div class="card card-service wow fadeInUp">
    //       <div class="icon">
    //         <img src="assets/img/php.png" alt="" style="object-fit: contain;">
    //       </div>
    //       <div class="caption">
    //         <h4 class="fg-theme">PHP</h4>
    //       </div>
    //     </div>
    //   </div>`
        html += `<div class="grid-item ${element.type} wow zoomIn">
        <div class="card card-service wow fadeInUp">
          <div class="icon">
            <img src="${element.image}" alt="" style="object-fit: contain;">
          </div>
          <div class="caption">
            <h4 class="fg-theme">${element.name}</h4>
          </div>
        </div>
      </div>`;
    });
    $("#skill-items").html(html);
}