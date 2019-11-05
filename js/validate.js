jQuery('.form').validate({
    rules : {
        password : {
            minlength : 5
        },
        password_confirm : {
            minlength : 5,
            equalTo : "#password"
        }
    }
});

$('button').click(function(){
console.log($('.form').valid());
});