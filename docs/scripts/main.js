console.log('Startup');

$(document).ready(function () {
	$("#navHealthcare").click(function() {
        console.log('Clicked Healthcare');
        navigate('healthcare');
	});
});

function navigate(section){
    console.log('Navigation to ' + section);
    $.ajax({
        url: section + ".md",
        context: document.body,
        success: function(mdText){
          //where text will be the text returned by the ajax call
          var converter = new showdown.Converter();
          var htmlText = converter.makeHtml(mdText);
          $(".divRow").append(htmlText); //append this to a div with class outputDiv
        }
    });    
}
