
$('button').on('click', function () {
    $('.gif').slideDown(500).css({
        display: 'flex'
    })
    var text = $('input').val()
    $.ajax(`https://api.giphy.com/v1/gifs/random?api_key=Z78XVRaa5CCT75qiqIleg67rKG9nvBhM&tag=${text}&rating=g`).then(
       function(response){
        $('img').attr('src',response.data.images.fixed_height.url)
       }
    ) 
    $('input').val('')
})
