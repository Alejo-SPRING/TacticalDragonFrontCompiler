(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-admin-admin-module"],{

/***/ "6JcC":
/*!********************************************************!*\
  !*** ./src/app/components/pages/admin/admin.module.ts ***!
  \********************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _form_product_form_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-product/form-product.component */ "OqBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "Hka1");
/* harmony import */ var _types_types_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/types.component */ "CslX");










const routes = [
    {
        path: "formProduct/:type", component: _form_product_form_product_component__WEBPACK_IMPORTED_MODULE_4__["FormProductComponent"]
    },
    {
        path: "products", component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]
    },
    {
        path: "types", component: _types_types_component__WEBPACK_IMPORTED_MODULE_7__["TypesComponent"]
    }
];
class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_form_product_form_product_component__WEBPACK_IMPORTED_MODULE_4__["FormProductComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
        _types_types_component__WEBPACK_IMPORTED_MODULE_7__["TypesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _form_product_form_product_component__WEBPACK_IMPORTED_MODULE_4__["FormProductComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                    _types_types_component__WEBPACK_IMPORTED_MODULE_7__["TypesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "CslX":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/admin/types/types.component.ts ***!
  \*****************************************************************/
/*! exports provided: TypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesComponent", function() { return TypesComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../loading/loading.component */ "qQYQ");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../messages/messages.component */ "wa57");
/* harmony import */ var _objects_pageable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../objects/pageable */ "IVvN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");












function TypesComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u00A1Ingresa maximo 20 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TypesComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TypesComponent_a_19_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.ngOnInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Limpiar busqueda: ", ctx_r1.nameType.value, "");
} }
function TypesComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TypesComponent_tr_35_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const type_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](39); return ctx_r10.openFormType(_r5, type_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](type_r9.name);
} }
function TypesComponent_h3_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A1No se encontro ningun tipo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TypesComponent_ngb_pagination_37_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngb-pagination", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function TypesComponent_ngb_pagination_37_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.pageChange($event); })("pageChange", function TypesComponent_ngb_pagination_37_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.pageable.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", ctx_r4.pageable.size)("collectionSize", ctx_r4.pageable.totalElements)("page", ctx_r4.pageable.page);
} }
function TypesComponent_ng_template_38_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u00A1Ingresa un nombre!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TypesComponent_ng_template_38_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u00A1Ingresa maximo 20 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function TypesComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TypesComponent_ng_template_38_Template_button_click_1_listener() { const modal_r15 = ctx.$implicit; return modal_r15.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TypesComponent_ng_template_38_a_13_Template, 3, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TypesComponent_ng_template_38_a_14_Template, 3, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TypesComponent_ng_template_38_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r6.titleFormType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r6.nameTypeUpdate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c0, ctx_r6.nameTypeUpdate.valid, ctx_r6.nameTypeUpdate.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.nameTypeUpdate.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.nameTypeUpdate.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r6.nameTypeUpdate.invalid || ctx_r6.nameTypeUpdate.pristine);
} }
class TypesComponent {
    constructor(ngbModal, productService) {
        this.ngbModal = ngbModal;
        this.productService = productService;
    }
    ngOnInit() {
        this.types = [];
        this.nameType = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20));
        this.pageable = new _objects_pageable__WEBPACK_IMPORTED_MODULE_3__["Pageable"]();
        this.findTypes();
    }
    save() {
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"].isActive = true;
        if (this.typeData) {
            this.productService.updateType(this.nameTypeUpdate.value, this.typeData.id).subscribe(response => {
                this.ngOnInit();
                this.modalRef.close();
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("¡Tipo actualizado!", "", "success");
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"].isActive = false;
            }, error => {
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"].errorMessage(error);
            });
        }
        else {
            this.productService.createType(this.nameTypeUpdate.value).subscribe(response => {
                this.ngOnInit();
                this.modalRef.close();
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("¡Tipo creado!", "", "success");
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"].isActive = false;
            }, error => {
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"].errorMessage(error);
            });
        }
    }
    pageChange(page) {
        this.pageable.page = page;
        this.findTypes();
    }
    openFormType(content, typeData) {
        this.titleFormType = typeData ? "Editar tipo" : "Crear tipo";
        this.typeData = typeData;
        this.nameTypeUpdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](typeData ? typeData.name : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)]);
        this.modalRef = this.ngbModal.open(content, { size: "lg" });
    }
    findTypes() {
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"].isActive = true;
        this.productService.findTypes(this.nameType.value === "" ? "all" : this.nameType.value, this.pageable.page, this.pageable.size).subscribe(response => {
            if (this.nameType.value != "") {
                this.pageable.page = 1;
            }
            this.pageable.uploadPageable(response);
            this.types = response.content;
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"].isActive = false;
        }, error => {
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"].errorMessage(error);
        });
    }
}
TypesComponent.ɵfac = function TypesComponent_Factory(t) { return new (t || TypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"])); };
TypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TypesComponent, selectors: [["app-types"]], decls: 40, vars: 11, consts: [[1, "container"], ["routerLink", "/admin/products", 1, "btn", "btn-outline-success"], [1, "fa-solid", "fa-arrow-left"], [1, "row", "mt-3"], [1, "col-12"], [1, "card", "card-body"], [1, "fa-solid", "fa-filter"], [1, "col-12", "col-md-6"], [1, "input-group"], ["type", "search", "placeholder", "Buscar por nombre", 1, "form-control", 3, "formControl"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-success", 3, "disabled", "click"], [1, "fa-solid", "fa-magnifying-glass"], ["class", "text-danger", 4, "ngIf"], [1, "w-100"], ["class", "text-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-success", "mt-3", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "card", "card-body", "mt-3"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], ["class", "text-muted text-center", 4, "ngIf"], ["size", "md", "class", "d-flex justify-content-center mt-3", "aria-label", "Default pagination", 3, "pageSize", "collectionSize", "page", "pageChange", 4, "ngIf"], ["formTypeMD", ""], [1, "text-danger"], [1, "fa-solid", "fa-circle-exclamation"], [1, "text-danger", 3, "click"], [1, "fa-solid", "fa-trash"], ["type", "button", 1, "btn", "btn-outline-success", "rounded-circle", 3, "click"], [1, "fa-solid", "fa-pencil"], [1, "text-muted", "text-center"], ["size", "md", "aria-label", "Default pagination", 1, "d-flex", "justify-content-center", "mt-3", 3, "pageSize", "collectionSize", "page", "pageChange"], [1, "modal-body"], ["type", "button", 1, "close", 3, "click"], [1, "fa-solid", "fa-circle-xmark", "text-danger"], [1, "fa-solid", "fa-dolly"], [1, "row", "mt-4"], ["src", "assets/ilustrations/save.svg", "alt", "", 1, "img-fluid"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Nombre", 1, "form-control", 3, "formControl", "ngClass"], ["type", "button", 1, "btn", "btn-outline-success", "btn-block", "mt-3", 3, "disabled", "click"], [1, "fa-solid", "fa-floppy-disk"]], template: function TypesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TypesComponent_Template_button_click_15_listener() { return ctx.findTypes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TypesComponent_a_17_Template, 3, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, TypesComponent_a_19_Template, 3, 1, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TypesComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](39); return ctx.openFormType(_r5, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Crear tipo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Opciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, TypesComponent_tr_35_Template, 6, 1, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, TypesComponent_h3_36_Template, 2, 0, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, TypesComponent_ngb_pagination_37_Template, 1, 3, "ngb-pagination", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, TypesComponent_ng_template_38_Template, 18, 9, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-invalid", ctx.nameType.invalid)("is-valid", ctx.nameType.valid && ctx.nameType.value != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.nameType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.nameType.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.nameType.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.nameType.value != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.types.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.types.length > 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vdHlwZXMvdHlwZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](TypesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'app-types',
                templateUrl: './types.component.html',
                styleUrls: ['./types.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "Hka1":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/admin/products/products.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _objects_pageable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../objects/pageable */ "IVvN");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../loading/loading.component */ "qQYQ");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../messages/messages.component */ "wa57");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");











function ProductsComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Ingresa maximo 100 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductsComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductsComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.ngOnInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Limpiar busqueda: ", ctx_r1.name.value, "");
} }
const _c0 = function () { return ["/admin/formProduct/", "update"]; };
const _c1 = function (a0) { return { productId: a0 }; };
function ProductsComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", product_r7.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r7.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("                    ", product_r7.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r7.minimumSale);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r7.packBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, product_r7.id));
} }
function ProductsComponent_h3_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A1No se encontro ningun producto!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductsComponent_ngb_pagination_47_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-pagination", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function ProductsComponent_ngb_pagination_47_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.pageChange($event); })("pageChange", function ProductsComponent_ngb_pagination_47_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.pageable.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", ctx_r4.pageable.size)("collectionSize", ctx_r4.pageable.totalElements)("page", ctx_r4.pageable.page);
} }
const _c2 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
class ProductsComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.products = [];
        this.isCleanSearch = false;
        this.pageable = new _objects_pageable__WEBPACK_IMPORTED_MODULE_0__["Pageable"]();
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100));
        this.findProduct("all");
    }
    pageChange(page) {
        this.pageable.page = page;
        this.findProduct("all");
    }
    search() {
        let name = this.name.value != "" ? this.name.value : "all";
        this.isCleanSearch = this.name.value != "";
        this.findProduct(name);
    }
    findProduct(name) {
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"].isActive = true;
        this.productService.find(name, this.pageable.page, this.pageable.size).subscribe(response => {
            if (name != "all") {
                this.pageable.page = 1;
            }
            this.pageable.uploadPageable(response);
            this.products = response.content;
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"].isActive = false;
        }, error => {
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"].errorMessage(error);
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 48, vars: 11, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card", "card-body"], [1, "fa-solid", "fa-filter"], [1, "row", "mt-3"], [1, "col-12", "col-md-6"], [1, "input-group"], ["type", "search", "placeholder", "Buscar por nombre o referencia", 1, "form-control", 3, "ngClass", "formControl"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-success", 3, "disabled", "click"], [1, "fa-solid", "fa-magnifying-glass"], ["class", "text-danger", 4, "ngIf"], ["class", "text-danger", 3, "click", 4, "ngIf"], [1, "w-100"], [1, "btn-group", "mt-3"], ["routerLink", "/admin/formProduct/create", 1, "btn", "btn-outline-success"], [1, "fa-solid", "fa-plus"], ["routerLink", "/admin/types", 1, "btn", "btn-outline-primary"], [1, "card", "card-body", "mt-3"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover", "text-center"], [4, "ngFor", "ngForOf"], ["class", "text-muted text-center", 4, "ngIf"], ["size", "md", "class", "d-flex justify-content-center mt-3", "aria-label", "Default pagination", 3, "pageSize", "collectionSize", "page", "pageChange", 4, "ngIf"], [1, "text-danger"], [1, "fa-solid", "fa-circle-exclamation"], [1, "text-danger", 3, "click"], [1, "fa-solid", "fa-trash"], ["width", "200", "height", "200", "alt", "", 1, "img-fluid", 3, "src"], ["cols", "1", "rows", "2", 1, "form-control", 3, "disabled"], ["title", "Editar producto", 1, "btn", "btn-outline-primary", "rounded-circle", 3, "routerLink", "queryParams"], [1, "fa-solid", "fa-pencil"], [1, "text-muted", "text-center"], ["size", "md", "aria-label", "Default pagination", 1, "d-flex", "justify-content-center", "mt-3", 3, "pageSize", "collectionSize", "page", "pageChange"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_12_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ProductsComponent_p_14_Template, 3, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ProductsComponent_a_15_Template, 3, 1, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Crear producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Crear tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "No referencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Venta minima");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Empaque por");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Opciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ProductsComponent_tr_45_Template, 17, 12, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, ProductsComponent_h3_46_Template, 2, 0, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ProductsComponent_ngb_pagination_47_Template, 1, 3, "ngb-pagination", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c2, ctx.name.valid, ctx.name.invalid))("formControl", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.name.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCleanSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.products.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPagination"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "OqBg":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/admin/form-product/form-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductComponent", function() { return FormProductComponent; });
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../loading/loading.component */ "qQYQ");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../messages/messages.component */ "wa57");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_objects_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/objects/product */ "avki");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");













