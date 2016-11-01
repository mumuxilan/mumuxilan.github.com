;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		if(document.getElementById('tab')){
			var oUl=document.getElementById('tab');
			var oNext=document.getElementById('next');
			var aLi=oUl.getElementsByTagName('li');
			var aSpan=oNext.getElementsByTagName('span');
			var x=0;
			var iNow=1;
			var bReady=true;
			var timer=null;
			oUl.style.webkitTransform='translate3d('+-iNow*aLi[0].offsetWidth+'px,0,0)';
			x=-iNow*aLi[0].offsetWidth;
			function time(){
				iNow++;
				if(iNow==aLi.length-1){
					iNow=1;
					oUl.style.webkitTransition='none';
				}else{
					oUl.style.webkitTransition='1s all ease';
				}
				for(var i=0;i<aSpan.length;i++){
						aSpan[i].className='';
					}
					aSpan[iNow-1].className='on';
				oUl.style.webkitTransform='translate3d('+-iNow*aLi[0].offsetWidth+'px,0,0)';
				x=-iNow*aLi[0].offsetWidth;
			}
			timer=setInterval(time,3000);
			oUl.addEventListener('touchstart',function(ev){
				clearInterval(timer);
				if(!bReady){
					return;
				}
				bReady=false;
				var start=ev.targetTouches[0].pageX;
				var disX=ev.targetTouches[0].pageX-x;
				oUl.style.webkitTransition='none';
				function fnMove(ev){
					x=ev.targetTouches[0].pageX-disX;
					oUl.style.webkitTransform='translate3d('+x+'px,0,0)';
				}
				function fnEnd(ev){
					var end=ev.changedTouches[0].pageX;
					if(Math.abs(end-start)>20){
						if(end-start>0){
							iNow--;
							if(iNow<0){
								iNow=0;
							}
						}else{
							iNow++;
							if(iNow==aLi.length){
								iNow=aLi.length-1;
							}
						}
					}
					if(end==start){
						bReady=true;
					}
					oUl.style.webkitTransition='1s all ease';
					oUl.style.webkitTransform='translate3d('+-iNow*aLi[0].offsetWidth+'px,0,0)';
					x=-iNow*aLi[0].offsetWidth;
					oUl.addEventListener('webkitTransitionEnd',tran,false);
					document.removeEventListener('touchmove',fnMove,false);
					document.removeEventListener('touchend',fnEnd,false);
				}
				function tran(){
					if(iNow==aLi.length-1){
						iNow=1;
					}
					if(iNow==0){
						iNow=aLi.length-2;						
					}
					oUl.style.webkitTransition='none';
					oUl.style.webkitTransform='translate3d('+-iNow*aLi[0].offsetWidth+'px,0,0)';
					x=-iNow*aLi[0].offsetWidth;				
					for(var i=0;i<aSpan.length;i++){
						aSpan[i].className='';
					}
					aSpan[iNow-1].className='on';
					bReady=true;
					oUl.removeEventListener('webkitTransitionEnd',tran,false);
					setTimeout(function(){
						timer=setInterval(time,2000);
					},3000);
				}
				
				document.addEventListener('touchmove',fnMove,false);
				document.addEventListener('touchend',fnEnd,false);
				ev.preventDefault();
			},false);
		}
	},false);
})();
;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		if(document.getElementById('list1')){
			var oSort=document.getElementById('sort');
			var oList1=document.getElementById('list1');
			var oLive=document.getElementById('live');
			var aA=oSort.getElementsByTagName('a');
			var aUl1=oList1.getElementsByTagName('ul');

			var url=[];
			var count=0;
			var l=window.location.href;
			url.push(l.substring(l.indexOf('=')+1,l.length));
			count=url[0];
			for(var i=0;i<aA.length;i++){
				aA[i].className='sort1';
				aUl1[i].style.display='none';
			}
			aA[count-1].className='sort1 om';
			aUl1[count-1].style.display='block';
			oLive.innerHTML=aA[count-1].innerHTML;
			for(var i=0;i<aA.length;i++){
				aA[i].index=i;
				aA[i].addEventListener('touchend',function(){
					for(var j=0;j<aA.length;j++){
						aA[j].className='sort1';
						aUl1[j].style.display='none';
					}
					this.className='sort1 om';
					aUl1[this.index].style.display='block';
					oLive.innerHTML=this.innerHTML;
				},false);
			}
		}		
	},false);
})();
// ;(function(){
// 	document.addEventListener('DOMContentLoaded',function(){
// 		if(document.getElementById('left')){
// 			var oLeft=document.getElementById('left');
// 			oLeft.addEventListener('touchend',function(){
// 				window.history.back();
// 			},false);
// 		}
// 	},false)
// })();
;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		if(document.getElementById('right')){
			var oRight=document.getElementById('right');
			var oFooter=document.getElementById('footer');
			var oScan=document.getElementById('scan');
			var oScan2=document.getElementById('scan2');
			var oCity=document.getElementById('city');
			var aA=oScan2.getElementsByTagName('a');
			var aUl=oFooter.getElementsByTagName('ul');
			//

			//显示隐藏
			oRight.addEventListener('touchend',function(){
				// oFooter.style.display='block';
				oFooter.style.webkitTransition='1s all ease';
				oFooter.style.webkitTransform='translate3d(-16rem,0,0)';
			},false);
			oScan.addEventListener('touchend',function(){
				oFooter.style.webkitTransition='1s all ease';
				oFooter.style.webkitTransform='translate3d(0,0,0)';
				// oFooter.style.display='none';
			},false);
			//切换
			for(var i=0;i<aA.length;i++){
				aA[i].index=i;
				aA[i].addEventListener('touchend',function(){
					for(var j=0;j<aA.length;j++){
						aA[j].className='on';
						aUl[j].style.display='none';
						oCity.style.display='none';
					}
					if(this.index%2){
						oCity.style.display='block';
					}
					this.className='';
					aUl[this.index].style.display='block';
				},false)
			}
		}
	},false);
})();
;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		if(document.getElementById('CitySelect')){
			var oCitySelect=document.getElementById('CitySelect');
			var oCitySelect1=document.getElementById('CitySelect1');
			var oCitySelect2=document.getElementById('CitySelect2');
			var aCity=document.getElementsByTagName('dd');
			var live=[];
			for(var i=0;i<aCity.length;i++){
				aCity[i].addEventListener('touchend',function(){
					live=[];
					oCitySelect2.innerHTML='当前位置—'+this.innerHTML;
					live.push(this.innerHTML);
					console.log(live);	
				},false);
			}
			oCitySelect.addEventListener('touchend',function(){				
				history.go(-1);
			},false);
			if(document.getElementById('right')){
				var oLive=document.getElementById('live');
				alert(oLive)
				alert(oLive.innerHTML)
				oLive.innerHTML=live[0];
			}
		}
	},false);
})();