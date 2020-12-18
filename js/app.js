//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let sliderReviews = new Swiper('.body__wrapper', {
	//! Часто исп. настройки --------------------------------------------------------------
	observer: true, //? Обнов. свайпер, при изм. эл. слайдера
	observeParents: true, //? Обнов. свайпер, при изм. род. эл. слайдера
	// observeSlideChildren: true, //? Обнов. свайпер при изм. дочерн. эл. слайда

	slidesPerView: 1, //? Кол. слайдов для показа (2.1, 2.2.. тоже работает)
	spaceBetween: 100, //? Отступ между слайдами
	autoHeight: true, //? Автовысота
	speed: 1000, //? Скорость
	// touchRatio: 0, //? Чув-ть свайпа
	// simulateTouch: false, //? Вкл./откл. перетаскивания на ПК
	loop: true, //? Бесконечный слайдер (Откл. скролл, не работает с мультирядностью, фикс. кол-во в slidesPerView)
	preloadImages: false, //? Откл. предзагрузку картинок
	lazy: true, //? (подгрузка картинок)

	//! Стрелки --------------------------------------------------------------------------
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	//! Навигация ------------------------------------------------------------------------
	//? Буллеты, тек. положение, прогрессбар
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets', //? Буллеты
	// 	clickable: true, //? Можно ли нажать на буллет
	// 	// dynamicBullets: true, //? Динамич. буллеты
	// 	//? Кастомные буллеты
	// 	/* renderBullet: function (index, className) {
	// 		return '<span class="' + className + '">' + (index + 1) + '</span>';
	// 	}, */

	// 	/* type: 'fraction', //? Фракция
	// 	//? Кастомный вывод фракции
	// 	renderFraction: function (currentClass, totalClass) {
	// 		return 'Фото <span class="' + currentClass + '"></span>' +
	// 			' из ' +
	// 			'<span class="' + totalClass + '"></span>';
	// 	}, */

	// 	//type: 'progressbar' //? Прогрессбар
	// },

	//! Скролл --------------------------------------------------------------------------
	/* scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true //? Возможность перетаскивать скролл
	}, */

	//!Брейкпоинты (адаптив) ------------------------------------------------------------
	//? Ширина экрана
	/* breakpoints: {
	320: {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
	}
	
	768: {
		slidesPerView: 2,
		spaceBetween: 20,
	},
	992: {
		slidesPerView: 3,
		spaceBetween: 20,
	},
	1268: {
		slidesPerView: 4,
		spaceBetween: 30,
	},
}, */

	//? Соотношение сторон
	/* breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	}, */

	//? Хз для чего, но оставить стоит
	on: {
		lazyImageReady: function () {
			ibg();
		},
	},

	//! Настройки --------------------------------------------------------------------------
	// touchAngle: 45, //? Угол срабатывания свайпа/перетаскивания
	// grabCursor: true, //? Курсор перетаскивания
	// slideToClickedSlide: false, //? Перекл. при клике на слайд

	//? Навигация по хешу
	/* hashNavigation: {
		watchState: true, //? Отслеж. состояние
	}, */

	//? Управление клавиатурой
	/* keyboard: {
		enabled: true, //? Вкл.\выкл.
		onlyInViewport: true, //? Вкл.\выкл., только когда слайдер в пределах вьюпорта
		pageUpDown: true, //? Вкл.\выкл. управл. клав. pageUp, pageDown
	}, */

	//? Управление колесом мыши
	/* mousewheel: {
		sensitivity: 1, //? Чувств. колеса мыши
		//eventsTarget: ".image-slider" //? Класс объекта на котором будет сраб. прокр. мышью.
	}, */

	// watchOverflow: true, //? Откл. функционала, если слайдов мен. чем нужно
	// slidesPerGroup: 1, //? Количество пролистываемых слайдов
	// centeredSlides: false, //? Активный слайд по центру
	// initialSlide: 0, //? Стартовый слайд
	// slidesPerColumn: 1, //? Мультирядность (обяз. отключить автовысоту!)
	// loopedSlides: 0, //? Кол-во дублирующих слайдов
	// freeMode: true, //? Свободный режим (Нет фиксации на слайде)

	//! Автопрокрутка --------------------------------------------------------------------------
	/*autoplay: {
		delay: 10000, //? Пауза между прокруткой
		stopOnLastSlide: true, //? Закончить на последнем слайде
		disableOnInteraction: true //? Отключить после ручного переключения
	},*/

	// direction: 'horizontal', //? Вертикальный слайдер

	//! Эффекты переключения слайдов. ----------------------------------------------------------
	effect: 'slide', //? Листание (по-умолчанию)

	/* effect: 'fade', //? Cмена прозрачности
	fadeEffect: {
		crossFade: true //? Параллельная смена прозрачности
	}, */

	// effect: 'flip', //? Переворот
	/* flipEffect: {
		slideShadows: true, //? Тень
		limitRotation: true //? Показ только активного слайда
	}, */

	// effect: 'cube', //? Куб (В стилях огр. ширину всего слайдера)
	/* cubeEffect: {
		//? Настройки тени
		slideShadows: true, 
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	}, */

	// effect: 'coverflow', //? Эффект потока (slidesPerView не меньше 3)
	/* coverflowEffect: {
		rotate: 20, //? Угол
		stretch: 50, //? Наложение
		slideShadows: true, //? Тень
	}, */

	//! Lazy Loading (подгрузка картинок) -----------------------------------------
	// preloadImages: false, //? Отключить предзагрузка картинок
	/* lazy: {
		loadOnTransitionStart: false, //? Подгружать на старте переключения слайда
		loadPrevNext: false, //? Подгрузить предыдущую и следующую картинки
	},*/
	// watchSlidesProgress: true, //? Слежка за видимыми слайдами
	// watchSlidesVisibility: true, //? Добавление класса видимым слайдам

	//! Зум картинки --------------------------------------------------------------
	/* zoom: {
		maxRatio: 5, //? Макимальное увеличение
		minRatio: 1, //? Минимальное увеличение
	}, */

	//! Миниатюры (превью) --------------------------------------------------------
	/* thumbs: {
		//? Свайпер с мениатюрами и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	}, */

	//! Передача управления (только в 1 сторону, то есть при изм. А меняются А и Б, при изм. Б только Б)
	/* controller: {
		control: myTextSlider
	}, */

	// observer: true, //? Обновить свайпер при изменении элементов слайдера
	// observeParents: true, //? Обновить свайпер при изменении родительских элементов слайдера

});


