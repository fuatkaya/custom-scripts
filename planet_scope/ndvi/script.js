//NDVI
var val = (B4 - B3) / (B4 + B3);

return colorBlend(val,
  [0.0, 0.5, 1.0],
  [
    [1,0,0], 
    [1,1,0], 
    [0.1,0.31,0], 
  ]);