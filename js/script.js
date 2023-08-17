// set current year
const yearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;


// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
    headerEl.classList.toggle("nav-open");
})


// smooth scrolling animation
const allLinks = document.querySelectorAll("a:link")
allLinks.forEach(function (link){
    link.addEventListener("click", function (e){
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);

        //when scroll back to top
        if(href === "#"){
             window.scrollTo({
                 top: 0,
                 behavior: "smooth"
             });
        }
        // when scroll to other links
        if(href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: 'smooth'});
        }
        // close mobile navigation
        if(link.classList.contains("main-nav-link")){
            headerEl.classList.toggle("nav-open");
        }
    });
})

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(function (entries){
    const entry = entries[0];
    if(!entry.isIntersecting)
        document.body .classList.add("sticky")

    if(entry.isIntersecting)
        document.body .classList.remove("sticky")
    }
    ,
    {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
})
observer.observe(sectionHeroEl);