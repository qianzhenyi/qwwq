




	function getD(data){
			 console.log(data)
		 var d=data.results[0];
		 var str1="";
		  var str2="";
		   var str3="";
		 var w=d.weather_data;
		  var  n=w[0].date.substring(0,3)
//		 
//		  str1=data.date+" "+n+b+":"+c+":"+d;
		  setInterval(function(){
		  	 var a=new Date;
		  var b=a.getHours();
		  var c=a.getMinutes();
		  var d=a.getSeconds();
		  if(d<10){
		  	d="0"+d;
		  }
		  if(c<10){
		  	c="0"+c;
		  }
		  
		  str1=data.date+" "+b+":"+c+":"+d+" "+n;
	     
		  		 $('.span1').html(str1);
		  },1000)
		 
		 	
		 	
		 	
		 	str2="温度："+w[0].temperature;
		 	str3="天气："+w[0].weather;
           
            $('.span2').html(str2);
            $('.span3').html(str3);


	}



