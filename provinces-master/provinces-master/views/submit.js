$(document).ready(function() {

    $("#1").on('click', function() {
        alert("hi")
        var pathname = window.location.pathname;
        $.ajax({
            url: 'http://127.0.0.1:8080' + pathname,
            crossDomain: 'true',
            data: JSON.stringify({
                rate: "1",
            }),
            type: 'POST',
            success: function(response) {
                console.log("rated");

            },
            error: function(err) {


            }
        })
    });

    $("#2").on('click', function() {
        alert("hi")
        var pathname = window.location.pathname;
        $.ajax({
            url: 'http://127.0.0.1:8080' + pathname,
            crossDomain: 'true',
            data: JSON.stringify({
                rate: "2",
            }),
            type: 'POST',
            success: function(response) {
                console.log("rated");

            },
            error: function(err) {


            }
        })
    });

    $("#3").on('click', function() {
        alert("hi")
        var pathname = window.location.pathname;
        $.ajax({
            url: 'http://127.0.0.1:8080' + pathname,
            crossDomain: 'true',
            data: JSON.stringify({
                rate: "3",
            }),
            type: 'POST',
            success: function(response) {
                console.log("rated");

            },
            error: function(err) {


            }
        })
    });

    $("#4").on('click', function() {
        alert("hi")
        var pathname = window.location.pathname;
        $.ajax({
            url: 'http://127.0.0.1:8080' + pathname,
            crossDomain: 'true',
            data: JSON.stringify({
                rate: "4",
            }),
            type: 'POST',
            success: function(response) {
                console.log("rated");

            },
            error: function(err) {


            }
        })
    });

    $("#5").on('click', function() {
        alert("hi")
        var pathname = window.location.pathname;
        $.ajax({
            url: 'http://127.0.0.1:8080' + pathname,
            crossDomain: 'true',
            data: JSON.stringify({
                rate: "5",
            }),
            type: 'POST',
            success: function(response) {
                console.log("rated");

            },
            error: function(err) {


            }
        })
    });



});