module.exports = function (source) {

    if(this.cacheable) {
        this.cacheable();
    }
    return "\"use strict\";\n" + source;
    // return "(function(){\n\"use strict\";\n" + source + "\n}());";
};