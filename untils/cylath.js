//闭包执行一个立即定义的匿名函数  
;(function (name, definition) {
  // 检测上下文环境是否为AMD或CMD
  var hasDefine = typeof define === 'function',
    // 检查上下文环境是否为Node
    hasExports = typeof module !== 'undefined' && module.exports;
 
  if (hasDefine) {
    // AMD环境或CMD环境
    define(definition);
  } else if (hasExports) {
    // 定义为普通Node模块
    module.exports = definition();
  } else {
    // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
    this[name] = definition();
  }
})('cylath', function () {
  	var cylath = function () {
  	// 402faf502f78f3d824b59a9d2e043365 百度统计
  	var _hmt = _hmt||[];
  	var _obj = {
	  	//数组从小到大排序
		sortFromSmallToBig:function(array){
			var i = j = t = 0;
			for (i = 0; i < array.length; i++){
				for (j = 0; j < array.length; j++){
					if (array[i] < array[j]){
						t = array[i];
						array[i] = array[j];
						array[j] = t;
					} 
				}
			}
			return array;
		},
		//求给定数组的和
		sum:function(arr){
			var result = 0;  
	        for(var i = 0; i < arr.length; i++){  
	            result += arr[i];  
	        }  
	        return result; 
		},
		//删除数组中与给定的值相同的值,并返回新数组
		removeSameVal:function(arr, item) {  
		    for(var i = 0; i < arr.length; i++){  
		        if(arr[i] == item){  
		            arr.splice(i,1);  
		            i--;  
		        }  
		    }  
		    return arr;  
		},
		//找出给定元素在数组中的下标 
		getIndex:function(arr,item){
			for(var i = 0; i < arr.length; i++){  
	        	if(arr[i] == item){  
	            	return i;  
	        	}    
		    }  
		    return -1;  
		},
		//把数组中重复的元素添加到新的数组中，新数组中不能有重复元素
		addRepeatedItemToArray:function(arr){
			var array=[];
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<arr.length;j++){
					if(arr[i] == arr[j]){
						if(array.indexOf(arr[j])==-1){
							array.push(arr[j])
						}
					}
				}
			}
			return array
		},
		//返回给定两个值间的随机整数(包括头和尾)
		getRandomParseIntNum:function(min,max){
			return parseInt(Math.random() * (max - min + 1)) + min
		},
		//判断是不是数组
		isArray:function(arr){
			if(arr instanceof Array || arr.constructor == Array) return true 	
		},
		//随机生成n个10~100的整数，并排序
		getNRandom:function(n,min,max){
			var array = [];
			for(var i=0;i<n;i++){
				array.push(this.getRandomParseIntNum(min,max))
			}
			array.sort(function(a,b){
				return a-b
			})
			return array
		},
		//数组去重,返回去重后的数组
		removeRepeatedItem:function(arr){
			var res = [];
			var json = {};
			for(var i = 0; i < arr.length; i++){
				if(!json[arr[i]]){
					res.push(arr[i]);
					json[arr[i]] = 1;
				}
			}
			return res;
		},
		//获取某年某月有多少天
		getDaysInMonth:function(year, month) {
	        var month = parseInt(month, 10);
	        var temp = new Date(year, month, 0);
	        return temp.getDate();
	    },
	    //cookie 设置 获取 清除
	    cookie:{
			//设置cookie
		    set:function (name, value, iDay) { 
				var oDate = new Date(); 
				oDate.setDate(oDate.getDate()+iDay); 
				document.cookie = name+'='+value+';expires='+oDate; 
				console.log(this)
			}, 
			//取值cookie
			get:function (name) { 
					var arr = document.cookie.split('; '); 
					for (var i = arr.length - 1; i >= 0; i--) { 
						var arr2 = arr[i].split('='); 
						if(arr2[0]===name){ 
						return arr2[1]; 
					} 
				} 
				return ''; 
			}, 
			//移除cookie
			remove:function (name) { 
				this.set(name,1,-1); 
			}
	    },
	    //百度统计
		baidu:{
			track:function(trackNumber){
				var hm = document.createElement("script");
					hm.src = "https://hm.baidu.com/hm.js?"+trackNumber;
					var s = document.getElementsByTagName("script")[0]; 
					s.parentNode.insertBefore(hm, s);
			},
			trackEvent:function(category,action){
				if(!action){
					_hmt.push(['_trackEvent', category, 'click'])
					return
				}
				_hmt.push(['_trackEvent', category, action]);
			},
			trackPage:function(string){
				//string 是 域名后面的目录结构 如 '/ab?a=1' 主要用于单页面切换
				_hmt.push(['_trackPageview', string])
			}
		},
		//页面重新刷新
		reload:function(){
			//部分andriod手机window.reload() 没用
			 if(window.location.href.indexOf('?') !=-1){
	            window.location.href = window.location.href +'&_='+Math.random();
	        }else{
	            window.location.href = window.location.href +'?_='+Math.random();
	        }
		},
		// url获取参数
		query:function(queryString){
			var url = location.search; //获取url中"?"符后的字串 
			var theRequest = new Object(); 
			if (url.indexOf("?") != -1) { 
				var str = url.substr(1); 
				strsArr = str.split("&");
			if(queryString == '' || !queryString && queryString !='undefined'){
				for(var i = 0; i < strsArr.length; i ++) { 
					var arr2 = strsArr[i].split('=')
					theRequest[arr2[0]]= decodeURI(arr2[1]);		 
				} 
					return theRequest
				}else{
					for(var i = 0; i < strsArr.length; i ++) { 
						var arr2 = strsArr[i].split('=')
						if(arr2[0] == queryString){
							return decodeURI(arr2[1])
						}
					}
				}

			}
		},
		// rem 
		rem:function(_psd){
	       	var document = window.document,
	        docEl = document.documentElement,/*html元素*/
	        psd = _psd,
	        dpr = 1,
	        scale = 1/dpr,/*缩放比*/
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'; /*判断是否是横屏状态，如果是则横屏，如果不是则进行resize 事件*/
	        
	        var metaEl = document.createElement('meta');
	        metaEl.name = 'viewport';
	        metaEl.content = 'initial-scale='+scale+', maximum-scale='+scale+', minimum-scale='+scale;
	        docEl.firstElementChild.appendChild(metaEl);
	        // 创建meta标签，并把它添加到head标签的最后;
	        var recalc = function (){
	            var width = docEl.clientWidth;/*获取浏览器窗口的大小*/
	            if(width/dpr > psd){
	                width = psd * dpr;
	            }
	            docEl.dataset.width = width;
	            docEl.dataset.persent = 100 * (width / psd);
	            
	            docEl.style.fontSize = 100 * (width / psd)+'px';
	        };

	        recalc();
	        
	        if(!document.addEventListener) return;
	        window.addEventListener(resizeEvt , recalc, false); 
	    },
	    // 还剩余多少天，时，分，秒
	    countDown:function(target,now,filter){
	    	// ios不支持 new Date('2018-10-20 8:54:54')这样的写法
	    	if(target.indexOf('-')){
				target.replace(/-/g,'/')
	    	}
	    	if(now.indexOf('-')){
				now.replace(/-/g,'/')
	    	}
	    	target = new Date(target)
	    	now = new Date(now)
	    	diff = (target.getTime() - now.getTime())/1000
			if(diff <= 0){
				diff = 0
				return
			}
			var day =  checkTime(parseInt(diff/(24*60*60)))//计算剩余的天 
			var hour = checkTime(parseInt((diff/(24*60))%24))//计算剩余的小时 
			var minutes = checkTime(parseInt(diff/60 % 60));//计算剩余的分钟 
			var seconds = checkTime(parseInt(diff%60));//计算剩余的秒数
			if(filter=="day" && day > 0){
				return day +'天'
			}
			if(filter=="hour"){
				return day +'天' + hour +'小时'
			}
			if(filter=="minute"){
				return day +'天' + hour +'小时' +minutes+'分钟'
			}
			if(filter=="all"){
				return day+'天'+hour+'小时'+minutes+'分钟'+seconds+'秒'

			}
	    	function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
			  if(i<10) { 
			    i = "0" + i; 
			  } 
			  return i; 
			}

	    },
	    // 是否本地服务器环境
	    isLocal:function(){
	    	if(window.location.href.indexOf('localhost') != -1){
	    		return true
	    	}
	    	return false
	    },
	    /**
		 * 是否是微信浏览器
		 */
	    isWeixin:function isWeiXin(){ 
			var ua = window.navigator.userAgent.toLowerCase(); 
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
				return true; 
			}else{ 
				return false; 
			} 
		}, 
		// ajax
		http:{
			xhr:function(){
				var xhr;
			    if (window.XMLHttpRequest){    
			       xhr = new XMLHttpRequest();//非ie
			    }else{
				   xhr = new ActiveXObject("Microsoft.XMLHTTP"); //ie
			    }
			    return xhr
			},
			post:function(url,data,success,fail){
				this.xhr()
			    xhr.open('POST',url);
		        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		        xhr.send(this.params(data));
				xhr.onreadystatechange = function (){
		        if (xhr.readyState == 4){
	                if (xhr.status>=200&&xhr.status<300 || xhr.status==304){
	                    	typeof success == 'function'  && success(xhr.responseText);
		                }else{                    
		                   typeof fail=='function' && fail(xhr.status);
		                }
		        	}
		      	}

			},
			get:function(url,data){
				this.xhr()
		        var url = url+"?"+this.params(data);
		        xhr.open('GET',url);
		        xhr.send();
		        xhr.onreadystatechange = function (){
		        if (xhr.readyState == 4){
	                if (xhr.status>=200&&xhr.status<300 || xhr.status==304){
	                   typeof success == 'function' && success(xhr.responseText);
		                }else{                    
		                   typeof fail == 'function' && fail(xhr.status);
		                }
		        	}
		      	}
			},
			/**
			 * 对象参数的处理 以&符号拼接
			 * @param data
			 * @returns {string}
			 */
			params:function (data) {
			    var arr = [];
			    for (var param in data){
			        arr.push(encodeURIComponent(param) + '=' +encodeURIComponent(data[param]));
			    }
			    arr.push(('randomNumber=' + Math.random()).replace('.'));
			    return arr.join('&');
			},
		}	 
  		};
  	return _obj
	}
  	return cylath;
}); 
