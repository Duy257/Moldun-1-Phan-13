let a = document.getElementById('caro');
let board = [];
let data = "";

for(i = 0; i < 5; i++) {
    board[i] += new Array('(.)','(.)','(.)','(.)','(.)')
};

for(i = 0; i < 5; i++) {
    data += '<br>';
    for(j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    };
    
};
data += '<input type="button" value="Change value" onclick="changeValue()">'
a.innerHTML = data;

