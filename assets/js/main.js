/*==================== PRELOAD ====================*/

document.getElementById("about-en").classList.add("about-on");
document.getElementById("about-en").classList.remove("about-off");
document.getElementById("about-es").classList.add("about-off");
document.getElementById("about-es").classList.remove("about-on");

/*==================== MENU SHOW Y HIDDEN ====================*/
let navToggleOpen = false;

function navToggle() {
	navToggleOpen = !navToggleOpen;
	if (navToggleOpen) {
		document.getElementById("nav__menu-mobile").classList.add("show-nav-mobile");
		document.getElementById("nav__menu-mobile").classList.add("nav-up");
		document.getElementById("nav__menu-mobile").classList.remove("nav-down");
		document.getElementById("nav-toggle").classList.add("active-nav");
		document.getElementById("nav-toggle").classList.remove("uil-apps");
		document.getElementById("nav-toggle").classList.add("uil-times");
	} else {
		document.getElementById("nav__menu-mobile").classList.remove("show-nav-mobile");
		document.getElementById("nav__menu-mobile").classList.add("hide-nav-mobile");
		document.getElementById("nav__menu-mobile").classList.remove("nav-up");
		document.getElementById("nav__menu-mobile").classList.add("nav-down");
		document.getElementById("nav-toggle").classList.remove("active-nav");
		document.getElementById("nav-toggle").classList.add("uil-apps");
		document.getElementById("nav-toggle").classList.remove("uil-times");
	}
}

document.getElementById("nav__link__home-mobile").addEventListener("click", () => {
	navToggle();
});
document.getElementById("nav__link__about-mobile").addEventListener("click", () => {
	navToggle();
});
document.getElementById("nav__link__skills-mobile").addEventListener("click", () => {
	navToggle();
});
document.getElementById("nav__link__portfolio-mobile").addEventListener("click", () => {
	navToggle();
});
/*
document.getElementById('nav__link__services-mobile').addEventListener('click', () => {
	navToggle();
});
*/
document.getElementById("nav__link__contact-mobile").addEventListener("click", () => {
	navToggle();
});

/*==================== LANGUAGE CHANGER ====================*/

let navLanguageOpen = false;

