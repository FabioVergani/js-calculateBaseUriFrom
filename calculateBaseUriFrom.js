

var URLdawn='^((ht|f)tp(s?)|www):\/\/';

function needSlash(s){return RegExp(URLdawn+'/.*?\/([\d\D]?\.[\d\A-z]+)*$').test(s)}
function likeDomain(s){return RegExp(URLdawn+'[\.\d\A-z]*(\/)?$').test(s)}


function TrimRightAtLastSlash(s){return (s.match(/(.*\/)/)||[s])[0]};
function calculateBaseUriFrom(s){if(needSlash(s)){s+='/'};return likeDomain(s)?'/':TrimRightAtLastSlash(s)};




console.log(calculateBaseUriFrom("http://www.jsbin.com/sss/ssss.htm"));
console.log(calculateBaseUriFrom("http://www.jsbin.com/sss/ssss"));
console.log(calculateBaseUriFrom("http://www.jsbin.com/sss/ssss./f"));
console.log(calculateBaseUriFrom("http://www.jsbin.com"));
console.log(calculateBaseUriFrom("www.jsbin.com/sss/ssss.htm"));
console.log(calculateBaseUriFrom("jsbin.com"));   
