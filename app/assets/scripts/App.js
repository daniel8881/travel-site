import MobileMenu from './modules/mobilemenu';
import RevealOnScroll from './modules/reveal';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var featureItem = new RevealOnScroll($('.feature-item'), '85%');
var testimonial = new RevealOnScroll($('.testimonial'), '60%');