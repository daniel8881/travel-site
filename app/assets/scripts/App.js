import MobileMenu from './modules/mobilemenu';
import RevealOnScroll from './modules/reveal';
import StickyHeader from './modules/stickyheader';
import Modal from './modules/Modal';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var featureItem = new RevealOnScroll($('.feature-item'), '85%');
var testimonial = new RevealOnScroll($('.testimonial'), '60%');
var stickyheader = new StickyHeader();
var modal = new Modal();