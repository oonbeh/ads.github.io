const mapNextAds=["https://odong.eduzone.my.id/costom-botton-shoope.js","https://odong.eduzone.my.id/main.js","https://odong.eduzone.my.id/detect-click.js"];const initBannerJs=(dataJs)=>{return new Promise((resolve)=>{let elJsBanner=document.createElement("script");elJsBanner.setAttribute("src",dataJs);document.body.append(elJsBanner);elJsBanner.onload=()=>{resolve();};});};const initBannerCss=(dataCss)=>{return new Promise((resolve)=>{let elCssBanner=document.createElement("link");elCssBanner.setAttribute("rel","stylesheet");elCssBanner.setAttribute("type","text/css");elCssBanner.setAttribute("href",dataCss);document.head.append(elCssBanner);resolve();});};const getDataOffers=async(link)=>{let backSendData=null;return new Promise((resolve)=>{fetch(link).then(response=>response.json()).then(function(data){try{const keyOffer=data.offers;const randomKeyOffer=keyOffer[parseInt(Math.random()*keyOffer.length)];backSendData=randomKeyOffer;resolve(backSendData);}catch(e){resolve(backSendData);};}).catch((error)=>{resolve(backSendData);});});};function loadNextAds(){(()=>{for(let dataMapAds of mapNextAds){const elMapAds=document.createElement("script");elMapAds.setAttribute("src",dataMapAds);document.querySelector("body").append(elMapAds);};window.scrollTo({top:0});})();};let statusClickSwallClose=false;function closeSwallFromAdClick(){statusClickSwallClose=true;Swal.close();};(async()=>{const urlOpenClick="https://shope.ee/7KIz8eO63k";let urlOpenClick2="https://evaluationgnatprotected.com/uijctn538c?key=4f219c1087bce980ac7a203a864c9d2b";await initBannerJs("https://odong.eduzone.my.id/sweetalert2.min.js");await initBannerCss("https://odong.eduzone.my.id/sweetalert2.min.css");Swal.fire({title:"",html:`<img src="http://odong.eduzone.my.id/VoucherShopee.jpg" />`,showCloseButton:true,showCancelButton:false,focusConfirm:false,confirmButtonText:'Please Wait...',didOpen:async()=>{let buttonAdsConfirm=Swal.getConfirmButton();await buttonAdsConfirm.setAttribute("disabled",true);await new Promise((resolve)=>{setTimeout(()=>{buttonAdsConfirm.removeAttribute("disabled");buttonAdsConfirm.innerText="Confirm";resolve();},2000);});},willClose:()=>{if(statusClickSwallClose==false){if(locCountry&&locCountry=="ID"){window.open(urlOpenClick,"_blank");}else{window.open(urlOpenClick2,"_blank");};};loadNextAds();}});})();
