$(function() {
   // hilight map
   $('.map').maphilight({
      alwaysOn: true,
      strokeColor: 'ffffff',
      strokeOpacity: 0.5,
      fillColor: 'ffffff',
      fill: false
   });
   $('#Navigation').mouseover(function(e) {
      $(e.target).data('maphilight', {
         strokeColor: '00ff00',
         strokeWidth: 3,
         strokeOpacity: 0.8,
         fill: true
      }).trigger('alwaysOn.maphilight')
   }).mouseout(function(e) {       
       $(e.target).data('maphilight', {
       }).trigger('alwaysOn.maphilight')
   })
   
   // init tooltip
   $('map *').qtip({
      position: {
         viewport: $('#container')
      },
      style: {
         classes: 'qtip-light'
      }
   })
});