const _c0 = ["carousel"];
function FormProductComponent_ngb_carousel_7_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_ngb_carousel_7_2_ng_template_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const img_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.deleteImage(img_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r5 = ctx_r10.index;
    const img_r4 = ctx_r10.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("alt", "My image ", i_r5 + 1, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function FormProductComponent_ngb_carousel_7_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FormProductComponent_ngb_carousel_7_2_ng_template_0_Template, 6, 2, "ng-template", 13);
} }
function FormProductComponent_ngb_carousel_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("slide", function FormProductComponent_ngb_carousel_7_Template_ngb_carousel_slide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FormProductComponent_ngb_carousel_7_2_Template, 1, 0, undefined, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interval", 1000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.imagesResponse);
} }
function FormProductComponent_form_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](image_r31.name);
} }
function FormProductComponent_form_13_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Selecciona una imagen!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa un codigo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa un nombre!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 50 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", type_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](type_r32.name);
} }
function FormProductComponent_form_13_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Selecciona un tipo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa una descripci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 200 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Selecciona un color!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_span_43_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_13_span_43_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const colour_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r34.deleteColour(colour_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colour_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-color: ", colour_r33.name, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", colour_r33.name, " ");
} }
function FormProductComponent_form_13_p_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa una unidad!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 100 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa un tipo de unidad!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 100 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa una marca!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_p_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 50 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_13_span_66_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_13_span_66_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const brand_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r37.deleteBrand(brand_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", brand_r36.name, " ");
} }
const _c1 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function FormProductComponent_form_13_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FormProductComponent_form_13_div_4_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Seleccionar imagenes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FormProductComponent_form_13_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.selectImages($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FormProductComponent_form_13_p_8_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FormProductComponent_form_13_p_13_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FormProductComponent_form_13_p_18_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, FormProductComponent_form_13_p_19_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Tipos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, FormProductComponent_form_13_option_26_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, FormProductComponent_form_13_p_27_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, FormProductComponent_form_13_p_32_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, FormProductComponent_form_13_p_33_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_13_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.addColour(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, FormProductComponent_form_13_p_42_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, FormProductComponent_form_13_span_43_Template, 4, 4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Venta minima");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, FormProductComponent_form_13_p_48_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, FormProductComponent_form_13_p_49_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Empaque por");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, FormProductComponent_form_13_p_54_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, FormProductComponent_form_13_p_55_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Marcas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_13_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r42.addBrand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, FormProductComponent_form_13_p_64_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, FormProductComponent_form_13_p_65_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, FormProductComponent_form_13_span_66_Template, 4, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_13_Template_button_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r43.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.formProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.images.length <= 0 && ctx_r1.typeForm === "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](29, _c1, ctx_r1.formProduct.get("code").valid, ctx_r1.formProduct.get("code").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("code").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](32, _c1, ctx_r1.formProduct.get("name").valid, ctx_r1.formProduct.get("name").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("name").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](35, _c1, ctx_r1.formProduct.get("typeId").valid, ctx_r1.formProduct.get("typeId").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("typeId").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](38, _c1, ctx_r1.formProduct.get("description").valid, ctx_r1.formProduct.get("description").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("description").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("description").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](41, _c1, ctx_r1.colours.length > 0, ctx_r1.colours.length <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.colours.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.colours);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](44, _c1, ctx_r1.formProduct.get("minimumSale").valid, ctx_r1.formProduct.get("minimumSale").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("minimumSale").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("minimumSale").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](47, _c1, ctx_r1.formProduct.get("packBy").valid, ctx_r1.formProduct.get("packBy").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("packBy").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("packBy").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](50, _c1, ctx_r1.formProduct.get("brand").valid && ctx_r1.brands.length > 0, ctx_r1.formProduct.get("brand").invalid || ctx_r1.brands.length <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.formProduct.get("brand").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.brands.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.formProduct.get("brand").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.brands);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.formProduct.invalid || ctx_r1.colours.length <= 0 || ctx_r1.brands.length <= 0 || ctx_r1.formProduct.pristine || ctx_r1.images.length <= 0 && ctx_r1.typeForm === "create");
} }
var GenericDataType;
(function (GenericDataType) {
    GenericDataType[GenericDataType["COLOUR"] = 0] = "COLOUR";
    GenericDataType[GenericDataType["BRAND"] = 1] = "BRAND";
})(GenericDataType || (GenericDataType = {}));
class FormProductComponent {
    constructor(productService, router, activatedRoute) {
        this.productService = productService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnInit() {
        this.imagesResponse = [];
        this.images = [];
        this.getTypes();
        this.colours = [];
        this.brands = [];
        this.typeForm = this.activatedRoute.snapshot.paramMap.get("type");
        if (this.typeForm === "create") {
            this.title = "Crear producto";
            this.formProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]),
                minimumSale: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
                packBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
                code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                colour: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
                brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)),
                typeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            });
        }
        else if (this.typeForm === "update") {
            let productId = Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get("productId"));
            if (productId) {
                this.title = "Editar producto";
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = true;
                this.productService.findById(productId).subscribe(response => {
                    this.productId = response.product.id;
                    this.imagesResponse = response.images;
                    for (let colour of response.colours) {
                        this.colours.push({ id: colour.id, name: colour.name, isCreate: false });
                    }
                    for (let brand of response.brands) {
                        this.brands.push({ id: brand.id, name: brand.name, isCreate: false });
                    }
                    this.formProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        images: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
                        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]),
                        minimumSale: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.minimumSale, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(999999999)]),
                        packBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.packBy, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
                        code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.code, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        colour: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
                        brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)),
                        typeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.productType.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
                    });
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
                }, error => {
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
                });
            }
        }
    }
    deleteImage(imageId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "¿Estas seguro de eliminar esta imagen?",
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: "No!",
            confirmButtonText: "Si!"
        }).then(response => {
            if (response.isConfirmed) {
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = true;
                this.productService.deleteImage(imageId).subscribe(response => {
                    this.ngOnInit();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Imagen eliminada!", "", "success");
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
                }, error => {
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
                });
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    selectImages(event) {
        if (event.target.files.length > 0) {
            this.images = event.target.files;
        }
    }
    getTypes() {
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = true;
        this.productService.getAllTypes().subscribe(response => {
            this.types = response;
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
        }, error => {
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
        });
    }
    create() {
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = true;
        if (this.typeForm === "create") {
            this.productService.create(new src_app_objects_product__WEBPACK_IMPORTED_MODULE_5__["Product"](this.formProduct.getRawValue(), this.colours, this.brands)).subscribe(response => {
                let formData = new FormData();
                for (let i = 0; i < this.images.length; i++) {
                    formData.append("files", this.images[i]);
                }
                this.productService.uploadImagesByProduct(formData, response.productId).subscribe(response => {
                    this.ngOnInit();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Producto guardado!", "", "success");
                    this.router.navigate(["/admin/products"]);
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
                }, error => {
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
                });
            }, error => {
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
            });
        }
        else if (this.typeForm === "update" && this.productId) {
            this.productService.update(new src_app_objects_product__WEBPACK_IMPORTED_MODULE_5__["Product"](this.formProduct.getRawValue(), this.colours, this.brands), this.productId).subscribe(response => {
                if (this.images.length > 0) {
                    let formData = new FormData();
                    for (let i = 0; i < this.images.length; i++) {
                        formData.append("files", this.images[i]);
                    }
                    this.productService.uploadImagesByProduct(formData, this.productId).subscribe(response => {
                        this.ngOnInit();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Producto actualizado!", "", "success");
                        this.router.navigate(["/admin/products"]);
                        _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
                    }, error => {
                        _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
                    });
                }
                else {
                    this.ngOnInit();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Producto actualizado!", "", "success");
                    this.router.navigate(["/admin/products"]);
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
                }
            }, error => {
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
            });
        }
    }
    deleteGenericData(genericData, type) {
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = true;
        this.productService.deleteGenericData(genericData.id).subscribe(response => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Eliminado!", "", "success");
            if (type === GenericDataType.BRAND) {
                for (let i = 0; i < this.brands.length; i++) {
                    if (this.brands[i].name === genericData.name) {
                        this.brands.splice(i, 1);
                    }
                }
            }
            else if (type === GenericDataType.COLOUR) {
                for (let i = 0; i < this.colours.length; i++) {
                    if (this.colours[i].name === genericData.name) {
                        this.colours.splice(i, 1);
                    }
                }
            }
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
        }, error => {
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
        });
    }
    deleteColour(colour) {
        if (this.typeForm === "update" && colour.id != null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: "¿Estas seguro de eliminar este color?",
                icon: "warning",
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: "Si!",
                cancelButtonText: "No!"
            }).then(result => {
                if (result.isConfirmed) {
                    this.deleteGenericData(colour, GenericDataType.COLOUR);
                }
            });
        }
        else if (this.typeForm === "create" || colour.isCreate) {
            for (let i = 0; i < this.colours.length; i++) {
                if (this.colours[i].name === colour.name) {
                    this.colours.splice(i, 1);
                }
            }
        }
    }
    addColour() {
        if (this.formProduct.get("colour").value != "") {
            let result = this.colours.filter(b => b.name === this.formProduct.get("colour").value);
            if (result.length === 0) {
                this.colours.push({ id: null, name: this.formProduct.get("colour").value, isCreate: true });
                this.formProduct.get("colour").setValue(null);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Ya seleccionaste este color!", "", "info");
            }
        }
    }
    addBrand() {
        if (this.formProduct.get("brand").value != "") {
            let result = this.brands.filter(b => b.name === this.formProduct.get("brand").value);
            if (result.length === 0) {
                this.brands.push({ id: null, name: this.formProduct.get("brand").value, isCreate: true });
                this.formProduct.get("brand").setValue("");
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Esta marca ya esta agregada!", "", "info");
            }
        }
    }
    deleteBrand(brand) {
        if (this.typeForm === "update" && brand.id != null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: "¿Estas seguro de eliminar esta marca?",
                icon: "warning",
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: "Si!",
                cancelButtonText: "No!"
            }).then(result => {
                if (result.isConfirmed) {
                    this.deleteGenericData(brand, GenericDataType.BRAND);
                }
            });
        }
        else if (this.typeForm === "create" || brand.isCreate) {
            for (let i = 0; i < this.brands.length; i++) {
                if (this.brands[i].name === brand.name) {
                    this.brands.splice(i, 1);
                }
            }
        }
    }
}
FormProductComponent.ɵfac = function FormProductComponent_Factory(t) { return new (t || FormProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
FormProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormProductComponent, selectors: [["app-form-product"]], viewQuery: function FormProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 14, vars: 3, consts: [[1, "container"], ["routerLink", "/admin/products", 1, "btn", "btn-outline-success"], [1, "fa-solid", "fa-arrow-left"], [1, "row", "align-items-center"], [1, "col-12", "col-md-6"], ["src", "assets/ilustrations/save.svg", "alt", "", 1, "img-fluid"], [3, "interval", "pauseOnHover", "pauseOnFocus", "slide", 4, "ngIf"], [1, "card", "card-body"], [1, "fa-solid", "fa-box"], [3, "formGroup", 4, "ngIf"], [3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "card-body"], ["type", "button", 1, "btn", "btn-block", "btn-outline-danger", 3, "click"], [1, "fa-solid", "fa-trash"], ["width", "500", "height", "500", 1, "img-fluid", 3, "src", "alt"], [3, "formGroup"], [1, "row"], [1, "col-12"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["for", "image"], ["type", "file", "formControlName", "images", "accept", "image/*", "multiple", "", "id", "image", 1, "form-control", 3, "change"], ["class", "text-danger", 4, "ngIf"], ["for", "code"], ["type", "text", "formControlName", "code", "placeholder", "#", "id", "code", 1, "form-control", 3, "ngClass"], ["for", "name"], ["type", "text", "formControlName", "name", "placeholder", "Nombre", "id", "name", 1, "form-control", 3, "ngClass"], ["for", "type"], ["formControlName", "typeId", "id", "type", 1, "custom-select", 3, "ngClass"], ["value", "null", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description"], ["id", "description", "formControlName", "description", "cols", "5", "rows", "3", "placeholder", "Descripci\u00F3n", 1, "form-control", 3, "ngClass"], ["for", "colour"], [1, "input-group"], ["type", "color", "formControlName", "colour", "id", "colour", 1, "form-control", 3, "ngClass"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "fa-solid", "fa-floppy-disk"], ["class", "badge mr-1", 3, "style", 4, "ngFor", "ngForOf"], ["for", "minimumSale"], ["type", "text", "id", "minimumSale", "formControlName", "minimumSale", "placeholder", "Venta minima", 1, "form-control", 3, "ngClass"], ["for", "packBy"], ["type", "text", "id", "packBy", "formControlName", "packBy", "placeholder", "Empaque por:", 1, "form-control", 3, "ngClass"], ["for", "brands"], ["type", "text", "formControlName", "brand", "id", "brands", "placeholder", "Marcas", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "btn", "btn-outline-success", 3, "disabled", "click"], ["class", "badge badge-primary mr-1", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-success", "mt-3", 3, "disabled", "click"], [1, "list-group-item"], [1, "text-muted"], [1, "text-danger"], [1, "fa-solid", "fa-circle-exclamation"], [3, "value"], [1, "badge", "mr-1"], [1, "text-danger", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "badge", "badge-primary", "mr-1"]], template: function FormProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FormProductComponent_ngb_carousel_7_Template, 3, 4, "ngb-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FormProductComponent_form_13_Template, 71, 53, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.typeForm === "update" && ctx.imagesResponse.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formProduct);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vZm9ybS1wcm9kdWN0L2Zvcm0tcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FormProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-form-product',
                templateUrl: './form-product.component.html',
                styleUrls: ['./form-product.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, { carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['carousel', { static: true }]
        }] }); })();


/***/ }),

/***/ "avki":
/*!************************************!*\
  !*** ./src/app/objects/product.ts ***!
  \************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(productForm, colours, brands) {
        this.images = [1, 2];
        this.code = productForm.code;
        this.name = productForm.name;
        this.description = productForm.description;
        this.colours = colours;
        this.minimumSale = productForm.minimumSale;
        this.packBy = productForm.packBy;
        this.brands = brands;
        this.typeId = productForm.typeId;
    }
}


/***/ })

}]);
//# sourceMappingURL=components-pages-admin-admin-module.js.map