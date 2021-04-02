(function ($) {
    $('#snakeDataTable').snakeTable( {
        "ajax": "http://localhost:9080/api/v1/snakes_count_100",
        "columns": [
            { "data": "id" },
            { "data": "Game Number" },
            { "data": "Game Length" }

        ]
    } );

})(jQuery);