function navLanguage() {
	navLanguageOpen = !navLanguageOpen;
	if (navLanguageOpen) {
		document.getElementById("nav__language_letter-static").classList.add("active-lg");
		document.getElementById("nav__language_letter-changer").classList.add("active-lg");
		document.getElementById("nav__language_letter-changer").classList.remove("fa-e");
		document.getElementById("nav__language_letter-changer").classList.add("fa-s");
		/*
		document.getElementById('contact__status__ok-lg').innerText =
			'Gracias por tu mensaje, me pondré en contacto contigo en la brevedad.';
		document.getElementById('contact__status__error-lg-1').innerText =
			'Comprobar que el mail este escrito correctamente.';
		document.getElementById('contact__status__error-lg-2').innerText =
			'(Actualmente me encuentro actualizando este formulario, de continuar apareciendo este mensaje favor de utilizar los otros medios de contacto para comunicarse conmigo.)';
		*/

		/*==================== NAV ====================*/
		document.getElementById("home-lg-mobile").innerText = "Inicio";
		document.getElementById("about-lg-mobile").innerText = "Acerca de Mi";
		document.getElementById("skills-lg-mobile").innerText = "Habilidades";
		document.getElementById("portfolio-lg-mobile").innerText = "Portafolio";
		/*
		document.getElementById('services-lg-mobile').innerText = 'Servicios';
		*/
		document.getElementById("contact-lg-mobile").innerText = "Contáctame";
		document.getElementById("home-lg-desk").innerText = "Inicio";
		document.getElementById("about-lg-desk").innerText = "Acerca de Mi";
		document.getElementById("skills-lg-desk").innerText = "Habilidades";
		document.getElementById("portfolio-lg-desk").innerText = "Portafolio";
		/*
		document.getElementById('services-lg-desk').innerText = 'Servicios';
		*/
		document.getElementById("contact-lg-desk").innerText = "Contáctame";

		/*==================== HOME ====================*/
		document.getElementById("home__subtitle-lg").innerText = "Desarrollador Front End, UX/UI";
		/*document.getElementById('home__description-lg1').innerText =
			'Enfocado en conocer la impresión del cliente';
		document.getElementById('home__description-lg2').innerText =
			'dentro de la web, para aportar al desarrollo';
		document.getElementById('home__description-lg3').innerText =
			'desde una mejor experiencia de usuario.';*/

		/*==================== ABOUT ====================*/
		document.getElementById("section__title__about-lg").innerText = "Acerca de Mi";
		document.getElementById("about-en").classList.add("about-off");
		document.getElementById("about-en").classList.remove("about-on");
		document.getElementById("about-es").classList.add("about-on");
		document.getElementById("about-es").classList.remove("about-off");

		/*==================== SKILLS ====================*/
		document.getElementById("section__title__skills-lg").innerText = "Habilidades";
		document.getElementById("section__skills-met-lg").innerText = "Metodologías Ágiles";

		/*==================== PORTFOLIO ====================*/
		document.getElementById("section__title__portfolio-lg").innerText = "Portafolio";
		/*document.getElementById('section__subtitle__portfolio-lg').innerText = 'Trabajos recientes';*/
		document.getElementById("portfolio__container-lg-en").classList.remove("show-pf");
		document.getElementById("portfolio__container-lg-es").classList.add("show-pf");

		/*==================== SERVICES ====================*/
		/*
		document.getElementById('section__title__services-lg').innerText = 'Servicios';
		document.getElementById('section__title__services-web-lg').innerText = 'Desarrollador Web';
		document.getElementById('service__front').innerText = 'Ver más';
		document.getElementById('services__modal-title-lg').innerText = 'Desarrollador Web';
		document.getElementById('services__modal-services-front-lg1').innerText =
			'-Programar su página web desde el inicio.';
		document.getElementById('services__modal-services-front-lg2').innerText =
			'-Optimizar su interfaz para lograr que sea más intuitiva.';
		document.getElementById('services__modal-services-front-lg3').innerText =
			'-Recrear la relación de sus elementos visuales para mejorar la experiencia de usuario.';
		document.getElementById('service__design').innerText = 'Ver más';
		document.getElementById('services__modal-services-design-lg1').innerText =
			'-Diagramar el diseño de su página web.';
		document.getElementById('services__modal-services-design-lg2').innerText =
			'-Optimizar su interfaz para lograr que sea más intuitiva.';
		document.getElementById('services__modal-services-design-lg3').innerText =
			'-Recrear la relación de sus elementos visuales para mejorar la experiencia de usuario.';
		*/
		/*==================== CONTACT ====================*/
		document.getElementById("section__title__contact-lg").innerText = "Contáctame";
		/*
		document.getElementById('contact__name-lg').innerText = 'Nombre/Empresa';
		document.getElementById('contact__message-lg').innerText = 'Mensaje';
		document.getElementById('contact__submit-lg').innerText = 'Envíar';
		*/
	} else {
		document.getElementById("nav__language_letter-static").classList.remove("active-lg");
		document.getElementById("nav__language_letter-changer").classList.remove("active-lg");
		document.getElementById("nav__language_letter-changer").classList.add("fa-e");
		document.getElementById("nav__language_letter-changer").classList.remove("fa-s");

		/*
		document.getElementById('contact__status__ok-lg').innerText =
			'Thank you for your message. I will get in touch with you as soon as possible.';
		document.getElementById('contact__status__error-lg-1').innerText = 'Check if the mail is correct.';
		document.getElementById('contact__status__error-lg-2').innerText =
			'(I am currently updating the form, if this message keep showing please use the other contact forms to get in touch with me.)';
*/

		/*==================== NAV ====================*/
		document.getElementById("home-lg-mobile").innerText = "Home";
		document.getElementById("about-lg-mobile").innerText = "About Me";
		document.getElementById("skills-lg-mobile").innerText = "Skills";
		document.getElementById("portfolio-lg-mobile").innerText = "Portfolio";
		/*
		document.getElementById('services-lg-mobile').innerText = 'Services';
		*/
		document.getElementById("contact-lg-mobile").innerText = "Contact Me";
		document.getElementById("home-lg-desk").innerText = "Home";
		document.getElementById("about-lg-desk").innerText = "About Me";
		document.getElementById("skills-lg-desk").innerText = "Skills";
		document.getElementById("portfolio-lg-desk").innerText = "Portfolio";
		/*
		document.getElementById('services-lg-desk').innerText = 'Services';
		*/
		document.getElementById("contact-lg-desk").innerText = "Contact Me";

		/*==================== HOME ====================*/
		document.getElementById("home__subtitle-lg").innerText = "Front End Developer, UX/UI";
		/*document.getElementById('home__description-lg1').innerText = 'Focused in learn the impression';
		document.getElementById('home__description-lg2').innerText = 'of the client inside the web,';
		document.getElementById('home__description-lg3').innerText = 'to enhance their user experience.';*/

		/*==================== ABOUT ====================*/
		document.getElementById("section__title__about-lg").innerText = "About Me";
		document.getElementById("about-en").classList.add("about-on");
		document.getElementById("about-en").classList.remove("about-off");
		document.getElementById("about-es").classList.add("about-off");
		document.getElementById("about-es").classList.remove("about-on");

		/*==================== SKILLS ====================*/
		document.getElementById("section__title__skills-lg").innerText = "Skills";
		document.getElementById("section__skills-met-lg").innerText = "Agile Methodologies";
		/*==================== PORTFOLIO ====================*/

		document.getElementById("section__title__portfolio-lg").innerText = "Portfolio";
		/*document.getElementById('section__subtitle__portfolio-lg').innerText = 'Recent work';*/
		document.getElementById("portfolio__container-lg-es").classList.remove("show-pf");
		document.getElementById("portfolio__container-lg-en").classList.add("show-pf");

		/*==================== SERVICES ====================*/

		/*
		document.getElementById('section__title__services-lg').innerText = 'Services';
		document.getElementById('section__title__services-web-lg').innerText = 'Web Developer';
		document.getElementById('service__front').innerText = 'View more';
		document.getElementById('services__modal-title-lg').innerText = 'Web Developer';
		document.getElementById('services__modal-services-front-lg1').innerText =
			'-Program your web page from the beginning.';
		document.getElementById('services__modal-services-front-lg2').innerText =
			'-Optimice the user interface to make it more intuitive.';
		document.getElementById('services__modal-services-front-lg3').innerText =
			'-Recreate visual element interactions to get a better user experience.';
		document.getElementById('service__design').innerText = 'View more';
		document.getElementById('services__modal-services-design-lg1').innerText =
			'-Diagram the web page design.';
		document.getElementById('services__modal-services-design-lg2').innerText =
			'-Optimize the user interface.';
		document.getElementById('services__modal-services-design-lg3').innerText =
			'-Recreate UX element interactions.';
	*/

		/*==================== CONTACT ====================*/

		document.getElementById("section__title__contact-lg").innerText = "Contact Me";
		/*
		document.getElementById('contact__name-lg').innerText = 'Name';
		document.getElementById('contact__message-lg').innerText = 'Message';
		document.getElementById('contact__submit-lg').innerText = 'Send';
		*/
	}
}

