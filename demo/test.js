$(document).ready(function(e){
  $(".container1").multilingual([
    "en", "ko", "punct", "cn", "jp", {
      className: "ml-custom",
      charset: '◆〓。「☆'
    }
  ]);
});