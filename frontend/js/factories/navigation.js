var adminurl = "http://wohlig.io/api/";
var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";

myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "HOME",
            classis: "active",
            // anchor: "home",
            link: "#b1",
            subnav: []
        }, {
            name: "ABOUT US",
            classis: "active",
            // anchor: "form",
            link: "#aboutus",
            subnav: []
        },
        {
            name: "PORTFOLIO",
            classis: "active",
            // anchor: "grid",
            link: "#portfolio",
            subnav: []
        },
        {
            name: "SERVICES",
            classis: "active",
            // anchor: "grid",
            link: "#services",
            subnav: []
        },
        {
            name: "CONTACT US",
            classis: "active",
            // anchor: "grid",
            link: "#contactus",
            subnav: []
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },

        callApi: function (url, callback) {
            $http.post(adminurl + url).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        callApiWithData: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
    };
});