navLanguage();

/*==================== DARK LIGHT THEME ====================*/

let navThemeOpen = false;

function navTheme() {
	navThemeOpen = !navThemeOpen;
	if (navThemeOpen) {
		document.body.classList.add("dark-theme");
		document.getElementById("theme-button").classList.add("active-theme");
		document.getElementById("theme-button").classList.remove("uil-sun");
		document.getElementById("theme-button").classList.add("uil-moon");
	} else {
		document.body.classList.remove("dark-theme");
		document.getElementById("theme-button").classList.remove("active-theme");
		document.getElementById("theme-button").classList.add("uil-sun");
		document.getElementById("theme-button").classList.remove("uil-moon");
	}
}

/*==================== PORTFOLIO SWIPER  ====================*/

var swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 30,
	speed: 700,
	loop: true,
	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

/*==================== ACCORDION SKILLS ====================*/

let skills__frontOpen = false,
	skills__backOpen = false,
	skills__designOpen = false;
skills__metOpen = false;

function skills__design() {
	skills__designOpen = !skills__designOpen;
	if (skills__designOpen) {
		document.getElementById("skills__design").classList.remove("skills__close");
		document.getElementById("skills__design").classList.add("skills__content");
		document.getElementById("skills__design").classList.add("skills__open");
		document.getElementById("skills__list-design").classList.add("skills-down-design");
		document.getElementById("skills__list-design").classList.remove("skills-up-design");
	} else {
		document.getElementById("skills__list-design").classList.add("skills-up-design");
		document.getElementById("skills__list-design").classList.remove("skills-down-design");
		document.getElementById("skills__design").classList.remove("skills__open");
		document.getElementById("skills__design").classList.remove("skills__content");
		document.getElementById("skills__design").classList.add("skills__close");
	}
}
function skills__front() {
	skills__frontOpen = !skills__frontOpen;
	if (skills__frontOpen) {
		document.getElementById("skills__front").classList.remove("skills__close");
		document.getElementById("skills__front").classList.add("skills__content");
		document.getElementById("skills__front").classList.add("skills__open");
		document.getElementById("skills__list-front").classList.add("skills-down-front");
		document.getElementById("skills__list-front").classList.remove("skills-up-front");
	} else {
		document.getElementById("skills__list-front").classList.add("skills-up-front");
		document.getElementById("skills__list-front").classList.remove("skills-down-front");
		document.getElementById("skills__front").classList.remove("skills__open");
		document.getElementById("skills__front").classList.remove("skills__content");
		document.getElementById("skills__front").classList.add("skills__close");
	}
}

