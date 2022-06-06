$(document).ready(function(){
    $(".owl-carousel").owlCarousel();

    setTimeout(function(){
            $(".page-loader").addClass("loaded");
    }, 2000);
    $('.smooth-goto').on('click', function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
        return false;
    });

    function removeActiveItem(){
        $(".resp-tab-item").removeClass("resp-tab-active");
        // $(".resp-tabs-container .resp-tab-content").removeClass("resp-tab-content-active");
        // console.log($(".resp-tabs-container .resp-tab-content"));

    }
    removeActiveItem();

    function showActiveContent(indexId) {
        for(var i=0;i<10;i++){
           var tab =  $(".resp-tabs-container").find(`#tab${i}`).next();
           tab.css("display","none")
        }
        var tabs_container = $(".resp-tabs-container").find(`#tab${indexId}`).next()
        tabs_container.css("display","block");
        $(".resp-tab-item").removeClass("resp-tab-active");
    }
   
    $(".resp-tab-item").click(function(element) {
        var strIndex = $(this).attr('aria-controls').lastIndexOf("-");
        var indexId = $(this).attr('aria-controls').substr(strIndex+1,2)
        removeActiveItem();
        $(this).addClass("resp-tab-active");
        showActiveContent(indexId);
    });
  });