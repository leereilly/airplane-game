$(function () {
    var SIZE = [30, 30];
    var SQUARE_SIZE = 10;
    var $grid = $(".grid");
    var PLANE_POSITION = [3, 4];
    var PLANE_ORIENTATION = "TOP";

    function getSquare(p) {
        return $grid.children().eq(p[1]).children().eq(p[0]);
    }

    function renderPlane(p, orientation) {
        var points = [];

        var x = p[0];
        var y = p[1];

        switch (orientation) {
            case "TOP":
                points = [
                    p
                  , [x - 2, y + 1]
                  , [x - 1, y + 1]
                  , [x, y + 1]
                  , [x + 1, y + 1]
                  , [x + 2, y + 1]
                  , [x, y + 2]
                  , [x - 1, y + 3]
                  , [x, y + 3]
                  , [x + 1, y + 3]
                ];
                break;
        }
        points.forEach(function (c) {
            getSquare(c).addClass("plane-point");
        });
    }

    for (var y = 0; y < SIZE[1]; ++y) {
        var $row = $("<div>", { "class": "row" });
        for (var x = 0; x < SIZE[0]; ++x) {
            $row.append($("<div>", {
                "class": "square"
              , css: {
                    width: SQUARE_SIZE
                  , height: SQUARE_SIZE
                }
            }));
        }
        $grid.append($row);
    }

    renderPlane(PLANE_POSITION, PLANE_ORIENTATION);
    // TODO
    //renderPlane([10, 10], "DOWN");
    //renderPlane([10, 10], "RIGHT");
    //renderPlane([10, 10], "LEFT");
})
