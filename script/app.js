const menuLinks = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

const socialMediaLinks = [
	{
		linkName: 'Facebook',
		linkUrl: 'https://facebook.com',
		icon: `<i class="fa-brands fa-facebook"></i>`,
	},
	{
		linkName: 'Twitter',
		linkUrl: 'https://twitter.com',
		icon: `<i class="fa-brands fa-twitter"></i>`,
	},
	{
		linkName: 'Instagram',
		linkUrl: 'https://instagram.com',
		icon: `<i class="fa-brands fa-instagram"></i>`,
	},
	{
		linkName: 'GitHub',
		linkUrl: 'https://github.com',
		icon: `<i class="fa-brands fa-github"></i>`,
	},
	{
		linkName: 'LinkedIn',
		linkUrl: 'https://linkedin.com',
		icon: `<i class="fa-brands fa-linkedin"></i>`,
	},
	{
		linkName: 'Dribbble',
		linkUrl: 'https://dribbble.com',
		icon: `<i class="fa-brands fa-dribbble"></i>`,
	},
];

const navBar = document.querySelector('nav');

const result = menuLinks.map((link) => {
	const navLink = document.createElement('a');
	navLink.href = '#';
	navLink.textContent = link;

	navBar.appendChild(navLink);
});

const socialMediaContainer = document.querySelector('.social-media-links');

socialMediaLinks.forEach((socialMediaLink) => {
	const link = document.createElement('a');

	link.href = socialMediaLink.linkUrl;
	link.innerHTML = socialMediaLink.icon + ' ' + socialMediaLink.linkName;

	link.className = 'link';


	socialMediaContainer.appendChild(link);
});

const mainHeading = document.createElement('h1');

mainHeading.textContent = 'This is a JS Catchup Session';

// const mainTag = document.querySelector('main');

const sectionTag = document.createElement('section');

sectionTag.appendChild(mainHeading);

const body = document.querySelector('body');

body.appendChild(sectionTag);
