let dice;module.link("./dice",{default(v){dice=v}},0);let slice;module.link("./slice",{default(v){slice=v}},1);


module.exportDefault(function(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? slice : dice)(parent, x0, y0, x1, y1);
});
