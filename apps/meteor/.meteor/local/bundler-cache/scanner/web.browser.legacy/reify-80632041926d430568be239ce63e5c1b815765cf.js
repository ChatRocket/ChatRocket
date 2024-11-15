module.export({hslLong:function(){return hslLong}});var colorHsl;module.link("d3-color",{hsl:function(v){colorHsl=v}},0);var color,hue;module.link("./color.js",{default:function(v){color=v},hue:function(v){hue=v}},1);


function hsl(hue) {
  return function(start, end) {
    var h = hue((start = colorHsl(start)).h, (end = colorHsl(end)).h),
        s = color(start.s, end.s),
        l = color(start.l, end.l),
        opacity = color(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

module.exportDefault(hsl(hue));
var hslLong = hsl(color);
