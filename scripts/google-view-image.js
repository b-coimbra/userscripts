// ==UserScript==
// @name         Google view image
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass Google's "Right click to view image" removal
// @author       You
// @include      *://www.google.com*/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	document.onclick = () => document.querySelectorAll('.irc_mi').forEach((e) => e.parentNode.href = e.src);
})();
