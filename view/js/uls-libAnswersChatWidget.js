/* libanswers chat widget 
 * from https://developers.exlibrisgroup.com/blog/embedding-springshare-libchat-widget-into-the-primo-nu/
 */
function chatWidget() {
	var lc = document.createElement('script');
	lc.type = 'text/javascript';
	lc.async = 'true';
	if (document.location.protocol == 'https:') {
		var protocol = 'https://';
	}
	else {
		protocol='http://';
	}
	lc.src = protocol + 'v2.libanswers.com/load_chat.php?hash=a962140fb4e6ffbcdae688be4c64cba5';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
}

export { chatWidget }