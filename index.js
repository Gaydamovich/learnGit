var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Index;
(function (Index) {
    Index[Index["iphone"] = 1] = "iphone";
    Index[Index["samsung"] = 3] = "samsung";
})(Index || (Index = {}));
var obj = {
    s: {
        f: {
            a: 3,
            g: {
                g: 'hello'
            }
        }
    }
};
var copy = __assign(__assign({}, obj), { s: __assign(__assign({}, obj.s), { f: __assign(__assign({}, obj.s.f), { a: null }) }) });
console.log(copy);
console.log(copy === obj);
