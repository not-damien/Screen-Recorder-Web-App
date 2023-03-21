let screenStr = "Images/ScreenOr.svg"
let tabsStr = "Images/TabsOr.svg"
let desktopStr = "Images/Desktop.svg"
let screenSelect = false;
let tabSelect = false;
let desktopSelect = false;


$("#desktop").click(swapDesktopIcon)
$("#screen").click(swapScreenIcon)
$("#tabs").click(swapTabIcon)

function swapTabIcon(){
    temp = $("#tabs").attr("src");
    $("#tabs").attr("src", tabsStr)
    tabsStr = temp;
    tabSelect = !tabSelect;
    console.log(tabSelect ? "Tab Selected":"Tab Unselected");
}
function swapDesktopIcon(){
    console.log('hi');
    temp = $("#desktop").attr("src");
    $("#desktop").attr("src", desktopStr)
    desktopStr = temp;
    desktopSelect = !desktopSelect;
}
function swapScreenIcon(){
    console.log('hi');
    temp = $("#screen").attr("src");
    $("#screen").attr("src",screenStr)
    screenStr = temp;
    screenSelect = !screenSelect;
}






 async function getPerm(){
        const stream = await navigator.mediaDevices.getDisplayMedia({video: true, audio: true});//update here with check mark values
        var options = {mimeType: 'video/webm; codecs=vp9'};
        const recorder = new MediaRecorder(stream, options);


        const chunks = [];
        recorder.ondataavailable = (e) =>
        chunks.push(e.data);

        recorder.onstop = () => {
            const track = stream.getVideoTracks()[0];
            track.stop();

            const blob = new Blob(chunks, {type: chunks[0].type})

            const a = 
            window.document.createElement("a");
            
            //pop up to ask user for file name
            let filename =   "recording.mp4"
                //window.prompt("enter a name to save your file", "recording.mp4")
            
            a.href = URL.createObjectURL(blob);
            if(filename != null){
                a.download = filename;
            }else{
                a.download = "recording.mp4"
            }

            document.body.appendChild(a);
            $('a').html("download here")
        }
    }
