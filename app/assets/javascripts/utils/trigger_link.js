// $('body').on('click', 'a#notes', function(e){
//     Backbone.history.navigate('#', {trigger: true});
//     // e.preventDefault();
// });

console.log("hkjgff")

$('body').on('click', 'a#notes', function(e){
    // Backbone.history.loadUrl("#");

    Backbone.history.navigate('', {trigger: true});

    // e.preventDefault();
});

// events: {
//   'click a#notes': function() {
//     Backbone.history.loadUrl();
//     return false;
//   }
// }
