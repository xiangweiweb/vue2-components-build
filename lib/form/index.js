import Button from 'vue2-components-build/lib/button';
import { addCount } from 'vue2-components-build/lib/utils/util.js';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.mjs';

//

var script = {
    name: 'ui-form',

    components: {
        [Button.name]: Button,
    },

    data() {
        return {
            count: 0,
        }
    },

    methods: {
        onClick() {
            this.count = addCount(this.count);
        }
    }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "ui-form-container" }, [
    _c(
      "div",
      { staticStyle: { "font-weight": "bold", "margin-bottom": "15px" } },
      [_vm._v("组件 ui-form")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "ui-form-content" }, [
      _vm._v("\n        count: " + _vm._s(_vm.count) + "\n    "),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "ui-form-footer" },
      [_c("ui-button", { on: { click: _vm.onClick } }, [_vm._v("count++")])],
      1
    ),
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/__vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

__vue_component__.install = function (Vue) {
  Vue.component(__vue_component__.name, __vue_component__);
};

export { __vue_component__ as default };
