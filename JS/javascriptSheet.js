$(document).ready(function() {	
	$("#cv1").click(function() {
		$.getJSON("JSON/data.json", function(data) {
			$.each(data, function(key, value) {
				$("#estudios").text(value.estudios);
				$("#objetivo").text(value.objetivo);
				$("#formacion").text(value.formacion);
				$("#curso1").text(value.curso1);
				$("#curso2").text(value.curso2);
				$("#exp1").text(value.exp1);
				$("#exp2").text(value.exp2);
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
				$("#exp1").text(value.exp1);
				$("#exp2").text(value.exp2);
			});
		});
	});
});