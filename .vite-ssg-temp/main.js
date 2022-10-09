"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var viteSsg = require("vite-ssg");
var head = require("@vueuse/head");
var elementPlus = require("element-plus");
require("element-plus/es/components/form/style/css");
require("element-plus/es/components/form-item/style/css");
require("element-plus/es/components/input/style/css");
require("element-plus/es/components/select/style/css");
require("element-plus/es/components/card/style/css");
require("element-plus/es/components/table/style/css");
require("element-plus/es/components/table-column/style/css");
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "main" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layout/main.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const routes = [{ "name": "settlement", "path": "/settlement", "component": () => Promise.resolve().then(function() {
  return settlement;
}), "props": true }];
var reset = "";
const createApp = viteSsg.ViteSSG(
  App,
  { routes },
  ({ app, router, routes: routes2, isClient, initialState }) => {
  }
);
const __default__ = {
  layout: "default"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "settlement",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "\u4E1A\u52A1\u90E8\u7ED3\u7B97\u6E05\u5355"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElCard), null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElForm), { inline: "" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElFormItem), { label: "\u54C1\u79CD\u540D\u79F0" }, {
                    default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElInput), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue.createVNode(vue.unref(elementPlus.ElInput))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElFormItem), { label: "\u4E1A\u52A1\u63D0\u4EA4\u65F6\u95F4" }, {
                    default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElInput), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue.createVNode(vue.unref(elementPlus.ElInput))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElFormItem), { label: "\u9500\u552E\u8D1F\u8D23\u4EBA" }, {
                    default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElInput), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue.createVNode(vue.unref(elementPlus.ElInput))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElFormItem), { label: "\u7ED3\u6E05\u7C7B\u578B" }, {
                    default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElSelect), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue.createVNode(vue.unref(elementPlus.ElSelect))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "\u54C1\u79CD\u540D\u79F0" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(elementPlus.ElInput))
                      ]),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "\u4E1A\u52A1\u63D0\u4EA4\u65F6\u95F4" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(elementPlus.ElInput))
                      ]),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "\u9500\u552E\u8D1F\u8D23\u4EBA" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(elementPlus.ElInput))
                      ]),
                      _: 1
                    }),
                    vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "\u7ED3\u6E05\u7C7B\u578B" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(elementPlus.ElSelect))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(vue.unref(elementPlus.ElForm), { inline: "" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "\u54C1\u79CD\u540D\u79F0" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElInput))
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "\u4E1A\u52A1\u63D0\u4EA4\u65F6\u95F4" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElInput))
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "\u9500\u552E\u8D1F\u8D23\u4EBA" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElInput))
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "\u7ED3\u6E05\u7C7B\u578B" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElSelect))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElCard), null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElTable), null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElTableColumn), {
                    prop: "date",
                    label: "Date",
                    width: "180"
                  }, null, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElTableColumn), {
                    prop: "name",
                    label: "Name",
                    width: "180"
                  }, null, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(elementPlus.ElTableColumn), {
                    prop: "address",
                    label: "Address"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                      prop: "date",
                      label: "Date",
                      width: "180"
                    }),
                    vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                      prop: "name",
                      label: "Name",
                      width: "180"
                    }),
                    vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                      prop: "address",
                      label: "Address"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(vue.unref(elementPlus.ElTable), null, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                    prop: "date",
                    label: "Date",
                    width: "180"
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                    prop: "name",
                    label: "Name",
                    width: "180"
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                    prop: "address",
                    label: "Address"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/settlement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var settlement = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
exports.createApp = createApp;
