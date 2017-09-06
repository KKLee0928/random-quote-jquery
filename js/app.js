//initial page set up
$(function() {
// attach the form submission to the search function
  $("#search-form").on('submit', search);
});


//first i need variable to store quotes in an array


	//if we define a quote inside of our array then we will need to have a random 
var rQuote ('', , 'etc..');
	// Math.floor(Math.number());
	//once this executes we need to push this into the display area <div>?
}

//pull random quote using jQuery AJAX doc
function rQuote(){
    $.ajax({
        url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote/',
        type: 'post',
        data: {

        },
        headers: {
            
        },
        dataType: 'json',
        success: function(data) {
            //$('body').fadeIn(50);
            $('article > p').text('"' + data.rQuote + '"');
            $('.author > h1').text(data.author);
            $('.author >n h2').text("Category: " + data.category);
            
        }
    });
}

$.get('https://andruxnet-random-famous-quotes.p.mashape.com/', {
  q: 'userQuery'
}).done(function(data) {
  var posts = data;
  console.log(posts);
});

    $('button').click(function(e) {
		e.preventDefault();
		rQuote();
		console.log("Butt-ON!");


});
  $(rQuote();
  });