function skills__back() {
	skills__backOpen = !skills__backOpen;
	if (skills__backOpen) {
		document.getElementById("skills__back").classList.remove("skills__close");
		document.getElementById("skills__back").classList.add("skills__content");
		document.getElementById("skills__back").classList.add("skills__open");
		document.getElementById("skills__list-back").classList.add("skills-down-back");
		document.getElementById("skills__list-back").classList.remove("skills-up-back");
	} else {
		document.getElementById("skills__list-back").classList.add("skills-up-back");
		document.getElementById("skills__list-back").classList.remove("skills-down-back");
		document.getElementById("skills__back").classList.add("skills__close");
		document.getElementById("skills__back").classList.remove("skills__content");
		document.getElementById("skills__back").classList.remove("skills__open");
	}
}

function skills__met() {
	skills__metOpen = !skills__metOpen;
	if (skills__metOpen) {
		document.getElementById("skills__met").classList.remove("skills__close");
		document.getElementById("skills__met").classList.add("skills__content");
		document.getElementById("skills__met").classList.add("skills__open");
		document.getElementById("skills__list-met").classList.add("skills-down-met");
		document.getElementById("skills__list-met").classList.remove("skills-up-met");
	} else {
		document.getElementById("skills__list-met").classList.add("skills-up-met");
		document.getElementById("skills__list-met").classList.remove("skills-down-met");
		document.getElementById("skills__met").classList.add("skills__close");
		document.getElementById("skills__met").classList.remove("skills__content");
		document.getElementById("skills__met").classList.remove("skills__open");
	}
}

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/

