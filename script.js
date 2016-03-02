document.getElementById('p1').textContent=rand();
document.getElementById('p2').textContent=rand();
document.getElementById('p3').textContent=rand();
document.getElementById('p4').textContent=rand();
document.getElementById('p5').textContent=rand();
document.getElementById('p6').textContent=rand();
// document.getElementById('p7').textContent=rand();
// document.getElementById('p8').textContent=rand();
// document.getElementById('p9').textContent=rand();
function rand() {
	var text = "";
	var name = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var name2 = "abcdefghijklmnopqrstuvwxyz";
	for ( var t=0; t < Math.random()*200; t++ ){
		for ( var i=0; i < 1; i++ )
			text += name.charAt(Math.floor(Math.random() * name.length));
		for ( var i=0; i < Math.random()*10; i++ )
			text += name2.charAt(Math.floor(Math.random() * name2.length));
		for (var n=0; n < Math.random()*20+3; n++ ){
			text += ' ';
			for ( var i=0; i < Math.random()*5; i++ ){
				text += name2.charAt(Math.floor(Math.random() * name2.length));
			}
		}
		text += '. ';
	}
	return text;
}