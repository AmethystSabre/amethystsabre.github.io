$( document ).ready(function() {
  "use strict"; var widget = $('.nitrous-widget');
  var server_id = widget.data('server-id');
  var refresh = widget.data('refresh');
  loadWidget(server_id, widget, refresh);
});

function loadWidget(server_id, widget, refresh) {
  "use strict"; widget.html('<iframe frameborder="0" scrolling="no" src="https://nitropanel.com/widget/api/'+server_id+'" style="height: 205px; width: 50%; border-style: none; display: block; overflow: hidden;"></iframe>');	
  refresh = refresh * 1000;
  setTimeout(function() {
    loadWidget(server_id, widget, refresh);
  }, refresh);
}
