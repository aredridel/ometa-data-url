var ometajs_ = require("ometajs");var AbstractGrammar = ometajs_.grammars.AbstractGrammar;var BSJSParser = ometajs_.grammars.BSJSParser;var BSJSIdentity = ometajs_.grammars.BSJSIdentity;var BSJSTranslator = ometajs_.grammars.BSJSTranslator;var DataUrl = function DataUrl(source, opts) {AbstractGrammar.call(this, source, opts)};DataUrl.grammarName = "DataUrl";DataUrl.match = AbstractGrammar.match;DataUrl.matchAll = AbstractGrammar.matchAll;exports.DataUrl = DataUrl;require("util").inherits(DataUrl, AbstractGrammar);DataUrl.prototype["scheme"] = function $scheme() {return (this._rule("seq",false,["data:"],null,this["seq"]))};
DataUrl.prototype["type"] = function $type() {return (this._seq(/^([a-z-]+)/i))};
DataUrl.prototype["charset"] = function $charset() {return (this._seq(/^([a-z0-9-]+)/i))};
DataUrl.prototype["mimeType"] = function $mimeType() {var p, q, c;return (this._rule("type",false,[],null,this["type"]) && ((p = this._getIntermediate()), true) && this._match("/") && this._rule("type",false,[],null,this["type"]) && ((q = this._getIntermediate()), true) && this._optional(function() {return (this._rule("seq",false,[";charset="],null,this["seq"]) && this._rule("charset",false,[],null,this["charset"]) && ((c = this._getIntermediate()), true))}) && this._exec(({type:p,subtype:q,charset:c})))};
DataUrl.prototype["base64"] = function $base64() {return (this._rule("seq",false,[";base64"],null,this["seq"]))};
DataUrl.prototype["b64data"] = function $b64data() {var d;return (this._exec(function(){console.log(this._source.slice(this._offset));return 1}.call(this)) && this._seq(/^([A-Za-z0-9+-]+)/) && ((d = this._getIntermediate()), true) && this._exec(new Buffer(d,"base64")))};
DataUrl.prototype["data"] = function $data() {var d;return (this._seq(/^(.*)/) && ((d = this._getIntermediate()), true) && this._exec(decodeURIComponent(d)))};
DataUrl.prototype["dataUrl"] = function $dataUrl() {var m, d;return (this._rule("scheme",false,[],null,this["scheme"]) && this._rule("mimeType",false,[],null,this["mimeType"]) && ((m = this._getIntermediate()), true) && (this._atomic(function() {var d;return this._match(",") && this._rule("data",false,[],null,this["data"]) && ((d = this._getIntermediate()), true) && this._exec(d)}) || this._atomic(function() {var x;return this._rule("base64",false,[],null,this["base64"]) && this._match(",") && this._rule("b64data",false,[],null,this["b64data"]) && ((x = this._getIntermediate()), true) && this._exec(x)})) && ((d = this._getIntermediate()), true) && this._exec(({data:d,type:m})))};
DataUrl.parse = function (str) {
    return DataUrl.matchAll(str, "dataUrl");
};

module.exports = DataUrl;

