(function ($) {
    $('#citiesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "id" },
            { "data": "fldName" },
            { "data": "fldLat" },
            { "data": "fldLong" },
            { "data": "fldCountry" },
            { "data": "fldAbbreviation" },
            { "data": "fldCapitalStatus" },
            { "data": "fldPopulation" }

        ]
    } );

})(jQuery);
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