'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'front', {
                abstract    : true,
                views       : {
                    application         : {
                        templateUrl     : 'partials/front/base',
                        controller      : 'FrontCtrl'
                    }
                }
            })
            .state( 'home', {
                abstract    : true,
                parent      : 'front',
                views       : {
                    'front-container'   : {
                        templateUrl     : 'partials/front/home'
                    }
                }
            })
            .state( 'landing', {
                parent      : 'home',
                url         : '/',
                views       : {
                    'landing-search'    : {
                        templateUrl     : 'partials/front/landingSearch',
                        controller      : 'LandingSearchCtrl'
                    },
                    'landing-data'      : {
                        templateUrl     : 'partials/front/landingData',
                        controller      : 'LandingDataCtrl'
                    },
                    'landing-tools'     : {
                        templateUrl     : 'partials/front/landingTools',
                        controller      : 'LandingPostsCtrl'
                    },
                    'landing-blog'      : {
                        templateUrl     : 'partials/front/landingBlog',
                        controller      : 'LandingPostsCtrl'
                    },
                    'landing-subscribe' : {
                        templateUrl     : 'partials/front/landingSubscribe',
                        controller      : 'LandingSubscribeCtrl'
                    }
                }
            })
            .state( 'front.post', {
                url     : '/:section/:category/:tag/:post',
                views   : {
                    'front-container'   : {
                        templateUrl     : 'partials/posts/front',
                        controller      : 'PostsFrontCtrl'
                    }
                }
            });
    };
});