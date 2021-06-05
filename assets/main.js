var t = new Vue({
  el: '#wrapper',
  data: {
    isHovered: false,
    bgColor: 'rgba(255, 255, 255, .7)',
    textColor: '#333',
    initBgOpacity: 0.8,
    hoverItem: "",
    playerOpen: false,
  },
  methods: {
    openPlayer: function() {
      t.playerOpen = true
    },
    mouseLeave: function() {
      t.bgColor = "rgba(255, 255, 255, .7)"
      t.textColor = "#333"
      t.isHovered = false
    },
    mouseOver: function(name, bgColor, textColor){
      t.hoverItem = name
      t.bgColor = bgColor
      t.textColor = textColor
      console.log(bgColor)
      t.isHovered = true
      // console.log(name, opacity, way)
      // t.bgStyle.backgroundImage = 'url(assets/' + name + ')'
      // t.bgStyle.opacity = opacity
      // if ( way == 'full') {
      //   t.bgStyle.backgroundSize = 'cover'
      // }
      // else {
      //   t.bgStyle.backgroundSize = 'unset'
      // }
    }
  }
})
