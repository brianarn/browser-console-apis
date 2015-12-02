// This isn't pretty, but it doesn't really need to be
(function main () {
    function getData () {
        var url = '../data/console-apis.json';
        console.log('Getting data at ' + url);
        return $.ajax(url, { dataType: 'json' });
    }

    function processData(data) {
        console.log('Processing data');
        console.log(data);

        var $table = $('#console-apis');
        var $tr;

        _.forEach(console, function (item) {
            console.log(item);
        });
    }

    getData().then(processData);
})();
