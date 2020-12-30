

export function DrawScene(element) {
  const surface = document.getElementById('imageToProcess');

  const e = document.createElement("div");
  e.setAttribute("class", "prediction");
  e.style = "position:absolute;border:1px solid green;z-index:1;margin-left: "+element.bbox[0]+"px; margin-top: "+element.bbox[1]+"px; left:0;top:0;width:"+element.bbox[2]+"px;height:"+element.bbox[3]+"px;";

  surface.appendChild(e);

}

export async function RemoveScenes() {
    const predictions = document.getElementsByClassName("prediction");

      while(predictions.length >= 1){
        predictions[0].remove();
      }
      return "end";
}