/*
const layout = document.querySelectorAll('.services__modal');

document.getElementById('service__front').addEventListener('click', () => {
	document.getElementById('service__front-modal').classList.add('services-on');
	document.getElementById('service__front-modal').classList.remove('services-off');
	document.getElementById('service__front-modal').classList.add('layout');
	document.getElementById('service__front-modal').classList.add('show-modal');
});

document.getElementById('service__front-close').addEventListener('click', () => {
	setTimeout(() => {
		document.getElementById('service__front-modal').classList.remove('layout');
		document.getElementById('service__front-modal').classList.remove('show-modal');
	}, 300);
	document.getElementById('service__front-modal').classList.remove('services-on');
	document.getElementById('service__front-modal').classList.add('services-off');
});

document.getElementById('service__design').addEventListener('click', () => {
	document.getElementById('service__design-modal').classList.add('services-on');
	document.getElementById('service__design-modal').classList.remove('services-off');
	document.getElementById('service__design-modal').classList.add('layout');
	document.getElementById('service__design-modal').classList.add('show-modal');
});

document.getElementById('service__design-close').addEventListener('click', () => {
	setTimeout(() => {
		document.getElementById('service__design-modal').classList.remove('layout');
		document.getElementById('service__design-modal').classList.remove('show-modal');
	}, 300);
	document.getElementById('service__design-modal').classList.remove('services-on');
	document.getElementById('service__design-modal').classList.add('services-off');
});
*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 200;
		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu-mobile a[href*=" + sectionId + "]")
				.classList.add("active-link-mobile");
			document
				.querySelector(".nav__menu-desk a[href*=" + sectionId + "]")
				.classList.add("active-link-desk");
		} else {
			document
				.querySelector(".nav__menu-mobile a[href*=" + sectionId + "]")
				.classList.remove("active-link-mobile");
			document
				.querySelector(".nav__menu-desk a[href*=" + sectionId + "]")
				.classList.remove("active-link-desk");
		}
	});
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollNav() {
	const nav = document.getElementById("header");
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 20) nav.classList.add("scroll-nav");
	else nav.classList.remove("scroll-nav");
}
window.addEventListener("scroll", scrollNav);

/*==================== SHOW SCROLL UP ====================*/

/*
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
*/

/*==================== EMAIL FORM ====================*/

/*

var form = document.getElementById('contact__form');

async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById('contact__status');
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: 'application/json',
		},
	})
		.then((response) => {
			if (response.ok) {
				status.classList.add('success');
				document.getElementById('contact__status__ok').classList.remove('inactive__contact__status');
				document.getElementById('contact__status__error').classList.add('inactive__contact__status');
				form.reset();
				document
					.getElementById('contact__name__status-check')
					.classList.add('inactive__contact__status');
				document
					.getElementById('contact__name__status-cross')
					.classList.add('inactive__contact__status');
				document
					.getElementById('contact__email__status-check')
					.classList.add('inactive__contact__status');
				document
					.getElementById('contact__email__status-cross')
					.classList.add('inactive__contact__status');
				document
					.getElementById('contact__message__status-check')
					.classList.add('inactive__contact__status');
				document
					.getElementById('contact__message__status-cross')
					.classList.add('inactive__contact__status');
			} else {
				response.json().then((data) => {
					if (Object.hasOwn(data, 'errors')) {
						document
							.getElementById('contact__status__error')
							.classList.remove('inactive__contact__status');
						document.getElementById('contact__status__ok').classList.add('inactive__contact__status');
					} else {
						status.classList.add('error');
						document
							.getElementById('contact__status__error')
							.classList.remove('inactive__contact__status');
						document.getElementById('contact__status__ok').classList.add('inactive__contact__status');
					}
				});
			}
		})
		.catch((error) => {
			status.classList.add('error');
			document.getElementById('contact__status__ok').classList.add('inactive__contact__status');
			document.getElementById('contact__status__error').classList.remove('inactive__contact__status');
		});
}
form.addEventListener('submit', handleSubmit);

function emailCheck() {
	document.getElementById('contact__email__status-check').classList.remove('inactive__contact__status');
	document.getElementById('contact__email__status-cross').classList.remove('inactive__contact__status');
}

function messageCheck() {
	document
		.getElementById('contact__message__status-check')
		.classList.remove('inactive__contact__status');
	document
		.getElementById('contact__message__status-cross')
		.classList.remove('inactive__contact__status');
}

function contactInputName() {
	function nameCheck() {
		document.getElementById('contact__name__status-check').classList.remove('inactive__contact__status');
		document.getElementById('contact__name__status-cross').classList.remove('inactive__contact__status');
	}
	document.querySelector('#contact__name__container').addEventListener('mouseleave', nameCheck);
}
function contactInputEmail() {
	function emailCheck() {
		document
			.getElementById('contact__email__status-check')
			.classList.remove('inactive__contact__status');
		document
			.getElementById('contact__email__status-cross')
			.classList.remove('inactive__contact__status');
	}
	document.querySelector('#contact__email__container').addEventListener('mouseleave', emailCheck);
}

function contactInputMessage() {
	function messageCheck() {
		document
			.getElementById('contact__message__status-check')
			.classList.remove('inactive__contact__status');
		document
			.getElementById('contact__message__status-cross')
			.classList.remove('inactive__contact__status');
	}
	document.querySelector('#contact__message__container').addEventListener('mouseleave', messageCheck);
}}

*/

