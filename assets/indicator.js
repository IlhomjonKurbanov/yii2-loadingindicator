yii2LoadingIndicator.prepend=function(){
    if($('div.pace').length==0) {
        $('body').prepend('' +
        '<div class="pace pace-inactive">' +
        '<div class="pace-progress" style="-webkit-transform: translate3d(100%, 0px, 0px); transform: translate3d(100%, 0px, 0px);">' +
        '<div class="pace-progress-inner"></div>' +
        '</div>' +
        '<div class="pace-activity"></div></div>');
    }
};

yii2LoadingIndicator.start=function(){
    yii2LoadingIndicator.prepend();
    if(yii2LoadingIndicator.auto){
        if(!yii2LoadingIndicator.indicatorStatus){
            $('div.pace').removeClass('pace-inactive');
            $('div.pace').addClass('pace-active');
            yii2LoadingIndicator.indicatorStatus=true;
        }
    }
};

yii2LoadingIndicator.stop=function(){
    if(yii2LoadingIndicator.auto) {
        if (yii2LoadingIndicator.indicatorStatus) {
            $('div.pace').removeClass('pace-active');
            $('div.pace').addClass('pace-inactive');
            yii2LoadingIndicator.indicatorStatus = false;
        }
    }
}

$(document).ready(function(){
    $(document).ajaxStart(function() {
        yii2LoadingIndicator.start();
    });
    $(document).ajaxStop(function() {
        yii2LoadingIndicator.stop();
    });
});

