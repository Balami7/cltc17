(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/NewsListClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsListClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function NewsListClient({ apiBase, limit }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [news, setNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsListClient.useEffect": ()=>{
            let mounted = true;
            setLoading(true);
            setError(null);
            setNews(null);
            fetch(`${apiBase.replace(/\/+$/, "")}/news`).then({
                "NewsListClient.useEffect": (res)=>{
                    if (!res.ok) throw new Error(`status ${res.status}`);
                    return res.json();
                }
            }["NewsListClient.useEffect"]).then({
                "NewsListClient.useEffect": (data)=>{
                    if (!mounted) return;
                    // data may be an object with `news` field or an array
                    const items = Array.isArray(data) ? data : data?.news ?? [];
                    setNews(items);
                }
            }["NewsListClient.useEffect"]).catch({
                "NewsListClient.useEffect": (err)=>{
                    if (!mounted) return;
                    setError(String(err));
                    setNews([]);
                }
            }["NewsListClient.useEffect"]).finally({
                "NewsListClient.useEffect": ()=>{
                    if (!mounted) return;
                    setLoading(false);
                }
            }["NewsListClient.useEffect"]);
            return ({
                "NewsListClient.useEffect": ()=>{
                    mounted = false;
                }
            })["NewsListClient.useEffect"];
        }
    }["NewsListClient.useEffect"], [
        apiBase
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "news-loading",
        children: "Loading news..."
    }, void 0, false, {
        fileName: "[project]/components/NewsListClient.tsx",
        lineNumber: 48,
        columnNumber: 23
    }, this);
    // Only show "No News/Media" after request completed and returned empty
    if (!loading && Array.isArray(news) && news.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "no-news",
            children: "No News/Media"
        }, void 0, false, {
            fileName: "[project]/components/NewsListClient.tsx",
            lineNumber: 52,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "no-news",
            children: "No News/Media"
        }, void 0, false, {
            fileName: "[project]/components/NewsListClient.tsx",
            lineNumber: 56,
            columnNumber: 12
        }, this);
    }
    const displayed = limit && Array.isArray(news) ? news.slice(0, limit) : news;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "news-grid",
        children: displayed?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "news-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "news-date",
                        children: item.published_at || ''
                    }, void 0, false, {
                        fileName: "[project]/components/NewsListClient.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "news-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "news-title",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/components/NewsListClient.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/newsmedia/${item.id}`,
                                className: "news-readmore",
                                children: "Read More"
                            }, void 0, false, {
                                fileName: "[project]/components/NewsListClient.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NewsListClient.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, item.id, true, {
                fileName: "[project]/components/NewsListClient.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/NewsListClient.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(NewsListClient, "3hjGGdfvf/5KVm2eH5NGL+fzSv8=");
_c = NewsListClient;
var _c;
__turbopack_context__.k.register(_c, "NewsListClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_NewsListClient_tsx_fe6f2bf5._.js.map