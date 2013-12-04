App.Routers.MainRoutes = Backbone.Router.extend({
	routes: {
		"": "renderRoominate",
	},
	renderRoominate: function() {
		$(function() {
			App.TimeSlots = new App.Views.TimeSlots({
				el: $("#primary-section")
			});
			App.MainContentListing.render();
		});
	}
});	

$(function() {
	App.Browser = new App.Routers.MainRoutes;
	Backbone.history.start();
});