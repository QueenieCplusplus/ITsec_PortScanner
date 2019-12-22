//2019, 12/22, AM 8:15, by Queenie
// Port Scanner
// this tech dev since 2006

portScanner: function(callback, targetHost, portNum, timeout){

    var timeout = (timeout==null)?100:timeout;
    var img = Image();

    img.onerr = function() {
        if(! img) return;
        img = undefined;
        callback(targetHost, portNum, 'open');
    }

    img.onload = img.onerr;

    //使用 http
    img.src = 'http://' + targetHost + ':' + portNum;

    setTimeout(function(){
        if (!img) return;
        img = undefined;
        callback(targetHost, portNum, 'closed');
      }, timeout);

    targetHostScanner: function(callback, targetHost, ports_str, timeout){
        
        var ports = ports_str.splits(",");

        for(index = 0; index < ports.length; index++){

            this.portScanner(callback, targetHost, ports[index], timeout);

        };

    }

}

// https://browserhacker.com
