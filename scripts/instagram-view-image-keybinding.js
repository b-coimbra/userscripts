// ==UserScript==
// @name         instagram view image keybinding
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Open an instagram image on a new tab with a keybinding
// @author       You
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	const KEY = 'Z';

	if (window.location.href.split('/')[3] == "p") {
		document.onkeyup = (e) => {
			if (e.key == KEY) {
				window.open(document.querySelector(".FFVAD").src);
			}
		}
	}
})();
