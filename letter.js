//

var letter=function(let){
	this.character=let;
	this.appear=false;
	this.letterChange=function(){
		return !(this.appear) ?"_": this.character;
	};
};

module.exports=letter;