
(function ($, window, document, undefined) {
    'use strict';



    /* ==============================================
     PORTFOLIO SCRIPTS 2 COLUMNS WITHOUT MARGIN
     =============================================== */

    // init cubeportfolio
    $('#portfolio.2-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.2-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 2
            }, {
                width: 1100,
                cols: 2
            }, {
                width: 800,
                cols: 2
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });




    /* ==============================================
     PORTFOLIO SCRIPTS 2 COLUMNS WITH MARGIN
     =============================================== */

    // init cubeportfolio
    $('#portfolio.2-columns-margin #portfolio-items').cubeportfolio({
        filters: '#portfolio.2-columns-margin #portfolio-filters',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        loadMore: '#loadMore-container',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 2
            }, {
                width: 1100,
                cols: 2
            }, {
                width: 800,
                cols: 2
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });





    /* ==============================================
     PORTFOLIO SCRIPTS 3 COLUMNS WITHOUT MARGIN
     =============================================== */

    // init cubeportfolio
    $('#portfolio.3-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.3-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });



    /* ==============================================
     PORTFOLIO SCRIPTS 3 COLUMNS WITH MARGIN
     =============================================== */

    // init cubeportfolio
    $('#portfolio.3-columns-margin #portfolio-items').cubeportfolio({
        filters: '#portfolio.3-columns-margin #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });




    /* ==============================================
     PORTFOLIO SCRIPTS 4 COLUMNS
     =============================================== */

    // init cubeportfolio
    $('#portfolio.4-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.4-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 4
            }, {
                width: 1100,
                cols: 4
            }, {
                width: 960,
                cols: 2
            }, {
                width: 800,
                cols: 2
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });




    /* ==============================================
     PORTFOLIO SCRIPTS 4 COLUMNS WITH MARGIN
     =============================================== */

    // init cubeportfolio
    $('#portfolio.4-columns-margin #portfolio-items').cubeportfolio({
        filters: '#portfolio.4-columns-margin #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 4
            }, {
                width: 1100,
                cols: 4
            }, {
                width: 960,
                cols: 2
            }, {
                width: 800,
                cols: 2
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });




    /* ==============================================
     PORTFOLIO SCRIPTS 5 COLUMNS
     =============================================== */

    // init cubeportfolio
    $('#portfolio.5-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.5-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 5
            }, {
                width: 1100,
                cols: 5
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });




    /* ==============================================
     PORTFOLIO SCRIPTS 5 COLUMNS WITH MARGIN
     =============================================== */

    // init cubeportfolio
    $('#portfolio.5-columns-margin #portfolio-items').cubeportfolio({
        filters: '#portfolio.5-columns-margin #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 5
            }, {
                width: 1100,
                cols: 5
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });



    /* ==============================================
     PORTFOLIO SCRIPTS 6 COLUMNS
     =============================================== */

    // init cubeportfolio
    $('#portfolio.6-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.6-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 6
            }, {
                width: 1100,
                cols: 6
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });



    /* ==============================================
     PORTFOLIO SCRIPTS 6 COLUMNS WITH MARGIN
     =============================================== */

    // init cubeportfolio
    $('#portfolio.6-columns-margin #portfolio-items').cubeportfolio({
        filters: '#portfolio.6-columns-margin #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1600,
                cols: 6
            }, {
                width: 1100,
                cols: 6
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });



    /* ==============================================
     PORTFOLIO SCRIPTS MASONRY - 6 COLUMNS
     =============================================== */

    // init cubeportfolio
    $('#portfolio.masonry.ms-6-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.masonry.ms-6-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1100,
                cols: 6
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });


    /* ==============================================
     PORTFOLIO SCRIPTS MASONRY - 5 COLUMNS
     =============================================== */

    // init cubeportfolio
    $('#portfolio.masonry.ms-5-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.masonry.ms-5-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1100,
                cols: 5
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });


    /* ==============================================
     PORTFOLIO SCRIPTS MASONRY - 4 COLUMNS
     =============================================== */

    // init cubeportfolio
    $('#portfolio.masonry.ms-4-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.masonry.ms-4-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1100,
                cols: 4
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });



    /* ==============================================
     PORTFOLIO SCRIPTS MASONRY - 3 COLUMNS
     =============================================== */

    // init cubeportfolio
    $('#portfolio.masonry.ms-3-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.masonry.ms-3-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1100,
                cols: 3
            }, {
                width: 800,
                cols: 3
            }, {
                width: 500,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });



    /* ==============================================
     PORTFOLIO SCRIPTS MASONRY - 2 COLUMNS
     =============================================== */

    // init cubeportfolio
    $('#portfolio.masonry.ms-2-columns #portfolio-items').cubeportfolio({
        filters: '#portfolio.masonry.ms-2-columns #portfolio-filters',
        loadMoreAction: 'click',
        loadMore: '#loadMore-container',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
                width: 1100,
                cols: 2
            }, {
                width: 800,
                cols: 2
            }, {
                width: 500,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                    .done(function (result) {
                        t.updateSinglePage(result);
                    })
                    .fail(function () {
                        t.updateSinglePage("Error! Please refresh the page!");
                    });
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $(".scrollToTop").fadeIn();
        } else {
            $(".scrollToTop").fadeOut();
        }
    });

    $(".scrollToTop").click(function () {
        $("body,html").animate({scrollTop: 0}, 800);
    });

    $("a.buy").click(function () {
        var p = $(this).parents("div.inner");
        var caption = p.children("h2").text();
        caption = caption.replace(" ", "");
        var length = p.find("select.length option:selected").text();
        //alert(caption);

        if (p.find('.stepwitch').is(":checked")) {
            var long = "65см";
        } else {
            var long = "1м";
        }

        if (p.find('.montage').is(":checked"))
        {
            var mont = "да";
        } else {
            var mont = "нет";
        }

        // Удаляем форму
        Bitrix24FormLoader.unload(b24paramsload);
        // Пересоздаём параметры формы
        b24paramsload = initB24CrmDvsForm({'LEAD_COMMENTS': caption+" (длина: "+length+", шаг: "+long+" монтаж: "+mont+")"});
        // Инициируем форму с новыми данными
        b24form(b24paramsload);


        $("textarea#message").val(caption+" (длина:"+length+" шаг: "+long+" монтаж: "+mont+")");
        //$(this).siblings("form.price_calc");

    })

//End Function
})(jQuery, window, document);




