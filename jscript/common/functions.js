// functions.js

 	function getkey(e)
		{
		if (window.event)
		   return window.event.keyCode;
		else if (e){
			
		   return e.which;
		   }
		else
		   return null;
		}
		
		
	
 	function NumericOnly(ev) {
 	if ((ev<=47 || ev>=58)	&&	ev!=0	&&	ev!=8) {return false;}
 	return true;
 	}

 	function NumericWithDecimalOnly(ev) {
 		if ((ev<=47	&&	ev!=46	&&	ev!=0	&&	ev!=8) || (ev>=58)) {return false;}
 	return true;
 	}

function NumericAndCharsInclSpaceOnly(ev) {
if (((ev>=34) && (ev<=39)) ||(ev==126) ||(ev==96)){return false;}
return true;
}

function NumericAndCharsOnly(ev) {
if ((ev<=47 &&ev!=0) || (ev>=58 && ev<64)|| (ev>=91 && ev<=96)|| (ev==126)){return false;}
return true;
}

function NumericAndCharsOnlyEmail(str,ev) {
//Note ascii for dot (.) is 46 which may be allowed multiple times
//for e.g. bejoy.pal@cris.org.in
//But ascii for @ is 64 is allowed only once
//alert(str);
if(ev==64 && str!=null && str!='')
{
	posOf	=	str.indexOf("@");
	if(posOf!=-1)
		return false;
}
//do not allow / whose ascii is 47

if ((ev<=45 &&ev!=0) || (ev==47)||(ev>=58 && ev<64)|| (ev>=91 && ev<=96)|| (ev==126)){return false;}
return true;
}

function CharsOnly(ev) {//BS=8 Tab=0
if ((ev<=47 &&	ev!=0	&&	ev!=8 &&	ev!=32) || (ev>=58 && ev<=64)||(ev>47 && ev<58) ||(ev>=91 && ev<=96)|| (ev==126)){return false;}
return true;
}

