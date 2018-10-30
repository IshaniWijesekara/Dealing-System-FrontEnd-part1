$('.browse')
        .popup({
            inline: true,
            hoverable: true
        })
        ;
$('#property')
        .popup({
            inline: true,
            hoverable: true
            
        })
        ;
$('.ui.dropdown')
  .dropdown()
;
$('.shape')
  .shape('set next side', '.second.side')
  .shape('flip right')
;
$('.slider').glide({
  autoplay: false,
  arrowsWrapperClass: 'slider-arrows',
  arrowRightText: '',
  arrowLeftText: ''
});