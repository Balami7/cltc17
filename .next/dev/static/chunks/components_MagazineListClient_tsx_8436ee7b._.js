(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/MagazineListClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagazineListClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MagazineListClient({ apiBase, limit }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [magazines, setMagazines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MagazineListClient.useEffect": ()=>{
            let mounted = true;
            setLoading(true);
            setError(null);
            fetch(`${apiBase.replace(/\/+$/, "")}/magazines`).then({
                "MagazineListClient.useEffect": (res)=>{
                    if (!res.ok) throw new Error(`status ${res.status}`);
                    return res.json();
                }
            }["MagazineListClient.useEffect"]).then({
                "MagazineListClient.useEffect": (data)=>{
                    if (!mounted) return;
                    const items = Array.isArray(data) ? data : data?.magazines ?? [];
                    setMagazines(items);
                }
            }["MagazineListClient.useEffect"]).catch({
                "MagazineListClient.useEffect": (err)=>{
                    if (!mounted) return;
                    setError(String(err));
                    setMagazines([]);
                }
            }["MagazineListClient.useEffect"]).finally({
                "MagazineListClient.useEffect": ()=>{
                    if (!mounted) return;
                    setLoading(false);
                }
            }["MagazineListClient.useEffect"]);
            return ({
                "MagazineListClient.useEffect": ()=>{
                    mounted = false;
                }
            })["MagazineListClient.useEffect"];
        }
    }["MagazineListClient.useEffect"], [
        apiBase
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "news-loading",
        children: "Loading magazines..."
    }, void 0, false, {
        fileName: "[project]/components/MagazineListClient.tsx",
        lineNumber: 46,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-news",
        children: "No Magazines"
    }, void 0, false, {
        fileName: "[project]/components/MagazineListClient.tsx",
        lineNumber: 47,
        columnNumber: 21
    }, this);
    if (!magazines || magazines.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-news",
        children: "No Magazines"
    }, void 0, false, {
        fileName: "[project]/components/MagazineListClient.tsx",
        lineNumber: 48,
        columnNumber: 52
    }, this);
    const displayed = limit ? magazines.slice(0, limit) : magazines;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "magazine-grid",
        children: displayed.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "magazine-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "magazine-meta",
                        children: m.published_at
                    }, void 0, false, {
                        fileName: "[project]/components/MagazineListClient.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: m.title
                    }, void 0, false, {
                        fileName: "[project]/components/MagazineListClient.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/magazine/${m.id}`,
                        className: "btn",
                        children: "Read Issue"
                    }, void 0, false, {
                        fileName: "[project]/components/MagazineListClient.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, m.id, true, {
                fileName: "[project]/components/MagazineListClient.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/MagazineListClient.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(MagazineListClient, "x/+2IKYJqzGuzJdaGu4LATq7qnA=");
_c = MagazineListClient;
var _c;
__turbopack_context__.k.register(_c, "MagazineListClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_MagazineListClient_tsx_8436ee7b._.js.map