// JavaScript Document
$(function(){
	$("#titleSearch").focus(function(){
		var text = $(this).val();
		if (text =='推荐标题搜索'){
			$("#titleSearch").val("");
		}
	});
});