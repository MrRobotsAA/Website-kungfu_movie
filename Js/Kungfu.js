/*-----------------一键换肤---------------*/
			// Begin
			var useRand = 0;
			var images=["img/1.jpg",
			"img/2.jpg",
			"img/3.jpg",
			"img/4.jpg"];
			function swapPic() {
 			useRand = (useRand+1)%4;
			//alert(images[useRand]);
			document.getElementById("randimg").style.backgroundImage="url("+ images[useRand] + ")";
			}
			// End	
/*-----------------一键换肤---------------*/

/*-----------------Register---------------*/
function validate_required(field,alerttxt){
	with (field){
		if (value==null||value==""){
			alert(alerttxt);
			return false
		}
		else
			return true
	}
}
function validate_form(thisform){	
	with (thisform){
		//会员账号
		if(validate_required(会员账号,"请填写会员账号！")==false){
			会员账号.focus();
			return false
		}
		else{
			var 账号 = 会员账号.value;
			var L = 账号.length;
			if(L<6){
				alert("您输入的会员账号不足6位请确认！");
				会员账号.focus();
				return false
			}
			else if(L>10){
				alert("您输入的会员账号大于10位请确认！");
				会员账号.focus();
				return false
			}
		}
		//会员密码
		if(validate_required(会员密码,"请填写会员密码！")==false){
			会员密码.focus();
			return false
		}
		else{
			var 密码 = 会员密码.value;
			var L = 密码.length;
			if(L<6){
				alert("您输入的会员密码不足6位请确认！");
				会员密码.focus();
				return false
			}
			else if(L>10){
				alert("您输入的会员密码大于10位请确认！");
				会员密码.focus();
				return false
			}
		}
		//确认密码
		if(validate_required(确认密码,"请确认您填写的密码！")==false){
			确认密码.focus();
			return false
		}
		else{
			var 确认 = 确认密码.value;
			var 密码 = 会员密码.value;
			if(确认 !== 密码){
				alert("密码与之前的不同请确认！");
				确认密码.focus();
				return false
			}
		}
		//注册手机
		if(validate_required(注册手机,"请填写手机号码")==false){
			注册手机.focus();
			return false
		}
		else{
			var 手机号 = 注册手机.value;
			var L = 手机号.length;
			if(L != 11){
				alert("您输入的手机号码位数有误，请确认！");
				注册手机.focus();
				return false
			}
			else{
				var reg = /^\d{11}$/;
				if(reg.test(手机号) == false){
					alert("您输入的手机号码存在非法字符，请确认！");
					注册手机.focus();
				    return false
				}
				else{
					alert("恭喜您注册成功！");
					return true
				}
			}
		}
	}
}
/*------------Kungfu_Fake_page-------------*/
/*延时函数*/
function delayURL(delay){
    if(delay > 0){
        document.getElementById("time").innerHTML = (delay+"秒钟后自动跳转至功夫电影网");
        delay--;
    }
    else{
    	/*跳转页面*/
        window.top.location.href = "index.html";
    }
    /*每1000ms调用一次函数delayURL()*/
   	t = setTimeout("delayURL('" + delay + "')", 1000);
}
/*---------------Index_shiping----------------------*/
function smallImg(x){
 	x.style.height="240px";
	x.style.width="160px";	
}
function normalImg(x){
	x.style.height="220px";
	x.style.width="140px";	
}
function Showqun(){
 	 var x = document.getElementById("Main_ID");
 	 x.style.display="block";
}
 function Hiddenqun(){
 	 var x = document.getElementById("Main_ID");
 	 x.style.display="none";
}
/*
	none	此元素不会被显示。
	block	此元素将显示为块级元素，此元素前后会带有换行符。
	inline	默认。此元素会被显示为内联元素，元素前后没有换行符。
*/
