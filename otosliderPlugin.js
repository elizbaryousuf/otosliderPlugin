/*
###Yazar:Elizbar Yusuf
###Veb Sayt:http://elizbar.info
###Proje: otosliderPlugin.js
*/
(function($) {
$.fn.otosliderPlugin = function(ayar){
					var deger={
						sec:2000,
						next:$("#next"),
						prev:$("#prev")
					};
    				var ayar = $.extend(deger,ayar);
					return this.each(function(){

						var div = $(this);//div alani
						var li = $(this).find("ul").children();//li alani
						var next = ayar.next;//ireli butonu
						var prev = ayar.prev;//geri butonu
						li.hide();//tum lileri gizle
						li.first().fadeIn();//ilk liyi goster
						var say = 0;
						var sure = ayar.sec;//donme suresi
						var li_sayi = li.length-1;

						//ireli butona basilinca
						
						next.click(function(){
							li.hide();//tum lileri gizle
							if(say < li_sayi){//eger say li_sayi dan kickise
								say++;//say bir artir
								li.eq(say).fadeIn();//secileni goster
				
							}else{//eger say li_sayidan kicik degilse
								say=0;//say sifirla
								li.eq(say).fadeIn();//secileni goster
							}
						return false;//# kaldir
						});

						//geri butona basilinca
						prev.click(function(){
							li.hide();//tum lileri gizle
							if(say==0){//eger say esittirse sifira
								say=li_sayi;//say degiskenine li_sayi degiskenini aktar
								li.eq(say).fadeIn();//secileni goster
							}else if(say < li_sayi+1){//yox eger say li_sayidan kicikse
								say--;//say bir azalt
								li.eq(say).fadeIn();//secileni goster
							}
						return false;//# kaldir
						});
				
					//fonksiyon olustur
					$.slider = function(dene){
						li.hide();//tum lileri gizle
						if(say < dene){//eger say deneden kicikse
							say++;//say bir artir
							li.eq(say).fadeIn();//secileni goster
						}else{//eger say deneden kicik degilse
							say=0;//say sifirla
							li.eq(say).fadeIn();//secileni goster
						}
					}
		
					//otomatik donme islemi
					var set = setInterval('$.slider('+li_sayi+')',sure);
					//slider divi uzerine gelince
					div.hover(function(){
						clearInterval(set);//oto donme islemini durdur
					},function(){//div uzerinde cekilince
						set = setInterval('$.slider('+li_sayi+')',sure);//oto donme baslasin
					});
					



				});

	}

})(jQuery);
