let arr = [];
      let users = 1;
      let c1 = document.getElementById("c1");
      let c2 = document.getElementById("c2");
      let c3 = document.getElementById("c3");
      let c4 = document.getElementById("c4");
      let c5 = document.getElementById("c5");
      let c6 = document.getElementById("c6");
      let c7 = document.getElementById("c7");
      let c8 = document.getElementById("c8");
      let c9 = document.getElementById("c9");
      let opText = document.getElementById("opText");
      let matchCount = 0,
        playerX = 0,
        playerO = 0,
        pxLoss = 0,
        poLoss = 0,
        pDraw = 0;

      function chooseBlock(i, j) {
        arr[i] = i;
        users++;
        if (users % 2 == 0) {
          j.value = "X";
          j.disabled = "true";
          j.style.backgroundColor = "#FFA732";
        } else {
          j.value = "O";
          j.disabled = "true";
          j.style.backgroundColor = "#EF4040";
        }
        gameOverCheck(j.value);
      }

      function gameOverCheck(qq) {
        if (
          (c1.value == "X" && c2.value == "X" && c3.value == "X") ||
          (c4.value == "X" && c5.value == "X" && c6.value == "X") ||
          (c7.value == "X" && c8.value == "X" && c9.value == "X") ||
          (c1.value == "X" && c4.value == "X" && c7.value == "X") ||
          (c2.value == "X" && c5.value == "X" && c8.value == "X") ||
          (c3.value == "X" && c6.value == "X" && c9.value == "X") ||
          (c1.value == "X" && c5.value == "X" && c9.value == "X") ||
          (c3.value == "X" && c5.value == "X" && c7.value == "X")
        ) {
          opText.innerHTML = "Player " + qq + " wins";
          matchCount++;
          playerX++;
          poLoss++;
          document.getElementById("xPlay").innerHTML = matchCount;
          document.getElementById("oPlay").innerHTML = matchCount;
          document.getElementById("xWins").innerHTML = playerX;
          document.getElementById("oLoss").innerHTML = poLoss;
          document.getElementById("playerXcard").style.backgroundImage =
            "url(img/celebration_bg.gif)";
          setTimeout(resetGame, 3000);
        } else if (
          (c1.value == "O" && c2.value == "O" && c3.value == "O") ||
          (c4.value == "O" && c5.value == "O" && c6.value == "O") ||
          (c7.value == "O" && c8.value == "O" && c9.value == "O") ||
          (c1.value == "O" && c4.value == "O" && c7.value == "O") ||
          (c2.value == "O" && c5.value == "O" && c8.value == "O") ||
          (c3.value == "O" && c6.value == "O" && c9.value == "O") ||
          (c1.value == "O" && c5.value == "O" && c9.value == "O") ||
          (c3.value == "O" && c5.value == "O" && c7.value == "O")
        ) {
          opText.innerHTML = "Player " + qq + " wins";
          matchCount++;
          playerO++;
          pxLoss++;
          document.getElementById("xPlay").innerHTML = matchCount;
          document.getElementById("oPlay").innerHTML = matchCount;
          document.getElementById("oWins").innerHTML = playerO;
          document.getElementById("xLoss").innerHTML = pxLoss;
          document.getElementById("playerOcard").style.backgroundImage =
            "url(img/celebration_bg.gif)";
          setTimeout(resetGame, 3000);
        } else if (
          c1.value != "" &&
          c2.value != "" &&
          c3.value != "" &&
          c4.value != "" &&
          c5.value != "" &&
          c6.value != "" &&
          c7.value != "" &&
          c8.value != "" &&
          c9.value != ""
        ) {
          opText.innerHTML = "Oops!!! Top fight!!! Match Draw!!!";
          matchCount++;
          pDraw++;
          document.getElementById("xPlay").innerHTML = matchCount;
          document.getElementById("oPlay").innerHTML = matchCount;
          document.getElementById("xDraw").innerHTML = pDraw;
          document.getElementById("oDraw").innerHTML = pDraw;
          setTimeout(resetGame, 3000);
        }
      }

      function resetGame() {
        users = 1;
        c1.value = "";
        c2.value = "";
        c3.value = "";
        c4.value = "";
        c5.value = "";
        c6.value = "";
        c7.value = "";
        c8.value = "";
        c9.value = "";
        c1.style.backgroundColor = "#711db0";
        c2.style.backgroundColor = "#711db0";
        c3.style.backgroundColor = "#711db0";
        c4.style.backgroundColor = "#711db0";
        c5.style.backgroundColor = "#711db0";
        c6.style.backgroundColor = "#711db0";
        c7.style.backgroundColor = "#711db0";
        c8.style.backgroundColor = "#711db0";
        c9.style.backgroundColor = "#711db0";
        c1.removeAttribute("disabled");
        c2.removeAttribute("disabled");
        c3.removeAttribute("disabled");
        c4.removeAttribute("disabled");
        c5.removeAttribute("disabled");
        c6.removeAttribute("disabled");
        c7.removeAttribute("disabled");
        c8.removeAttribute("disabled");
        c9.removeAttribute("disabled");
        opText.innerHTML = "";
        document.getElementById("playerXcard").style.backgroundImage = "none";
        document.getElementById("playerOcard").style.backgroundImage = "none";
      }

      function profileChange(value, source) {
        let profile = prompt(
          "Please enter the player name (max 10 characters)",
          source
        );
        if (profile.length == 0 || profile.length > 10) {
          alert("Please enter valid name in next try !!!");
        } else if (profile.length > 0 && profile.length <= 10) {
          document.getElementById(value).innerHTML = profile;
        }
      }