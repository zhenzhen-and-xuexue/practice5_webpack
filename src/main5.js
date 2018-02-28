import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//jquery 事件监听
$('#alertButton').click(function(e){
	e.preventDefault();
	$('.modal-body p').text('love you~~');
	$('#myModal').modal('toggle');
});