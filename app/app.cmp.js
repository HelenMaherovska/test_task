(function () {
    "use strict";

    var app = angular.module('app');

    app.component('app', {
        templateUrl: 'app/app.tpl.html',
        controller: ['appSvc', AppCtrl]
    });

    function AppCtrl(appSvc) {
        var $ctrl = this;
        $ctrl.ativeIndex = 0;
        $ctrl.newItem = "";
        $ctrl.newComment = "";

        this.$onInit = function () {
            $ctrl.items = appSvc.getItems();
            appSvc.setItems($ctrl.items);
        };

        $ctrl.addItem = function () {
            $ctrl.items.push({
                name: $ctrl.newItem,
                comments: []
            });

            $ctrl.newItem = "";

            appSvc.setItems($ctrl.items);
        };

        $ctrl.deleteItem = function (index) {
            $ctrl.items.splice(index, 1);
            appSvc.setItems($ctrl.items);

            if ($ctrl.ativeIndex == index) {
                $ctrl.ativeIndex = 0;
            }
        };
        
        $ctrl.addComment = function (commentForm) {
            if (commentForm.$invalid) {
                commentForm.comment.$setDirty();
                return;
            }
            
            $ctrl.items[$ctrl.ativeIndex].comments.push({
                content: $ctrl.newComment
            });
            appSvc.setItems($ctrl.items);

            $ctrl.newComment = "";
            $ctrl.resetForm(commentForm);
        };
        
        $ctrl.deleteComment = function (index) {
            $ctrl.items[$ctrl.ativeIndex].comments.splice(index, 1);
            appSvc.setItems($ctrl.items);
        }
        
         $ctrl.resetForm = function (form) {
            form.$setPristine();
            form.$setUntouched();
         }

    };

})();