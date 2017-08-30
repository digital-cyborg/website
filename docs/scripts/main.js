console.log('Startup');

$(document).ready(function () {
	$("#openGRiST").click(function() {                    
		window.open("/config/grist.xml", "GRiST XML (raw)", "width=600,height=600,scrollbars=yes,resizable=no");
	});
});
