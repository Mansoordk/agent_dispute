(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/agendispute-frontend-studionet/frontend/app/create/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/components/Nav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/lib/contract.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CreatePage() {
    _s();
    const [f, setF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        requirements: "",
        provider: "",
        deadline: "",
        amount: "1"
    });
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const u = (k, v)=>setF((x)=>({
                ...x,
                [k]: v
            }));
    async function create() {
        try {
            setLoading(true);
            setStatus("Waiting for wallet…");
            let a = account;
            if (!a) {
                if (!window.ethereum) throw new Error("Install MetaMask or another EVM wallet.");
                a = (await window.ethereum.request({
                    method: "eth_requestAccounts"
                }))?.[0];
                setAccount(a || "");
            }
            if (!a) throw new Error("Wallet connection failed.");
            if (!f.provider.trim()) throw new Error("Provider address is required.");
            if (!f.deadline) throw new Error("Deadline is required.");
            const tx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"])(a, "create_dispute", [
                f.title.trim(),
                f.requirements.trim(),
                f.provider.trim(),
                new Date(f.deadline).toISOString()
            ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genToWei"])(f.amount));
            setStatus(`Agreement created. Transaction: ${String(tx)}`);
            setF({
                title: "",
                requirements: "",
                provider: "",
                deadline: "",
                amount: "1"
            });
        } catch (e) {
            setStatus(e?.message || "Creation failed.");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                lineNumber: 5,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "badge text-cyan-300",
                            children: "CREATE AGREEMENT"
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                            lineNumber: 5,
                            columnNumber: 67
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-4 text-4xl font-black",
                            children: "Lock a service agreement"
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                            lineNumber: 5,
                            columnNumber: 128
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 muted",
                            children: "The provider address is bound on-chain. GenLayer evaluates only the acceptance requirements you specify."
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                            lineNumber: 5,
                            columnNumber: 198
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card mt-8 p-6 space-y-5",
                            children: [
                                [
                                    [
                                        "title",
                                        "Title",
                                        "e.g. Build an AI landing page"
                                    ],
                                    [
                                        "provider",
                                        "Provider wallet",
                                        "0x…"
                                    ]
                                ].map(([k, l, p])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mb-2 block text-sm font-bold",
                                                children: l
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                                lineNumber: 5,
                                                columnNumber: 511
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "field",
                                                value: f[k],
                                                placeholder: p,
                                                onChange: (e)=>u(k, e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                                lineNumber: 5,
                                                columnNumber: 568
                                            }, this)
                                        ]
                                    }, k, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                        lineNumber: 5,
                                        columnNumber: 478
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mb-2 block text-sm font-bold",
                                            children: "Acceptance requirements"
                                        }, void 0, false, {
                                            fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                            lineNumber: 5,
                                            columnNumber: 692
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "field min-h-40",
                                            value: f.requirements,
                                            placeholder: "Describe exactly what must be delivered.",
                                            onChange: (e)=>u("requirements", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                            lineNumber: 5,
                                            columnNumber: 769
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                    lineNumber: 5,
                                    columnNumber: 667
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-2 block text-sm font-bold",
                                                    children: "GEN escrow"
                                                }, void 0, false, {
                                                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                                    lineNumber: 5,
                                                    columnNumber: 990
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "field",
                                                    type: "number",
                                                    min: "0",
                                                    step: "0.01",
                                                    value: f.amount,
                                                    onChange: (e)=>u("amount", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                                    lineNumber: 5,
                                                    columnNumber: 1054
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                            lineNumber: 5,
                                            columnNumber: 983
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-2 block text-sm font-bold",
                                                    children: "Deadline"
                                                }, void 0, false, {
                                                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                                    lineNumber: 5,
                                                    columnNumber: 1187
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "field",
                                                    type: "datetime-local",
                                                    value: f.deadline,
                                                    onChange: (e)=>u("deadline", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                                    lineNumber: 5,
                                                    columnNumber: 1249
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                            lineNumber: 5,
                                            columnNumber: 1180
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                    lineNumber: 5,
                                    columnNumber: 940
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary",
                                    onClick: create,
                                    disabled: loading,
                                    children: loading ? "Submitting…" : "Create & lock GEN"
                                }, void 0, false, {
                                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                    lineNumber: 5,
                                    columnNumber: 1373
                                }, this),
                                status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl bg-slate-950 p-4 text-sm text-cyan-200 break-words",
                                    children: status
                                }, void 0, false, {
                                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                                    lineNumber: 5,
                                    columnNumber: 1506
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                            lineNumber: 5,
                            columnNumber: 332
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                    lineNumber: 5,
                    columnNumber: 40
                }, this)
            }, void 0, false, {
                fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
                lineNumber: 5,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agendispute-frontend-studionet/frontend/app/create/page.js",
        lineNumber: 5,
        columnNumber: 8
    }, this);
}
_s(CreatePage, "pysMOdisOdbJ2USwP/3PswJQ33Q=");
_c = CreatePage;
var _c;
__turbopack_context__.k.register(_c, "CreatePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agendispute-frontend-studionet/frontend/components/Nav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Nav() {
    _s();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            if (!window.ethereum) return;
            window.ethereum.request({
                method: "eth_accounts"
            }).then({
                "Nav.useEffect": (a)=>a?.[0] && setAccount(a[0])
            }["Nav.useEffect"]);
            const f = {
                "Nav.useEffect.f": (a)=>setAccount(a?.[0] || "")
            }["Nav.useEffect.f"];
            window.ethereum.on("accountsChanged", f);
            return ({
                "Nav.useEffect": ()=>window.ethereum.removeListener("accountsChanged", f)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    async function connect() {
        if (!window.ethereum) {
            alert("Install MetaMask or another EVM wallet.");
            return;
        }
        const a = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        setAccount(a?.[0] || "");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "border-b border-slate-800 bg-black/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell !py-4 flex items-center justify-between gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "font-black text-xl",
                    children: [
                        "Agent",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-cyan-400",
                            children: "Dispute"
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                            lineNumber: 6,
                            columnNumber: 183
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                    lineNumber: 6,
                    columnNumber: 132
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex gap-5 text-sm text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/create",
                            children: "Create agreement"
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                            lineNumber: 6,
                            columnNumber: 297
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/disputes",
                            children: "Disputes"
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                            lineNumber: 6,
                            columnNumber: 341
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                    lineNumber: 6,
                    columnNumber: 236
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-primary text-sm",
                    onClick: connect,
                    children: account ? `${account.slice(0, 6)}…${account.slice(-4)}` : "Connect wallet"
                }, void 0, false, {
                    fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                    lineNumber: 6,
                    columnNumber: 385
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
            lineNumber: 6,
            columnNumber: 63
        }, this)
    }, void 0, false, {
        fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
        lineNumber: 6,
        columnNumber: 8
    }, this);
}
_s(Nav, "/d5dAUKqP3Bh7veajmH+JpSiZ6U=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agendispute-frontend-studionet/frontend/lib/contract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAIN",
    ()=>CHAIN,
    "CONTRACT",
    ()=>CONTRACT,
    "STUDIONET_CHAIN_HEX",
    ()=>STUDIONET_CHAIN_HEX,
    "STUDIONET_CHAIN_ID",
    ()=>STUDIONET_CHAIN_ID,
    "STUDIONET_EXPLORER",
    ()=>STUDIONET_EXPLORER,
    "STUDIONET_RPC",
    ()=>STUDIONET_RPC,
    "ensureStudioNet",
    ()=>ensureStudioNet,
    "formatGen",
    ()=>formatGen,
    "genToWei",
    ()=>genToWei,
    "readClient",
    ()=>readClient,
    "readContract",
    ()=>readContract,
    "toBigIntString",
    ()=>toBigIntString,
    "writeClient",
    ()=>writeClient,
    "writeContract",
    ()=>writeContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/genlayer-js/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/genlayer-js/dist/chains/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$XCQTIUTU$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/genlayer-js/dist/chunk-XCQTIUTU.js [app-client] (ecmascript)");
;
;
const CONTRACT = __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTRACT_ADDRESS?.trim() || "0xd21c82603a64Bd42ff37FB04cD004699c6A4BbeA";
const CHAIN = __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$XCQTIUTU$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studionet"];
const STUDIONET_CHAIN_ID = 61999;
const STUDIONET_CHAIN_HEX = "0xf22f";
const STUDIONET_RPC = "https://studio.genlayer.com/api";
const STUDIONET_EXPLORER = "https://explorer-studio.genlayer.com";
async function ensureStudioNet() {
    if (!window.ethereum) throw new Error("Browser wallet provider not found.");
    const current = await window.ethereum.request({
        method: "eth_chainId"
    });
    if (String(current).toLowerCase() === STUDIONET_CHAIN_HEX) return;
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: STUDIONET_CHAIN_HEX
                }
            ]
        });
    } catch (error) {
        if (error?.code !== 4902) throw error;
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: STUDIONET_CHAIN_HEX,
                    chainName: "GenLayer Studionet",
                    nativeCurrency: {
                        name: "GEN",
                        symbol: "GEN",
                        decimals: 18
                    },
                    rpcUrls: [
                        STUDIONET_RPC
                    ],
                    blockExplorerUrls: [
                        STUDIONET_EXPLORER
                    ]
                }
            ]
        });
    }
}
function readClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
        chain: CHAIN
    });
}
async function writeClient(account) {
    if (!account) throw new Error("Connect your wallet first.");
    await ensureStudioNet();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
        chain: CHAIN,
        account,
        provider: window.ethereum
    });
}
async function readContract(functionName, args = []) {
    return readClient().readContract({
        address: CONTRACT,
        functionName,
        args
    });
}
async function writeContract(account, functionName, args = [], value) {
    const client = await writeClient(account);
    return client.writeContract({
        address: CONTRACT,
        functionName,
        args,
        ...value !== undefined ? {
            value
        } : {}
    });
}
function toBigIntString(v) {
    if (typeof v === "bigint") return v.toString();
    if (v && typeof v.toString === "function") return v.toString();
    return String(v ?? "0");
}
function formatGen(v) {
    try {
        const n = BigInt(toBigIntString(v));
        return `${n / 1000000000000000000n}.${(n % 1000000000000000000n).toString().padStart(18, "0").slice(0, 4)} GEN`;
    } catch  {
        return "0 GEN";
    }
}
function genToWei(v) {
    const s = String(v).trim();
    if (!/^\d+(\.\d+)?$/.test(s)) throw new Error("Enter a valid GEN amount.");
    const [w, f = ""] = s.split(".");
    return BigInt(w) * 1000000000000000000n + BigInt((f + "000000000000000000").slice(0, 18));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=agendispute-frontend-studionet_frontend_1uza1w8._.js.map