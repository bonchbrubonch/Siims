$(function(){

  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 400){
  //   $('header').addClass("sticky");
  //   }
  //   else{
  //   $('header').removeClass("sticky");
  //   }
  // });

    $('.menu__btn, .close').on('click', function(){
      $('.header__top').toggleClass('header__top--active');
    });
  
    $('.header__menu-link').on('click', function(){
      $(this).next().toggleClass('header__sub-list--active');
    });

    $(".header__sub-item").click(function () {
      $(".header__top").removeClass("header__top--active");
    });



  $('.slider-header').slick({
    prevArrow: '<button class="slider__arrows slider__left" src="images/src/content/modernArrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L1 8L8 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider__arrows slider__right" src="images/src/content/modernArrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L1 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    variableWidth: true,
  });

  $('.slider-childroom').slick({
    prevArrow: '<button class="slider__arrows slider__right" src="images/src/content/modernArrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L1 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider__arrows slider__left" src="images/src/content/modernArrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L1 8L8 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    variableWidth: true,
    centerMode: true,
  });

  $('.slider-reviews').slick({
    prevArrow: '<button class="slider__arrows slider__right" src="images/src/content/modernArrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L1 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider__arrows slider__left" src="images/src/content/modernArrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L1 8L8 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    variableWidth: true,
        responsive: [
      {
        breakpoint: 1200,
        settings:{
          centerMode: true,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.slider-furniture').slick({
    prevArrow: '<button class="slider__arrows slider__right" src="images/src/content/modernArrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L1 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider__arrows slider__left" src="images/src/content/modernArrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L1 8L8 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    variableWidth: true,
    centerMode: true,
  });

  $('.slider-blog').slick({
    prevArrow: '<button class="slider__arrows slider__right" src="images/src/content/modernArrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L1 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider__arrows slider__left" src="images/src/content/modernArrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L1 8L8 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 900,
        settings:{
          centerMode: true,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.slider-catalog').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    variableWidth: true,
  });

  $('.slider-catalog__like').on('click', function(){
    $(this).addClass('slider-catalog__like--active');
  });

  $('.catalog__filter-btn').on('click', function(){
    $(this).toggleClass('catalog__filter-btn--active');
  });

  $('.slider-card__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    asNavFor: '.slider-card__bottom',
  });
  $('.slider-card__bottom').slick({
    prevArrow: '<button class="slider__arrows slider__right" src="images/src/content/modernArrow-left"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L1 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider__arrows slider__left" src="images/src/content/modernArrow-right"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L1 8L8 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-card__top',
    dots: false,
    arrows:true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 700,
        settings:{
          centerMode: true,
          slidesToShow: 1,
          arrows: false,
          dots: true,
          variableWidth: true
        }
      }
    ]
  });

  $('[data-fancybox="preview"]').fancybox({
    thumbs : {
      autoStart : true,
    }
  });



  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
      let body=document.querySelector('body');
  if(isMobile.any()){
      body.classList.add('touch');
      let arrow=document.querySelectorAll('.arrow-mob');
    for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];
  
        thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function(){
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    }
  }else{
    body.classList.add('mouse');
  }

  	//устанавливаем маску телефона
	$(".formPhone").inputmask({"mask": "+7 (999) 999-99-99"});

	//имя поля
  var fieldTitle = new Map([
		['formPhone', 'Телефон: '],
		['formName', 'Имя: '],
		
    
		['pageURL', 'Адрес страницы: '],
		['pageTitle', 'Заголовок страницы: '],
		['pageRef', 'Откуда пришли: '],
		['UTMsource', 'Источник трафика: '],
		['UTMmedium', 'Тип трафика: '],
		['UTMcampaign', 'Рекламная кампания: '],
		['UTMterm', 'Ключевое слово: '],
		['UTMcontent', 'Содержание: '],
		['clientPlace', 'Расположение клиента: '],
		['formDate', 'Дата и время отправки: '],
		['result-test', 'Результаты тестирования: '],
		['formTitle', 'Форма: ']
	]);  
	
	//парсим utm метки
	function getParameterByName(name) {
		var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
		var results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
	//ставим utm метки
	$("form").each(function(){
		var form 		= $(this),
			formTitle	= form.attr("data-subject"),
			pageURL 	= location.href,
			pageTitle	= document.title,
			pageRef 	= document.referrer,
			UTMsource 	= getParameterByName('utm_source'),
			UTMmedium 	= getParameterByName('utm_medium'),
			UTMcampaign = getParameterByName('utm_campaign'),
			UTMterm 	= getParameterByName('utm_term'),
			UTMcontent 	= getParameterByName('utm_content'),
			pageUTM 	= "";
		
		var clientDetailsHTML 	= '<div style="display:none"><input type="text" class="formTitle" value="'+formTitle+'">';
		clientDetailsHTML		+= '<input type="text" class="pageURL" value="'+pageURL+'">';
		clientDetailsHTML 		+= '<input type="text" class="pageTitle" value="'+pageTitle+'">';
		clientDetailsHTML 		+= '<input type="text" class="pageRef" value="'+pageRef+'">';
	
		if (UTMsource != '') 	clientDetailsHTML += '<input type="text" class="UTMsource" value="'+UTMsource+'">';
		if (UTMmedium != '') 	clientDetailsHTML += '<input type="text" class="UTMmedium" value="'+UTMmedium+'">';
		if (UTMcampaign != '') 	clientDetailsHTML += '<input type="text" class="UTMcampaign" value="'+UTMcampaign+'">';
		if (UTMterm != '') 		clientDetailsHTML += '<input type="text" class="UTMterm" value="'+UTMterm+'">';
		if (UTMcontent != '') 	clientDetailsHTML += '<input type="text" class="UTMcontent" value="'+UTMcontent+'">';
		
		// var client_place = "";
		// if (YMaps.location.country != undefined) {
		// 	client_place += YMaps.location.country;
		// }
		// if (YMaps.location.region != undefined) {
		// 	client_place += ", "+YMaps.location.region;
		// }
		// if (YMaps.location.city != undefined) {
		// 	client_place += ", "+YMaps.location.city;
		// }
		// if (client_place != '') {
		// 	clientDetailsHTML += '<input type="text" class="clientPlace" value="'+client_place+'">';
		// }
	
		var client_date = new Date();
			client_date = client_date.toLocaleString();
		
		clientDetailsHTML += '<input type="text" class="formDate" value="'+client_date+'"></div>';		
		
		form.append(clientDetailsHTML);
	});
	
	//отправка формы
	$("form").submit(function(e){
		e.preventDefault();
		
			var form				= $(this),
//				counterID			= 69551389,
				formGoal			= form.attr("data-goal"),
				fieldCount			= form.find("input,textarea").filter(function () {return this.value.length > 0}).length,
				fieldCountVisible	= form.find("input:not([type='hidden']),textarea").filter(function () {return (this.value.length > 0)}).length,
				msg					= "",
				subject				= form.attr("data-subject"),
				fieldPhone			= "";

			var error = true;

			if (form.find(".formPhone").length > 0) {
				if (form.find(".formPhone").val().replace(/\D/g,'').length > 10) {
					error = false;
					$(".formErrorPhone").remove();
				} else {
					if (form.find(".formErrorPhone").length == 0) {
						var errorMsg = $(".form__error-phone").text();
						$("<p class='formError formErrorPhone'>"+errorMsg+"</p>").insertAfter(form.find(".formPhone"));
					}
					error = true;
				}
			}

      // if (form.find(".formName").length > 0) {
			// 	if (form.find(".formName").val().length > 2) {
			// 		error = false;
			// 	} else {
			// 		if (form.find(".formErrorName").length == 0) {
			// 			var errorMsg = $(".form__error-name").text();
			// 			$("<p class='formError formErrorName'>"+errorMsg+"</p>").insertAfter(form.find(".formName"));
			// 		}
			// 		error = true;
			// 	}
			// }

			if (!error) {

				form.find("button").addClass("disabled");
				form.find("input,textarea").filter(function () {return this.value.length > 0}).each(function(index){
					var field 			= $(this),
						fieldType		= field.attr("type"),
						fieldName 		= field.attr("class").substr(field.attr("class").lastIndexOf(' ')+1),
						fieldIsLast 	= index == fieldCountVisible-1,
						fieldVal		= field.val();
						if (fieldVal != "") {
							var currentFieldTitle = fieldTitle.get(fieldName);
								msg += "<strong>"+currentFieldTitle+"</strong> "+fieldVal;
								msg += "<br>";
								field.val("");
						}
				});

				var data = {
					msg: msg,
					subject: subject
				};

				jQuery.post( "form.php", data, function(response) {
					if (response) {
						// form.hide();
						// $(".modal-send").show();
						jQuery.fancybox.open(jQuery('#modal-send'));
						setTimeout(function(){
							$.fancybox.close('');
						 }, 5000);
					}
				});
			}
			
	});



});