
/*
 * GET home page.
 */
var jqtpl = require('jqtpl');

exports.index = function(req, res){
    res.render('index', { title: 'Express', menu1Cls: 'active'})
};

exports.show = function( req, res ){
    res.render( 'show', {title: 'show page', menu2Cls: 'active', name: 'this name'} );
};

exports.shows = function(req, res){
    res.render( 'show.html', {title: 'show', menu4Cls: 'active'} );
};

exports.getShow = function(req, res){
    var tpl = '<div>${name}</div>';
    jqtpl.template('getShow', tpl);
    var result = jqtpl.tmpl('getShow', {name: 12333333});
    res.send(result);

};

exports.testting = function(req, res){
    res.render('test',
        {
            test01:'1test',
            test02: function(){
                return 1 + 3;
            },
            test03: 'notest',
            test04: ['a', 'b', 'c', 'd'],
            test05: '<div id="test">test</div>',
            test06: {name: 'name', url: 'google.com'}
        }

    );
};
