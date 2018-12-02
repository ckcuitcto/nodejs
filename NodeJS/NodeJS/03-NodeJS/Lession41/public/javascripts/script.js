$(document).ready(function () {
    
    $('.carousel').carousel();
    $("[rel=tooltip]").tooltip();

    var $container = $('.product-container');
    $container.imagesLoaded( function(){
    	$container.masonry();
	});

    menu ();

    update ();
});

function menu () {
	$.ajax({
		url: '/menu',
		type: 'GET',
		dataType: 'json',
		success: function (data) {
			var urlCurrent = window.location.pathname.split("/");
			var activeHome = '';
			if (window.location.pathname == '/') {
				activeHome = 'class="active"';
			}
			var xhtml = '<li '+activeHome+'><a href="/">Home</a></li>';
			$.each(data, function (key , item) {
				var activeCategory = '';
				if (window.location.pathname == '/danh-muc/' + data[key].id || data[key].id == urlCurrent[2]) {
					activeCategory = 'class="active"';
				}
				xhtml += '<li '+activeCategory+'><a href="/danh-muc/'+ data[key].id +'">'+ data[key].name +'</a></li>';
			});
			$(".nav-pills").html(xhtml);
		}
	});
}

function update () {
	$('input[name="txtQuantity"]').change(function () {
		var id = $(this).attr('idsp');
		var sl = $(this).val();
		$.ajax({
			url: '/update/'+id+'/'+sl,
			type: 'GET',
			dataType: 'html',
			success:function (data) {
				if (data == "Oke") {
					location.reload();
				}
			}
		});
		
	});
}