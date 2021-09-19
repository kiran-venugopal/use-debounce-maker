"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useDebounceWrapper(func, duration) {
    if (duration === void 0) { duration = 300; }
    var timeout;
    react_1.useEffect(function () {
        return function () {
            if (timeout)
                clearTimeout(timeout);
        };
    }, []);
    function debounced() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(function () { return func.apply(void 0, args); }, duration);
    }
    return debounced;
}
exports.default = useDebounceWrapper;
