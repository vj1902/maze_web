var config = require("./Config");
var lo = localStorage.getItem("le")
var la ="";
var currentscene="";
var currentscene1 = "";
var currentscene2 = "";
var currentscene3 = "";
// export var leve;
 var abc;
var obj;
export var leve;
export var b;
export var c;
export var d;
export  var e;

  cc.Class ({
    extends: cc.Component,

    
    properties: {
        Mapjson:cc.JsonAsset,
        
    },
    currentscene,
    OnBackToBeginnerClicked() {
        cc.director.loadScene("beginner");
    },
    OnBackToMenuClicked() {
        cc.director.loadScene("menu");
    },
    OnBackToBasicClicked() {
        cc.director.loadScene("basic");
    },
    OnBackToMediumClicked() {
        cc.director.loadScene("medium");
    },
    OnBackToAdvanceClicked() {
        cc.director.loadScene("advance");
    },
    OnBackToStartClicked() {
        cc.director.loadScene("start");
    },

    
    OnPauseClicked() {
        cc.audioEngine.stopMusic();
    },

    OnBackToNextClicked() {
       
        if (currentscene===1){
            
            currentscene =2;
         
            cc.director.loadScene("Stage1-1");

            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb2
            b=obj.pos2X
            c=obj.pos2Y
            d=obj.Cat2X
            e=obj.Cat2Y
            console.log(currentscene)
      

        }
        else if (currentscene===2){
            currentscene =3;
         
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb3
            b=obj.pos3X
            c=obj.pos3Y
            d=obj.Cat3X
            e=obj.Cat3Y
            console.log(currentscene)
            
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===3){
            currentscene =4;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb4
            b=obj.pos4X
            c=obj.pos4Y
            d=obj.Cat4X
            e=obj.Cat4Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===4){
            currentscene =5;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb5
            b=obj.pos5X
            c=obj.pos5Y
            d=obj.Cat5X
            e=obj.Cat5Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===5){
            currentscene =6;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb6
            b=obj.pos6X
            c=obj.pos6Y
            d=obj.Cat6X
            e=obj.Cat6Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===6){
            currentscene =7;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb7
            b=obj.pos7X
            c=obj.pos7Y
            d=obj.Cat7X
            e=obj.Cat7Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===7){
            currentscene =8;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb8
            b=obj.pos8X
            c=obj.pos8Y
            d=obj.Cat8X
            e=obj.Cat8Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===8){
            currentscene =9;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb9
            b=obj.pos9X
            c=obj.pos9Y
            d=obj.Cat9X
            e=obj.Cat9Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===9){
            currentscene =10;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb10
            b=obj.pos10X
            c=obj.pos10Y
            d=obj.Cat10X
            e=obj.Cat10Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===10){
            currentscene =11;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb11
            b=obj.pos11X
            c=obj.pos11Y
            d=obj.Cat11X
            e=obj.Cat11Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===11){
            currentscene =12;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb12
            b=obj.pos12X
            c=obj.pos12Y
            d=obj.Cat12X
            e=obj.Cat12Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===12){
            currentscene =13;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb13
            b=obj.pos13X
            c=obj.pos13Y
            d=obj.Cat13X
            e=obj.Cat13Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===13){
            currentscene =14;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb14
            b=obj.pos14X
            c=obj.pos14Y
            d=obj.Cat14X
            e=obj.Cat14Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===14){
            currentscene =15;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb15
            b=obj.pos15X
            c=obj.pos15Y
            d=obj.Cat15X
            e=obj.Cat15Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===15){
            currentscene =16;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb16
            b=obj.pos16X
            c=obj.pos16Y
            d=obj.Cat16X
            e=obj.Cat16Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===16){
            currentscene =17;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb17
            b=obj.pos17X
            c=obj.pos17Y
            d=obj.Cat17X
            e=obj.Cat17Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===17){
            currentscene =18;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb18
            b=obj.pos18X
            c=obj.pos18Y
            d=obj.Cat18X
            e=obj.Cat18Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===18){
            currentscene =19;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb19
            b=obj.pos19X
            c=obj.pos19Y
            d=obj.Cat19X
            e=obj.Cat19Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===19){
            currentscene =20;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb20
            b=obj.pos20X
            c=obj.pos20Y
            d=obj.Cat20X
            e=obj.Cat20Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===20){
            currentscene =21;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb21
            b=obj.pos21X
            c=obj.pos21Y
            d=obj.Cat21X
            e=obj.Cat21Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===21){
            currentscene =22;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb22
            b=obj.pos22X
            c=obj.pos22Y
            d=obj.Cat22X
            e=obj.Cat22Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===22){
            currentscene =23;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb23
            b=obj.pos23X
            c=obj.pos23Y
            d=obj.Cat23X
            e=obj.Cat23Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===23){
            currentscene =24;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb24
            b=obj.pos24X
            c=obj.pos24Y
            d=obj.Cat24X
            e=obj.Cat24Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===24){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb25
            b=obj.pos25X
            c=obj.pos25Y
            d=obj.Cat25X
            e=obj.Cat25Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===25){
            currentscene =26;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb26
            b=obj.pos26X
            c=obj.pos26Y
            d=obj.Cat26X
            e=obj.Cat26Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===26){
            currentscene =27;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb27
            b=obj.pos27X
            c=obj.pos27Y
            d=obj.Cat27X
            e=obj.Cat27Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===27){
            currentscene =28;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb28
            b=obj.pos28X
            c=obj.pos28Y
            d=obj.Cat28X
            e=obj.Cat28Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===28){
            currentscene =29;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb2
            b=obj.pos29X
            c=obj.pos29Y
            d=obj.Cat29X
            e=obj.Cat29Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
        else if (currentscene===29){
            currentscene =30;
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb30
            b=obj.pos30X
            c=obj.pos30Y
            d=obj.Cat30X
            e=obj.Cat30Y
            console.log(currentscene)
      
            cc.director.loadScene("Stage1-1");
        }
    },
 OnBackToNext1Clicked() 
        {
        if (currentscene1===1){
            currentscene1=2;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba2
            b=obj.pos2X
            c=obj.pos2Y
            d=obj.Cat2X
            e=obj.Cat2Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===2){
            currentscene1=3;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba3
            b=obj.pos3X
            c=obj.pos3Y
            d=obj.Cat3X
            e=obj.Cat3Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===3){
            currentscene1=4;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba4
            b=obj.pos4X
            c=obj.pos4Y
            d=obj.Cat4X
            e=obj.Cat4Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===4){
            currentscene1=5;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba5
            b=obj.pos5X
            c=obj.pos5Y
            d=obj.Cat5X
            e=obj.Cat5Y
          
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===5){
            currentscene1=6;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba6
            b=obj.pos6X
            c=obj.pos6Y
            d=obj.Cat6X
            e=obj.Cat6Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===6){
            currentscene1=7;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba7
            b=obj.pos7X
            c=obj.pos7Y
            d=obj.Cat7X
            e=obj.Cat7Y
        
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===7){
            currentscene1=8;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba8
            b=obj.pos8X
            c=obj.pos8Y
            d=obj.Cat8X
            e=obj.Cat8Y
          
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===8){
            currentscene1=9;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba9
            b=obj.pos9X
            c=obj.pos9Y
            d=obj.Cat9X
            e=obj.Cat9Y
         
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===9){
            currentscene1=10;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba10
            b=obj.pos10X
            c=obj.pos10Y
            d=obj.Cat10X
            e=obj.Cat10Y
            
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===10){
            currentscene1=11;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba11
            b=obj.pos11X
            c=obj.pos11Y
            d=obj.Cat11X
            e=obj.Cat11Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===11){
            currentscene1=12;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba12
            b=obj.pos12X
            c=obj.pos12Y
            d=obj.Cat12X
            e=obj.Cat12Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===12){
            currentscene1=13;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba13
            b=obj.pos13X
            c=obj.pos13Y
            d=obj.Cat13X
            e=obj.Cat13Y
            
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===13){
            currentscene1=14;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba14
            b=obj.pos14X
            c=obj.pos14Y
            d=obj.Cat14X
            e=obj.Cat14Y
           
            cc.director.loadScene("Stage2-1");        }
        else if (currentscene1===14){
            currentscene1=15;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba15
            b=obj.pos15X
            c=obj.pos15Y
            d=obj.Cat15X
            e=obj.Cat15Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===15){
            currentscene1=16;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba16
            b=obj.pos16X
            c=obj.pos16Y
            d=obj.Cat16X
            e=obj.Cat16Y
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===16){
            currentscene1=17;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba17
            b=obj.pos17X
            c=obj.pos17Y
            d=obj.Cat17X
            e=obj.Cat17Y
          
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===17){
            currentscene1=18;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba18
            b=obj.pos18X
            c=obj.pos18Y
            d=obj.Cat18X
            e=obj.Cat18Y
         
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===18){
            currentscene1=19;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba19
            b=obj.pos19X
            c=obj.pos19Y
            d=obj.Cat19X
            e=obj.Cat19Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===19){
            currentscene1=20;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba20
            b=obj.pos20X
            c=obj.pos20Y
            d=obj.Cat20X
            e=obj.Cat20Y
            
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===20){
            currentscene1=21;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba21
            b=obj.pos21X
            c=obj.pos21Y
            d=obj.Cat21X
            e=obj.Cat21Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===21){
            currentscene1=22;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba22
            b=obj.pos22X
            c=obj.pos22Y
            d=obj.Cat22X
            e=obj.Cat22Y
         
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===22){
            currentscene1=23;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba23
            b=obj.pos23X
            c=obj.pos23Y
            d=obj.Cat23X
            e=obj.Cat23Y
        
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===23){
            currentscene1=24;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba24
            b=obj.pos24X
            c=obj.pos24Y
            d=obj.Cat24X
            e=obj.Cat24Y
           
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===24){
            currentscene1=25;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba25
            b=obj.pos25X
            c=obj.pos25Y
            d=obj.Cat25X
            e=obj.Cat25Y
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===25){
            currentscene1=26;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba26
            b=obj.pos26X
            c=obj.pos26Y
            d=obj.Cat26X
            e=obj.Cat26Y
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===26){
            currentscene1=27;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba27
            b=obj.pos27X
            c=obj.pos27Y
            d=obj.Cat27X
            e=obj.Cat27Y
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===27){
            currentscene1=28;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba28
            b=obj.pos28X
            c=obj.pos28Y
            d=obj.Cat28X
            e=obj.Cat28Y
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===28){
            currentscene1=29;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba29
            b=obj.pos29X
            c=obj.pos29Y
            d=obj.Cat29X
            e=obj.Cat29Y
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===29){
            currentscene1=30;
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba30
            b=obj.pos30X
            c=obj.pos30Y
            d=obj.Cat30X
            e=obj.Cat30Y
            
            cc.director.loadScene("Stage2-1");
        }
    },
OnBackToNext2Clicked() {
        if (currentscene2===1){
            currentscene2=2;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm2
            b=obj.pos2X
            c=obj.pos2Y
            d=obj.Cat2X
            e=obj.Cat2Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===2){
            currentscene2=3;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm3
            b=obj.pos3X
            c=obj.pos3Y
            d=obj.Cat3X
            e=obj.Cat3Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===3){
            currentscene2=4;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm4
            b=obj.pos4X
            c=obj.pos4Y
            d=obj.Cat4X
            e=obj.Cat4Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===4){
            currentscene2=5;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm5
            b=obj.pos5X
            c=obj.pos5Y
            d=obj.Cat5X
            e=obj.Cat5Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===5){
            currentscene2=6;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm6
            b=obj.pos6X
            c=obj.pos6Y
            d=obj.Cat6X
            e=obj.Cat6Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===6){
            currentscene2=7;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm7
            b=obj.pos7X
            c=obj.pos7Y
            d=obj.Cat7X
            e=obj.Cat7Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===7){
            currentscene2=8;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm8
            b=obj.pos8X
            c=obj.pos8Y
            d=obj.Cat8X
            e=obj.Cat8Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===8){
            currentscene2=9;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm9
            b=obj.pos9X
            c=obj.pos9Y
            d=obj.Cat9X
            e=obj.Cat9Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===9){
            currentscene2=10;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm10
            b=obj.pos10X
            c=obj.pos10Y
            d=obj.Cat10X
            e=obj.Cat10Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===10){
            currentscene2=11;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm11
            b=obj.pos11X
            c=obj.pos11Y
            d=obj.Cat11X
            e=obj.Cat11Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===11){
            currentscene2=12;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm12
            b=obj.pos12X
            c=obj.pos12Y
            d=obj.Cat12X
            e=obj.Cat12Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===12){
            currentscene2=13;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm13
            b=obj.pos13X
            c=obj.pos13Y
            d=obj.Cat13X
            e=obj.Cat13Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===13){
            currentscene2=14;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm14
            b=obj.pos14X
            c=obj.pos14Y
            d=obj.Cat14X
            e=obj.Cat14Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===14){
            currentscene2=15;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm15
            b=obj.pos15X
            c=obj.pos15Y
            d=obj.Cat15X
            e=obj.Cat15Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===15){
            currentscene2=16;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm16
            b=obj.pos16X
            c=obj.pos16Y
            d=obj.Cat16X
            e=obj.Cat16Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===16){
            currentscene2=17;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm17
            b=obj.pos17X
            c=obj.pos17Y
            d=obj.Cat17X
            e=obj.Cat17Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===17){
            currentscene2=18;
    
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm18
            b=obj.pos18X
            c=obj.pos18Y
            d=obj.Cat18X
            e=obj.Cat18Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===18){
            currentscene2=19;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm19
            b=obj.pos19X
            c=obj.pos19Y
            d=obj.Cat19X
            e=obj.Cat19Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===19){
            currentscene2=20;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm20
            b=obj.pos20X
            c=obj.pos20Y
            d=obj.Cat20X
            e=obj.Cat20Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===20){
            currentscene2=21;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm21
            b=obj.pos21X
            c=obj.pos21Y
            d=obj.Cat21X
            e=obj.Cat21Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===21){
            currentscene2=22;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm22
            b=obj.pos22X
            c=obj.pos22Y
            d=obj.Cat22X
            e=obj.Cat22Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===22){
            currentscene2=23;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm23
            b=obj.pos23X
            c=obj.pos23Y
            d=obj.Cat23X
            e=obj.Cat23Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===23){
            currentscene2=24;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm24
            b=obj.pos24X
            c=obj.pos24Y
            d=obj.Cat24X
            e=obj.Cat24Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===24){
            currentscene2=25;

            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm25
            b=obj.pos25X
            c=obj.pos25Y
            d=obj.Cat25X
            e=obj.Cat25Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===25){
            currentscene2=26;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm26
            b=obj.pos26X
            c=obj.pos26Y
            d=obj.Cat26X
            e=obj.Cat26Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===26){
            currentscene2=27;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm27
            b=obj.pos27X
            c=obj.pos27Y
            d=obj.Cat27X
            e=obj.Cat27Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===27){
            currentscene2=28;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm28
            b=obj.pos28X
            c=obj.pos28Y
            d=obj.Cat28X
            e=obj.Cat28Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===28){
            currentscene2=29;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm29
            b=obj.pos29X
            c=obj.pos29Y
            d=obj.Cat29X
            e=obj.Cat29Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===29){
            currentscene2=30;
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm30
            b=obj.pos30X
            c=obj.pos30Y
            d=obj.Cat30X
            e=obj.Cat30Y
            console.log(currentscene)
            cc.director.loadScene("Stage3-1");
        }

    },
OnBackToNext3Clicked() {
        if (currentscene3===1){
            currentscene3=2;
            var s =JSON.stringify(this.Mapjson.json)
       
           obj=JSON.parse(s)
            leve=obj.level2
            b=obj.pos2X
            c=obj.pos2Y
            d=obj.Cat2X
            e=obj.Cat2Y
    
    
            cc.director.loadScene("Stage4-1");

           
        }
        else if (currentscene3===2){
            
            currentscene3=3;
            var s =JSON.stringify(this.Mapjson.json)
       
        obj=JSON.parse(s)
        leve=obj.level3
        b=obj.pos3X
        c=obj.pos3Y
        d=obj.Cat3X
        e=obj.Cat3Y
        cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===3){
            currentscene3=4;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level4
            b=obj.pos4X
            c=obj.pos4Y
            d=obj.Cat4X
            e=obj.Cat4Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===4){
            currentscene3=5;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level5
            b=obj.pos5X
            c=obj.pos5Y
            d=obj.Cat5X
            e=obj.Cat5Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===5){
            currentscene3=6;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level6
            b=obj.pos6X
            c=obj.pos6Y
            d=obj.Cat6X
            e=obj.Cat6Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===6){
            currentscene3=7;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level7
            b=obj.pos7X
            c=obj.pos7Y
            d=obj.Cat7X
            e=obj.Cat7Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===7){
            currentscene3=8;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level8
            b=obj.pos8X
            c=obj.pos8Y
            d=obj.Cat8X
            e=obj.Cat8Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===8){
            currentscene3=9;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level9
            b=obj.pos9X
            c=obj.pos9Y
            d=obj.Cat9X
            e=obj.Cat9Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===9){
            currentscene3=10;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level10
            b=obj.pos10X
            c=obj.pos10Y
            d=obj.Cat10X
            e=obj.Cat10Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===10){
            currentscene3=11;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level11
            b=obj.pos11X
            c=obj.pos11Y
            d=obj.Cat11X
            e=obj.Cat11Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===11){
            currentscene3=12;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level12
            b=obj.pos12X
            c=obj.pos12Y
            d=obj.Cat12X
            e=obj.Cat12Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===12){
            currentscene3=13;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level13
            b=obj.pos13X
            c=obj.pos13Y
            d=obj.Cat13X
            e=obj.Cat13Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===13){
            currentscene3=14;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level14
            b=obj.pos14X
            c=obj.pos14Y
            d=obj.Cat14X
            e=obj.Cat14Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===14){
            currentscene3=15;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level15
            b=obj.pos15X
            c=obj.pos15Y
            d=obj.Cat15X
            e=obj.Cat15Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===15){
            currentscene3=16;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level16
            b=obj.pos16X
            c=obj.pos16Y
            d=obj.Cat16X
            e=obj.Cat16Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===16){
            currentscene3=17;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level17
            b=obj.pos17X
            c=obj.pos17Y
            d=obj.Cat17X
            e=obj.Cat17Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===17){
            currentscene3=18;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level18
            b=obj.pos18X
            c=obj.pos18Y
            d=obj.Cat18X
            e=obj.Cat18Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===18){
            currentscene3=19;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level19
            b=obj.pos19X
            c=obj.pos19Y
            d=obj.Cat19X
            e=obj.Cat19Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===19){
            currentscene3=20;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level20
            b=obj.pos20X
            c=obj.pos20Y
            d=obj.Cat20X
            e=obj.Cat20Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===20){
            currentscene3=21;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level21
            b=obj.pos21X
            c=obj.pos21Y
            d=obj.Cat21X
            e=obj.Cat21Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===21){
            currentscene3=22;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level22
            b=obj.pos22X
            c=obj.pos22Y
            d=obj.Cat22X
            e=obj.Cat22Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===22){
            currentscene3=23;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level23
            b=obj.pos23X
            c=obj.pos23Y
            d=obj.Cat23X
            e=obj.Cat23Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===23){
            currentscene3=24;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level24
            b=obj.pos24X
            c=obj.pos24Y
            d=obj.Cat24X
            e=obj.Cat24Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===24){
            currentscene3=25;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level25
            b=obj.pos25X
            c=obj.pos25Y
            d=obj.Cat25X
            e=obj.Cat25Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===25){
            currentscene3=26;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level26
            b=obj.pos26X
            c=obj.pos26Y
            d=obj.Cat26X
            e=obj.Cat26Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===26){
            currentscene3=27;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level27
            b=obj.pos27X
            c=obj.pos27Y
            d=obj.Cat27X
            e=obj.Cat27Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===27){
            currentscene3=28;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level28
            b=obj.pos28X
            c=obj.pos28Y
            d=obj.Cat28X
            e=obj.Cat28Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===28){
            currentscene3=29;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level29
            b=obj.pos29X
            c=obj.pos29Y
            d=obj.Cat29X
            e=obj.Cat29Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===29){
            currentscene3=30;
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level30
            b=obj.pos30X
            c=obj.pos30Y
            d=obj.Cat30X
            e=obj.Cat30Y
            cc.director.loadScene("Stage4-1");
        }

    },
 OnBackToReloadClicked() {

        if (currentscene===1){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb1
            b=obj.pos1X
            c=obj.pos1Y
            d=obj.Cat1X
            e=obj.Cat1Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===2){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb2
            b=obj.pos2X
            c=obj.pos2Y
            d=obj.Cat2X
            e=obj.Cat2Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===3){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb3
            b=obj.pos3X
            c=obj.pos3Y
            d=obj.Cat3X
            e=obj.Cat3Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===4){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb4
            b=obj.pos4X
            c=obj.pos4Y
            d=obj.Cat4X
            e=obj.Cat4Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===5){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb5
            b=obj.pos5X
            c=obj.pos5Y
            d=obj.Cat5X
            e=obj.Cat5Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===6){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb6
            b=obj.pos6X
            c=obj.pos9Y
            d=obj.Cat6X
            e=obj.Cat6Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===7){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb7
            b=obj.pos7X
            c=obj.pos7Y
            d=obj.Cat7X
            e=obj.Cat7Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===8){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb8
            b=obj.pos8X
            c=obj.pos8Y
            d=obj.Cat8X
            e=obj.Cat8Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===9){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb9
            b=obj.pos9X
            c=obj.pos9Y
            d=obj.Cat9X
            e=obj.Cat9Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===10){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb10
            b=obj.pos10X
            c=obj.pos10Y
            d=obj.Cat10X
            e=obj.Cat10Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===11){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb11
            b=obj.pos11X
            c=obj.pos11Y
            d=obj.Cat11X
            e=obj.Cat11Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===12){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb12

            b=obj.pos12X
            c=obj.pos12Y
            d=obj.Cat12X
            e=obj.Cat12Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===13){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb13
            b=obj.pos13X
            c=obj.pos13Y
            d=obj.Cat13X
            e=obj.Cat13Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===14){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb14
            b=obj.pos14X
            c=obj.pos14Y
            d=obj.Cat14X
            e=obj.Cat14Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===15){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb15
            b=obj.pos15X
            c=obj.pos15Y
            d=obj.Cat15X
            e=obj.Cat15Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===16){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb16
            b=obj.pos16X
            c=obj.pos16Y
            d=obj.Cat16X
            e=obj.Cat16Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===17){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb17
            b=obj.pos17X
            c=obj.pos17Y
            d=obj.Cat17X
            e=obj.Cat17Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===18){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb18
            b=obj.pos18X
            c=obj.pos18Y
            d=obj.Cat18X
            e=obj.Cat18Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===19){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb19
            b=obj.pos19X
            c=obj.pos19Y
            d=obj.Cat19X
            e=obj.Cat19Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===20){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb20
            b=obj.pos20X
            c=obj.pos20Y
            d=obj.Cat20X
            e=obj.Cat20Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===21){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb21
            b=obj.pos21X
            c=obj.pos21Y
            d=obj.Cat21X
            e=obj.Cat21Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===22){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb22
            b=obj.pos22X
            c=obj.pos22Y
            d=obj.Cat22X
            e=obj.Cat22Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===23){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb23
            b=obj.pos23X
            c=obj.pos23Y
            d=obj.Cat23X
            e=obj.Cat23Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===24){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb24
            b=obj.pos24X
            c=obj.pos24Y
            d=obj.Cat24X
            e=obj.Cat24Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===25){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb25
            b=obj.pos25X
            c=obj.pos25Y
            d=obj.Cat25X
            e=obj.Cat25Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===26){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb26
            b=obj.pos26X
            c=obj.pos26Y
            d=obj.Cat26X
            e=obj.Cat26Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===27){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb27
            b=obj.pos27X
            c=obj.pos27Y
            d=obj.Cat27X
            e=obj.Cat27Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===28){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb28
            b=obj.pos28X
            c=obj.pos28Y
            d=obj.Cat28X
            e=obj.Cat28Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===29){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb29
            b=obj.pos29X
            c=obj.pos29Y
            d=obj.Cat29X
            e=obj.Cat29Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
        else if (currentscene===30){
            abc =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(abc)
            leve=obj.levelb30
            b=obj.pos30X
            c=obj.pos30Y
            d=obj.Cat20X
            e=obj.Cat30Y
            console.log(currentscene)
            cc.director.loadScene("Stage1-1")
        }
     },
    OnBackToReload1Clicked() {

        if (currentscene1===1){
            var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba1
        b=obj.pos1X
        c=obj.pos1Y
        d=obj.Cat1X
        e=obj.Cat1Y
        console.log(currentscene)
        cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===2){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba2
            b=obj.pos2X
            c=obj.pos2Y
            d=obj.Cat2X
            e=obj.Cat2Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===3){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba3
            b=obj.pos3X
            c=obj.pos3Y
            d=obj.Cat3X
            e=obj.Cat3Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===4){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba4
            b=obj.pos4X
            c=obj.pos4Y
            d=obj.Cat4X
            e=obj.Cat4Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===5){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba5
            b=obj.pos5X
            c=obj.pos5Y
            d=obj.Cat5X
            e=obj.Cat5Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===6){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba6
            b=obj.pos6X
            c=obj.pos6Y
            d=obj.Cat6X
            e=obj.Cat6Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===7){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba7
            b=obj.pos7X
            c=obj.pos7Y
            d=obj.Cat7X
            e=obj.Cat7Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===8){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba8
            b=obj.pos8X
            c=obj.pos8Y
            d=obj.Cat8X
            e=obj.Cat8Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");}
        else if (currentscene1===9){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba9
            b=obj.pos9X
            c=obj.pos9Y
            d=obj.Cat9X
            e=obj.Cat9Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===10){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba10
            b=obj.pos10X
            c=obj.pos10Y
            d=obj.Cat10X
            e=obj.Cat10Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===11){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba11
            b=obj.pos11X
            c=obj.pos11Y
            d=obj.Cat11X
            e=obj.Cat11Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===12){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba12
            b=obj.pos12X
            c=obj.pos12Y
            d=obj.Cat12X
            e=obj.Cat12Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===13){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba13
            b=obj.pos13X
            c=obj.pos13Y
            d=obj.Cat13X
            e=obj.Cat13Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===14){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba14
            b=obj.pos14X
            c=obj.pos14Y
            d=obj.Cat14X
            e=obj.Cat14Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===15){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba15
            b=obj.pos15X
            c=obj.pos15Y
            d=obj.Cat15X
            e=obj.Cat15Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===16){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba16
            b=obj.pos16X
            c=obj.pos16Y
            d=obj.Cat16X
            e=obj.Cat16Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===17){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba17
            b=obj.pos17X
            c=obj.pos17Y
            d=obj.Cat17X
            e=obj.Cat17Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===18){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba18
            b=obj.pos18X
            c=obj.pos18Y
            d=obj.Cat18X
            e=obj.Cat18Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===19){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba19
            b=obj.pos19X
            c=obj.pos19Y
            d=obj.Cat19X
            e=obj.Cat19Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===20){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba20
            b=obj.pos20X
            c=obj.pos20Y
            d=obj.Cat20X
            e=obj.Cat20Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===21){
           
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba21
            b=obj.pos21X
            c=obj.pos21Y
            d=obj.Cat21X
            e=obj.Cat21Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===22){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba22
            b=obj.pos22X
            c=obj.pos22Y
            d=obj.Cat22X
            e=obj.Cat22Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===23){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba23
            b=obj.pos23X
            c=obj.pos23Y
            d=obj.Cat23X
            e=obj.Cat23Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===24){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba24
            b=obj.pos24X
            c=obj.pos24Y
            d=obj.Cat24X
            e=obj.Cat24Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===25){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba25
            b=obj.pos25X
            c=obj.pos25Y
            d=obj.Cat25X
            e=obj.Cat25Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===26){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba26
            b=obj.pos26X
            c=obj.pos26Y
            d=obj.Cat26X
            e=obj.Cat26Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===27){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba27
            b=obj.pos27X
            c=obj.pos27Y
            d=obj.Cat27X
            e=obj.Cat27Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===28){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba28
            b=obj.pos28X
            c=obj.pos28Y
            d=obj.Cat28X
            e=obj.Cat28Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===29){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba29
            b=obj.pos29X
            c=obj.pos29Y
            d=obj.Cat29X
            e=obj.Cat29Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
        else if (currentscene1===30){
            var hi =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(hi)
            leve=obj.levelba30
            b=obj.pos30X
            c=obj.pos30Y
            d=obj.Cat30X
            e=obj.Cat30Y
            console.log(currentscene)
            cc.director.loadScene("Stage2-1");
        }
    },
    OnBackToReload2Clicked() {

        if (currentscene2===1){
           
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm1
            b=obj.pos1X
            c=obj.pos1Y
            d=obj.Cat1X
            e=obj.Cat1Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===2){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm2
            b=obj.pos2X
            c=obj.pos2Y
            d=obj.Cat2X
            e=obj.Cat2Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===3){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm3
            b=obj.pos3X
            c=obj.pos3Y
            d=obj.Cat3X
            e=obj.Cat3Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===4){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm4
            b=obj.pos4X
            c=obj.pos4Y
            d=obj.Cat4X
            e=obj.Cat4Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===5){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm5
            b=obj.pos5X
            c=obj.pos5Y
            d=obj.Cat5X
            e=obj.Cat5Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===6){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm6
            b=obj.pos6X
            c=obj.pos6Y
            d=obj.Cat6X
            e=obj.Cat6Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===7){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm7
            b=obj.pos7X
            c=obj.pos7Y
            d=obj.Cat7X
            e=obj.Cat7Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===8){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm8
            b=obj.pos8X
            c=obj.pos8Y
            d=obj.Cat8X
            e=obj.Cat8Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===9){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm9
            b=obj.pos9X
            c=obj.pos9Y
            d=obj.Cat9X
            e=obj.Cat9Y
            
            cc.director.loadScene("Stage3-1");}

        else if (currentscene2===10){
              var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm10
            b=obj.pos10X
            c=obj.pos10Y
            d=obj.Cat10X
            e=obj.Cat10Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===11){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm11
            b=obj.pos11X
            c=obj.pos11Y
            d=obj.Cat11X
            e=obj.Cat11Y
            
            cc.director.loadScene("Stage3-1");}
        else if (currentscene2===12){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm12
            b=obj.pos12X
            c=obj.pos12Y
            d=obj.Cat12X
            e=obj.Cat12Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===13){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm13
            b=obj.pos13X
            c=obj.pos13Y
            d=obj.Cat13X
            e=obj.Cat13Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===14){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm14
            b=obj.pos14X
            c=obj.pos14Y
            d=obj.Cat14X
            e=obj.Cat14Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===15){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm15
            b=obj.pos15X
            c=obj.pos15Y
            d=obj.Cat15X
            e=obj.Cat15Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===16){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm16
            b=obj.pos16X
            c=obj.pos16Y
            d=obj.Cat16X
            e=obj.Cat16Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===17){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm1
            b=obj.pos17X
            c=obj.pos17Y
            d=obj.Cat17X
            e=obj.Cat17Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===18){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm18
            b=obj.pos18X
            c=obj.pos18Y
            d=obj.Cat18X
            e=obj.Cat18Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===19){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm19
            b=obj.pos19X
            c=obj.pos19Y
            d=obj.Cat19X
            e=obj.Cat19Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===20){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm20
            b=obj.pos20X
            c=obj.pos20Y
            d=obj.Cat20X
            e=obj.Cat20Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===21){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm21
            b=obj.pos21X
            c=obj.pos21Y
            d=obj.Cat21X
            e=obj.Cat21Y
            
            cc.director.loadScene("Stage3-1");}
        else if (currentscene2===22){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm22
            b=obj.pos22X
            c=obj.pos22Y
            d=obj.Cat22X
            e=obj.Cat22Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===23){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm23
            b=obj.pos23X
            c=obj.pos23Y
            d=obj.Cat23X
            e=obj.Cat23Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===24){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm24
            b=obj.pos24X
            c=obj.pos24Y
            d=obj.Cat24X
            e=obj.Cat24Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===25){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm25
            b=obj.pos25X
            c=obj.pos25Y
            d=obj.Cat25X
            e=obj.Cat25Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===26){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm26
            b=obj.pos26X
            c=obj.pos26Y
            d=obj.Cat26X
            e=obj.Cat26Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===27){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm27
            b=obj.pos27X
            c=obj.pos27Y
            d=obj.Cat27X
            e=obj.Cat27Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===28){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm28
            b=obj.pos28X
            c=obj.pos28Y
            d=obj.Cat28X
            e=obj.Cat28Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===29){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm29
            b=obj.pos29X
            c=obj.pos29Y
            d=obj.Cat29X
            e=obj.Cat29Y
            
            cc.director.loadScene("Stage3-1");
        }
        else if (currentscene2===30){
            var bcd =JSON.stringify(this.Mapjson.json)
            obj=JSON.parse(bcd)
            leve=obj.levelm30
            b=obj.pos30X
            c=obj.pos30Y
            d=obj.Cat30X
            e=obj.Cat30Y
            
            cc.director.loadScene("Stage3-1");
        }
    },
    OnBackToReload3Clicked() {    

        if (currentscene3===1){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level1
            b=obj.pos1X
            c=obj.pos1Y
            d=obj.Cat1X
            e=obj.Cat1Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===2){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level2
            b=obj.pos2X
            c=obj.pos2Y
            d=obj.Cat2X
            e=obj.Cat2Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===3){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level3
            b=obj.pos3X
            c=obj.pos3Y
            d=obj.Cat3X
            e=obj.Cat3Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===4){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level4
            b=obj.pos4X
            c=obj.pos4Y
            d=obj.Cat4X
            e=obj.Cat4Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===5){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level5
            b=obj.pos5X
            c=obj.pos5Y
            d=obj.Cat5X
            e=obj.Cat5Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===6){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level6
            b=obj.pos6X
            c=obj.pos6Y
            d=obj.Cat6X
            e=obj.Cat6Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===7){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level7
            b=obj.pos7X
            c=obj.pos7Y
            d=obj.Cat7X
            e=obj.Cat7Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===8){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level8
            b=obj.pos8X
            c=obj.pos8Y
            d=obj.Cat8X
            e=obj.Cat8Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===9){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level9
            b=obj.pos9X
            c=obj.pos9Y
            d=obj.Cat9X
            e=obj.Cat9Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===10){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level10
            b=obj.pos10X
            c=obj.pos10Y
            d=obj.Cat10X
            e=obj.Cat10Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===11){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level11
            b=obj.pos11X
            c=obj.pos11Y
            d=obj.Cat11X
            e=obj.Cat11Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===12){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level12
            b=obj.pos12X
            c=obj.pos12Y
            d=obj.Cat12X
            e=obj.Cat12Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===13){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level13
            b=obj.pos13X
            c=obj.pos13Y
            d=obj.Cat13X
            e=obj.Cat13Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===14){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level14
            b=obj.pos14X
            c=obj.pos14Y
            d=obj.Cat14X
            e=obj.Cat14Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===15){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level15
            b=obj.pos15X
            c=obj.pos15Y
            d=obj.Cat15X
            e=obj.Cat15Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===16){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level16
            b=obj.pos16X
            c=obj.pos16Y
            d=obj.Cat16X
            e=obj.Cat16Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===17){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level17
            b=obj.pos17X
            c=obj.pos17Y
            d=obj.Cat17X
            e=obj.Cat17Y
            cc.director.loadScene("Stage4-1");}
        else if (currentscene3===18){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level18
            b=obj.pos18X
            c=obj.pos18Y
            d=obj.Cat18X
            e=obj.Cat18Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===19){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level19
            b=obj.pos19X
            c=obj.pos19Y
            d=obj.Cat19X
            e=obj.Cat19Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===20){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level20
            b=obj.pos20X
            c=obj.pos20Y
            d=obj.Cat20X
            e=obj.Cat20Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===21){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level21
            b=obj.pos21X
            c=obj.pos21Y
            d=obj.Cat21X
            e=obj.Cat21Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===22){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level22
            b=obj.pos22X
            c=obj.pos22Y
            d=obj.Cat22X
            e=obj.Cat22Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===23){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level23
            b=obj.pos23X
            c=obj.pos23Y
            d=obj.Cat23X
            e=obj.Cat23Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===24){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level24
            b=obj.pos24X
            c=obj.pos24Y
            d=obj.Cat24X
            e=obj.Cat24Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===25){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level25
            b=obj.pos25X
            c=obj.pos25Y
            d=obj.Cat25X
            e=obj.Cat25Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===26){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level26
            b=obj.pos26X
            c=obj.pos26Y
            d=obj.Cat26X
            e=obj.Cat26Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===27){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level27
            b=obj.pos27X
            c=obj.pos27Y
            d=obj.Cat27X
            e=obj.Cat27Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===28){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level28
            b=obj.pos28X
            c=obj.pos28Y
            d=obj.Cat28X
            e=obj.Cat28Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===29){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level29
            b=obj.pos29X
            c=obj.pos29Y
            d=obj.Cat29X
            e=obj.Cat29Y
            cc.director.loadScene("Stage4-1");
        }
        else if (currentscene3===30){
            var s =JSON.stringify(this.Mapjson.json)
       
            obj=JSON.parse(s)
            leve=obj.level30
            b=obj.pos30X
            c=obj.pos30Y
            d=obj.Cat30X
            e=obj.Cat30Y
            cc.director.loadScene("Stage4-1");
        }


    },

 
    On1by1Clicked() {   
     
        currentscene = 1;
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
       // let leve=leve
        leve=obj.levelb1
      
        b=obj.pos1X 
      // let c=c
        c=obj.pos1Y
        //let d=d
        d=obj.Cat1X
        //let e=e
        e=obj.Cat1Y
        
        cc.director.loadScene("Stage1-1");
        console.log(currentscene)

    },
   
    On1by2Clicked() {

      
        if( currentscene==2 || currentscene>2){
            if(currentscene>0){
           
        currentscene = 2;
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb2
        b=obj.pos2X 
        c=obj.pos2Y
        d=obj.Cat2X
        e=obj.Cat2Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
        }
    }
    
    },
    On1by3Clicked() {
        // la="4"
        // localStorage.setItem("le",la)
        // console.log("lo=",lo)
        if( currentscene==3 || currentscene>3){
            if(currentscene>0){

        currentscene=3;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb3
        b=obj.pos3X
        c=obj.pos3Y
        d=obj.Cat3X
        e=obj.Cat3Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by4Clicked() {
        if( currentscene==4 || currentscene>4){
            if(currentscene>0){
           
        currentscene=4;
           
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb4
        b=obj.pos4X
        c=obj.pos4Y
        d=obj.Cat4X
        e=obj.Cat4Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }

    },
    On1by5Clicked() {
        if( currentscene==5 || currentscene>5){
            if(currentscene>0){
           
        currentscene=5;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb5
        b=obj.pos5X
        c=obj.pos5Y
        d=obj.Cat5X
        e=obj.Cat5Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }

    },
    On1by6Clicked() {
        if( currentscene==6 || currentscene>6){
            if(currentscene>0){
           
        currentscene=6;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb6
        b=obj.pos6X
        c=obj.pos6Y
        d=obj.Cat6X
        e=obj.Cat6Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by7Clicked() {
        if( currentscene==7 || currentscene>7){
            if(currentscene>0){
           
        currentscene=7;
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb7
        b=obj.pos7X
        c=obj.pos7Y
        d=obj.Cat7X
        e=obj.Cat7Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by8Clicked() {
        if( currentscene==8 || currentscene>8){
            if(currentscene>0){
           
        currentscene=8;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb8
        b=obj.pos8X
        c=obj.pos8Y
        d=obj.Cat8X
        e=obj.Cat8Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }

    },
    On1by9Clicked() {
        if( currentscene==9 || currentscene>9){
            if(currentscene>0){
           
        currentscene=9;
         
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb9
        b=obj.pos9X
        c=obj.pos9Y
        d=obj.Cat9X
        e=obj.Cat9Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by10Clicked() {
        if( currentscene==10 || currentscene>10){
            if(currentscene>0){
           
        currentscene=10;
         
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb10
        b=obj.pos10X
        c=obj.pos10Y
        d=obj.Cat10X
        e=obj.Cat10Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by11Clicked() {
        if( currentscene==11 || currentscene>11){
            if(currentscene>0){
        currentscene=11;
           
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb11
        b=obj.pos11X
        c=obj.pos11Y
        d=obj.Cat11X
        e=obj.Cat11Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by12Clicked() {
        if( currentscene==12 || currentscene>12){
            if(currentscene>0){
        currentscene=12;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb12
        b=obj.pos12X
        c=obj.pos12Y
        d=obj.Cat12X
        e=obj.Cat12Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by13Clicked() {
        if( currentscene==13 || currentscene>13){
            if(currentscene>0){
        currentscene=13;
           
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb13
        b=obj.pos13X
        c=obj.pos13Y
        d=obj.Cat13X
        e=obj.Cat13Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by14Clicked() {
        if( currentscene==14 || currentscene>14){
            if(currentscene>0){
        currentscene=14;
         
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb14
        b=obj.pos14X
        c=obj.pos14Y
        d=obj.Cat14X
        e=obj.Cat14Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by15Clicked() {
        if( currentscene==15 || currentscene>15){
            if(currentscene>0){
        currentscene=15;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb15
        b=obj.pos15X
        c=obj.pos15Y
        d=obj.Cat15X
        e=obj.Cat15Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by16Clicked() {
        if( currentscene==16 || currentscene>16){
            if(currentscene>0){
        currentscene=16;
           
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb16
        b=obj.pos16X
        c=obj.pos16Y
        d=obj.Cat16X
        e=obj.Cat16Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by17Clicked() {
        if( currentscene==17 || currentscene>17){
            if(currentscene>0){
        currentscene=17;
         
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb17
        b=obj.pos17X
        c=obj.pos17Y
        d=obj.Cat17X
        e=obj.Cat17Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by18Clicked() {
        if( currentscene==18 || currentscene>18){
            if(currentscene>0){
        currentscene=18;
         
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb18
        b=obj.pos18X
        c=obj.pos18Y
        d=obj.Cat18X
        e=obj.Cat18Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by19Clicked() {
        if( currentscene==19 || currentscene>19){
            if(currentscene>0){
        currentscene=19;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb19
        b=obj.pos19X
        c=obj.pos19Y
        d=obj.Cat19X
        e=obj.Cat19Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by20Clicked() {
        if( currentscene==20 || currentscene>20){
            if(currentscene>0){
        currentscene=20;
         
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb20
        b=obj.pos20X
        c=obj.pos20Y
        d=obj.Cat20X
        e=obj.Cat20Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by21Clicked() {
        if( currentscene==21 || currentscene>21){
            if(currentscene>0){
        currentscene=21;
         
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb21
        b=obj.pos21X
        c=obj.pos21Y
        d=obj.Cat21X
        e=obj.Cat21Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by22Clicked() {
        if( currentscene==22 || currentscene>22){
            if(currentscene>0){
        currentscene=22;
           
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb22
        b=obj.pos22X
        c=obj.pos22Y
        d=obj.Cat22X
        e=obj.Cat22Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by23Clicked() {
        if( currentscene==23 || currentscene>23){
            if(currentscene>0){
        currentscene=23;
         
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb23
        b=obj.pos23X
        c=obj.pos23Y
        d=obj.Cat23X
        e=obj.Cat23Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by24Clicked() {
        if( currentscene==24 || currentscene>24){
            if(currentscene>0){
        currentscene=24;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb24
        b=obj.pos24X
        c=obj.pos24Y
        d=obj.Cat24X
        e=obj.Cat24Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by25Clicked() {
        if( currentscene==25 || currentscene>25){
            if(currentscene>0){
        currentscene=25;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb25
        b=obj.pos25X
        c=obj.pos25Y
        d=obj.Cat25X
        e=obj.Cat25Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by26Clicked() {
        if( currentscene==26 || currentscene>26){
            if(currentscene>0){
        currentscene=26;
         
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb26
        b=obj.pos26X
        c=obj.pos26Y
        d=obj.Cat26X
        e=obj.Cat26Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by27Clicked() {
        if( currentscene==27 || currentscene>27){
            if(currentscene>0){
        currentscene=27;
           
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb27
        b=obj.pos27X
        c=obj.pos27Y
        d=obj.Cat27X
        e=obj.Cat27Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by28Clicked() {
        if( currentscene==28 || currentscene>28){
            if(currentscene>0){
        currentscene=28;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb28
        b=obj.pos28X
        c=obj.pos28Y
        d=obj.Cat28X
        e=obj.Cat28Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    On1by29Clicked() {
        if( currentscene==29 || currentscene>29){
            if(currentscene>0){
        currentscene=29;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb29
        b=obj.pos29X
        c=obj.pos29Y
        d=obj.Cat29X
        e=obj.Cat29Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },
    
    On1by30Clicked() {
        if( currentscene==30 || currentscene>30){
            if(currentscene>0){
        currentscene=30;
          
        abc =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(abc)
        leve=obj.levelb30
        b=obj.pos30X
        c=obj.pos30Y
        d=obj.Cat30X
        e=obj.Cat30Y

        cc.director.loadScene("Stage1-1");
        console.log(currentscene)
            }
        }
    },



    On2by1Clicked() {
        
        currentscene1=1;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba1
        b=obj.pos1X
        c=obj.pos1Y
        d=obj.Cat1X
        e=obj.Cat1Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
        console.log(currentscene1)
    },
    On2by2Clicked() {
        if( currentscene1==2 || currentscene1>2){
            if(currentscene1>0){
        currentscene1=2;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba2
        b=obj.pos2X
        c=obj.pos2Y
        d=obj.Cat2X
        e=obj.Cat2Y
        console.log(currentscene)

        cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by3Clicked() {
        if( currentscene1==3 || currentscene1>3){
            if(currentscene1>0){

        currentscene1=3;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba3
        b=obj.pos3X
        c=obj.pos3Y
        d=obj.Cat3X
        e=obj.Cat3Y
        console.log(currentscene)
      cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by4Clicked() {
        if( currentscene1==4 || currentscene1>4){
            if(currentscene1>0){
        currentscene1=4;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba4
        b=obj.pos4X
        c=obj.pos4Y
        d=obj.Cat4X
        e=obj.Cat4Y
        console.log(currentscene)
        cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by5Clicked() {
        if( currentscene1==5 || currentscene1>5){
            if(currentscene1>0){
        currentscene1=5;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba5
        b=obj.pos5X
        c=obj.pos5Y
        d=obj.Cat5X
        e=obj.Cat5Y
        console.log(currentscene)
       cc.director.loadScene("Stage2-1");
        }
    }
},
    On2by6Clicked() {
        if( currentscene1==6 || currentscene1>6){
            if(currentscene1>0){
        currentscene1=6;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba6
        b=obj.pos6X
        c=obj.pos6Y
        d=obj.Cat6X
        e=obj.Cat6Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by7Clicked() {
        if( currentscene1==7 || currentscene1>7){
            if(currentscene1>0){
        currentscene1=7;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba7
        b=obj.pos7X
        c=obj.pos7Y
        d=obj.Cat7X
        e=obj.Cat7Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by8Clicked() {
        if( currentscene1==8 || currentscene1>8){
            if(currentscene1>0){
        currentscene1=8;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba8
        b=obj.pos8X
        c=obj.pos8Y
        d=obj.Cat8X
        e=obj.Cat8Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by9Clicked() {
        if( currentscene1==9 || currentscene1>9){
            if(currentscene1>0){
        currentscene1=9;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba9
        b=obj.pos9X
        c=obj.pos9Y
        d=obj.Cat9X
        e=obj.Cat9Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by10Clicked() {
        if( currentscene1==10 || currentscene1>10){
            if(currentscene1>0){
        currentscene1=10;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba10
        b=obj.pos10X
        c=obj.pos10Y
        d=obj.Cat10X
        e=obj.Cat10Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by11Clicked() {
        if( currentscene1==11 || currentscene1>11){
            if(currentscene1>0){
        currentscene1=11;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba11
        b=obj.pos11X
        c=obj.pos11Y
        d=obj.Cat11X
        e=obj.Cat11Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by12Clicked() {
        if( currentscene1==12 || currentscene1>12){
            if(currentscene1>0){
        currentscene1=12;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba12
        b=obj.pos12X
        c=obj.pos12Y
        d=obj.Cat12X
        e=obj.Cat12Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }
        }
    },
    On2by13Clicked() {
        if( currentscene1==13 || currentscene1>13){
            if(currentscene1>0){
        currentscene1=13;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba13
        b=obj.pos13X
        c=obj.pos13Y
        d=obj.Cat13X
        e=obj.Cat13Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by14Clicked() {
        if( currentscene1==14 || currentscene1>14){
            if(currentscene1>0){
        currentscene1=14;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba14
        b=obj.pos14X
        c=obj.pos14Y
        d=obj.Cat14X
        e=obj.Cat14Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by15Clicked() {
        if( currentscene1==15 || currentscene1>15){
            if(currentscene1>0){
        currentscene1=15;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba15
        b=obj.pos15X
        c=obj.pos15Y
        d=obj.Cat15X
        e=obj.Cat15Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by16Clicked() {
        if( currentscene1==16 || currentscene1>16){
            if(currentscene1>0){
        currentscene1=16;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba16
        b=obj.pos16X
        c=obj.pos16Y
        d=obj.Cat16X
        e=obj.Cat16Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by17Clicked() {
        if( currentscene1==17 || currentscene1>17){
            if(currentscene1>0){
        currentscene1=17;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba17
        b=obj.pos17X
        c=obj.pos17Y
        d=obj.Cat17X
        e=obj.Cat17Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");   }}
     },
    On2by18Clicked() {
        if( currentscene1==18 || currentscene1>18){
            if(currentscene1>0){
        currentscene1=18;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba18
        b=obj.pos18X
        c=obj.pos18Y
        d=obj.Cat18X
        e=obj.Cat18Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");   }}
     },
    On2by19Clicked() {
        if( currentscene1==19 || currentscene1>19){
            if(currentscene1>0){
        currentscene1=19;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba19
        b=obj.pos19X
        c=obj.pos19Y
        d=obj.Cat19X
        e=obj.Cat19Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by20Clicked() {
        if( currentscene1==20 || currentscene1>20){
            if(currentscene1>0){
        currentscene1=20;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba20
        b=obj.pos20X
        c=obj.pos20Y
        d=obj.Cat20X
        e=obj.Cat20Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by21Clicked() {
        if( currentscene1==21 || currentscene1>21){
            if(currentscene1>0){
        currentscene1=21;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba21
        b=obj.pos21X
        c=obj.pos21Y
        d=obj.Cat21X
        e=obj.Cat21Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by22Clicked() {
        if( currentscene1==22 || currentscene1>22){
            if(currentscene1>0){
        currentscene1=22;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba22
        b=obj.pos22X
        c=obj.pos22Y
        d=obj.Cat22X
        e=obj.Cat22Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by23Clicked() {
        if( currentscene1==23 || currentscene1>23){
            if(currentscene1>0){
        currentscene1=23;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba23
        b=obj.pos23X
        c=obj.pos23Y
        d=obj.Cat23X
        e=obj.Cat23Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by24Clicked() {
        if( currentscene1==24 || currentscene1>24){
            if(currentscene1>0){
        currentscene1=24;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba24
        b=obj.pos24X
        c=obj.pos24Y
        d=obj.Cat24X
        e=obj.Cat24Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by25Clicked() {
        if( currentscene1==25 || currentscene1>25){
            if(currentscene1>0){
        currentscene1=25;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba25
        b=obj.pos25X
        c=obj.pos25Y
        d=obj.Cat25X
        e=obj.Cat25Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by26Clicked() {
        if( currentscene1==26 || currentscene1>26){
            if(currentscene1>0){
        currentscene1=26;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba26
        b=obj.pos26X
        c=obj.pos26Y
        d=obj.Cat26X
        e=obj.Cat26Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by27Clicked() {
        if( currentscene1==27 || currentscene1>27){
            if(currentscene1>0){
        currentscene1=27;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba27
        b=obj.pos27X
        c=obj.pos27Y
        d=obj.Cat27X
        e=obj.Cat27Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by28Clicked() {
        if( currentscene1==28 || currentscene1>28){
            if(currentscene1>0){
        currentscene1=28;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba28
        b=obj.pos28X
        c=obj.pos28Y
        d=obj.Cat28X
        e=obj.Cat28Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by29Clicked() {
        if( currentscene1==29 || currentscene1>29){
            if(currentscene1>0){
        currentscene1=29;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba29
        b=obj.pos29X
        c=obj.pos29Y
        d=obj.Cat29X
        e=obj.Cat29Y
        console.log(currentscene)
        cc.director.loadScene("Stage2-1");
            }}
    },
    On2by30Clicked() {
        if( currentscene1==30 || currentscene1>30){
            if(currentscene1>0){
        currentscene1=30;
        var hi =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(hi)
        leve=obj.levelba30
        b=obj.pos30X
        c=obj.pos30Y
        d=obj.Cat30X
        e=obj.Cat30Y
        console.log(currentscene)
        


        cc.director.loadScene("Stage2-1");
            }}
    },



    On3by1Clicked() {
       
        currentscene2=1;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm1
        b=obj.pos1X
        c=obj.pos1Y
        d=obj.Cat1X
        e=obj.Cat1Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
           
    },
    On3by2Clicked() {
        if( currentscene2==2 || currentscene2>2){
            if(currentscene2>0){
        currentscene2=2;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm2
        b=obj.pos2X
        c=obj.pos2Y
        d=obj.Cat2X
        e=obj.Cat2Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by3Clicked() {
        if( currentscene2==3 || currentscene2>3){
            if(currentscene2>0){
        currentscene2=3;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm3
        b=obj.pos3X
        c=obj.pos3Y
        d=obj.Cat3X
        e=obj.Cat3Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
        },
    On3by4Clicked() {
        if( currentscene2==4 || currentscene2>4){
            if(currentscene2>0){
        currentscene2=4;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm4
        b=obj.pos4X
        c=obj.pos4Y
        d=obj.Cat4X
        e=obj.Cat4Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by5Clicked() {
        if( currentscene2==5 || currentscene2>5){
            if(currentscene2>0){
        currentscene2=5;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm5
        b=obj.pos5X
        c=obj.pos5Y
        d=obj.Cat5X
        e=obj.Cat5Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by6Clicked() {
        if( currentscene2==6 || currentscene2>6){
            if(currentscene2>0){
        currentscene2=6;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm6
        b=obj.pos6X
        c=obj.pos6Y
        d=obj.Cat6X
        e=obj.Cat6Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by7Clicked() {
        if( currentscene2==7 || currentscene2>7){
            if(currentscene2>0){
        currentscene2=7;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm7
        b=obj.pos7X
        c=obj.pos7Y
        d=obj.Cat7X
        e=obj.Cat7Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by8Clicked() {
        if( currentscene2==8 || currentscene2>8){
            if(currentscene2>0){
        currentscene2=8;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm8
        b=obj.pos8X
        c=obj.pos8Y
        d=obj.Cat8X
        e=obj.Cat8Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by9Clicked() {
        if( currentscene2==9 || currentscene2>9){
            if(currentscene2>0){
        currentscene2=9;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm9
        b=obj.pos9X
        c=obj.pos9Y
        d=obj.Cat9X
        e=obj.Cat9Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by10Clicked() {
        if( currentscene2==10 || currentscene2>10){
            if(currentscene2>0){
        currentscene2=10;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm10
        b=obj.pos10X
        c=obj.pos10Y
        d=obj.Cat10X
        e=obj.Cat10Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by11Clicked() {
        if( currentscene2==11 || currentscene2>11){
            if(currentscene2>0){
        currentscene2=11;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm11
        b=obj.pos11X
        c=obj.pos11Y
        d=obj.Cat11X
        e=obj.Cat11Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by12Clicked() {
        if( currentscene2==12 || currentscene2>12){
            if(currentscene2>0){
        currentscene2=12;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm12
        b=obj.pos12X
        c=obj.pos12Y
        d=obj.Cat12X
        e=obj.Cat12Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by13Clicked() {
        if( currentscene2==13 || currentscene2>13){
            if(currentscene2>0){
        currentscene2=13;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm13
        b=obj.pos13X
        c=obj.pos13Y
        d=obj.Cat13X
        e=obj.Cat13Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by14Clicked() {
        if( currentscene2==14 || currentscene2>14){
            if(currentscene2>0){
        currentscene2=14;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm14
        b=obj.pos14X
        c=obj.pos14Y
        d=obj.Cat14X
        e=obj.Cat14Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by15Clicked() {
        if( currentscene2==15 || currentscene2>15){
            if(currentscene2>0){
        currentscene2=15;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm15
        b=obj.pos15X
        c=obj.pos15Y
        d=obj.Cat15X
        e=obj.Cat15Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by16Clicked() {
        if( currentscene2==16 || currentscene2>16){
            if(currentscene2>0){
        currentscene2=16;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm16
        b=obj.pos16X
        c=obj.pos16Y
        d=obj.Cat16X
        e=obj.Cat16Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by17Clicked() {
        if( currentscene2==17 || currentscene2>17){
            if(currentscene2>0){
        currentscene2=17;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm17
        b=obj.pos17X
        c=obj.pos17Y
        d=obj.Cat17X
        e=obj.Cat17Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by18Clicked() {
        if( currentscene2==18 || currentscene2>18){
            if(currentscene2>0){
        currentscene2=18;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm18
        b=obj.pos18X
        c=obj.pos18Y
        d=obj.Cat18X
        e=obj.Cat18Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by19Clicked() {
        if( currentscene2==19 || currentscene2>19){
            if(currentscene2>0){
        currentscene2=19;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm19
        b=obj.pos19X
        c=obj.pos19Y
        d=obj.Cat19X
        e=obj.Cat19Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by20Clicked() {
        if( currentscene2==20 || currentscene2>20){
            if(currentscene2>0){
        currentscene2=20;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm20
        b=obj.pos20X
        c=obj.pos20Y
        d=obj.Cat20X
        e=obj.Cat20Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by21Clicked() {
        if( currentscene2==21 || currentscene2>21){
            if(currentscene2>0){
        currentscene2=21;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm21
        b=obj.pos21X
        c=obj.pos21Y
        d=obj.Cat21X
        e=obj.Cat21Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by22Clicked() {
        if( currentscene2==22 || currentscene2>22){
            if(currentscene2>0){
        currentscene2=22;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm22
        b=obj.pos22X
        c=obj.pos22Y
        d=obj.Cat22X
        e=obj.Cat22Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by23Clicked() {
        if( currentscene2==23|| currentscene2>23){
            if(currentscene2>0){
        currentscene2=23;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm23
        b=obj.pos23X
        c=obj.pos23Y
        d=obj.Cat23X
        e=obj.Cat23Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by24Clicked() {
        if( currentscene2==24 || currentscene2>24){
            if(currentscene2>0){
        currentscene2=24;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm24
        b=obj.pos24X
        c=obj.pos24Y
        d=obj.Cat24X
        e=obj.Cat24Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by25Clicked() {
        if( currentscene2==25 || currentscene2>25){
            if(currentscene2>0){
        currentscene2=25;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm25
        b=obj.pos25X
        c=obj.pos25Y
        d=obj.Cat25X
        e=obj.Cat25Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by26Clicked() {
        if( currentscene2==26 || currentscene2>26){
            if(currentscene2>0){
        currentscene2=26;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm26
        b=obj.pos26X
        c=obj.pos26Y
        d=obj.Cat26X
        e=obj.Cat26Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by27Clicked() {
        if( currentscene2==27 || currentscene2>27){
            if(currentscene2>0){
        currentscene2=27;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm27
        b=obj.pos27X
        c=obj.pos27Y
        d=obj.Cat27X
        e=obj.Cat27Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by28Clicked() {
        if( currentscene2==28 || currentscene2>28){
            if(currentscene2>0){
        currentscene2=28;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm28
        b=obj.pos28X
        c=obj.pos28Y
        d=obj.Cat28X
        e=obj.Cat28Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by29Clicked() {
        if( currentscene2==29 || currentscene2>29){
            if(currentscene2>0){
        currentscene2=29;
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm29
        b=obj.pos29X
        c=obj.pos29Y
        d=obj.Cat29X
        e=obj.Cat29Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },
    On3by30Clicked() {
        if( currentscene2==30 || currentscene2>30){
            if(currentscene2>0){
        currentscene2=30
        var bcd =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(bcd)
        leve=obj.levelm30
        b=obj.pos30X
        c=obj.pos30Y
        d=obj.Cat30X
        e=obj.Cat30Y
        console.log(currentscene)
        cc.director.loadScene("Stage3-1");
            }}
    },


        
     On4by1Clicked() {
       
        currentscene3 =1;
        

        var s =JSON.stringify(this.Mapjson.json)
       
        obj=JSON.parse(s)
        leve=obj.level1
        b=obj.pos1X
        c=obj.pos1Y
        d=obj.Cat1X
        e=obj.Cat1Y
        cc.director.loadScene("Stage4-1");
    

     },
     On4by2Clicked() {
        if( currentscene3==2 || currentscene3>2){
            if(currentscene3>0){
        currentscene3=2;
        var s =JSON.stringify(this.Mapjson.json)
       
        obj=JSON.parse(s)
        leve=obj.level2
        b=obj.pos2X
        c=obj.pos2Y
        d=obj.Cat2X
        e=obj.Cat2Y
        cc.director.loadScene("Stage4-1");
        
            }}
        
     },
     On4by3Clicked() {
        if( currentscene3==3 || currentscene3>3){
            if(currentscene3>0){
        currentscene3=3;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level3
        b=obj.pos3X
        c=obj.pos3Y
        d=obj.Cat3X
        e=obj.Cat3Y
        


        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by4Clicked() {
        if( currentscene3==4 || currentscene3>4){
            if(currentscene3>0){
        currentscene3=4;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level4
        b=obj.pos4X
        c=obj.pos4Y
        d=obj.Cat4X
        e=obj.Cat4Y
        


        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by5Clicked() {
        if( currentscene3==5 || currentscene3>5){
            if(currentscene3>0){
        currentscene3=5;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level5
        b=obj.pos5X
        c=obj.pos5Y
        d=obj.Cat5X
        e=obj.Cat5Y
        


        cc.director.loadScene("Stage4-1");
            }}

     },
     On4by6Clicked() {
        if( currentscene3==6 || currentscene3>6){
            if(currentscene3>0){
        currentscene3=6;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level6
        b=obj.pos6X
        c=obj.pos6Y
        d=obj.Cat6X
        e=obj.Cat6Y
        


        cc.director.loadScene("Stage4-1");
            }}

     },
     On4by7Clicked() {
        if( currentscene3==7 || currentscene3>7){
            if(currentscene3>0){
        currentscene3=7;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level7
        b=obj.pos7X
        c=obj.pos7Y
        d=obj.Cat7X
        e=obj.Cat7Y
        


        cc.director.loadScene("Stage4-1");
            }}

     },
     On4by8Clicked() {
        if( currentscene3==8 || currentscene3>8){
            if(currentscene3>0){
        currentscene3=8;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level8
        b=obj.pos8X
        c=obj.pos8Y
        d=obj.Cat8X
        e=obj.Cat8Y
        


        cc.director.loadScene("Stage4-1");
            }}

     },
     On4by9Clicked() {
        if( currentscene3==9 || currentscene3>9){
            if(currentscene3>0){
        currentscene3=9;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level9
        b=obj.pos9X
        c=obj.pos9Y
        d=obj.Cat9X
        e=obj.Cat9Y
        


        cc.director.loadScene("Stage4-1");
            }}

     },
     On4by10Clicked() {
        if( currentscene3==10 || currentscene3>10){
            if(currentscene3>0){
        currentscene3=10;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level10
        b=obj.pos10X
        c=obj.pos10Y
        d=obj.Cat10X
        e=obj.Cat10Y
       // f=obj.lev
 cc.director.loadScene("Stage4-1");
            }}
     },
     On4by11Clicked() {
        if( currentscene3==11 || currentscene3>11){
            if(currentscene3>0){
        currentscene3=11;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level11
        b=obj.pos11X
        c=obj.pos11Y
        d=obj.Cat11X
        e=obj.Cat11Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by12Clicked() {
        if( currentscene3==12 || currentscene3>12){
            if(currentscene3>0){
        currentscene3=12;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level12
        b=obj.pos12X
        c=obj.pos12Y
        d=obj.Cat12X
        e=obj.Cat12Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by13Clicked() {
        if( currentscene3==13 || currentscene3>13){
            if(currentscene3>0){
        currentscene3=13;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level13
        b=obj.pos13X
        c=obj.pos13Y
        d=obj.Cat13X
        e=obj.Cat13Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by14Clicked() {
        if( currentscene3==14 || currentscene3>14){
            if(currentscene3>0){
        currentscene3=14;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level14
        b=obj.pos14X
        c=obj.pos14Y
        d=obj.Cat14X
        e=obj.Cat14Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by15Clicked() {
        if( currentscene3==15 || currentscene3>15){
            if(currentscene3>0){
        currentscene3=15;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level15
        b=obj.pos15X
        c=obj.pos15Y
        d=obj.Cat15X
        e=obj.Cat15Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by16Clicked() {
        if( currentscene3==16 || currentscene3>16){
            if(currentscene3>0){
        currentscene3=16;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level16
        b=obj.pos16X
        c=obj.pos16Y
        d=obj.Cat16X
        e=obj.Cat16Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by17Clicked() {
        if( currentscene3==17 || currentscene3>17){
            if(currentscene3>0){
        currentscene3=17;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level17
        b=obj.pos17X
        c=obj.pos17Y
        d=obj.Cat17X
        e=obj.Cat17Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     
     On4by18Clicked() {
        if( currentscene3==18 || currentscene3>18){
            if(currentscene3>0){
         currentscene3=18;
         var s =JSON.stringify(this.Mapjson.json)
         obj=JSON.parse(s)
         leve=obj.level18
         b=obj.pos18X
         c=obj.pos18Y
         d=obj.Cat18X
         e=obj.Cat18Y
         cc.director.loadScene("Stage4-1");
            }}
     },
     On4by19Clicked() {
        if( currentscene3==19 || currentscene3>19){
            if(currentscene3>0){
        currentscene3=19;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
        leve=obj.level19
        b=obj.pos19X
        c=obj.pos19Y
        d=obj.Cat19X
        e=obj.Cat19Y
        cc.director.loadScene("Stage4-1");
            }}
     },
    
     On4by20Clicked() {
        if( currentscene3==20 || currentscene3>20){
            if(currentscene3>0){
        currentscene3=20;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level20
        b=obj.pos20X
        c=obj.pos20Y
        d=obj.Cat20X
        e=obj.Cat20Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by21Clicked() {
        if( currentscene3==21 || currentscene3>21){
            if(currentscene3>0){
        currentscene3=21;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level21
        b=obj.pos21X
        c=obj.pos21Y
        d=obj.Cat21X
        e=obj.Cat21Y
        cc.director.loadScene("Stage4-1");
            }}
        
     },
     On4by22Clicked() {
        if( currentscene3==22 || currentscene3>22){
            if(currentscene3>0){
        currentscene3=22;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level22
        b=obj.pos22X
        c=obj.pos22Y
        d=obj.Cat22X
        e=obj.Cat22Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by23Clicked() {
        if( currentscene3==23 || currentscene3>23){
            if(currentscene3>0){
        currentscene3=23;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level23
        b=obj.pos23X
        c=obj.pos23Y
        d=obj.Cat23X
        e=obj.Cat23Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by24Clicked() {
        if( currentscene3==24 || currentscene3>24){
            if(currentscene3>0){
        currentscene3=24;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level24
        b=obj.pos24X
        c=obj.pos24Y
        d=obj.Cat24X
        e=obj.Cat24Y
        cc.director.loadScene("Stage4-1");
            }}
        
     },
     On4by25Clicked() {
        if( currentscene3==25 || currentscene3>25){
            if(currentscene3>0){
        currentscene3=25;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level25
        b=obj.pos25X
        c=obj.pos25Y
        d=obj.Cat25X
        e=obj.Cat25Y
        cc.director.loadScene("Stage4-1");
            }}
        
     },
     On4by26Clicked() {
        if( currentscene3==26 || currentscene3>26){
            if(currentscene3>0){
        currentscene3=26;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level26
        b=obj.pos26X
        c=obj.pos26Y
        d=obj.Cat26X
        e=obj.Cat26Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by27Clicked() {
        if( currentscene3==27 || currentscene3>27){
            if(currentscene3>0){
        currentscene3=27;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level27
        b=obj.pos27X
        c=obj.pos27Y
        d=obj.Cat27X
        e=obj.Cat27Y
        cc.director.loadScene("Stage4-1");
            }}
     },
     On4by28Clicked() {
        if( currentscene3==28|| currentscene3>28){
            if(currentscene3>0){
        currentscene3=28;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level28
        b=obj.pos28X
        c=obj.pos28Y
        d=obj.Cat28X
        e=obj.Cat28Y
        cc.director.loadScene("Stage4-1");
            }}
        
     },
     On4by29Clicked() {
        if( currentscene3==29 || currentscene3>29){
            if(currentscene3>0){
        currentscene3=29;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level29
        b=obj.pos29X
        c=obj.pos29Y
        d=obj.Cat29X
        e=obj.Cat29Y
        cc.director.loadScene("Stage4-1");
            }}
        
     },
     On4by30Clicked() {
        if( currentscene3==30 || currentscene3>30){
            if(currentscene3>0){
        currentscene3=30;
        var s =JSON.stringify(this.Mapjson.json)
        obj=JSON.parse(s)
     leve=obj.level30
        b=obj.pos30X
        c=obj.pos30Y
        d=obj.Cat30X
        e=obj.Cat30Y
        cc.director.loadScene("Stage4-1");
            }}
     },
});
