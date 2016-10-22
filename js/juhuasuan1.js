;(function(){
	document.addEventListener('DOMContentLoaded',function(){
		var oSort=document.getElementById('sort');
		var oList1=document.getElementById('list1');
		var aA=oSort.getElementsByTagName('a');
		var aUl1=oList1.getElementsByTagName('ul');
		var count=0;
		for(var i=0;i<aA.length;i++){
			aA[i].index=i;
			aA[i].addEventListener('touchend',function(){
				for(var j=0;j<aA.length;j++){
					aA[j].className='sort1';
					aUl1[j].style.display='none';
				}
				this.className='sort1 om';
				aUl1[this.index].style.display='block';

			},false);
		}
	},false);
})();