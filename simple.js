function jam(){
	var tanggal = new Date;
	return tanggal.getHours();
}

var jam = jam();


if(jam > 22  || jam <=3){
	document.getElementById('area').style.background = "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)";
 
	var arr = ['Goodnight oyen, tidur yang nyenyak yaa',
				'INGETT!!.',
				'Doa sebelum tidur',
				'Dan jangan lupa juga mimpiin aku.',
				'Aku tunggu kita dimimpi yang samaa.',
				'MUEHEHEHEHE',
				'Babai sayaang', 
				'Aku sayang kamu selalu', 
				'love u ngoo❤️'];




} else 
if( jam > 3 && jam <= 10){
	document.getElementById('area').style.background = "linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)";
	
	var arr = ['Good Morning yaaa :)',
				'Gimanaa? Nyenyak ga tadi malem bobonya??',
				'Jangan lupa sarapan yaa sayaang',
				'Ada kelas ga hari ini?', 
				'Semangat sayaaang kamu pasti bisa!!!',
				'Keep smiling and have a nice day :)',
				'loveuyaaa❤️'
				];

} else if( jam > 10 && jam <= 14){
	document.getElementById('area').style.background = "linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)";

	var arr = ['Dah siang nih',
				'Mulai beraktivitas yuk.',
				'Sekarang lagi apa?',
				'Aku tebak',
				'Pasti lagi kangen aku kan?',
				'Hehe, aku juga. ',
				'Semoga kita bisa cepet ketemu yaa sayaang',
				'Tuhan berkati sayaang',
				'loveuoyeen❤️'

	];



}  else if( jam > 14 && jam <= 18){
	document.getElementById('area').style.background = "#FD940A";
	document.getElementById('area').style.background = "radial-gradient(circle, #F9A72B 0%, #FA9026 70%, #FB6C1F 100%)";

	var arr = ['Yahhh, dah sore lagi',
				'Cepet banget yak',
				'Saatnya buat masak makan malem ayaaang',
				'Makan yang banyak yaa yaaa',
				'Supaya selalu sehat',
				'Iyaaa gaaaaa?',
				'IYA GAAAAA???',
				'OKE SIP', 
				'Sampe ketemu ntar malem hehe', 
				'aku sayang kamu ❤️.'
	];


} 
else if( jam > 18 && jam <= 22){
 	document.getElementById('area').style.background = "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)";
	
	var arr = ['Akhirnya bisa istirahat :)', 
				'Gimana gimana? Cape ga hari ini??',
				'Seneng?',
				'Sedih?',
				'Kesel?',
				'Cerita dong sini...',
				'Kami open konsultasi kok', 
				'Hubungi WA di',
				'083112355739 :)', 
				'loveuren ❤️'];
	// 
 	


} else {

	var arr = ["Love you Laurencia",'Love you sayaang', 'Love you ayaang', 'Love you oyeenn', 'Love you yaaa','Aku sayang kamu selalu ❤️'];


}

 	var typed = new Typed('#greet', {
    strings: arr,
    loop: false,
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 1500

    });

// document.write("<p style=color:white>" + jam);