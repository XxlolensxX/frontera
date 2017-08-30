$(document).ready(function () {

    $('#area-biografia').keyup(function () {
        var $textarea = $(this),
            maxlength = parseInt($textarea.attr('maxlength')),
            valuelength = $textarea.val().length;

        $('#max-biografia').text(maxlength - valuelength);
    });
    $('#area-presentacion').keyup(function () {
        var $textarea = $(this),
            maxlength = parseInt($textarea.attr('maxlength')),
            valuelength = $textarea.val().length;

        $('#max-presentacion').text(maxlength - valuelength);
    });

    var $textbuscar = 'Búsqueda';
    var $textcancelar = 'Cancelar';
    $('#buscar').click(function () {
        $('#search-box--desktop').slideToggle(200);
        $(this).parent().toggleClass('active');
        $('.icon-elem', this).toggleClass('icon-elem--search');
        $('.icon-elem', this).toggleClass('icon-elem--close');
        $('.text-btn', this).text(function (i, text) {
            return text === $textcancelar ? $textbuscar : $textcancelar;
        });
    });

    $('.list-dropdown__list').hide();
    $('.list-dropdown__trigger').click(function () {
        $('.list-dropdown__list').slideToggle();
        $('.icon-elem', this).toggleClass('animate');
        $(this).toggleClass('active');
    });


    //hover scroll
    var target = $("#target");
    var targetTexto = $("#target h2").text();
    var destiny = $('.destiny');
    target.mouseenter(function(){
      $(destiny).addClass('overMouse');
    });
    target.mouseleave(function(){
      $(destiny).removeClass('overMouse');
    });

    //TABS
    jQuery(document).ready(function($){
    	var tabItems = $('.cd-tabs-navigation a'),
    		tabContentWrapper = $('.cd-tabs-content');

    	tabItems.on('click', function(event){
    		event.preventDefault();
    		var selectedItem = $(this);
    		if( !selectedItem.hasClass('selected') ) {
    			var selectedTab = selectedItem.data('content'),
    				selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
    				slectedContentHeight = selectedContent.innerHeight();

    			tabItems.removeClass('selected');
    			selectedItem.addClass('selected');
    			selectedContent.addClass('selected').siblings('li').removeClass('selected');
    			//animate tabContentWrapper height when content changes
    			tabContentWrapper.animate({
    				'height': slectedContentHeight
    			}, 200);
    		}
    	});

    	//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
    	checkScrolling($('.cd-tabs nav'));
    	$(window).on('resize', function(){
    		checkScrolling($('.cd-tabs nav'));
    		tabContentWrapper.css('height', 'auto');
    	});
    	$('.cd-tabs nav').on('scroll', function(){
    		checkScrolling($(this));
    	});

    	function checkScrolling(tabs){
    		var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
    		 	tabsViewport = parseInt(tabs.width());
    		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
    			tabs.parent('.cd-tabs').addClass('is-ended');
    		} else {
    			tabs.parent('.cd-tabs').removeClass('is-ended');
    		}
    	}
    });

    //navegacion
    $('[data-role="nav-deployer"]').click(function(){
      $(this).toggleClass('open-menu');
    });

    //desplegables
    var click = $('[data-desplegable="click"]');
    var icono = $('[data-desplegable="icono"]');
    var desplegable = $('[data-desplegable="desplegable"]');
      $(click).click(function(){
        $(this).parent().next().slideToggle('open-desplegable');
      });


});
