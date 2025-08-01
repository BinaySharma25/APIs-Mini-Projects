let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let img = document.getElementById("result");

async function getImage() {
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(e){
        console.log("error - ", e );
        return "No image found";
    }
}
async function showImg() {
    let image = await getImage();
    console.log(image);
    img.setAttribute("src", image);
}

btn.addEventListener("click", showImg);