define("./pdTangram",["./component"],function(c){return c("./component").extend({$tip:null,constructor:function(a){this.base(a)},render:function(){var a=this;this.el.bind("keyup change",function(){a.checkPasswd()})},checkPasswd:function(){var a=this.getAdditionalVal();return this.authPasswd.apply(this,[this.el.val()].concat(a))},getAdditionalVal:function(){return[]},destroy:function(){this.base()},noticeAssign:function(a){this.trigger("noticeAssign",a)},authPasswd:function(a,e,d){var c=a.length,b=
"";/\d/.test(a)&&(b+=1);/[a-zA-Z]/.test(a)&&(b+=2);/[^\da-zA-Z]/.test(a)&&(b+=3);if(c<8||b.length==1||e&&e.split(",").indexOf(a)>=0||d&&(a===d||a===d.split("").reverse().join("")))return this.noticeAssign(0),0;a=/^(12)$/.test(b)?1:/^([12]3)$/.test(b)?2:3;this.noticeAssign(a);return a}})});