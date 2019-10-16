   
    $(document).ready(function () {
      var maat1=$('#maat-1');
      var maat2=$('#maat-2');
      var maat3=$('#maat-3');
      var maat4=$('#maat-4');
      var maat5=$('#maat-5');
    
      $(".stads").on('change', function(){
          // get value from selected
         var choice = $("[name=fiets-1]:checked").val();
         if(choice==="Stadfiets heren"){
          showAll();  
          maat1.fadeOut().prev().fadeOut();
          maat5.fadeOut().prev().fadeOut();    
         }
         if (choice==="fietsdames"){
          showAll(); 

          maat1.fadeOut().prev().fadeOut();
          maat4.fadeOut().prev().fadeOut();
          maat5.fadeOut().prev().fadeOut();
      
         }            
      })
      $(".elek").on('change', function(){
         // get value from selected
        var choice1 = $("[name=fiets-1]:checked").val();      
        if(choice1==="elekfietsheren"){
         showAll();     
         maat1.fadeOut().prev().fadeOut();
         maat5.fadeOut().prev().fadeOut();
        }
        if (choice1==="elekfietsdames"){
          showAll(); 
          maat4.fadeOut().prev().fadeOut();
          maat5.fadeOut().prev().fadeOut();
         }  
       
     })
     $(".vouw").on('change', function(){
        // get value from selected
       var choice2 = $("[name=fiets-1]:checked").val();
       if(choice2==="vouwfiets"){
        resetAll();      
       } 
       
     })
     function showAll(){
     
       for(i=1;i<=5;i++){
           $('#maat-'+i +'').fadeIn().prev().fadeIn();
       }
       
     }
     function resetAll(){
 
       for(i=1;i<=5;i++){
         $('#maat-'+i +'').fadeOut("fast").prev().fadeOut("fast");
       }
     }
     });
    