function NumericAndCharsPlus45To47Only(ev) {//BS=8 Tab=0
if ((ev<=45 &&	ev!=0	&&	ev!=8) || (ev>=58 && ev<=64)|| (ev>=91 && ev<=96)|| (ev==126)){return false;}
return true;
}

	function	loadXML1(stringtxt){
			var	xmlDoc; 
		  {
		  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		  xmlDoc.async="false";
		 // text="<bookstore><book>";
//text=text+"<title>Everyday Italian</title>";
//text=text+"<author>Giada De Laurentiis</author>";
//text=text+"<year>2005</year>";
//text=text+"</book></bookstore>";
		  xmlDoc.loadXML(stringtxt); 
		//  alert('loadXML..Internet E1..'+xmlDoc);
		//  var xmltitle= xmlDoc.getElementsByTagName("MFACTOR")[0].childNodes[0].nodeValue;
		//  alert('xmltitle..Internet E1..'+xmltitle);
		  } 
		  return xmlDoc;
	}


 	function	loadXML(stringtxt){
 			var	xmlDoc;
 			if (window.DOMParser)
			  {
			  parser=new DOMParser();//"<?xml version=\"1.0\" ?>"+
			  xmlDoc=parser.parseFromString(stringtxt,"text/xml");
			//  alert('loadXML..'+xmlDoc);
			  }
			else // Internet Explorer
			  {
			  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
			  xmlDoc.async="false";
			 // text="<bookstore><book>";
//text=text+"<title>Everyday Italian</title>";
//text=text+"<author>Giada De Laurentiis</author>";
//text=text+"<year>2005</year>";
//text=text+"</book></bookstore>";
			  xmlDoc.loadXML(stringtxt); 
			//  alert('loadXML..Internet E1..'+xmlDoc);
			//  var xmltitle= xmlDoc.getElementsByTagName("MFACTOR")[0].childNodes[0].nodeValue;
			//  alert('xmltitle..Internet E1..'+xmltitle);
			  } 
			  return xmlDoc;
 	}

 	function getXMLHttpRequest() {
 	 	var xmlHttpReq = false;
 	 	// to create XMLHttpRequest object in non-Microsoft browsers
 	 	if (window.XMLHttpRequest) {
 	 		xmlHttpReq = new XMLHttpRequest();
 	 	} else if (window.ActiveXObject) {
 	 		try {
 	 			// to create XMLHttpRequest object in later versions
 	 			// of Internet Explorer
 	 			xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
 	 		} catch (exp1) {
 	 			try {
 	 				// to create XMLHttpRequest object in older versions
 	 				// of Internet Explorer
 	 				xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
 	 			} catch (exp2) {
 	 				xmlHttpReq = false;
 	 			}
 	 		}
 	 	}
 	 	return xmlHttpReq;
 	 }
 	//setTimeOut(alert("your session is timeout",2*1000));
 	 function resetTimer() {
 		 
 		//setTimeOut(alert("your session is timeout",2*1000));
 		//alert("abc");
 		
 		var xmlHttpRequest = getXMLHttpRequest();
 	    var url= "ResetTimer";   
 	    xmlHttpRequest.open("POST", url, false);
 	 	xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-n");
 	 	xmlHttpRequest.send(null);
 	 	//alert(xmlHttpRequest.responseText);
 	 	if(xmlHttpRequest.responseText=='false'){
 	 		var c = confirm("Your session time has been expired. You want to extend your session time.");
 	 		if(!c) {
 	 			window.location.href="logout.jsp";
 	 		}
 	 		}
 	 }
 	 
 	 
 	function openExtnLink(linkownr, url,img)
 	{
 	     cuteAlert({
 	      type: "question",
 	      title: linkownr,
 	      message: "This action will take you to an external <b>("+linkownr+")</b> website",
 	      confirmText: "Continue",
 	      cancelText: "Cancel",
 	      image: img
 	  }).then((e)=>{
 	    if ( e == ("confirm")){
 		window.open(url,'extnlink','fullscreen=yes,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,width='+screen.availWidth+',height='+screen.availHeight);
 	  } else {
 	    return false;
 	  }
 	  });
 	}
 	function openPopUpContent(url)
 	{
 		var htmlstr='<img src='+url+' class="img-responsive" />';
 		$("#popUpModal").modal('show');	
 		$("#divPopUp").html(htmlstr);
 	}

 	function openContent(mesg)
 	{
	 cuteToast({
	      type: "success",
	      message: mesg,
	      timer: 5000
	    });
 	}
 	
 	function fetchPrclBkngLocn()
 	{
 		var htmlstr='<table id="termStationTable" class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">SR.</th><th>STATION</th><th>DIVISION</th><th>ZONE</th></tr>';
 		var myurl="/CRISPMSRestfulServices/services/PMSStatus/getPMSImpl";
 		var newobj;
 		var jobj={COMPUTERIZED_FLAG:'1'};// Blank for All Source //Blank for All Destination
 		$.ajax({
 			url : myurl,
 			type : "post",
 			async : true,
 			data: JSON.stringify(jobj),
 			success : function(data) {
 				newobj=data;
 				//alert(data);
 			var obj= data;
 			var stts=obj.Stts;
 			var erormesg=obj.ErorMesg;
 			if(stts=="F")
 			{
 				alert("Not able to connect to Server:"+erormesg);
 				return false;
 			}

 			for(var i=0;i<JSON.parse(obj.SttnList).length;i++)
 			{
 				var cord=JSON.parse(obj.SttnList)[i].CORRIDOR;
 				var zone=JSON.parse(obj.SttnList)[i].RAILWAY;
 				var dvsn=JSON.parse(obj.SttnList)[i].DIVISION;
 				var sttn=JSON.parse(obj.SttnList)[i].STATION;
// 				htmlstr+='<tr><td style="max-width:80px;" class="center">'+(i+1)+'</td><td class="left">'+cord+'</td><td class="left">'+zone+'</td><td class="left">'+dvsn+'</td><td class="left">'+sttn+'</td></tr>';
 				htmlstr+='<tr><td style="max-width:80px;" class="center">'+(i+1)+'</td><td class="left">'+sttn+'</td><td class="left">'+dvsn+'</td><td class="left">'+zone+'</td></tr>';

 			}
 			htmlstr+='</table>';
 			$("#divPrclBkngLocn").html(htmlstr);
 			}
 			});
 	}
 	
 	
	function fetchPrclBkngLocnNC()
 	{
 		var htmlstr='<table id="termStationTableNC" class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">SR.</th><th>STATION</th><th>DIVISION</th><th>ZONE</th></tr>';
 		var myurl="/CRISPMSRestfulServices/services/PMSStatus/getPMSImpl";
 		var newobj;
 		var jobj={COMPUTERIZED_FLAG:'0'};// Blank for All Source //Blank for All Destination
 		$.ajax({
 			url : myurl,
 			type : "post",
 			async : true,
 			data: JSON.stringify(jobj),
 			success : function(data) {
 				newobj=data;
 				//alert(data);
 			var obj= data;
 			var stts=obj.Stts;
 			var erormesg=obj.ErorMesg;
 			if(stts=="F")
 			{
 				alert("Not able to connect to Server:"+erormesg);
 				return false;
 			}

 			for(var i=0;i<JSON.parse(obj.SttnList).length;i++)
 			{
 				var cord=JSON.parse(obj.SttnList)[i].CORRIDOR;
 				var zone=JSON.parse(obj.SttnList)[i].RAILWAY;
 				var dvsn=JSON.parse(obj.SttnList)[i].DIVISION;
 				var sttn=JSON.parse(obj.SttnList)[i].STATION;
// 				htmlstr+='<tr><td style="max-width:80px;" class="center">'+(i+1)+'</td><td class="left">'+cord+'</td><td class="left">'+zone+'</td><td class="left">'+dvsn+'</td><td class="left">'+sttn+'</td></tr>';
 				htmlstr+='<tr><td style="max-width:80px;" class="center">'+(i+1)+'</td><td class="left">'+sttn+'</td><td class="left">'+dvsn+'</td><td class="left">'+zone+'</td></tr>';

 			}
 			htmlstr+='</table>';
 			$("#divPrclBkngLocnNC").html(htmlstr);
 			}
 			});
 	}
 	
 	function fetchPrclRates(scale)
 	{
 		var htmlstr='<table class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">SR.</th><th>CORRIDOR</th><th>ZONE</th><th>DIVISION</th><th>LOCATION</th></tr>';
 		var parcelratesurl="servlet/common_class.parcel_rates_p?scale="+scale;
 		var newobj;
        $('#'+scale+'div').load(parcelratesurl, function(response, status, xhr) {
            if (status == "error") {
                var msg = "Sorry but there was an error: ";
                alert(msg + xhr.status + " " + xhr.statusText);
              }
        });
 	}
 	
 	function fetchPrclSLR(scale)
 	{
 		var htmlstrPPSP='<table class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">S NO.</th><th>TRAIN NO.</th><th>TRAIN NAME</th><th>SOURCE STN.</th><th>DESTINATION STN</th><th>RUN STATUS</th><th colspan=7>DAYS OF RUN</th></tr>';
// 		htmlstrPPSP+='<tr><th colspan=6></th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr>';
 		htmlstrPPSP+='<tr><th colspan=6></th><th colspan=7>AS ON DATE</th> </tr>';
	 		var htmlstrKR='<table class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">S NO.</th><th>TRAIN NO.</th><th>TRAIN NAME</th><th>SOURCE STN.</th><th>DESTINATION STN</th><TH>RUN STATUS</TH><th colspan=7>DAYS OF RUN</th></tr>';
 			htmlstrKR+='<tr><th colspan=6></th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr>';
	 		var htmlstrPEXP='<table class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">S NO.</th><th>TRAIN NO.</th><th>TRAIN NAME</th><th>SOURCE STN.</th><th>DESTINATION STN</th><TH>RUN STATUS</TH><th colspan=7>DAYS OF RUN</th></tr>';
 			htmlstrPEXP+='<tr><th colspan=6></th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr>';
	 		var htmlstrPCET='<table class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">S NO.</th><th>TRAIN NO.</th><th>TRAIN NAME</th><th>SOURCE STN.</th><th>DESTINATION STN</th><TH>RUN STATUS</TH><th colspan=7>DAYS OF RUN</th></tr>';
 			htmlstrPCET+='<tr><th colspan=6></th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr>';
// 			var myurl="/CRISPMSRestfulServices/services/PMSStatus/getpexp";
 			var myurl="/CRISPMSRestfulServices/services/PMSStatus/getppsp";
 		var newobj={trntype:'PEXP',srcstn:'',dstnstn:''};// Blank for All Source //Blank for All Destination
 		$.ajax({
 			url : myurl,
 			type : "post",
 			async : true,
 			data: JSON.stringify(newobj),
 			success : function(data) {
 				//newobj=data;
 				//alert(data);
 			var obj= data;
 			var stts=obj.Stts;
 			var erormesg=obj.ErorMesg;
 			if(stts=="F")
 			{
 				alert("Not able to connect to Server:"+erormesg);
 				return false;
 			}

 			var j	=	0;
 			var kr	=	0;
 			var pcet	=	0;
 			//for(var i=0;i<JSON.parse(obj.train_det).length;i++)
 			
 			for(var i=0;i<obj.train_det.length;i++)//No needing of JSON parsing as obj.train_det is itself is an object and not string
 			{
 				var trnno=(obj.train_det)[i].trnno;
 				var trainname=(obj.train_det)[i].trainname;
 					
 				var srcstn=(obj.train_det)[i].srcstn;
 				var dstnstn=(obj.train_det)[i].dstnstn;
 				var runstatus=(obj.train_det)[i].runstatus;
 				if(runstatus=='-')
 					runstatus='<i>Yet To Start/Update Unavailable</i>';
 				var train_type=(obj.train_det)[i].train_type;
 				//if(trainname.indexOf('KISAN')<0  && trainname.indexOf('PCET')<0){
 				if(train_type=='PPSP'||train_type=='PBEN'){
 					j++;
 					trainname=srcstn.split('-')[0]+'-'+dstnstn.split('-')[0]+'- PARCEL SPECIAL TRAIN'
 				var freq=(obj.train_det)[i].freq;
 					var sunflag	=	'';
 					if(freq.substring(0,1)=='1')
 						sunflag	=	"<img src='img/check"+freq.substring(0,1)+".png'></img>";

 					var monflag	=	'';
 						if(freq.substring(1,2)=='1')
 							monflag	=	"<img src='img/check"+freq.substring(1,2)+".png'></img>";
 	 				var tueflag	=	'';
 	 				if(freq.substring(2,3)=='1')
 	 					tueflag	=	"<img src='img/check"+freq.substring(2,3)+".png'></img>";
 	 				var wedflag	=	'';
 	 				if(freq.substring(3,4)=='1')
 	 					wedflag	=	"<img src='img/check"+freq.substring(3,4)+".png'></img>";
 	 				var thuflag	=	'';
 	 				if(freq.substring(4,5)=='1')
 	 					thuflag	=	"<img src='img/check"+freq.substring(4,5)+".png'></img>";
 	 				var friflag	=	'';
 	 				if(freq.substring(5,6)=='1')
 	 					friflag	=	"<img src='img/check"+freq.substring(5,6)+".png'></img>";
 	 				var satflag	=	'';
 	 				if(freq.substring(6)=='1')
 	 					satflag	=	"<img src='img/check"+freq.substring(6)+".png'></img>";
 				htmlstrPPSP+='<tr><td style="max-width:80px;" class="center">'+j+'</td><td class="left"><u><a target=_blank href=\"TrainRoute.jsp?trno='+trnno+'\">'+trnno+'</a></u></td><td class="left">'+trainname+'</td><td class="left">'+srcstn+'</td><td class="left">'+dstnstn+'</td><td class="left">'+runstatus+'</td><td class="left" colspan=6></td></tr>';//'</td><td class="left">'+sunflag+'</td><td class="left">'+monflag+'</td><td class="left">'+tueflag+'</td><td class="left">'+wedflag+'</td><td class="left">'+thuflag+'</td><td class="left">'+friflag+'</td><td class="left">'+satflag+'</td></tr>';
 				}else if(trainname.indexOf('KISAN')>=0||trainname.indexOf('KISHAN')>=0){
 					kr++;
 					trainname=srcstn.split('-')[0]+'-'+dstnstn.split('-')[0]+'- KISAN RAIL'
 	 				var freq=(obj.train_det)[i].freq;
 					var sunflag	=	'';
 					if(freq.substring(0,1)=='1')
 						sunflag	=	"<img src='img/check"+freq.substring(0,1)+".png'></img>";

 					var monflag	=	'';
 						if(freq.substring(1,2)=='1')
 							monflag	=	"<img src='img/check"+freq.substring(1,2)+".png'></img>";
 	 				var tueflag	=	'';
 	 				if(freq.substring(2,3)=='1')
 	 					tueflag	=	"<img src='img/check"+freq.substring(2,3)+".png'></img>";
 	 				var wedflag	=	'';
 	 				if(freq.substring(3,4)=='1')
 	 					wedflag	=	"<img src='img/check"+freq.substring(3,4)+".png'></img>";
 	 				var thuflag	=	'';
 	 				if(freq.substring(4,5)=='1')
 	 					thuflag	=	"<img src='img/check"+freq.substring(4,5)+".png'></img>";
 	 				var friflag	=	'';
 	 				if(freq.substring(5,6)=='1')
 	 					friflag	=	"<img src='img/check"+freq.substring(5,6)+".png'></img>";
 	 				var satflag	=	'';
 	 				if(freq.substring(6)=='1')
 	 					satflag	=	"<img src='img/check"+freq.substring(6)+".png'></img>";
 	 				htmlstrKR+='<tr><td style="max-width:80px;" class="center">'+kr+'</td><td class="left"><u><a target=_blank href=\"TrainRoute.jsp?trno='+trnno+'\">'+trnno+'</a></u></td><td class="left">'+trainname+'</td><td class="left">'+srcstn+'</td><td class="left">'+dstnstn+'</td><td class="left">'+runstatus+'</td><td class="left">'+sunflag+'</td><td class="left">'+monflag+'</td><td class="left">'+tueflag+'</td><td class="left">'+wedflag+'</td><td class="left">'+thuflag+'</td><td class="left">'+friflag+'</td><td class="left">'+satflag+'</td></tr>';
	
 				}else if( trainname.indexOf('CARGO')>=0 || trainname.indexOf('PCET')>=0){
 					pcet++;
 					trainname=srcstn.split('-')[0]+'-'+dstnstn.split('-')[0]+'- Leased PCET'
 	 				var freq=(obj.train_det)[i].freq;
 					var sunflag	=	'';
 					if(freq.substring(0,1)=='1')
 						sunflag	=	"<img src='img/check"+freq.substring(0,1)+".png'></img>";

 					var monflag	=	'';
 						if(freq.substring(1,2)=='1')
 							monflag	=	"<img src='img/check"+freq.substring(1,2)+".png'></img>";
 	 				var tueflag	=	'';
 	 				if(freq.substring(2,3)=='1')
 	 					tueflag	=	"<img src='img/check"+freq.substring(2,3)+".png'></img>";
 	 				var wedflag	=	'';
 	 				if(freq.substring(3,4)=='1')
 	 					wedflag	=	"<img src='img/check"+freq.substring(3,4)+".png'></img>";
 	 				var thuflag	=	'';
 	 				if(freq.substring(4,5)=='1')
 	 					thuflag	=	"<img src='img/check"+freq.substring(4,5)+".png'></img>";
 	 				var friflag	=	'';
 	 				if(freq.substring(5,6)=='1')
 	 					friflag	=	"<img src='img/check"+freq.substring(5,6)+".png'></img>";
 	 				var satflag	=	'';
 	 				if(freq.substring(6)=='1')
 	 					satflag	=	"<img src='img/check"+freq.substring(6)+".png'></img>";
 	 				htmlstrPCET+='<tr><td style="max-width:80px;" class="center">'+pcet+'</td><td class="left"><u><a target=_blank href=\"TrainRoute.jsp?trno='+trnno+'\">'+trnno+'</a></u></td><td class="left">'+trainname+'</td><td class="left">'+srcstn+'</td><td class="left">'+dstnstn+'</td><td class="left">'+runstatus+'</td><td class="left">'+sunflag+'</td><td class="left">'+monflag+'</td><td class="left">'+tueflag+'</td><td class="left">'+wedflag+'</td><td class="left">'+thuflag+'</td><td class="left">'+friflag+'</td><td class="left">'+satflag+'</td></tr>';
	
 				}else if(train_type=='PEXP'){//trainname.indexOf('PCET')>=0){
 					pcet++;
// 					trainname=srcstn.split('-')[0]+'-'+dstnstn.split('-')[0]+'- Leased PCET'
 					trainname=(obj.train_det)[i].trainname;
 	 				var freq=(obj.train_det)[i].freq;
 					var sunflag	=	'';
 					if(freq.substring(0,1)=='1')
 						sunflag	=	"<img src='img/check"+freq.substring(0,1)+".png'></img>";

 					var monflag	=	'';
 						if(freq.substring(1,2)=='1')
 							monflag	=	"<img src='img/check"+freq.substring(1,2)+".png'></img>";
 	 				var tueflag	=	'';
 	 				if(freq.substring(2,3)=='1')
 	 					tueflag	=	"<img src='img/check"+freq.substring(2,3)+".png'></img>";
 	 				var wedflag	=	'';
 	 				if(freq.substring(3,4)=='1')
 	 					wedflag	=	"<img src='img/check"+freq.substring(3,4)+".png'></img>";
 	 				var thuflag	=	'';
 	 				if(freq.substring(4,5)=='1')
 	 					thuflag	=	"<img src='img/check"+freq.substring(4,5)+".png'></img>";
 	 				var friflag	=	'';
 	 				if(freq.substring(5,6)=='1')
 	 					friflag	=	"<img src='img/check"+freq.substring(5,6)+".png'></img>";
 	 				var satflag	=	'';
 	 				if(freq.substring(6)=='1')
 	 					satflag	=	"<img src='img/check"+freq.substring(6)+".png'></img>";
 	 				htmlstrPEXP+='<tr><td style="max-width:80px;" class="center">'+pcet+'</td><td class="left"><u><a target=_blank href=\"TrainRoute.jsp?trno='+trnno+'\">'+trnno+'</a></u></td><td class="left">'+trainname+'</td><td class="left">'+srcstn+'</td><td class="left">'+dstnstn+'</td><td class="left">'+runstatus+'</td><td class="left">'+sunflag+'</td><td class="left">'+monflag+'</td><td class="left">'+tueflag+'</td><td class="left">'+wedflag+'</td><td class="left">'+thuflag+'</td><td class="left">'+friflag+'</td><td class="left">'+satflag+'</td></tr>';
	
 				}
 			}
 			htmlstrPEXP+='</table>';
 			$("#divPrclExpress").html(htmlstrPEXP);

 			htmlstrKR+='</table>';
 			$("#divKR").html(htmlstrKR);

 			htmlstrPPSP +='</table>';
 			$("#divNTT").html('' );
 			$("#divNTT").html(htmlstrPPSP );
 			htmlstrPCET+='</table>';
 			$("#divPCET").html(htmlstrPCET);		
 			
 			}
 			});
 	}
 	
 	
 	/*********************/
 	
 	function fetchPPSP(scale)
 	{
 		var htmlstr='<table class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">S NO.</th><th>TRAIN NO.</th><th>TRAIN NAME</th><th>SOURCE STN.</th><th>DESTINATION STN</th><th>RUN STATUS</th><th colspan=7>DAYS OF RUN</th></tr>';
			htmlstr+='<tr><th colspan=6></th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr>';
 		var myurl="/CRISPMSRestfulServices/services/PMSStatus/getppsp";
 		var newobj={trntype:'PPSP',srcstn:'',dstnstn:''};// Blank for All Source //Blank for All Destination
 		$.ajax({
 			url : myurl,
 			type : "post",
 			async : true,
 			data: JSON.stringify(newobj),
 			success : function(data) {
 				//newobj=data;
 				//alert(data);
 			var obj= data;
 			var stts=obj.Stts;
 			var erormesg=obj.ErorMesg;
 			if(stts=="F")
 			{
 				alert("Not able to connect to Server:"+erormesg);
 				return false;
 			}

 			var j	=	0;
 			var kr	=	0;
 			var pcet	=	0;
 			//for(var i=0;i<JSON.parse(obj.train_det).length;i++)
 			for(var i=0;i<obj.train_det.length;i++)//No needing of JSON parsing as obj.train_det is itself is an object and not string
 			{
 				var trnno=(obj.train_det)[i].trnno;
 				var trainname=(obj.train_det)[i].trainname;
 					
 				var srcstn=(obj.train_det)[i].srcstn;
 				var dstnstn=(obj.train_det)[i].dstnstn;

 				var runstatus=(obj.train_det)[i].runstatus;
 				if(runstatus=='-')
 					runstatus='<i>Yet To Start/Update Unavailable</i>';
// 				if(trainname.indexOf('KISAN')<0  && trainname.indexOf('PCET')<0){
 					j++;
 					trainname=srcstn.split('-')[0]+'-'+dstnstn.split('-')[0]+'- NON-TIMETABLED PARCEL SPECIAL '
 				var freq=(obj.train_det)[i].freq;
 					var sunflag	=	'';
 					if(freq.substring(0,1)=='1')
 						sunflag	=	"<img src='img/check"+freq.substring(0,1)+".png'></img>";

 					var monflag	=	'';
 						if(freq.substring(1,2)=='1')
 							monflag	=	"<img src='img/check"+freq.substring(1,2)+".png'></img>";
 	 				var tueflag	=	'';
 	 				if(freq.substring(2,3)=='1')
 	 					tueflag	=	"<img src='img/check"+freq.substring(2,3)+".png'></img>";
 	 				var wedflag	=	'';
 	 				if(freq.substring(3,4)=='1')
 	 					wedflag	=	"<img src='img/check"+freq.substring(3,4)+".png'></img>";
 	 				var thuflag	=	'';
 	 				if(freq.substring(4,5)=='1')
 	 					thuflag	=	"<img src='img/check"+freq.substring(4,5)+".png'></img>";
 	 				var friflag	=	'';
 	 				if(freq.substring(5,6)=='1')
 	 					friflag	=	"<img src='img/check"+freq.substring(5,6)+".png'></img>";
 	 				var satflag	=	'';
 	 				if(freq.substring(6)=='1')
 	 					satflag	=	"<img src='img/check"+freq.substring(6)+".png'></img>";
 				htmlstr+='<tr><td style="max-width:80px;" class="center">'+j+'</td><td class="left"><u><a target=_blank href=\"TrainRoute.jsp?trno='+trnno+'\">'+trnno+'</a></u></td><td class="left">'+trainname+'</td><td class="left">'+srcstn+'</td><td class="left">'+dstnstn+'</td><td class="left">'+runstatus+'</td><td class="left">'+sunflag+'</td><td class="left">'+monflag+'</td><td class="left">'+tueflag+'</td><td class="left">'+wedflag+'</td><td class="left">'+thuflag+'</td><td class="left">'+friflag+'</td><td class="left">'+satflag+'</td></tr>';
// 				} 
 			}
 			htmlstr+='</table>';
 			$("#divNTTPrclExpress").html(htmlstr); 
 			
 			}
 			});
 	}

 	/*****************/
 	
 	
 	
 	function incFontSize()
 	{
 	    $("div").children().each(function() {
 	      var size = parseInt($(this).css("font-size"));
 	      size = size + 1 + "px";
 	      $(this).css({
 	        'font-size': size
 	      });
 	    });
 	    fontSizeChng+=1;
 	}
 	function decFontSize()
 	{
 	    $("div").children().each(function() {
 	      var size = parseInt($(this).css("font-size"));
 	      size = (size -1) + "px";
 	      $(this).css({
 	        'font-size': size
 	      });
 	    });
 	    fontSizeChng-=1;
 	}
 	function setOrigFontSize()
 	{
 	    $("div").children().each(function() {
 	      var size = parseInt($(this).css("font-size"));
 	      size = (size -fontSizeChng) + "px";
 	      $(this).css({
 	        'font-size': size
 	      });
 	    });
 	    fontSizeChng=0;
 	}

 	
 	function fetchofficers()
 	{
 		var htmlstr='<table class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">SR.</th><th>ZONE</th><th>DIVISION</th><th>OFFICER</th><th>MOBILE</th><th>LANDLINES</th></tr>';
 		var myurl="/CRISPMSRestfulServices/services/PMSStatus/getofficers";
 		var newobj;
 		$.ajax({
 			url : myurl,
 			type : "post",
 			async : true,
 			success : function(data) {
 				newobj=data;
 				//alert(data);
 			var obj= data;
 			var stts=obj.Stts;
 			var erormesg=obj.ErorMesg;
 			if(stts=="F")
 			{
 				alert("Not able to connect to Server:"+erormesg);
 				return false;
 			}
 /*			ZONE
 			DIVISION
 			OFFICER
 			MOBILE
 			LANDLINE
 			*/
 			for(var i=0;i<JSON.parse(obj.officerList).length;i++)
 			{
 				var zone=JSON.parse(obj.officerList)[i].ZONE;
 				var dvsn=JSON.parse(obj.officerList)[i].DIVISION;
 				var officer=JSON.parse(obj.officerList)[i].OFFICER;
 				var mobile=JSON.parse(obj.officerList)[i].MOBILE;
 				var landlines=JSON.parse(obj.officerList)[i].LANDLINE;
 				htmlstr+='<tr><td style="max-width:80px;" class="center">'+(i+1)+'</td><td class="left">'+zone+'</td><td class="left">'+dvsn+'</td><td class="left">'+officer+'</td><td class="left">'+mobile+'</td><td class="left">'+landlines+'</td></tr>';

 			}
 			htmlstr+='</table>';
 			$("#divofficerlist").html(htmlstr);
 			}
 			});
 	}
 	
 	
 	function	fetchTrainRt(StrTrnNo){
 	 	{
 	 		var htmlstr='<table class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">SR.</th><th>STATION</th><th>DAY</th><th>ARRIVAL</th><th>DEPURTURE</th><th>DISTANCE</th></tr>';
// 	 		var myurl="/CRISPMSRestfulServices/services/PMSStatus/gettrainrt";
// 	 					CRISPMSRestfulServices/services/PMSStatus/gettrainrticms
 	 		var myurl="/CRISPMSRestfulServices/services/PMSStatus/gettrainrticms";
 	 		var newobj;
 	 		$.ajax({
 	 			url : myurl,
 	 			type : "post",
 	 			async : true,
 	 			data : "{\"trnno\":\""+StrTrnNo+"\"}",
 	 			success : function(data) {
 	 				newobj=data;
 	 				//alert(data);
 	 			var obj= data;
 	 			var stts=obj.Stts;
 	 			var erormesg=obj.ErorMesg;
 	 			if(stts=="F")
 	 			{
 	 				alert("Not able to connect to Server:"+erormesg);
 	 				return false;
 	 			}
 	 /*			ZONE
 	 			DIVISION
 	 			OFFICER
 	 			MOBILE
 	 			LANDLINE
 	 			*/
 	 			for(var i=0;i<(obj.trnstpg).length;i++)
 	 			{
 	 				var StnCode=(obj.trnstpg)[i].StnCode+"-"+(obj.trnstpg)[i].StnName;
 	 				var ArrTime=(obj.trnstpg)[i].ArrTimeTS;
 	 				var	ArrTimehhmmss=ArrTime.hourOfDay+":"+ArrTime.minute;//+":"+ArrTime.second;
 	 				
 	 				var DepTime=(obj.trnstpg)[i].DepTimeTS;
 	 				var	DepTimehhmmss=DepTime.hourOfDay+":"+DepTime.minute;//+":"+DepTime.second;
 	 				var Distance=(obj.trnstpg)[i].Distance;
 	 				var DAY=(obj.trnstpg)[i].DayCnt;
 	 				htmlstr+='<tr><td style="max-width:80px;" class="center">'+(i+1)+'</td><td class="left">'+StnCode+'</td><td class="left">'+DAY+'</td><td class="left">'+ArrTimehhmmss+'</td><td class="left">'+DepTimehhmmss+'</td><td class="left">'+Distance+'</td></tr>';

 	 			}
 	 			htmlstr+='</table>';
 	 			$("#divTrainRt").html(htmlstr);
 	 			},
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                } 
 	 			});
 	 	}

 	}
 	
 	function	fetchTrainDet(StrTrnNo){
 	 	{
 	 		//var htmlstr='<table class="table table-striped table-bordered tabformat"><tr><th style="max-width:80px;">Train No.</th><th>Train Name</th><th>From-To</th><th>Parcel Rate Scale</th><th>Luggage Rate Scale</th></tr>';
 	 		var myurl="/CRISPMSRestfulServices/services/PMSStatus/gettrainrt";
 	 		var newobj;
 	 		$.ajax({
 	 			url : myurl,
 	 			type : "post",
 	 			async : true,
 	 			data : "{\"TRAIN_NUMBER\":\""+StrTrnNo+"\"}",
 	 			success : function(data) {
 	 				newobj=data;
 	 				//alert(data);
 	 			var obj= data;
 	 			var stts=obj.Stts;
 	 			var erormesg=obj.ErorMesg;
 	 			if(stts=="F")
 	 			{
 	 				alert("Not able to connect to Server:"+erormesg);
 	 				return false;
 	 			}

// 	 			for(var i=0;i<(obj.trnstpg).length;i++)
// 	 			{
// 	 				var StnCode=(obj.trnstpg)[i].StnCode+"-"+(obj.trnstpg)[i].StnName;
// 	 				var ArrTime=(obj.trnstpg)[i].ArrTimeTS;
// 	 				var	ArrTimehhmmss=ArrTime.hourOfDay+":"+ArrTime.minute;//+":"+ArrTime.second;
// 	 				
// 	 				var DepTime=(obj.trnstpg)[i].DepTimeTS;
// 	 				var	DepTimehhmmss=DepTime.hourOfDay+":"+DepTime.minute;//+":"+DepTime.second;
// 	 				var Distance=(obj.trnstpg)[i].Distance;
// 	 				var DAY=(obj.trnstpg)[i].DayCnt;
// 	 				htmlstr+='<tr><td style="max-width:80px;" class="center">'+(i+1)+'</td><td class="left">'+StnCode+'</td><td class="left">'+DAY+'</td><td class="left">'+ArrTimehhmmss+'</td><td class="left">'+DepTimehhmmss+'</td><td class="left">'+Distance+'</td></tr>';
//
// 	 			}
// 	 			htmlstr+='</table>';
// 	 			$("#divTrainRt").html(htmlstr);
 	 			
 	 			document.getElementById('lblTrainName').innerHTML =obj.TrainName;
 	 			document.getElementById('lblFromTo').innerHTML =obj.srcStn+'-'+obj.DestStn;
 	 			var	scalecd	=	'';
 	 			if(obj.ScaleCode=='L')
 	 				scalecd	=	'Luggage';
 	 			if(obj.ScaleCode=='R')
 	 				scalecd	=	'Rajdhani';
 	 			if(obj.ScaleCode=='P')
 	 				scalecd	=	'Premier';
 	 			if(obj.ScaleCode=='S')
 	 				scalecd	=	'Standard';
 	 			
 	 			
 	 			var	LTscalecd	=	'';
 	 			if(obj.LTScalecode=='L')
 	 				LTscalecd	=	'Luggage';
 	 			if(obj.LTScalecode=='R')
 	 				LTscalecd	=	'Rajdhani';
 	 			if(obj.LTScalecode=='P')
 	 				LTscalecd	=	'Premier';
 	 			if(obj.LTScalecode=='S')
 	 				LTscalecd	=	'Standard';
 	 			document.getElementById('lblParcelRate').innerHTML =scalecd;
 	 			
 	 			document.getElementById('lblLuggageRate').innerHTML =LTscalecd;
 	 			}
 	 			});
 	 	}

 	}

 	
 	