myApp.factory('NavigationService', function () {
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
    };
});