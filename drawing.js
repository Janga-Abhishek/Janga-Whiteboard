(function(exports){
    var x = 0;
    var y = 1;

    
    function drawCommands(ctx, data) {
        for (var i = 0; i < data.length; i++) {
            drawCommand(ctx, data[i]);
        }
    }

    function drawCommand(ctx, command) {
        commands[command[0]].apply(ctx, command[1]); 
    }

    commands = {

        l: function (start, end) {
            this.beginPath();z
            this.moveTo(start[x], start[y]);
            this.lineTo(end[x], end[y]);
            this.stroke();
        },


        qc: function (start, control, end) {
            this.beginPath();
            this.moveTo(start[x], start[y]);
            this.quadraticCurveTo(control[x], control[y], end[x], end[y]);
            this.stroke();
        },


        bc: function (start, c1, c2, end) {
            this.beginPath();
            this.moveTo(start[x], start[y]);
            this.bezierCurveTo(c1[x], c1[y], c2[x], c2[y], end[x], end[y]);
            this.stroke();
        },

        

        c: function (colour) {
            this.strokeStyle = "rgb(" + colour.join(',') + ")";
            this.fillStyle = "rgb(" + colour.join(',') + ")";
        },


        s: function (size) {
            this.lineWidth = size;
        }
    };

    exports.draw = {
        list: drawCommands,
        single: drawCommand
    }
})(typeof exports === 'undefined'? this['drawing']={}: exports);
