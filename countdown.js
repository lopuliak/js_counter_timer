function CountdownTimer(elm,tl,mes){
	this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
	initialize:function(elm,tl,mes) {
		this.elem = document.getElementById(elm);
		this.tl = tl;
		this.mes = mes;
	},countDown:function(){
		var timer='';
		var today=new Date();

		var day=Math.floor((this.tl-today)/(24*60*60*1000));
		var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
		var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
		var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
		var me=this;

		if( ( this.tl - today ) > 0 )
		{
			timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">ДНИ</div><span class="number day">'+day+'</span></span>';
			timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">ЧАСЫ</div><span class="number hour">'+hour+'</span></span>';
			timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">МИНУТЫ</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">СЕКУНДЫ</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
			this.elem.innerHTML = timer;
			tid = setTimeout( function(){me.countDown();},10 );
		}
		else
		{
			this.elem.innerHTML = this.mes;
			return;
		}
	},addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){
	$.post( "count_time.php", function( data ) {
		var gl = new Date(data);
		var timer = new CountdownTimer('CDT',gl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Упс! Время вышло!</span></span>');
		timer.countDown();
	});
}
window.onload=function(){
	CDT();
}
