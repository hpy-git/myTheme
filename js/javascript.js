var cloud = {
        varName: function() {
            return this.textEdit;
          }
        }
        //WIFI NAME HERE
        var wifiName = {
          textEdit:"YOUR WIFI NAME HERE",
        }
        //RUNNING BANNER TEXT HERE
        var runningText = {
          textEdit:"MOVING TEXT ANNOUNCEMENT",
        }
        //INFO TEXT HERE
        var infoText = {
          textEdit:"INFORMATION TEXT HERE.",
        }
        //COPYRIGHT TEXT HERE
        var copyrightText = {
          textEdit:"COPRIGHT 2025 YOUR COMPANY.",
        }
        //POWERED BY TEXT HERE
        var pwrText = {
          textEdit:"POWERED BY YOUR COMPANY.",
        }

        var a = cloud.varName.call(wifiName); 
        document.getElementById("callwifiName").innerHTML = a;

        var b = cloud.varName.call(runningText); 
        document.getElementById("callrunningText").innerHTML = b;

        var c = cloud.varName.call(infoText); 
        document.getElementById("callinfoText").innerHTML = c;

        var d = cloud.varName.call(copyrightText); 
        document.getElementById("callcopyrightText").innerHTML = d;

        var e = cloud.varName.call(pwrText); 
        document.getElementById("callpwrText").innerHTML = e;

        