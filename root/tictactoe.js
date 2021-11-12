var count = 1;
        
        function f() {
            if (count % 2 == 0) {
                cross();
            }
            else {
                zero();
            }
            count++;
        }
        function cross() {
            document.getElementById(event.srcElement.id).value = "X";
            document.getElementById(event.srcElement.id).innerHTML = "X";
        }
        function zero() {
            document.getElementById(event.srcElement.id).value = "O";
            document.getElementById(event.srcElement.id).innerHTML = "O";
        }
        function reset(){
            location.reload();
        }
        function decision() {
            var t1 = document.getElementById('one').value;
            var t2 = document.getElementById('two').value;
            var t3 = document.getElementById('three').value;
            var t4 = document.getElementById('four').value;
            var t5 = document.getElementById('five').value;
            var t6 = document.getElementById('six').value;
            var t7 = document.getElementById('seven').value;
            var t8 = document.getElementById('eight').value;
            var t9 = document.getElementById('nine').value;

            if (t1 == "X" && t2 == "X" && t3 == "X" ||
                t4 == "X" && t5 == "X" && t6 == "X" ||
                t7 == "X" && t8 == "X" && t9 == "X" ||
                t1 == "X" && t4 == "X" && t7 == "X" ||
                t2 == "X" && t5 == "X" && t8 == "X" ||
                t3 == "X" && t6 == "X" && t9 == "X" ||
                t1 == "X" && t5 == "X" && t9 == "X" ||
                t3 == "X" && t5 == "X" && t7 == "X") {
                window.alert('Player X Won!');
                location.reload();
            }
            else if 
               (t1 == "O" && t2 == "O" && t3 == "O" ||
                t4 == "O" && t5 == "O" && t6 == "O" ||
                t7 == "O" && t8 == "O" && t9 == "O" ||
                t1 == "O" && t4 == "O" && t7 == "O" ||
                t2 == "O" && t5 == "O" && t8 == "O" ||
                t3 == "O" && t6 == "O" && t9 == "O" ||
                t1 == "O" && t5 == "O" && t9 == "O" ||
                t3 == "O" && t5 == "O" && t7 == "O") {
                window.alert('Player O Won!');
                location.reload();
            }
            else {
                if (count == 10) {
                    window.alert('Match is Tie!')
                    location.reload();
                }
            }

        }