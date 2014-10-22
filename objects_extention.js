//Standard built-in objects extentions




//functions

//'release'
Object.defineProperty(Function.prototype, 'release', {
    enumerable: false,
    writable: false,
    value: function(count){
        var self = this;
        return function(){
            if (!--count){
                self();
            }
        }
    }
});
