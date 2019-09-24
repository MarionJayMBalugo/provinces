$(document).ready(function(){
    $("button").on('click',function(){    
        $.ajax({
            url: 'http://127.0.0.1:8080/province/:provinceName',
            crossDomain: 'true',
            data: JSON.stringify({
                rate: $(this).val()               
            }),
            type: 'POST',
            success: function (response) {
                console.log("rated");
              
            },
            error: function (err) {
               
                
            }
        })
    });
});