	//2 Student attendance program
    var conformation="Y";
    var noh = 250;
    var noa = 170;
    var attend = (noa/(noh))*100
    console.log("attendance is:"+attend)
    var medical_cause = "Y";
    if (attend>=75){
      console.log("True");
    }
    else if(attend>=60 && conformation=='Y'){
        console.log ("True");
    }
      else{
        console.log ("False");
    }
    
