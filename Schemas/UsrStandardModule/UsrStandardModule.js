define("UsrStandardModule", [],
    function () {
        return {
            config:{},
            init: function () {
                this.config.prop1 = 1;
            },
            render:function(){
                alert("12243");
            }
        };
    });