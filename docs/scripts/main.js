console.log('GRaCE Reports - startup');
console.log('Display GRiST XML');

$(document).ready(function () {
	$("#openGRiST").click(function() {                    
		window.open("/config/grist.xml", "GRiST XML (raw)", "width=600,height=600,scrollbars=yes,resizable=no");
	});
});

function showQuestions(){
	xml = '/config/grist.xml';
}

$.getTransform(
'/config/questions.xslt',              // path or xsl document in javascript variable
'/config/grist.xml',              // path or xml document in javascript variable
{
  params: {                     // object for your own xsl parameters
    paramName1: 'paramValue1',
    paramName2: 'paramValue2'
  },
  xpath: '/test/inside',        // trims your xml file to that defined by this xpath
  eval: true,                   // evaluates any <script> blocks it finds in the transformed result
  callback: function(){}        // getTransform evaluates this function when transformation is complete
});

// loads an xml file, parses it and stores it in xmlDoc
var xmlDoc = xslTransform.load('/config/grist.xml');


/* function
// Load the xml file using ajax 
$.ajax({
    type: "GET",
    url: "/config/GRiST-report-visual-config.xml",
    dataType: "xml",
    success: function (xml) {
		console.log('Getting GRiST XML');
		console.log(xml);
        // Parse the xml file and get data
        var xmlDoc = $.parseXML(xml),
            $xml = $(xmlDoc);
			$("#divXML").innerHTML = $xml;
			
        // $xml.find('node').each(function () {
            // $("#divXML").append($(this).text() + "<br />");
        // });
    }
});
 */