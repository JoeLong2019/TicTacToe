var grid = []; // 
grid[0] = [];
grid[1] = [];
grid[2] = [];

const cells = document.querySelectorAll(".cell") // Returns all element descendants of node that match selectors

cells.forEach(function(cell) {
    cell.addEventListener("click", function(e) { // when cell is clicked
        cell.innerHTML = "X"; // adds X

        cells.forEach(function() {
            cell.addEventListener("click", function(e) { // when clicked
                cell.innerHTML = "O"; // adds O
                
                cells.forEach(function(O) {
                    cell.addEventListener("click", function(e) { // when clicked
                        cell.innerHTML = "X"; // adds  X

            })
        });  
    })
});        
    })
});

function restart() {
    document.location.href=""; 
}
