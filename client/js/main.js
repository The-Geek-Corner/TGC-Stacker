
// Document ready function. Not necessary due to calling script at tend of html, but good practice.
$(document).ready(
    () => {

        var width = window.innerWidth/7;
        var height = window.innerHeight/20;
        var current_row = 15;
        
        // Purple color for my wife rgb(172, 0, 230);
        
        //Draw a box with fill
        function svg_open(state) {
            var element = '<svg class="' + state + '" width="' + height + '" height="' + height + '">';
            return element;
            
        };
        var svg_close = '</svg>';

        var active_svg = '<rect width="' + width + '" height="' + height + '" style="fill:rgb(172, 0, 230); strike-width:2px; stroke:rgb(255,255,255) "/>';
        var inactive_svg = '<rect width="' + width + '" height="' + height + '" style="fill:rgb(255,255,255);stroke-width:4px; stroke:rgb(172, 0, 230) "/>';
        
        //Complete block to work with
        var active_block = svg_open("active") + active_svg + svg_close;
        var inactive_block = svg_open("inactive") + inactive_svg + svg_close;
        
        // 1 row of all inactive blocks
        var inactive_row = () => {
            var row = "";
            row += '<div class="stacker-row">';
            for(var i=0; i < 7; i++){
              row += inactive_block;
            }
            row += '</div>';
            return row;
        };
        
        //Add all the rows that have not been completed.
        var board = () => {
            var row = "";
            for(var i=1; i < current_row; i++){
                row += inactive_row()
            }
            return row
        };
        
        // Example row. Also the initial starting point of the game.
        var test_row = () => {
            var row = "";
            row += '<div class="stacker-row">';
            for(var i=0; i < 2; i++){
              row += inactive_block;
            }
            for(var i=0; i < 3; i++){
              row += active_block;
            }
            for(var i=0; i < 2; i++){
              row += inactive_block;
            }
            row += '</div>';
            return row;
        };

        // Set up the gameboard with test build.
        var display = '<div class="gameboard">';
        display += board();
        display += test_row();
        display += '</div>';
        
        $('#test').html(display);
        
        /*
        CURRENT PROBLEM. MOVE FUNCTION DOES NOT APPROPRIATLY SET THE NEXT BLOCK AS ACTIVE.
        */

        function move() {
            $('.active').each( (item) => {
                console.log('Fired');
                $(item).css('active');
                $(item).next().replaceWith(active_svg);
            });
        }
        
        //Wait 5 seconds and try to move blocks.
        setTimeout(move(), 5000);
});