/**
 * @file
 * jquery_alert.js
 *
 * Use jQuery plugins to display Drupal messages.
 */

(function($) {

  Drupal.behaviors.jqueryAlert = {
    attach: function(context, settings) {
      // Don't use for the admin overlay
      if ($('#overlay').length) {
        return;
      }
      var $messages = $('.messages', context);
      if ($messages.length) {
        for (i = 0; i < $messages.length; i++) {
          // Essentially, outerHTML(). This bit of genius thanks to:
          // http://stackoverflow.com/questions/1526407/jquery-select-html-of-an-element-inclusive
          if ($($messages[i]).has('.krumo-root').length) {
            $.sticky($('<div>').append($($messages[i])).html(), {'autoclose': false});
          } else {
            $.sticky($('<div>').append($($messages[i])).html());
          }
        }
      }
    }
  }

})(jQuery);