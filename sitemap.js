
    function buildMap(x){
            var createList = document.createElement("ul");
            
            var body = document.getElementById(x);
            body.appendChild(createList);
            
            var list1 = document.createElement("li");
            createList.appendChild(list1);
            var a1 = document.createElement("a");
            a1.textContent = "Home";
            a1.href = "index.html";
            list1.appendChild(a1);
            
            var list2 = document.createElement("li");
            createList.appendChild(list2);
            var a2 = document.createElement("a")
            a2.textContent = "Biography";
            a2.href = "bio.html";
            list2.appendChild(a2);
            
            var list3 = document.createElement("li");
            createList.appendChild(list3);
            list3.textContent = "Class Projects";
            
            var createlist2 = document.createElement("ul");
            list3.appendChild(createlist2);
    
            
            var list4 = document.createElement("li");
            createlist2.appendChild(list4);
            var a4 = document.createElement("a")
            a4.textContent = "Popup";
            a4.href = "popup.html"
            list4.appendChild(a4);
 
            var list5 = document.createElement("li");
            createlist2.appendChild(list5);
            var a5 = document.createElement("a")
            a5.textContent = "Fun Game";
            a5.href = "breakout.html"
            list5.appendChild(a5);
            
            var list6 = document.createElement("li");
            createlist2.appendChild(list6);
            var a6 = document.createElement("a")
            a6.textContent = "JavaScript";
            a6.href = "newpage.html"
            list6.appendChild(a6);
            
            var list7 = document.createElement("li");
            createlist2.appendChild(list7);
            var a7 = document.createElement("a")
            a7.textContent = "Edit HTML";
            a7.href = "htmltest.html"
            list7.appendChild(a7);
            
            var list8 = document.createElement("li");
            createlist2.appendChild(list8);
            var a8 = document.createElement("a")
            a8.textContent = "Make TO-DO-LIST";
            a8.href = "todolist.html"
            list8.appendChild(a8);
            
            var list9 = document.createElement("li");
            createlist2.appendChild(list9);
            var a9 = document.createElement("a")
            a9.textContent = "Punishment";
            a9.href = "chalkboard.thml"
            list9.appendChild(a9);
            
            var list10 = document.createElement("li");
            createlist2.appendChild(list10);
            var a10 = document.createElement("a")
            a10.textContent = "Tic-Tac-Toe";
            a10.href = "tictactoe.html"
            list10.appendChild(a10);
            
            var list11 = document.createElement("li");
            createlist2.appendChild(list11);
            var a11 = document.createElement("a")
            a11.textContent = "Multipilication Table";
            a11.href = "multiplicationTable.html"
            list11.appendChild(a11);
            
            var list12 = document.createElement("li");
            createlist2.appendChild(list12);
            var a12 = document.createElement("a")
            a12.textContent = "2nd Muiltiplication Table"; 
            a12.href = "multiplicationTable2.html"
            list12.appendChild(a12);
    }
