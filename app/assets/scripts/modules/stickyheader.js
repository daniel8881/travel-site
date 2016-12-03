import $ from 'jquery';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.trigger = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createPagesectionWaypoint();
    this.addSmoothScrolling();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.trigger[0],
      handler: function(direction) {
        if (direction === "down") {
          that.siteHeader.addClass('site-header--dark')
        } else {
          that.siteHeader.removeClass('site-header--dark')
        }

      }
    })
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createPagesectionWaypoint() {
    var that = this;
    this.pageSections.each(function() {
      var current = this;
      new Waypoint({
        element: current,
        handler: function(direction) {
          if (direction === 'down') {
            var matchingHeaderLink = current.getAttribute("data-matching-link");
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass("is-current-link");
          }

        },
        offset: "18%"
      });
      new Waypoint({
        element: current,
        handler: function(direction) {
          if (direction === 'up') {
            var matchingHeaderLink = current.getAttribute("data-matching-link");
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass("is-current-link");
          }

        },
        offset: "-40%"
      });
    })
  }
}

export default StickyHeader;
