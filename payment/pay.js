let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
        
let divs = document.querySelectorAll(".content2 > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click",function(e)
            {
                tabs.forEach((ele)=>{
                    ele.classList.remove("activeTab");
                });
                e.currentTarget.classList.add("activeTab");
                divsArray.forEach((div)=>{
                div.style.display="none";
                });
                // console.log(e.currentTarget.dataset.cont);
                document.querySelector(e.currentTarget.dataset.cont).style.display="block";
            });
        });