/*==================== TILT HOME IMAGE ====================*/

VanillaTilt.init(document.querySelector(".home__img"), {
	max: 25,
	speed: 400,
});

/*==================== TILT CONTACT ====================*/

VanillaTilt.init(document.querySelector("#contact__information-email"), {
	max: 25,
	speed: 400,
});

VanillaTilt.init(document.querySelector("#contact__information-whatsapp"), {
	max: 25,
	speed: 400,
});

VanillaTilt.init(document.querySelector("#contact__information-linkedin"), {
	max: 25,
	speed: 400,
});

VanillaTilt.init(document.querySelector("#contact__information-github"), {
	max: 25,
	speed: 400,
});

/*==================== SCROLL REVEAL ====================*/

ScrollReveal({
	reset: true,
});

/*==================== HOME ====================*/

ScrollReveal().reveal(".home__title", {
	distance: "235px",
	duration: 700,
	delay: 40,
	origin: "left",
});
ScrollReveal().reveal(".home__subtitle", {
	distance: "190px",
	duration: 700,
	delay: 40,
	origin: "right",
});
ScrollReveal().reveal(".home__scroll-mouse", {distance: "0px", duration: 1700, delay: 0, opacity: 0.1});

/*==================== PORTFOLIO ====================*/

ScrollReveal().reveal(".portfolio__title-general", {
	distance: "100px",
	duration: 1040,
	delay: 0,
	origin: "bottom",
});

/*==================== SKILLS ====================*/

ScrollReveal().reveal(".skills__title-general", {
	distance: "25px",
	duration: 740,
	delay: 0,
	origin: "bottom",
});

ScrollReveal().reveal(".skills__header,.skills__data", {
	distance: "5000px",
	duration: 600,
	delay: 0,
	origin: "left",
});

/*==================== ABOUT ====================*/

ScrollReveal().reveal(".about__title-general", {
	distance: "25px",
	duration: 740,
	delay: 0,
	origin: "bottom",
});

/*==================== CONTACT ====================*/

ScrollReveal().reveal(".contact__title-general", {
	distance: "25px",
	duration: 740,
	delay: 0,
	origin: "bottom",
});

/*

ScrollReveal().reveal('.contact__content', {
	distance: '200px',
	duration: 740,
	delay: 0,
	origin: 'left',
});

*/

ScrollReveal().reveal(".contact__button", {
	distance: "0px",
	duration: 740,
	delay: 0,
});

