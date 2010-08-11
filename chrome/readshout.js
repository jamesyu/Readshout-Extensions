(function() {
    chrome.extension.sendRequest({get: "active"}, function(response) {
        if(response.active) {
            s = document.createElement('scri'+'pt'); 
            b = document.body;
    
            var excludes = [
                /\.readshout\.com/,
                /\/\/localhost/
            ];
    
            var loc = document.location.href;
            var excluded = false;
            for(var i=0; i < excludes.length; i++) {
                if(excludes[i].exec(loc)) {
                    excluded = true;
                    break;
                }
            }
    
            if(!excluded) {
                s.setAttribute('src','http://www.readshout.com/b?s=' + encodeURIComponent(document.location.href)+'&t=' + encodeURIComponent(document.title)+'&no_message=1');    
                b.appendChild(s);
            }            
        }
    });
})();