//! Слайдер в слайдере ----------------------------------------------------------
/* new Swiper('.image-in-slider', {
	grabCursor: true, //? Курсор перетаскивания
	pagination: { //? Навигация пагинация, текущее положение, прогрессбар
		el: '.swiper-pagination',
		clickable: true, //? Буллеты
	},
	nested: true, //? Корректная работа перетаскивания\свайпа для дочернего слайдера
}); */

//! Еще один слайдер (Склейка 2 слайдеров, при изм. А меняются А и Б, при изм. Б меняются Б и А)
/*
let myTextSlider = new Swiper('.text-slider', {
	slidesPerView: 3, //? Количество слайдов для показа
	spaceBetween: 30, //? Отступ между слайдами
});

myImageSlider.controller.control = myTextSlider; //? Передача управления myImageSlider - 1ый слайдер
myTextSlider.controller.control = myImageSlider; //? Передача управления myTextSlider - 2ой слайдер
*/

//! Параллакс слайдер ----------------------------------------------------------
/* new Swiper('.parallax-slider', {
	parallax: true, //? Включаем параллакс
	speed: 2000, //? скорость переключения
	navigation: { //? Стрелки
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
}); */

//! Параметры ------------------------------------------------------------------
/*
let qSlides = myImageSlider.slides.length; //? Получение
myImageSlider.params.speed = 3000; //? Изменение
*/

//! Методы ---------------------------------------------------------------------
/*
myImageSlider.update(); //? Обновить слайдер
myImageSlider.slideTo(2, 800); //? Переключится на слайд 2, скорость 800
*/

//! События --------------------------------------------------------------------
//? Событие смены слайда
/* myImageSlider.on('slideChange', function () {
	console.log('Слайд переключен');
}); */

//? Запуск автоппрокрутки при наведении
/* let sliderBlock = document.querySelector('.image-slider');
sliderBlock.addEventListener("mouseenter", function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false; //? myImageSlider - это перем. кот. присв. слайдер
	myImageSlider.params.autoplay.delay = 500; //? myImageSlider - это перем. кот. присв. слайдер
	myImageSlider.autoplay.start(); //? myImageSlider - это перем. кот. присв. слайдер
});
sliderBlock.addEventListener("mouseleave", function (e) {
	myImageSlider.autoplay.stop();
}); */

//! Фракция (для вывода вместе с прогрессбаром) -------------------------------
/*
let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
	let currentSlide = ++myImageSlider.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
}); */

let pLeft = document.querySelector(".swiper-button-prev");
let pRight = document.querySelector(".swiper-button-next");
let prevIconS = document.querySelectorAll(".reviews__prevIcon");


for (let prevIcon of prevIconS) {
   pLeft.addEventListener('click', function (e) {
      prevIcon.classList.remove("active");
   });
};
for (let prevIcon of prevIconS) {
   pRight.addEventListener('click', function (e) {
      prevIcon.classList.remove("active");
   });
};

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
let menuLinks = document.querySelectorAll(".menu__link");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};

for (let menuLink of menuLinks) {
	menuLink.addEventListener('click', function (e) {
		let iconMenu = document.querySelector(".icon-menu");
		let menuBody = document.querySelector(".menu__body");
		let body = document.querySelector("body");
		iconMenu.classList.remove("_active");
		menuBody.classList.remove("_active");
		body.classList.remove("_lock");
	});
};


function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================

// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spollersGo) {
				spollersGo = false;
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				_slideToggle(spoller.nextElementSibling);

				setTimeout(function () {
					spollersGo = true;
				}, 500);
			}
		});
	}
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//DigiFormat
function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
	if (digi_animate.length > 0) {
		for (let index = 0; index < digi_animate.length; index++) {
			const el = digi_animate[index];
			const el_to = parseInt(el.innerHTML.replace(' ', ''));
			if (!el.classList.contains('_done')) {
				digi_animate_value(el, 0, el_to, 1500);
			}
		}
	}
}
function digi_animate_value(el, start, end, duration) {
	var obj = el;
	var range = end - start;
	// no timer shorter than 50ms (not really visible any way)
	var minTimer = 50;
	// calc step time to show all interediate values
	var stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		obj.innerHTML = digi(value);
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();

	el.classList.add('_done');
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();