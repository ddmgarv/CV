$(document).ready(function() {	
	$("#cv1").click(function() {
		$.getJSON("JSON/data.json", function(data) {
			$.each(data, function(key, value) {
				$("#estudios").text(value.estudios);
				$("#objetivo").text(value.objetivo);
				$("#formacion").text(value.formacion);
				$("#curso1").text(value.curso1);
				$("#curso2").text(value.curso2);
				$("#curso3").text(value.curso3);
			});
		});
	});

	$("#cv2").click(function() {
		$.getJSON("JSON/data1.json", function(data) {
			$.each(data, function(key, value) {
				$("#estudios").text(value.estudios);
				$("#objetivo").text(value.objetivo);
				$("#formacion").text(value.formacion);
				$("#curso1").text(value.curso1);
				$("#curso2").text(value.curso2);
				$("#curso3").text(value.curso3);
			});
		});
	});
});