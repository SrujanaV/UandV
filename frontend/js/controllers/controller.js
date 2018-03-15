myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
        };
        // $(home).ready(function () { 
        //                setTimeout(function() {
        //                    alert("see");
        //                }, 50000);
        //    });


        // for backend Data

        NavigationService.callApi("Home/search", function (data) {
            $scope.homeData = data.data.results;
            $scope.homeContent = $scope.homeData[0].content;
        });


        NavigationService.callApi("Aboutus/search", function (data) {
            $scope.aboutusData = data.data.results;
        });

        // NavigationService.callApi("Portfolio/search", function (data) {
        //     $scope.portfolioData = data.data.results;
        //     $scope.portfolio = $scope.portfolioData;
        // });

        NavigationService.callApi("Portfolio/getAllPortfolio", function (data) {
            $scope.portfolioData = data.data;
            $scope.portfolio = $scope.portfolioData;
        });


        NavigationService.callApi("Services/search", function (data) {
            $scope.servicesData = data.data.results;
            $scope.services = $scope.servicesData[0].img;
        });



        // $scope.portfolio = [{
        //         "image": "img/portfolio/logo.jpg",
        //         "name": 'LOGO'
        //     }, {
        //         "image": "img/portfolio/CI.jpg",
        //         "name": 'CORPORATE IDENTITY'
        //     }, {
        //         "image": "img/portfolio/brochure.jpg",
        //         "name": 'BROCHURE'
        //     },
        //     {
        //         "image": "img/portfolio/packaging.jpg",
        //         "name": 'PACKAGING'
        //     },
        //     {
        //         "image": "img/portfolio/catalogue.jpg",
        //         "name": 'CATALOGUE'
        //     },
        //     {
        //         "image": "img/portfolio/event.jpg",
        //         "name": 'EVENT / FESTIVE'
        //     },
        //     {
        //         "image": "img/portfolio/book.jpg",
        //         "name": 'BOOK COVER'
        //     }, {
        //         "image": "img/portfolio/advertisement.jpg",
        //         "name": 'ADVERTISEMENT'
        //     }, {
        //         "image": "img/portfolio/website.jpg",
        //         "name": 'WEBSITE DESIGN'
        //     }, {
        //         "image": "img/portfolio/emailer.jpg",
        //         "name": 'E-CAT / MAILER'
        //     }, {
        //         "image": "img/portfolio/photography.jpg",
        //         "name": 'PHOTOGRAPHY'
        //     }
        // ]

        $scope.portfolioImage = function (name, id) {
            $scope.name = name;
            $scope.portmodalImage = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/portfolio.html",
                scope: $scope,
                size: 'lg',
                backdropClass: 'black-drop'
            });
            $scope.closeModal = function () { // to close modals for ALL OTP
                $scope.portmodalImage.close();
            };
            $scope.id = id;

            NavigationService.callApiWithData('Portfolio/getOne', {
                _id: $scope.id
            }, function (data) {
                $scope.portImage = data.data.img;
            });




            // switch ($scope.name) {
            //     case "LOGO":
            //         $scope.portImage = [{
            //                 "image": "img/logo/2.jpg"
            //             },
            //             {
            //                 "image": "img/logo/3.jpg"
            //             },
            //             {
            //                 "image": "img/logo/4.jpg"
            //             },
            //             {
            //                 "image": "img/logo/5.jpg"
            //             },
            //             {
            //                 "image": "img/logo/6.jpg"
            //             },
            //             {
            //                 "image": "img/logo/7.jpg"
            //             },
            //             {
            //                 "image": "img/logo/8.jpg"
            //             },
            //             {
            //                 "image": "img/logo/9.jpg"
            //             },
            //             {
            //                 "image": "img/logo/10.jpg"
            //             },
            //             {
            //                 "image": "img/logo/11.jpg"
            //             },
            //             {
            //                 "image": "img/logo/12.jpg"
            //             },
            //             {
            //                 "image": "img/logo/13.jpg"
            //             },
            //             {
            //                 "image": "img/logo/14.jpg"
            //             },
            //             {
            //                 "image": "img/logo/15.jpg"
            //             },
            //             {
            //                 "image": "img/logo/16.jpg"
            //             },
            //             {
            //                 "image": "img/logo/17.jpg"
            //             },
            //             {
            //                 "image": "img/logo/18.jpg"
            //             }
            //         ];
            //         break;
            //     case "CORPORATE IDENTITY":
            //         $scope.portImage = [{
            //                 "image": "img/CI/1.jpg"
            //             },
            //             {
            //                 "image": "img/CI/2.jpg"
            //             },
            //             {
            //                 "image": "img/CI/3.jpg"
            //             },
            //             {
            //                 "image": "img/CI/4.jpg"
            //             },
            //             {
            //                 "image": "img/CI/5.jpg"
            //             },
            //             {
            //                 "image": "img/CI/6.jpg"
            //             }
            //         ];
            //         break;
            //     case "BROCHURE":
            //         $scope.portImage = [{
            //                 "image": "img/Brochure/1.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/2.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/3.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/4.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/5.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/6.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/7.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/8.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/9.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/10.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/11.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/12.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/13.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/14.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/15.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/16.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/17.jpg"
            //             },
            //             {
            //                 "image": "img/Brochure/18.jpg"
            //             }
            //         ];
            //         break;
            //     case "CATALOGUE":
            //         $scope.portImage = [{
            //                 "image": "img/catalogue/1.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/2.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/3.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/4.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/5.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/6.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/7.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/8.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/9.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/10.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/11.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/12.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/13.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/14.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/15.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/16.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/17.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/18.jpg"
            //             },
            //             {
            //                 "image": "img/catalogue/19.jpg"
            //             }
            //         ];
            //         break;
            //     case "PACKAGING":
            //         $scope.portImage = [{
            //                 "image": "img/packaging/2.jpg"
            //             },
            //             {
            //                 "image": "img/packaging/3.jpg"
            //             },
            //             {
            //                 "image": "img/packaging/4.jpg"
            //             },
            //             {
            //                 "image": "img/packaging/5.jpg"
            //             },
            //             {
            //                 "image": "img/packaging/6.jpg"
            //             },
            //             {
            //                 "image": "img/packaging/7.jpg"
            //             }
            //         ];
            //         break;
            //     case "EVENT / FESTIVE":
            //         $scope.portImage = [{
            //                 "image": "img/event/1.jpg"
            //             },
            //             {
            //                 "image": "img/event/2.jpg"
            //             },
            //             {
            //                 "image": "img/event/3.jpg"
            //             },
            //             {
            //                 "image": "img/event/4.jpg"
            //             },
            //             {
            //                 "image": "img/event/5.jpg"
            //             },
            //             {
            //                 "image": "img/event/6.jpg"
            //             },
            //             {
            //                 "image": "img/event/7.jpg"
            //             },
            //             {
            //                 "image": "img/event/8.jpg"
            //             },
            //             {
            //                 "image": "img/event/9.jpg"
            //             },
            //             {
            //                 "image": "img/event/10.jpg"
            //             },
            //             {
            //                 "image": "img/event/11.jpg"
            //             },
            //             {
            //                 "image": "img/event/12.jpg"
            //             },
            //             {
            //                 "image": "img/event/13.jpg"
            //             },
            //             {
            //                 "image": "img/event/14.jpg"
            //             }
            //         ];
            //         break;
            //     case "BOOK COVER":
            //         $scope.portImage = [{
            //                 "image": "img/book/1.jpg"
            //             },
            //             {
            //                 "image": "img/book/2.jpg"
            //             },
            //             {
            //                 "image": "img/book/3.jpg"
            //             },
            //             {
            //                 "image": "img/book/4.jpg"
            //             },
            //             {
            //                 "image": "img/book/5.jpg"
            //             },
            //             {
            //                 "image": "img/book/6.jpg"
            //             },
            //             {
            //                 "image": "img/book/7.jpg"
            //             },
            //             {
            //                 "image": "img/book/8.jpg"
            //             },
            //             {
            //                 "image": "img/book/9.jpg"
            //             },
            //             {
            //                 "image": "img/book/10.jpg"
            //             },
            //             {
            //                 "image": "img/book/11.jpg"
            //             },
            //             {
            //                 "image": "img/book/12.jpg"
            //             },
            //             {
            //                 "image": "img/book/13.jpg"
            //             }
            //         ];
            //         break;
            //     case "ADVERTISEMENT":
            //         $scope.portImage = [{
            //                 "image": "img/advertisement/1.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/2.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/3.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/4.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/5.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/6.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/7.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/8.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/9.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/10.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/11.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/12.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/13.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/14.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/15.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/16.jpg"
            //             },
            //             {
            //                 "image": "img/advertisement/17.jpg"
            //             }
            //         ];
            //         break;
            //     case "WEBSITE DESIGN":
            //         $scope.portImage = [{
            //                 "image": "img/website/1.jpg"
            //             },
            //             {
            //                 "image": "img/website/2.jpg"
            //             },
            //             {
            //                 "image": "img/website/3.jpg"
            //             },
            //             {
            //                 "image": "img/website/4.jpg"
            //             },
            //             {
            //                 "image": "img/website/5.jpg"
            //             },
            //             {
            //                 "image": "img/website/6.jpg"
            //             },
            //             {
            //                 "image": "img/website/7.jpg"
            //             },
            //             {
            //                 "image": "img/website/8.jpg"
            //             }
            //         ];
            //         break;
            //     case "E-CAT / MAILER":
            //         $scope.portImage = [{
            //                 "image": "img/emailer/1.jpg"
            //             },
            //             {
            //                 "image": "img/emailer/2.jpg"
            //             },
            //             {
            //                 "image": "img/emailer/3.jpg"
            //             },
            //             {
            //                 "image": "img/emailer/4.jpg"
            //             },
            //             {
            //                 "image": "img/emailer/5.jpg"
            //             },
            //             {
            //                 "image": "img/emailer/6.jpg"
            //             },
            //             {
            //                 "image": "img/emailer/7.jpg"
            //             }
            //         ];
            //         break;
            //     case "PHOTOGRAPHY":
            //         $scope.portImage = [{
            //                 "image": "img/photography/1.jpg"
            //             },
            //             {
            //                 "image": "img/photography/2.jpg"
            //             },
            //             {
            //                 "image": "img/photography/3.jpg"
            //             },
            //             {
            //                 "image": "img/photography/4.jpg"
            //             },
            //             {
            //                 "image": "img/photography/5.jpg"
            //             },
            //             {
            //                 "image": "img/photography/6.jpg"
            //             },
            //             {
            //                 "image": "img/photography/7.jpg"
            //             },
            //             {
            //                 "image": "img/photography/8.jpg"
            //             },
            //             {
            //                 "image": "img/photography/9.jpg"
            //             },
            //             {
            //                 "image": "img/photography/10.jpg"
            //             },
            //             {
            //                 "image": "img/photography/11.jpg"
            //             },
            //             {
            //                 "image": "img/photography/12.jpg"
            //             },
            //             {
            //                 "image": "img/photography/13.jpg"
            //             },
            //             {
            //                 "image": "img/photography/14.jpg"
            //             },
            //             {
            //                 "image": "img/photography/15.jpg"
            //             },
            //             {
            //                 "image": "img/photography/16.jpg"
            //             },
            //             {
            //                 "image": "img/photography/17.jpg"
            //             },
            //             {
            //                 "image": "img/photography/18.jpg"
            //             },
            //             {
            //                 "image": "img/photography/19.jpg"
            //             },
            //             {
            //                 "image": "img/photography/20.jpg"
            //             },
            //             {
            //                 "image": "img/photography/21.jpg"
            //             },
            //             {
            //                 "image": "img/photography/22.jpg"
            //             },
            //             {
            //                 "image": "img/photography/23.jpg"
            //             },
            //             {
            //                 "image": "img/photography/24.jpg"
            //             },
            //             {
            //                 "image": "img/photography/25.jpg"
            //             },
            //             {
            //                 "image": "img/photography/26.jpg"
            //             },
            //             {
            //                 "image": "img/photography/27.jpg"
            //             },
            //             {
            //                 "image": "img/photography/28.jpg"
            //             },
            //             {
            //                 "image": "img/photography/29.jpg"
            //             },
            //             {
            //                 "image": "img/photography/30.jpg"
            //             },
            //             {
            //                 "image": "img/photography/31.jpg"
            //             },
            //             {
            //                 "image": "img/photography/32.jpg"
            //             },
            //             {
            //                 "image": "img/photography/33.jpg"
            //             },
            //             {
            //                 "image": "img/photography/34.jpg"
            //             },
            //             {
            //                 "image": "img/photography/35.jpg"
            //             },
            //             {
            //                 "image": "img/photography/36.jpg"
            //             },
            //             {
            //                 "image": "img/photography/37.jpg"
            //             }
            //         ];
            //         break;
            // }
        }

        // $scope.services = [{
        //     "icon": "fa-print",
        //     "title": "Print Media Design",
        //     "content": "Brand Development, Corporate Presentations. Corporate Brochures, Commercial Photography, Product Catalogues."
        // }, {
        //     "icon": "fa-globe",
        //     "title": "Web Design Services",
        //     "content": "Web Design, Maintenance, Re-Design, Flash Website, Static and Dynamic Website Design, Multimedia Presentation."
        // }, {
        //     "icon": "fa-server",
        //     "title": "SEO Services",
        //     "content": "Brand Development, Corporate Presentations. Corporate Brochures, Commercial Photography, Product Catalogues."
        // }, {
        //     "icon": "fa-houzz",
        //     "title": "Domain Registration",
        //     "content": "Brand Development, Corporate Presentations. Corporate Brochures, Commercial Photography, Product Catalogues."
        // }]


    })

    .controller('aboutusCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/aboutus.html");
        TemplateService.title = "AboutUs"; // This is the Title of the Website
    })

    .controller('VideoCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $state) {
        $scope.template = TemplateService.getHTML("content/video.html");
        TemplateService.title = "Video"; // This is the Title of the Website
        $(document).ready(function () {
            setTimeout(function () {
                $('#video').show(42000);
                $state.go('home');
            }, 42000);
        });
    })


    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        // $scope.data = {
        //     name: "Chintan",
        //     "age": 20,
        //     "email": "chinyan@wohlig.com",
        //     "query": "query"
        // };
        $scope.submitForm = function (data) {
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });