$(document).ready(function() {

  //plyr
  // https://github.com/sampotts/plyr/#options
  const player = new Plyr('#player', {
    // loadSprite: false,
    // iconUrl: "../assets/plyr.svg"
    controls: [
      'play-large', // The large play button in the center
      'play', // Play/pause playback
      'progress', // The progress bar and scrubber for playback and buffering
      'current-time', // The current time of playback
      'restart', // Restart playback
      // 'mute', // Toggle mute
      // 'volume', // Volume control
      'fullscreen', // Toggle fullscreen
    ],
    ratio: "16:9"

  });

  // Expose player so it can be used from the console
  window.player = player;

  // var alturaControles = $(".plyr__controls").height();
  // console.log(alturaControles);

  // // Create a condition that targets viewports at least 768px wide
  //   const mediaQuery = window.matchMedia('(max-width: 768px)')
  //
  //   function handleTabletChange(e) {
  //     // Check if the media query is true
  //     if (e.matches) {
  //       // Then log the following message to the console
  //       // Carousel
  //       $('.generos-slider').slick({
  //         dots: true,
  //         infinite: false,
  //         speed: 300,
  //         slidesToShow: 1,
  //         centerMode: true,
  //         variableWidth: true
  //       });
  //     }
  //   }
  //   // Register event listener
  //   mediaQuery.addListener(handleTabletChange)
  //   // Initial check
  //   handleTabletChange(mediaQuery)


  // $('.generos-slider').on('init', function(event, slick){
  //   console.log('opa');
  //   $('.generos-slider').slick('slickGoTo', 3);
  // });
  // $('.vitrola').click(function(){
  //   $('.generos-slider').slick('slickGoTo', 2);
  // })
  // Ativa carousel quando a tela está em retrato
  function ligaCarousel() {
    var height = $(window).height();
    var width = $(window).width();
    if (height > width) {
      $('.generos-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });
      // $('.generos-slider').slick('slickGoTo', 1);
    }
    // if (height < width) {
    //   if (typeof slick !== 'undefined') {
    //     $('.generos-slider').slick('unslick');
    //   }
    // }
  };

  ligaCarousel();

  $(window).resize(function() {
    ligaCarousel();
  });




  var experiencia;

  // Playlist
  $(".playlist").on("click", ".playlist-item", function() {
    video = $(this).attr("data-videoid");
    $(this).siblings().removeClass("selecionado");
    $(this).addClass("selecionado");
    // link = "https://www.youtube.com/embed/" + video + "?enablejsapi=1";
    // $("#player-ampulheta").attr("src", link);
    $("#player").attr("data-plyr-embed-id", video);
    player.source = {
      type: 'video',
      sources: [{
        src: video,
        provider: 'youtube',
      }, ],
    };
  })


  // voltar
  $(".btn-voltar").click(function() {
    $(".home").addClass("ativo");
    $(".escolhido").removeClass("escolhido");
    $(".musicas").removeClass("ativo");
    window.scrollTo(0, 0);
    player.stop();
  })


  // Seleciona um genero
  $(".disco").click(function() {
    genero = $(this).attr("data-genero");
    playlist = ".playlist[data-genero='" + genero + "']"
    $(".musicas").addClass("ativo");
    $(".home").removeClass("ativo");
    $(playlist).addClass("escolhido");
    video = $(playlist).find(".selecionado").attr("data-videoid");
    console.log("video: " + video)
    player.source = {
      type: 'video',
      sources: [{
        src: video,
        provider: 'youtube',
      }, ],
    };
    // var classExperiencia = "." + experiencia;
    // console.log(classExperiencia);
    // $(classExperiencia).addClass("ativo");
    // $(".home").removeClass("ativo");
    // window.scrollTo(0, 0);
  })


})
