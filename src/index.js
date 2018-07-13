import './index.scss';

import $ from 'jquery';
import 'slick-carousel/slick/slick.scss';
import slick from 'slick-carousel/slick/slick';

$(document).ready(function(){
    $(".slider").slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false
    });
});