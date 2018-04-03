// ==UserScript==
// @name         Convertisseur
// @version      1.0
// @description  Convertisseur de smiley pour 2sucres.org
// @author       NewfagInutile
// @match        https://2sucres.org/*
// @grant        none
// @icon         https://image.noelshack.com/fichiers/2017/49/6/1512782385-smileyjvc-noel.gif
// ==/UserScript==

(function() {
    'use strict';

     var btn = document.createElement("BUTTON");
     var trc = document.getElementsByClassName("message-wrapper flex-100")[0];
     trc.appendChild(btn);
     btn.classList.add("pull-right", "md-raised", "no-mb", "md-accent", "mr-1", "md-button", "ng-binding", "ng-scope", "md-ink-ripple");
     var mdbutton = document.getElementsByClassName("md-button");
     mdbutton[0].setAttribute("style","min-width: 30px;");

     var btnimg = document.createElement("img");
     btnimg.src = "https://image.noelshack.com/fichiers/2017/49/6/1512782385-smileyjvc-noel.gif";
     btn.appendChild(btnimg);

     btn.addEventListener ("click", function() {
         var str = document.getElementById("message_input").value;
         var res = str
         .replace(":hap:", "https://image.noelshack.com/fichiers/2017/49/6/1512782385-smileyjvc-hap.gif")
         .replace(":noel:", "https://image.noelshack.com/fichiers/2017/49/6/1512782385-smileyjvc-noel.gif")
         .replace(":)", "https://image.noelshack.com/fichiers/2017/49/6/1512782386-smileyjvc-sourire.png")
         .replace(":-)", "https://image.noelshack.com/fichiers/2018/14/2/1522778280-smileyjvc.png")
         .replace(":(", "https://image.noelshack.com/fichiers/2017/49/6/1512782385-smileyjvc-pascontent.png")
         .replace(":-(", "https://image.noelshack.com/fichiers/2017/49/6/1512854324-smileyjvc-triste.png")
         .replace(":snif:", "https://image.noelshack.com/fichiers/2017/49/6/1512782385-smileyjvc-larme.png")
         .replace(":snif2:", "https://image.noelshack.com/fichiers/2018/14/2/1522778601-smileyjvc-snif2.png")
         .replace(":ouch:", "https://image.noelshack.com/fichiers/2018/14/2/1522778927-smileyjvc-ouch.gif")
         .replace(":ouch2:", "https://image.noelshack.com/fichiers/2018/14/2/1522779040-smileyjvc-ouch2.png")
         .replace(":content:", "https://image.noelshack.com/fichiers/2018/14/2/1522779523-smileyjvc-content.gif")
         .replace(":coeur:", "https://image.noelshack.com/fichiers/2017/49/6/1512782385-smileyjvc-coeur.png")
         .replace(":rire:", "https://image.noelshack.com/fichiers/2017/49/6/1512785336-smileyjvc-rire.gif")
         .replace(":rire2:", "https://image.noelshack.com/fichiers/2018/14/2/1522779678-smileyjvc-rire2.gif")
         .replace(":oui:", "https://image.noelshack.com/fichiers/2018/14/2/1522779814-smileyjvc-oui.gif")
         .replace(":non:", "https://image.noelshack.com/fichiers/2018/14/2/1522779932-smileyjvc-non.gif")
         .replace(":non2:", "https://image.noelshack.com/fichiers/2018/14/2/1522780031-smileyjvc-non2.gif")
         .replace(":nonnon:", "https://image.noelshack.com/fichiers/2018/14/2/1522780099-smileyjvc-nonnon.gif")
         .replace(":nah:", "https://image.noelshack.com/fichiers/2018/14/2/1522780276-smileyjvc-nah.gif")
         .replace(":peur:", "https://image.noelshack.com/fichiers/2017/49/6/1512782385-smileyjvc-peur.png")
         .replace(":ange:", "https://image.noelshack.com/fichiers/2017/49/6/1512854011-smileyjvc-ange.png")
         .replace(":diable:", "https://image.noelshack.com/fichiers/2017/49/6/1512854012-smileyjvc-diable.gif")
         .replace(":sournois:", "https://image.noelshack.com/fichiers/2017/49/6/1512854013-smileyjvc-sournois.png")
         .replace(":ok:", "https://image.noelshack.com/fichiers/2017/49/6/1512833134-smileyjvc-ok.png")
         .replace(":malade:", "https://image.noelshack.com/fichiers/2017/49/6/1512782385-smileyjvc-malade.png")
         .replace(":question:", "https://image.noelshack.com/fichiers/2017/49/6/1512835125-smileyjvc-question.png")
         .replace(":p)", "https://image.noelshack.com/fichiers/2017/49/6/1512854013-smileyjvc-langue.png")
         .replace(":fou:", "https://image.noelshack.com/fichiers/2017/49/6/1512854012-smileyjvc-fou.png")
         .replace(":salut:", "https://image.noelshack.com/fichiers/2017/49/6/1512854324-smileyjvc-panneau-salut.png")
         .replace(":up:", "https://image.noelshack.com/fichiers/2017/49/6/1512854324-smileyjvc-panneau-up.png")
         .replace(":g)", "https://image.noelshack.com/fichiers/2017/49/6/1512854249-smileyjvc-fleche-rouge-gauche.png")
         .replace(":d)", "https://image.noelshack.com/fichiers/2017/49/6/1512854249-smileyjvc-fleche-rouge-droite.png")
         .replace(":pf:", "https://image.noelshack.com/fichiers/2018/14/2/1522781424-smileyjvc-pf.png")
         .replace(":cimer:", "https://image.noelshack.com/fichiers/2018/14/2/1522781829-smileyjvc-cimer.gif");
         document.getElementById("message_input").value = res;
     });

})();
