(function () {
    'use strict';

    angular
        .module('app')
        .factory('appSvc', appSvc);

    function appSvc() {

        var items = [{
                name: 'First item with custom name',
                comments: [{
                        content: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier."
                    }, {
                        content: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets."
                    }, {
                        content: "It was introduced to the Information Age in the mid-1980s by Aldus Corporation."
                    }
                ]
            }, {
                name: 'Second item with custom name',
                comments: [{
                        content: "In publishing and graphic design, lorem ipsum is a filler text commonly used to demonstrate the graphic elements of a document or visual presentation."
                    }, {
                        content: "Replacing meaningful content that could be distracting with placeholder text may allow viewers to focus on graphic aspects such as font, typography, and page layout.."
                    }
                ]
            }
        ];
        
        var getItems = function () {
            return angular.fromJson(localStorage.getItem('items')) || items;
        };
        
        var setItems = function (items) {
            localStorage.setItem('items', angular.toJson(items));
        };
        
        return {
            getItems: getItems,
            setItems: setItems
        };
    };

})();