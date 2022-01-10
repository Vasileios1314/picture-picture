const videoElement = document.getElementById("video")
const button = document.getElementById("button")

// prompt to select a media stream, to pas to video el and play.
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){
        // catch error
        console.log("Oops!")
    }
}
// 
button.addEventListener("click", async() => {
// disable btn
button.disabled = true;
// start p in p
await videoElement.requestPictureInPicture();
// reset btn
button.disabled = false;
});
// call
selectMediaStream();