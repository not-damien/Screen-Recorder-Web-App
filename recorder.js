let screenStr = "Images/ScreenOr.svg"
$("#screen").click(function(){
    console.log('hi');
    temp = $("#screen").attr("src");
    $("#screen").attr("src",screenStr)
    screenStr = temp;
})

$("#start").mouseenter(function(){
    console.log('hi');
    $(this).attr("src","Images/Start Recording_or.svg")
})
$("#start").mouseleave(function(){
    console.log('bye');
    $(this).attr("src","Images/Start Recording_.svg")
})

 async function getPerm(){
        const stream = await navigator.mediaDevices.getDisplayMedia({video: true, audio: true});
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
