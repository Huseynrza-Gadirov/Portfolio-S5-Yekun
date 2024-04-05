

const closeBtn = document.getElementById("close")



//* const let HOISTING qaydalarina tabe
const getNavbariac = function() {
    overlayMenyu.classList.add("aktiv")
}

const getNavbariBagla = () => {
    overlayMenyu.classList.remove("aktiv")
}







navbarBtn.addEventListener('click', getNavbariAc)
closeBtn.addEventListener('click', getNavbariBagla)

//* Swiper JS kodlari

//* OOP


class Swiper {
    constructor(selector, parametrler){}
}

new Swiper()
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },

    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });

  //* blog


//* Javascript Object Notation

//* Blog melumatlarini getir

// function fetch() {
//   //* constructor metod

//   //* instance
//   return new Promise(resolve, reject)
// }

function fetchBlogs() {
  return new Promise ((resolve, reject) => {
    fetch("blogs.json")
    .then(cavab => {
      if(!cavab.ok) {
        throw new Error("Faylin oxunmasinda problem yashanir")
        //* 200 201 400 http status code
      }

      return cavab.json()

  })

  .then(bloglar => {
    localStorage.setItem("bloglarDepo", JSON.stringify(bloglar))
    resolve(bloglar)
  })
  .catch(xeta => reject(xeta))


})
}



//* const let block scope elementler
function getDataFromLocalStorage() {
  const blogs = localStorage.getItem("bloglarDepo")
  //* ternary operator
  return blogs ? JSON.parse(blogs) : null
}

function displayBlog(blogsParametr) {
  const blogYerlesheceyiDiv = document.querySelector(".blog-right-side")

  blogYerlesheceyiDiv.innerHTML = ''

  blogsParametr.forEach(birBlog=> {
//     <div class="blog">

// </div>

const divElementi = document.createElement("div")
divElementi.classList.add("blog")

divElementi.innerHTML = `
<span id="metadata">#{birBlog.tarix}</span>
<h3>#{birBlog.title}</h3>
<a href="./images/blogs/white-arrow.svg" class="text-white">Read the article</a>
`

blogYerlesheceyiDiv.appendChild(divElementi)

// <div> </div>
  })
}

"load", "DOMContentLoaded"
document.addEventListener("DOMContentLoaded", loadData)

//* const ve let -> Hoisting qaydalarina tabe deyil ! 

function loadData () {
  const blogs = getDataFromLocalStorage()
//* default olaraq true
  if(blogs) {
    console.log("Bloqlar yuklenir...")
    displayBlog(blogs)
  }
}

else {
  console.log("BLoglar localda yoxdur. Getdik internete")
  fetchBlogs()
  .then(sonMerheleBloglar => displayBlog(sonMerheleBloglar))
  .catch(hata => console.log(`Serverde gozlenilmez xeta ${hata.message}`))
}


// DOM elementlerin yaradilmasi createElement appendChild classList.add, createElement