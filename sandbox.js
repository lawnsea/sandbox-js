// Generated by CoffeeScript 1.4.0
(function() {

  window.sandbox = function(options) {
    var allScripts, css, doc, html, iframe, js, script, scripts, stopDialogs;
    if (options == null) {
      options = {};
    }
    options = $.extend({}, {
      html: '',
      css: '',
      js: '',
      dialogs: true,
      onLog: (function() {})
    }, options);
    js = options.js, html = options.html, css = options.css;
    iframe = $('<iframe seamless sandbox="allow-scripts allow-forms allow-top-navigation allow-same-origin">').appendTo(options.el || 'body')[0];
    doc = iframe.contentDocument || iframe.contentWindow.document;
    stopDialogs = "var dialogs = ['alert', 'prompt', 'confirm']; for (var i = 0; i < dialogs.length; i++) window[dialogs[i]] = function() {};";
    scripts = [js];
    if (!options.dialogs) {
      scripts = [stopDialogs].concat(scripts);
    }
    allScripts = ((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = scripts.length; _i < _len; _i++) {
        script = scripts[_i];
        _results.push("(function() { " + script + " })();");
      }
      return _results;
    })()).join('');
    doc.open();
    doc.write("" + html + "\n<script>" + allScripts + "</script>\n<style>" + css + "</style>");
    doc.close();
    return iframe;
  };

}).call(this);
