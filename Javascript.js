$(document).ready(function(){
	$(".nav-item").hover(function(){/*Ketika kursor mengarah ke class nav item tanpa diklik*/
		$(this).find(".dropdown-menu").slideToggle("normal");/*maka dropdown menu akan slide kebawah dengan kecepatan normal*/
	});
});
/*Untuk membuat animasi scroll slide ke bawah pada navbar dropdown*/ 
