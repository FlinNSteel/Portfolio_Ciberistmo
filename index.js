// M = Aboutme
// H = abilities
// C = contacts
// E = certifications

window.switchToM = function switchToM() {
	document.getElementById('habi').style.display = "none";
	document.getElementById('whoamI').style.display = "flex";
	document.getElementById('contacts').style.display = "none";
	document.getElementById('certif').style.display = "none";
}

window.switchToH = function switchToH() {
	document.getElementById('habi').style.display = "flex";
	document.getElementById('whoamI').style.display = "none";
	document.getElementById('contacts').style.display = "none";
	document.getElementById('certif').style.display = "none";
}
window.switchToC = function switchToH() {
	document.getElementById('habi').style.display = "none";
	document.getElementById('whoamI').style.display = "none";
	document.getElementById('contacts').style.display = "grid";
	document.getElementById('certif').style.display = "none";
}
window.switchToE = function switchToE() {
	document.getElementById('habi').style.display = "none";
	document.getElementById('whoamI').style.display = "none";
	document.getElementById('contacts').style.display = "none";
	document.getElementById('certif').style.display = "grid";
}