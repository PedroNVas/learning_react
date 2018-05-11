/*
A polyfill is a piece of code (plugin) that provides the technology the developer expects the browers implements it
 */

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function (searchString, position) {
		position = position || 0;
		return this.substr(position, searchString.length) === searchString;
	};
}