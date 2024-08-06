//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
btn.addEventListener("click",()=>{
	 Promise.all(images.map(downloadImages))
	.then(displayImages)
	.catch(err=>console.log(err))
})
function downloadImages(image) {
	return new Promise((resolve,reject)=>{
		const img=new Image();
		img.src=image.url;
		img.onload=()=>resolve(img);
		img.onerror=()=>reject(`Failed to load image's URL: ${image.url}`)
	})
}
function displayImages(images) {
	 output.innerHTML = "";
  images.forEach((img) => {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = true;
    const imgElement = document.createElement("img");
    imgElement.src = img.src;
    imgElement.alt = "Downloaded Image";
    link.appendChild(imgElement);
    output.appendChild(link);
  });
}