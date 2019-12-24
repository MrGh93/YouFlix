try {




  var navPlayer = document.getElementsByClassName('ytp-left-controls');
  var minusButton = document.createElement("button");
  navPlayer[0].appendChild(minusButton);
  minusButton.setAttribute('id',"youflix-minusButton");
  minusButton.setAttribute('class','ytp-button');
  minusButton.innerHTML = '<svg class="youflix-minusButton" viewBox="0 0 28 28"><g stroke="none" stroke-width="1" fill="none"><path d="M21.9992616,8.99804242 C23.2555293,10.6696987 24,12.7479091 24,15 C24,20.5228475 19.5228475,25 14,25 C8.4771525,25 4,20.5228475 4,15 C4,9.4771525 8.4771525,5 14,5 L16,5" stroke="white" stroke-width="2" transform="translate(14.000000, 15.000000) scale(-1, 1) translate(-14.000000, -15.000000) "></path><polyline stroke="white" stroke-width="2" points="15.5 1.5 12 4.92749023 15.5 8.5"></polyline><polyline stroke="white" stroke-width="2" points="11 1.5 7.5 5 11 8.5"></polyline><text font-size="10" font-weight="400" letter-spacing="-0.3" fill="white"><tspan x="7" y="19">1</tspan><tspan x="12.82" y="19">0</tspan></text></g></svg>';

  var plusButton = document.createElement("button");
  navPlayer[0].appendChild(plusButton);
  plusButton.setAttribute('id',"youflix-plusButton");
  plusButton.setAttribute('class','ytp-button');
  plusButton.innerHTML = '<svg class="youflix-plusButton" viewBox="0 0 28 28"><g stroke="none" stroke-width="1" fill="none"><g transform="translate(14.000000, 13.000000) scale(-1, 1) translate(-14.000000, -13.000000) translate(4.000000, 1.000000)"><path d="M17.9992616,7.99804242 C19.2555293,9.66969874 20,11.7479091 20,14 C20,19.5228475 15.5228475,24 10,24 C4.4771525,24 0,19.5228475 0,14 C0,8.4771525 4.4771525,4 10,4 L12,4" stroke="white" stroke-width="2" transform="translate(10.000000, 14.000000) scale(-1, 1) translate(-10.000000, -14.000000) "></path><polyline stroke="white" stroke-width="2" points="11.5 0.5 8 3.92749023 11.5 7.5"></polyline><polyline stroke="white" stroke-width="2" points="7 0.5 3.5 4 7 7.5"></polyline></g><text font-size="10" font-weight="400" letter-spacing="-0.3" fill="white"><tspan x="7" y="19">10</tspan></text></g></svg>';
  //event pour moins 10sec
  document.getElementById('youflix-minusButton').addEventListener('click',function(){
      var video = document.getElementsByTagName('video')[0];
      video.currentTime = video.currentTime - 10;
  })

  //event pour +10sec
  document.getElementById('youflix-plusButton').addEventListener('click',function(){
      var video = document.getElementsByTagName('video')[0];
      video.currentTime = video.currentTime + 10;
  })

  window.setInterval(function(){
    if(navPlayer.length <= 1){
      console.log('!navplayer');
    }
  },3000);

$(window).on('hashchange', function(e){
  console.log("hashchange");
})


}

catch (e){

  console.log(navPlayer)

}
