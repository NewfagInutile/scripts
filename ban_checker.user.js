// ==UserScript==
// @name         Ban Checker
// @version      0.1
// @description  try to take over the world!
// @author       NewfagInutile
// @match        http://www.jeuxvideo.com/forums/0-51-0-1-0-1-0-blabla-18-25-ans.htm
// @match        http://www.jeuxvideo.com/forums/42-*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @icon         http://image.noelshack.com/fichiers/2016/43/1477661624-ddb2.jpg
// ==/UserScript==

$(document).ready(function() {
    'use strict';

    var bText = '<h4 class="titre-info-fofo">Ban Checker</h4>' +
        '<div class="lien-pratique-gestion">' +
        '<label id="aj" class="hover">Ajouter</label> -' +
        ' <label id="su" class="hover">Supprimer</label>' +
        '<input id="ajInput" class="txt-search" type="text">' +
        '</div>';
    var pList = '<ul class="plist" class="liste-sujets-nomiss">' +
        '</ul>';

    document.querySelector('.bloc-info-forum').innerHTML+=(bText + pList);

    var styleEl = document.createElement('style');
    styleEl.innerHTML = '#ajInput{margin-left: 10px; display:none; color: #2a2a2a}';
    document.head.appendChild(styleEl);

    $('#aj').click(function(){
        $('#ajInput').fadeToggle("slow", function(){});
    });

    $('.hover').mouseenter(function(){
        $(this).fadeTo(0, 0.7);
    });
    $('.hover').mouseleave(function(){
        $(this).fadeTo(0, 1);
    });


});
