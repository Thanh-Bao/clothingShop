// sap.ui.define([
// 	"sap/ui/core/mvc/Controller"
// ], function(
// 	Controller
// ) {
// 	"use strict";

// 	return Controller.extend("product.ext.controller.RichTextEditor", {
// 	});
// });

sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller){
	"use strict";

	return Controller.extend("product.ext.controller.RichTextEditor", {
		onInit: function() {
			this.initRichTextEditor(false);
		},
		handleSelect: function (oEvent) {
			var sSelectedKey = oEvent.getParameters().selectedItem.getKey();
			if (this.oRichTextEditor) {
				this.oRichTextEditor.destroy();
			}
			switch (sSelectedKey) {
				case "TinyMCE5":
					this.initRichTextEditor(true);
					break;
				default:
					this.initRichTextEditor(false);
					break;
			}
		},
		initRichTextEditor: function (bIsTinyMCE5) {
			var that = this,
				sHtmlValue = 'abc';
			sap.ui.require(["sap/ui/richtexteditor/RichTextEditor", "sap/ui/richtexteditor/library"],
				function (RTE, library) {
					var EditorType = library.EditorType;
					that.oRichTextEditor = new RTE("myRTE", {
						editorType: bIsTinyMCE5 ? EditorType.TinyMCE5 : EditorType.TinyMCE6,
						width: "100%",
						height: "600px",
						customToolbar: true,
						showGroupFont: true,
						showGroupLink: true,
						showGroupInsert: true,
						value: sHtmlValue,
						ready: function () {
							bIsTinyMCE5 ? this.addButtonGroup("styleselect").addButtonGroup("table") : this.addButtonGroup("styles").addButtonGroup("table");
						}
					});

					that.getView().byId("idVerticalLayout").addContent(that.oRichTextEditor);
			});
		}

	});
});

