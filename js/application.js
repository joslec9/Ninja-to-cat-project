$(document).ready(function(){
			$('#container img').click(function(){
				var temp = $(this).attr('src');
				$(this).attr('src', $(this).attr('data-alt-src'));
				$(this).attr('data-alt-src', temp);
		});
	});