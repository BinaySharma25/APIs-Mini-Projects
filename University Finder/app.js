let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
let input = document.querySelector("input");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colArr = await getColleges(country);
    show(colArr);
});

input.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        let country = input.value;
        let colArr = await getColleges(country);
        show(colArr);
    }
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for (col of colArr){
     
        let li = document.createElement("li");
        
        let universityInfo = `
            <div class="university-card">
                <h3>${col.name}</h3>
                <p class="country">📍 ${col.country}${col['state-province'] ? `, ${col['state-province']}` : ''}</p>
                ${col.web_pages && col.web_pages.length > 0 ? 
                    `<p class="website">🌐 <a href="${col.web_pages[0]}" target="_blank">${col.web_pages[0]}</a></p>` : 
                    '<p class="website">🌐 Website not available</p>'
                }
            </div>
        `;
        
        li.innerHTML = universityInfo;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch (e) {
        console.log("error : ", e);
        return [];
    }
}