/**
 * Created by JetBrains WebStorm.
 * Project : ShowMeThePages.js (SMTP)
 * Code: https://github.com/zziuni/ShowMeThePages
 * User: luigi.byun(@zziuni)
 * Date: 12. 2. 12.
 * Time: 오후 11:38˚
 */

var smtp = (function(){
    var _version = '0.1';
    var testMethod1= function(){return _version;}

    var _this = {
        version: _version,
        init: init,
        testMethod1 : testMethod1,
        testMethod2 : testMethod2
    };

    function init(){
    }

    function testMethod2(){
        return _version;
    }

    return _this;
})();