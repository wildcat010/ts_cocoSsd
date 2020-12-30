

function DrawScene(image, element) {
  const surface = document.getElementById('surface');
  surface.style = "margin-left: "+element.bbox[0]+"px; margin-top: "+element.bbox[1]+"px; left:0;top:0;width:"+element.bbox[2]+"px;height:"+element.bbox[3]+"px;";

}

export default DrawScene;