ScrollReveal().reveal(".contact__information", {
	distance: "0px",
	duration: 740,
	delay: 0,
	opacity: 0.1,
});

/*
const contactFormName = document.getElementById('name');
const contactFormEmail = document.getElementById('email');
const contactFormSubject = document.getElementById('subject');
const contactFormMessage = document.getElementById('message');
const nameCheck = document.getElementById('nameCheck');
const nameCross = document.getElementById('nameCross');
const emailCheck = document.getElementById('emailCheck');
const emailCross = document.getElementById('emailCross');
const subjectCheck = document.getElementById('subjectCheck');
const subjectCross = document.getElementById('subjectCross');
const messageCheck = document.getElementById('messageCheck');
const messageCross = document.getElementById('messageCross');

contactFormName.addEventListener('click', () => {
	nameCheck.classList.add('fa-solid');
	nameCheck.classList.add('fa-check');
	nameCross.classList.add('fa-solid');
	nameCross.classList.add('fa-xmark');
});

contactFormEmail.addEventListener('click', () => {
	emailCheck.classList.add('fa-check');
	emailCheck.classList.add('fa-solid');
	emailCross.classList.add('fa-solid');
	emailCross.classList.add('fa-xmark');
});

contactFormSubject.addEventListener('click', () => {
	subjectCheck.classList.add('fa-solid');
	subjectCheck.classList.add('fa-check');
	subjectCross.classList.add('fa-solid');
	subjectCross.classList.add('fa-xmark');
});

contactFormMessage.addEventListener('click', () => {
	messageCheck.classList.add('fa-solid');
	messageCheck.classList.add('fa-check');
	messageCross.classList.add('fa-solid');
	messageCross.classList.add('fa-xmark');
});*/

/*
                <div class="firstContainerBox">
                    <div class="container">
                        <form action="https://formspree.io/f/xayvlygp" method="post" class="form" id="form">
                            <div class="form-group">
                                <label for="name" class="form-label"></label>
                                <div>
                                    <input type="text" class="form-control" id="name" name="name"
                                        placeholder="Carl Johnson" tabindex="1"
                                        onkeydown="return /[a-z- $]/i.test(event.key)" required>
                                    <i id="nameCheck"></i>
                                    <span id="nameCross"></span>
                                </div>

                            </div>
                            <div class="form-group" type="email">
                                <label for="email" class="form-label"></label>
                                <div>
                                    <input type="email" class="form-control" id="email" name="_replyto"
                                        placeholder="carl_johnson@work.com" tabindex="2" type="email" name="email"
                                        required>
                                    <i id="emailCheck"></i>
                                    <span id="emailCross"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="subject" class="form-label"></label>
                                <div>
                                    <input type="text" class="form-control" id="subject" name="_subject"
                                        placeholder="Hello!" tabindex="3" required>
                                    <i id="subjectCheck"> </i>
                                    <span id="subjectCross"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="message" class="form-label"></label>
                                <div>
                                    <textarea class="form-control" rows="5" cols="50" id="message" name="message"
                                        placeholder="We reach you from..." tabindex="4" required></textarea>
                                    <i id="messageCheck"></i>
                                    <span id="messageCross"></span>
                                </div>
                            </div>
                            <div>
                                <button type="submit" id="submit" class="btn">Send Message!</button>
                            </div>
                        </form>
                        <div id="status">
                        </div>
                    </div>
                </div>

				.form-group:focus-within {
	transform: scale(1.1, 1.1);
}

.form-control:valid:focus {
	color: green;
}

.form-control:invalid:focus {
	border-color: red;
}

.form-control:valid ~ i {
	display: flex;
}

.form-control:valid ~ span {
	display: none;
}

.form-control:invalid ~ i {
	display: none;
}

.form-control:invalid ~ span {
	display: flex;
}


-
id: 
nameCheck
nameCross
emailCheck
emailCross
messageCheck
messageCross

class:
success
error
fa-solid
fa-check
fa-xmark
-
*/
