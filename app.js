// local data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "./assets/64.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae labore aliquid, vero minima et voluptatem eligendi enim iusto, illum veniam incidunt eius quaerat quis. Magni doloribus reiciendis cumque accusantium."
    },
    {
        id: 2,
        name: "lynn johnson",
        job: "web designer",
        img: "./assets/2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae labore aliquid, vero minima et voluptatem eligendi enim iusto, illum veniam incidunt eius quaerat quis. Magni doloribus reiciendis cumque accusantium."
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "./assets/52.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae labore aliquid, vero minima et voluptatem eligendi enim iusto, illum veniam incidunt eius quaerat quis. Magni doloribus reiciendis cumque accusantium."
    },
    {
        id: 4,
        name: "bill gates",
        job: "founder",
        img: "./assets/21.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae labore aliquid, vero minima et voluptatem eligendi enim iusto, illum veniam incidunt eius quaerat quis. Magni doloribus reiciendis cumque accusantium."
    }
]

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// show person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent= item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show preview person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});