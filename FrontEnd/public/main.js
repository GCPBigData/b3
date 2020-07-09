(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/acoes/acoes.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/acoes/acoes.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"nav-item nav-link\" routerLink=\"create-brokerage\">Novo\n    <span class=\"material-icons\">add_comment</span></a>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body table-responsive\">\n                <div *ngIf='showSpinner' class=\"spinner-grow text-danger\" role=\"status\">\n                    <span class=\"sr-only\"></span>\n                </div>\n                <div *ngIf='showSpinner' class=\"spinner-grow text-primary\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n                <div *ngIf='showSpinner' class=\"spinner-grow text-secondary\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n                <div *ngIf='showSpinner' class=\"spinner-grow text-success\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n                <div *ngIf='showSpinner' class=\"spinner-grow text-danger\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n                <div *ngIf='showSpinner' class=\"spinner-grow text-warning\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n                <div *ngIf='showSpinner' class=\"spinner-grow text-info\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n                <div *ngIf='showSpinner' class=\"spinner-grow text-light\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n                <div *ngIf='showSpinner' class=\"spinner-grow text-dark\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n                <form class=\"navbar-form\">\n                    <h1><span class=\"alert\">{{texto}}</span></h1>\n                    <div class=\"input-group no-border\">\n                        <input (keyup)=\"mudaTermo()\"\n                               placeholder=\"Digite o nome desejado...\"\n                               (keyup.enter)=\"onSearch()\"\n                               type=\"text\"\n                               id=\"pesquisar\"\n                               name=\"pesquisar\"\n                               class=\"form-control\"\n                               [formControl]=\"queryField\">\n                        <button (click)=\"onSearch()\"\n                                class=\"btn btn-white btn-round btn-just-icon\">\n                            <i class=\"material-icons\">search</i>\n                            <div class=\"ripple-container\"></div>\n                        </button>\n                    </div>\n                </form>\n\n                <form class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n                    <table class=\"table table-hover\" class=\"table table-bordered table-striped mb-0\">\n                        <thead class=\"text-warning\">\n                        <tr>\n                            <th scope=\"col\">negotiation</th>\n                            <th scope=\"col\">records</th>\n                            <th scope=\"col\">saleoff</th>\n                            <th scope=\"col\">totalCustos</th>\n                            <th scope=\"col\">walletFk</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let acoes of results$ | async\">\n                            <td>{{ acoes.negotiation }}</td>\n                            <td>{{ acoes.records }}</td>\n                            <td>{{ acoes.saleoff }}</td>\n                            <td>{{ acoes.totalCustos }}</td>\n                            <td>{{ acoes.walletFk }}</td>\n                            <td class=\"td-actions text-right\">\n                                <button [routerLink]=\"['/edit-acoes', acoes.id]\"\n                                        class=\"btn btn-primary btn-link btn-sm btn-just-icon\" mat-raised-button\n                                        matTooltip=\"Editar Corretora\" routerLinkActive=\"active\"\n                                        type=\"button\">\n                                    <i class=\"material-icons\">edit</i>\n                                </button>\n                                <button routerLink=\"/create-company\"\n                                        routerLinkActive=\"active\"\n                                        mat-raised-button type=\"button\"\n                                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                    <i class=\"material-icons\">close</i>\n                                </button>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--GRID PERMANENTE-->\n<form class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n    <table class=\"table table-hover\" class=\"table table-bordered table-striped mb-0\">\n        <thead class=\"text-warning\">\n        <tr>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let acoes of responseAcoes\">\n            <td>{{ acoes.negotiation }}</td>\n            <td>{{ acoes.records }}</td>\n            <td>{{ acoes.saleoff }}</td>\n            <td>{{ acoes.totalCustos }}</td>\n            <td>{{ acoes.walletFk }}</td>\n            <td class=\"td-actions text-right\">\n                <button [routerLink]=\"['/edit-acoes', acoes.id]\"\n                        class=\"btn btn-primary btn-link btn-sm btn-just-icon\" mat-raised-button\n                        matTooltip=\"Editar Corretora\" routerLinkActive=\"active\"\n                        type=\"button\">\n                    <i class=\"material-icons\">edit</i>\n                </button>\n                <button routerLink=\"/create-company\"\n                        routerLinkActive=\"active\"\n                        mat-raised-button type=\"button\"\n                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n        </tr>\n        </tbody>\n    </table>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"nav-item nav-link\" routerLink=\"create-brokerage\">Novo\n    <span class=\"material-icons\">add_comment</span></a>\n<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Admin</h4>\n    <div class=\"card-body\">\n        <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\n        <ul *ngIf=\"users\">\n            <li *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</li>\n        </ul>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- nav -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" *ngIf=\"user\">\r\n    <button class=\"navbar-toggler\"\r\n            type=\"button\"\r\n            data-toggle=\"collapse\"\r\n            data-target=\"#navbarNavDropdown\"\r\n            aria-controls=\"navbarNavDropdown\"\r\n            aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home<span class=\"material-icons\">home_work</span></a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/acoes\">Ações<span class=\"material-icons\">format_shapes</span></a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/emolumentos\">Emolumentos<span class=\"material-icons\">account_tree</span></a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/brokerages\">Brokerages<span class=\"material-icons\">dialpad</span></a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/company\">Empresas<span class=\"material-icons\">work</span></a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/wallet\">Carteiras<span class=\"material-icons\">attach_money</span></a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/user\">User<span class=\"material-icons\">people_alt</span></a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/admin\" *ngIf=\"isAdmin\">Admin<span class=\"material-icons\">adb</span></a>\r\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout<span class=\"material-icons\">double_arrow</span></a>\r\n </div>\r\n</nav>\r\n<!-- main app container -->\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brokerages/brokerages.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brokerages/brokerages.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"nav-item nav-link\" routerLink=\"/create-brokerage\">Novo\r\n    <span class=\"material-icons\">add_comment</span></a>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body table-responsive\">\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-danger\" role=\"status\">\r\n                    <span class=\"sr-only\"></span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-primary\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-secondary\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-success\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-danger\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-warning\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-info\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-light\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-dark\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <form class=\"navbar-form\">\r\n                    <h1><span class=\"alert\">{{texto}}</span></h1>\r\n                    <div class=\"input-group no-border\">\r\n                        <input (keyup)=\"mudaTermo()\" placeholder=\"Digite uma corretora desejado...\" value=\"\"\r\n                               (keyup.enter)=\"onSearch()\"\r\n                               type=\"text\"\r\n                               id=\"pesquisar\"\r\n                               name=\"pesquisar\"\r\n                               class=\"form-control\"\r\n                               [formControl]=\"queryField\">\r\n                        <button (click)=\"onSearch()\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                            <i class=\"material-icons\">search</i>\r\n                            <div class=\"ripple-container\"></div>\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n                <form>\r\n                    <table class=\"table table-hover\">\r\n                        <thead class=\"text-warning\">\r\n                        <tr>\r\n                            <th scope=\"col\">Nome</th>\r\n                            <th scope=\"col\">CNPJ</th>\r\n                            <th scope=\"col\">Tipo</th>\r\n                            <th scope=\"col\">Day Trade</th>\r\n                            <th scope=\"col\">Swing Trade</th>\r\n                            <th scope=\"col\">ISS</th>\r\n                            <th scope=\"col\">Valor(Day)</th>\r\n                            <th scope=\"col\">Valor(Swing)</th>\r\n                            <th scope=\"col\">Status</th>\r\n                            <th scope=\"col\"></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <!--| slice:0:10-->\r\n                        <tr *ngFor=\"let brokerage of results$ | async\">\r\n                            <td>{{ brokerage.name }}</td>\r\n                            <td>{{ brokerage.cnpj }}</td>\r\n                            <td>{{ brokerage.tipo }}</td>\r\n                            <td class=\"text-info\">R{{ brokerage.dayTrade | currency }}</td>\r\n                            <td class=\"text-success\">R{{ brokerage.swingTrade | currency }}</td>\r\n                            <td *ngIf=\"brokerage.iss > 5\">\r\n                        <span class=\"text-success\">\r\n                        <i class=\"fa fa-long-arrow-up\"></i>{{ brokerage.iss }} %\r\n                        </span>\r\n                            </td>\r\n                            <td class=\"text-danger\" *ngIf=\"brokerage.iss <= 5\">\r\n                                <i class=\"fa fa-long-arrow-down\"></i>{{ brokerage.iss }} %\r\n                            </td>\r\n                            <td class=\"text-info\" *ngIf=\"brokerage.dayTrade > 0\">\r\n                                R{{ brokerage.dayTrade * brokerage.iss / 100 | currency }}\r\n                            </td>\r\n                            <td class=\"text-danger\" *ngIf=\"brokerage.dayTrade <= 0\">\r\n                          <span class=\"material-icons\">\r\n                            thumb_down_alt\r\n                          </span>\r\n                            </td>\r\n                            <td *ngIf=\"brokerage.swingTrade > 0\">\r\n                                <span class=\"material-icons\">attach_money</span>\r\n                                <span class=\"text-success\">\r\n                         R{{ brokerage.swingTrade * brokerage.iss / 100 | currency }}\r\n                        </span>\r\n                            </td>\r\n                            <td *ngIf=\"brokerage.swingTrade <= 0\">\r\n                                <span class=\"material-icons\">attach_money</span>\r\n                                <span class=\"text-danger\">\r\n                         <span class=\"material-icons\">\r\n                            thumb_down_alt\r\n                        </span>\r\n                        </span>\r\n                            </td>\r\n                            <td *ngIf=\"brokerage.status == 'INATIVO'\">\r\n                                <button\r\n                                        mat-rais ed-button\r\n                                        type=\"button\"\r\n                                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                    <i class=\"material-icons\">warning</i>\r\n                                </button>\r\n                            </td>\r\n                            <td *ngIf=\"brokerage.status == 'ATIVO'\">\r\n                                <button mat-raised-button\r\n                                        type=\"button\"\r\n                                        class=\"btn  btn-link btn-sm btn-just-icon\">\r\n                          <span class=\"text-success\">\r\n                          <i class=\"material-icons\">done_all</i></span>\r\n                                </button>\r\n                            </td>\r\n                            <td class=\"td-actions text-right\">\r\n                                <button [routerLink]=\"['/edit-brokerage', brokerage.id]\"\r\n                                        class=\"btn btn-primary btn-link btn-sm btn-just-icon\" mat-raised-button\r\n                                        matTooltip=\"Editar Corretora\" routerLinkActive=\"active\"\r\n                                        type=\"button\">\r\n                                    <i class=\"material-icons\">edit</i>\r\n                                </button>\r\n                                <button routerLink=\"/create-brokerage\"\r\n                                        routerLinkActive=\"active\"\r\n                                        mat-raised-button type=\"button\"\r\n                                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--GRID PERMANENTE-->\r\n<form class=\"table-wrapper-scroll-y my-custom-scrollbar\">\r\n    <table class=\"table table-hover\" class=\"table table-bordered table-striped mb-0\">\r\n        <thead class=\"text-warning\">\r\n        <tr>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <!--<tr *ngFor=\"let brokerage of responseBrokerages;\r\n        let i = index\" [class.active]=\"i == currentIndex\" (click)=\"setActiveBrokerage(brokerage, i)\">\r\n-->\r\n        <tr *ngFor=\"let brokerage of responseBrokerages\">\r\n            <td>{{ brokerage.name }}</td>\r\n            <td>{{ brokerage.cnpj }}</td>\r\n            <td>{{ brokerage.tipo }}</td>\r\n            <td class=\"text-info\">R{{ brokerage.dayTrade | currency }}</td>\r\n            <td class=\"text-success\">R{{ brokerage.swingTrade | currency }}</td>\r\n            <td *ngIf=\"brokerage.iss > 5\">\r\n                        <span class=\"text-success\">\r\n                        <i class=\"fa fa-long-arrow-up\"></i>{{ brokerage.iss }} %\r\n                        </span>\r\n            </td>\r\n            <td class=\"text-danger\" *ngIf=\"brokerage.iss <= 5\">\r\n                <i class=\"fa fa-long-arrow-down\"></i>{{ brokerage.iss }} %\r\n            </td>\r\n            <td class=\"text-info\" *ngIf=\"brokerage.dayTrade > 0\">\r\n                R{{ brokerage.dayTrade * brokerage.iss / 100 | currency }}\r\n            </td>\r\n            <td class=\"text-danger\" *ngIf=\"brokerage.dayTrade <= 0\">\r\n                          <span class=\"material-icons\">\r\n                            thumb_down_alt\r\n                          </span>\r\n            </td>\r\n            <td *ngIf=\"brokerage.swingTrade > 0\">\r\n                <span class=\"material-icons\">attach_money</span>\r\n                <span class=\"text-success\">\r\n                         R{{ brokerage.swingTrade * brokerage.iss / 100 | currency }}\r\n                        </span>\r\n            </td>\r\n            <td *ngIf=\"brokerage.swingTrade <= 0\">\r\n                <span class=\"material-icons\">attach_money</span>\r\n                <span class=\"text-danger\">\r\n                         <span class=\"material-icons\">\r\n                            thumb_down_alt\r\n                        </span>\r\n                        </span>\r\n            </td>\r\n\r\n            <td *ngIf=\"brokerage.status == 'INATIVO'\">\r\n                <button\r\n                        mat-rais ed-button\r\n                        type=\"button\"\r\n                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                    <i class=\"material-icons\">warning</i>\r\n                </button>\r\n            </td>\r\n            <td *ngIf=\"brokerage.status == 'ATIVO'\">\r\n                <button mat-raised-button\r\n                        type=\"button\"\r\n                        class=\"btn  btn-link btn-sm btn-just-icon\">\r\n                          <span class=\"text-success\">\r\n                          <i class=\"material-icons\">done_all</i></span>\r\n              </button>\r\n              <button [routerLink]=\"['/edit-brokerage', brokerage.id]\"\r\n                        class=\"btn btn-primary btn-link btn-sm btn-just-icon\" mat-raised-button\r\n                        matTooltip=\"Editar Corretora\" routerLinkActive=\"active\"\r\n                        type=\"button\">\r\n                    <i class=\"material-icons\">edit</i>\r\n              </button>\r\n           </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n</form>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brokerages/create-brokerage/create-brokerage.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brokerages/create-brokerage/create-brokerage.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-danger\">\r\n                <p class=\"card-category\"></p>\r\n                <h4 class=\"card-title\">Cadastrar Corretora</h4>\r\n             </div>\r\n            <div class=\"card-body\">\r\n                <form class=\"form-group\" [formGroup]=\"brokerageForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Nome</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"name\"\r\n                                       formControlName=\"name\"\r\n                                       [(ngModel)]=\"request.name\"\r\n                                       name=\"name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">CNPJ</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"cnpj\"\r\n                                       formControlName=\"cnpj\"\r\n                                       [(ngModel)]=\"request.cnpj\"\r\n                                       name=\"cnpj\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Endereço</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"address\"\r\n                                       formControlName=\"address\"\r\n                                       [(ngModel)]=\"request.address\"\r\n                                       name=\"address\"></div>\r\n                        </div>\r\n                    </div>\r\n <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Bairro</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"addressNeighborhood\"\r\n                                       formControlName=\"addressNeighborhood\"\r\n                                       [(ngModel)]=\"request.addressNeighborhood\"\r\n                                       name=\"addressNeighborhood\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Cidade</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"addressCity\"\r\n                                       formControlName=\"addressCity\"\r\n                                       [(ngModel)]=\"request.addressCity\"\r\n                                       name=\"addressCity\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Estado</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"addressState\"\r\n                                       formControlName=\"addressState\"\r\n                                       [(ngModel)]=\"request.addressState\"\r\n                                       name=\"addressState\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Swing Trade</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"swingTrade\"\r\n                                       formControlName=\"swingTrade\"\r\n                                       [(ngModel)]=\"request.swingTrade\"\r\n                                       name=\"swingTrade\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Tipo</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"tipo\"\r\n                                       formControlName=\"tipo\"\r\n                                       [(ngModel)]=\"request.tipo\"\r\n                                       name=\"tipo\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Day Trade</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"dayTrade\"\r\n                                       formControlName=\"dayTrade\"\r\n                                       [(ngModel)]=\"request.dayTrade\"\r\n                                       name=\"dayTrade\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 3-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">ISS</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"iss\"\r\n                                       formControlName=\"iss\"\r\n                                       [(ngModel)]=\"request.iss\"\r\n                                       name=\"iss\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Telefone</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"phone\"\r\n                                       formControlName=\"phone\"\r\n                                       [(ngModel)]=\"request.phone\"\r\n                                       name=\"phone\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Web Site</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"website\"\r\n                                       formControlName=\"website\"\r\n                                       [(ngModel)]=\"request.website\"\r\n                                       name=\"website\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 4-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Email</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"email\"\r\n                                       formControlName=\"email\"\r\n                                       [(ngModel)]=\"request.email\"\r\n                                       name=\"email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">logo</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       formControlName=\"logo\"\r\n                                       id=\"logo\" [(ngModel)]=\"request.logo\"\r\n                                       name=\"logo\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"status\">Status</label>\r\n                                <select class=\"form-control\"\r\n                                        id=\"status\"\r\n                                        name=\"status\"\r\n                                        formControlName=\"status\"\r\n                                        [value]=\"request.status\"\r\n                                        [(ngModel)]=\"request.status\">\r\n                                    <option *ngFor=\"let p of statusString\" [ngValue]=\"p.valueOf()\">\r\n                                        {{ p }}\r\n                                    </option>\r\n                                </select>\r\n                           </div>\r\n                         </div>\r\n                    </div>\r\n                    <!--linha 5-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login Access Code</label>\r\n                                <input class=\"form-check-input\"\r\n                                       type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginAccessCode\"\r\n                                       for=\"loginAccessCode\"\r\n                                       formControlName=\"loginAccessCode\"\r\n                                       [(ngModel)]=\"request.loginAccessCode\"\r\n                                       name=\"loginAccessCode\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login CPF</label>\r\n                                <input class=\"form-check-input\"\r\n                                       type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginCpf\"\r\n                                       for=\"loginCpf\"\r\n                                       formControlName=\"loginCpf\"\r\n                                       [(ngModel)]=\"request.loginCpf\"\r\n                                       name=\"loginCpf\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login Email</label>\r\n                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginEmail\"\r\n                                       for=\"loginEmail\"\r\n                                       formControlName=\"loginEmail\"\r\n                                       [(ngModel)]=\"request.loginEmail\"\r\n                                       name=\"loginEmail\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login Login Password</label>\r\n                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginPassword\"\r\n                                       for=\"loginPassword\"\r\n                                       formControlName=\"loginPassword\"\r\n                                       [(ngModel)]=\"request.loginPassword\"\r\n                                       name=\"loginEmail\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login Login Token</label>\r\n                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginToken\"\r\n                                       for=\"loginToken\"\r\n                                       formControlName=\"loginToken\"\r\n                                       [(ngModel)]=\"request.loginToken\"\r\n                                       name=\"loginToken\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--botao-->\r\n                    <div class=\"dropdown show-dropdown\">\r\n                        <button data-toggle=\"dropdown\"\r\n                                aria-expanded=\"true\"\r\n                                (click)=\"save()\"\r\n                                class=\"btn btn-danger pull-right\">Salvar\r\n                        </button>\r\n                    </div>\r\n                    <!--botao-->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brokerages/edit-brokerage/edit-brokerage.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brokerages/edit-brokerage/edit-brokerage.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-danger\">\r\n                <p class=\"card-category\"></p>\r\n                <h4 class=\"card-title\">Editar Corretora</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Nome</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"name\"\r\n                                       formControlName=\"name\"\r\n                                       [value]=\"currentBrokerage.name\"\r\n                                       [(ngModel)]=\"currentBrokerage.name\"\r\n                                       name=\"name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">CNPJ</label>\r\n                                <input disabled type=\"text\" class=\"form-control\" id=\"cnpj\"\r\n                                       formControlName=\"cnpj\"\r\n                                       [value]=\"currentBrokerage.cnpj\"\r\n                                       [(ngModel)]=\"currentBrokerage.cnpj\"\r\n                                       name=\"cnpj\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Endereço</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"address\"\r\n                                       formControlName=\"address\"\r\n                                       [value]=\"currentBrokerage.address\"\r\n                                       [(ngModel)]=\"currentBrokerage.address\"\r\n                                       name=\"address\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Bairro</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"addressNeighborhood\"\r\n                                       formControlName=\"addressNeighborhood\"\r\n                                       [value]=\"currentBrokerage.addressNeighborhood\"\r\n                                       [(ngModel)]=\"currentBrokerage.addressNeighborhood\"\r\n                                       name=\"addressNeighborhood\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Cidade</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"addressCity\"\r\n                                       formControlName=\"addressCity\"\r\n                                       [value]=\"currentBrokerage.addressCity\"\r\n                                       [(ngModel)]=\"currentBrokerage.addressCity\"\r\n                                       name=\"addressCity\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Estado</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"addressState\"\r\n                                       formControlName=\"addressState\"\r\n                                       [value]=\"currentBrokerage.addressState\"\r\n                                       [(ngModel)]=\"currentBrokerage.addressState\"\r\n                                       name=\"addressState\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Swing Trade</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"swingTrade\"\r\n                                       formControlName=\"swingTrade\"\r\n                                       [value]=\"currentBrokerage.swingTrade\"\r\n                                       [(ngModel)]=\"currentBrokerage.swingTrade\"\r\n                                       name=\"swingTrade\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Tipo</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"tipo\"\r\n                                       formControlName=\"tipo\"\r\n                                       [value]=\"currentBrokerage.tipo\"\r\n                                       [(ngModel)]=\"currentBrokerage.tipo\"\r\n                                       name=\"tipo\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Day Trade</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"dayTrade\"\r\n                                       formControlName=\"dayTrade\"\r\n                                       [value]=\"currentBrokerage.dayTrade\"\r\n                                       [(ngModel)]=\"currentBrokerage.dayTrade\"\r\n                                       name=\"dayTrade\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 3-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">ISS</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"iss\"\r\n                                       formControlName=\"iss\"\r\n                                       [value]=\"currentBrokerage.iss\"\r\n                                       [(ngModel)]=\"currentBrokerage.iss\"\r\n                                       name=\"iss\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Telefone</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"phone\"\r\n                                       formControlName=\"phone\"\r\n                                       [value]=\"currentBrokerage.phone\"\r\n                                       [(ngModel)]=\"currentBrokerage.phone\"\r\n                                       name=\"phone\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Web Site</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"website\"\r\n                                       formControlName=\"website\"\r\n                                       [value]=\"currentBrokerage.website\"\r\n                                       [(ngModel)]=\"currentBrokerage.website\"\r\n                                       name=\"website\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 4-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Email</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"email\"\r\n                                       formControlName=\"email\"\r\n                                       [value]=\"currentBrokerage.email\"\r\n                                       [(ngModel)]=\"currentBrokerage.email\"\r\n                                       name=\"email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">logo</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"logo\"\r\n                                       formControlName=\"logo\"\r\n                                       [value]=\"currentBrokerage.logo\"\r\n                                       [(ngModel)]=\"currentBrokerage.logo\"\r\n                                       name=\"logo\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Status</label>\r\n                                <select class=\"form-control\"\r\n                                        id=\"status\"\r\n                                        name=\"status\"\r\n                                        formControlName=\"status\"\r\n                                        [value]=\"currentBrokerage.status\"\r\n                                        [(ngModel)]=\"currentBrokerage.status\">\r\n                                    <option *ngFor=\"let p of statusString\" [ngValue]=\"p.valueOf()\">\r\n                                        {{ p }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 5-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login Access Code</label>\r\n                                <input class=\"form-check-input\"\r\n                                       type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginAccessCode\"\r\n                                       for=\"loginAccessCode\"\r\n                                       formControlName=\"loginAccessCode\"\r\n                                       [value]=\"currentBrokerage.loginAccessCode\"\r\n                                       [(ngModel)]=\"currentBrokerage.loginAccessCode\"\r\n                                       name=\"loginAccessCode\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login CPF</label>\r\n                                <input class=\"form-check-input\"\r\n                                       type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginCpf\"\r\n                                       for=\"loginCpf\"\r\n                                       formControlName=\"loginCpf\"\r\n                                       [value]=\"currentBrokerage.loginCpf\"\r\n                                       [(ngModel)]=\"currentBrokerage.loginCpf\"\r\n                                       name=\"loginCpf\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login Email</label>\r\n                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginEmail\"\r\n                                       for=\"loginEmail\"\r\n                                       formControlName=\"loginEmail\"\r\n                                       [value]=\"currentBrokerage.loginEmail\"\r\n                                       [(ngModel)]=\"currentBrokerage.loginEmail\"\r\n                                       name=\"loginEmail\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login Login Password</label>\r\n                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginPassword\"\r\n                                       for=\"loginPassword\"\r\n                                       formControlName=\"loginPassword\"\r\n                                       [value]=\"currentBrokerage.loginPassword\"\r\n                                       [(ngModel)]=\"currentBrokerage.loginPassword\"\r\n                                       name=\"loginPassword\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Login Login Token</label>\r\n                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                       class=\"form-control\"\r\n                                       id=\"loginToken\"\r\n                                       for=\"loginToken\"\r\n                                       formControlName=\"loginToken\"\r\n                                       [value]=\"currentBrokerage.loginToken\"\r\n                                       [(ngModel)]=\"currentBrokerage.loginToken\"\r\n                                       name=\"loginToken\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--botao-->\r\n                    <div class=\"dropdown show-dropdown\">\r\n\r\n                        <ul class=\"dropdown-menu\">\r\n                            <div class=\"card\" style=\"width: 18rem;\">\r\n                                <div *ngIf=\"!response\">\r\n                                    <span (change)=\"showNotificationErro('bottom','right')\" class=\"badge badge-danger\">erro do servidor !</span>\r\n                                </div>\r\n                            </div>\r\n                        </ul>\r\n\r\n                        <button data-toggle=\"dropdown\"\r\n                                aria-expanded=\"true\"\r\n                                (click)=\"updateBrokerageX()\"\r\n                                (click)=\"showNotificationSucesso('bottom','right')\"\r\n                                routerLink=\"/brokerages\"\r\n                                class=\"btn btn-danger pull-right\">Atualizar\r\n                        </button>\r\n                      </div>\r\n                    <!--botao-->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"nav-item nav-link\" routerLink=\"/create-company\">Novo\r\n    <span class=\"material-icons\">add_comment</span></a>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body table-responsive\">\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-danger\" role=\"status\">\r\n                    <span class=\"sr-only\"></span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-primary\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-secondary\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-success\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-danger\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-warning\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-info\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-light\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-dark\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <form class=\"navbar-form\">\r\n                    <h1><span class=\"alert\">{{texto}}</span></h1>\r\n                    <div class=\"input-group no-border\">\r\n                        <input (keyup)=\"mudaTermo()\"\r\n                               placeholder=\"Digite o nome da empresa desejada...\"\r\n                               (keyup.enter)=\"onSearch()\"\r\n                               type=\"text\"\r\n                               id=\"pesquisar\"\r\n                               name=\"pesquisar\"\r\n                               class=\"form-control\"\r\n                               [formControl]=\"queryField\">\r\n                        <button (click)=\"onSearch()\"\r\n                                class=\"btn btn-white btn-round btn-just-icon\">\r\n                            <i class=\"material-icons\">search</i>\r\n                            <div class=\"ripple-container\"></div>\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n                <form class=\"table-wrapper-scroll-y my-custom-scrollbar\">\r\n                    <table class=\"table table-hover\" class=\"table table-bordered table-striped mb-0\">\r\n                        <thead class=\"text-warning\">\r\n                        <tr>\r\n                            <th scope=\"col\">Nome</th>\r\n                            <th scope=\"col\">CNPJ</th>\r\n                            <th scope=\"col\">Setor</th>\r\n                            <th scope=\"col\">Status</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let company of results$ | async\">\r\n                            <td>{{ company.name }}</td>\r\n                            <td>{{ company.cnpj }}</td>\r\n                            <td>{{ company.sector.description }}</td>\r\n                            <td *ngIf=\"company.status == 'INATIVO'\">\r\n                                <button\r\n                                        mat-rais ed-button\r\n                                        type=\"button\"\r\n                                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                    <i class=\"material-icons\">warning</i>\r\n                                </button>\r\n                            </td>\r\n                            <td *ngIf=\"company.status == 'ATIVO'\">\r\n                                <button mat-raised-button\r\n                                        type=\"button\"\r\n                                        matTooltip=\"Corretora Ativa\"\r\n                                        class=\"btn  btn-link btn-sm btn-just-icon\">\r\n                          <span class=\"text-success\">\r\n                          <i class=\"material-icons\">done_all</i></span>\r\n                                </button>\r\n                            </td>\r\n                            <td class=\"td-actions text-right\">\r\n                                <button [routerLink]=\"['/edit-company', company.id]\"\r\n                                        class=\"btn btn-primary btn-link btn-sm btn-just-icon\" mat-raised-button\r\n                                        matTooltip=\"Editar Corretora\" routerLinkActive=\"active\"\r\n                                        type=\"button\">\r\n                                    <i class=\"material-icons\">edit</i>\r\n                                </button>\r\n                                <button routerLink=\"/create-company\"\r\n                                        routerLinkActive=\"active\"\r\n                                        mat-raised-button type=\"button\"\r\n                                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--GRID PERMANENTE-->\r\n<form class=\"table-wrapper-scroll-y my-custom-scrollbar\">\r\n    <table class=\"table table-hover\" class=\"table table-bordered table-striped mb-0\">\r\n    <thead class=\"text-warning\">\r\n    <tr>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let company of responseCompany\">\r\n        <td>{{ company.name }}</td>\r\n        <td>{{ company.cnpj }}</td>\r\n        <td>{{ company.sector.description }}</td>\r\n        <td *ngIf=\"company.status == 'INATIVO'\">\r\n            <button\r\n                    mat-rais ed-button\r\n                    type=\"button\"\r\n                    class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                <i class=\"material-icons\">warning</i>\r\n            </button>\r\n        </td>\r\n        <td *ngIf=\"company.status == 'ATIVO'\">\r\n            <button mat-raised-button\r\n                    type=\"button\"\r\n                    class=\"btn  btn-link btn-sm btn-just-icon\">\r\n                          <span class=\"text-success\">\r\n                          <i class=\"material-icons\">done_all</i></span>\r\n            </button>\r\n            <button [routerLink]=\"['/edit-company', company.id]\"\r\n                    class=\"btn btn-primary btn-link btn-sm btn-just-icon\" mat-raised-button\r\n                    matTooltip=\"Editar Corretora\" routerLinkActive=\"active\"\r\n                    type=\"button\">\r\n                <i class=\"material-icons\">edit</i>\r\n            </button>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</form>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/create-company/create-company.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/create-company/create-company.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-danger\">\r\n                <p class=\"card-category\"></p>\r\n                <h4 class=\"card-title\">Cadastrar Empresa</h4>\r\n             </div>\r\n            <div class=\"card-body\">\r\n                <form class=\"form-group\" [formGroup]=\"companyForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Nome</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"name\"\r\n                                       formControlName=\"name\"\r\n                                       [(ngModel)]=\"request.name\"\r\n                                       name=\"name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Atividade</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"mainActivity\"\r\n                                       formControlName=\"mainActivity\"\r\n                                       [(ngModel)]=\"request.mainActivity\"\r\n                                       name=\"mainActivity\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Mercado</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"market\"\r\n                                       formControlName=\"market\"\r\n                                       [(ngModel)]=\"request.market\"\r\n                                       name=\"market\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">CNPJ</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"cnpj\"\r\n                                       formControlName=\"cnpj\"\r\n                                       [(ngModel)]=\"request.cnpj\"\r\n                                       name=\"cnpj\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">\r\n                                    Classificação setoria</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"setorialClassification\"\r\n                                       formControlName=\"setorialClassification\"\r\n                                       [(ngModel)]=\"request.setorialClassification\"\r\n                                       name=\"setorialClassification\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Site</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"site\"\r\n                                       formControlName=\"site\"\r\n                                       [(ngModel)]=\"request.site\"\r\n                                       name=\"site\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                        <label for=\"status\">Status</label>\r\n                                        <select class=\"form-control\"\r\n                                                   id=\"status\"\r\n                                                   name=\"status\"\r\n                                                   formControlName=\"status\"\r\n                                                   [value]=\"request.status\"\r\n                                                   [(ngModel)]=\"request.status\">\r\n                                               <option *ngFor=\"let p of statusString\" [ngValue]=\"p.valueOf()\">\r\n                                                   {{ p }}\r\n                                               </option>\r\n                                           </select>\r\n                            </div>\r\n                        </div>\r\n                     <div class=\"col-md-3\">\r\n                        <div class=\"form-group\" class=\"example-full-width\">\r\n                            <label for=\"sector\">Setor</label>\r\n                            <select class=\"form-control\"\r\n                                    id=\"sector\"\r\n                                    formControlName=\"sector\"\r\n                                    [value]=\"request.sector\"\r\n                                    [(ngModel)]=\"request.sector\">\r\n                                <option  *ngFor=\"let sector of sectores$ | async\" [value]=\"sector.id\">\r\n                                    {{sector.id}} => {{sector.description}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n<!--botao-->\r\n                    <div class=\"dropdown show-dropdown\">\r\n                        <button data-toggle=\"dropdown\"\r\n                                aria-expanded=\"true\"\r\n                                (click)=\"save()\"\r\n                                class=\"btn btn-danger pull-right\">Salvar\r\n                        </button>\r\n                    </div>\r\n<!--botao-->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/edit-company/edit-company.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/edit-company/edit-company.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-danger\">\r\n                <p class=\"card-category\"></p>\r\n                <h4 class=\"card-title\">Editar Empresa</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form class=\"form-group\" [formGroup]=\"companyForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Nome</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"name\"\r\n                                       formControlName=\"name\"\r\n                                       [value]=\"currentCompany.name\"\r\n                                       [(ngModel)]=\"currentCompany.name\"\r\n                                       name=\"name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"mainActivity\">Atividade</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"mainActivity\"\r\n                                       formControlName=\"mainActivity\"\r\n                                       [value]=\"currentCompany.mainActivity\"\r\n                                       [(ngModel)]=\"currentCompany.mainActivity\"\r\n                                       name=\"mainActivity\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"market\">Mercado</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"market\"\r\n                                       formControlName=\"market\"\r\n                                       [value]=\"currentCompany.market\"\r\n                                       [(ngModel)]=\"currentCompany.market\"\r\n                                       name=\"market\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"cnpj\">CNPJ</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"cnpj\"\r\n                                       formControlName=\"cnpj\"\r\n                                       [value]=\"currentCompany.cnpj\"\r\n                                       [(ngModel)]=\"currentCompany.cnpj\"\r\n                                       name=\"cnpj\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"setorialClassification\">\r\n                                    Classificação setoria</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"setorialClassification\"\r\n                                       name=\"setorialClassification\"\r\n                                       formControlName=\"setorialClassification\"\r\n                                       [value]=\"currentCompany.setorialClassification\"\r\n                                       [(ngModel)]=\"currentCompany.setorialClassification\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"site\">Site</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"site\"\r\n                                       name=\"site\"\r\n                                       formControlName=\"site\"\r\n                                       [value]=\"currentCompany.site\"\r\n                                       [(ngModel)]=\"currentCompany.site\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"status\">Status</label>\r\n                                <select class=\"form-control\"\r\n                                        id=\"status\"\r\n                                        name=\"status\"\r\n                                        formControlName=\"status\"\r\n                                        [value]=\"currentCompany.status\"\r\n                                        [(ngModel)]=\"currentCompany.status\">\r\n                                    <option *ngFor=\"let p of statusString\" [ngValue]=\"p.valueOf()\">\r\n                                        {{ p }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"sector\">Setor</label>\r\n                                <select class=\"form-control\"\r\n                                        id=\"sector\"\r\n                                        formControlName=\"sector\"\r\n                                        [value]=\"currentCompany.sector\"\r\n                                        [(ngModel)]=\"currentCompany.sector\">\r\n                                    <option  *ngFor=\"let sector of sectores$ | async\" [value]=\"sector.id\">\r\n                                        {{sector.id}} => {{sector.description}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n<!--combo-->\r\n                    </div>\r\n                    <!--botao-->\r\n                    <div class=\"dropdown show-dropdown\">\r\n                        <button data-toggle=\"dropdown\"\r\n                                aria-expanded=\"true\"\r\n                                (click)=\"updateCompany()\"\r\n                                class=\"btn btn-danger pull-right\">Salvar\r\n                        </button>\r\n                    </div>\r\n                    <!--botao-->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n\r\n    <div class=\"container-fluid\">\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"material-icons\">person</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Account</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div *ngIf=\"isMobileMenu()\">\r\n        <form class=\"navbar-form\">\r\n      <span class=\"bmd-form-group\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </span>\r\n        </form>\r\n        <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                    <i class=\"material-icons\">dashboard</i>\r\n                    <p>\r\n                        <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                    </p>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">notifications</i>\r\n                    <span class=\"notification\">5</span>\r\n                    <p>\r\n                        <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                    </p>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                    <i class=\"material-icons\">person</i>\r\n                    <p>\r\n                        <span class=\"d-lg-none d-md-block\">Account</span>\r\n                    </p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/emolumentos/emolumentos.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emolumentos/emolumentos.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"nav-item nav-link\" routerLink=\"create-emolumentos\">Novo\n    <span class=\"material-icons\">add_comment</span></a>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body table-responsive\">\n    <div class=\"spinner-grow text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n    <div class=\"spinner-grow text-secondary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n    <div class=\"spinner-grow text-success\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n    <div class=\"spinner-grow text-danger\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n    <div class=\"spinner-grow text-warning\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n    <div class=\"spinner-grow text-info\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n    <div class=\"spinner-grow text-light\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n    <div class=\"spinner-grow text-dark\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n                <form class=\"navbar-form\">\n                    <h1><span class=\"alert\">{{texto}}</span></h1>\n                    <div class=\"input-group no-border\">\n                        <input (keyup)=\"mudaTermo()\"\n                               placeholder=\"Digite o nome desejado...\"\n                               (keyup.enter)=\"onSearch()\"\n                               type=\"text\"\n                               id=\"pesquisar\"\n                               name=\"pesquisar\"\n                               class=\"form-control\"\n                               [formControl]=\"queryField\">\n                        <button (click)=\"onSearch()\"\n                                class=\"btn btn-white btn-round btn-just-icon\">\n                            <i class=\"material-icons\">search</i>\n                            <div class=\"ripple-container\"></div>\n                        </button>\n                    </div>\n                </form>\n                <form class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n                    <table class=\"table table-hover\" class=\"table table-bordered table-striped mb-0\">\n                        <thead class=\"text-warning\">\n                        <tr>\n                            <th scope=\"col\">negotiation</th>\n                            <th scope=\"col\">records</th>\n                            <th scope=\"col\">saleoff</th>\n                            <th scope=\"col\">totalCustos</th>\n                            <th scope=\"col\">walletFk</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let emolumentos of results$ | async\">\n                            <td>{{ emolumentos.negotiation }}</td>\n                            <td>{{ emolumentos.records }}</td>\n                            <td>{{ emolumentos.saleoff }}</td>\n                            <td>{{ emolumentos.totalCustos }}</td>\n                            <td>{{ emolumentos.walletFk }}</td>\n                            <td class=\"td-actions text-right\">\n                                <button [routerLink]=\"['/edit-emolumentos', emolumentos.id]\"\n                                        class=\"btn btn-primary btn-link btn-sm btn-just-icon\" mat-raised-button\n                                        matTooltip=\"Editar Corretora\" routerLinkActive=\"active\"\n                                        type=\"button\">\n                                    <i class=\"material-icons\">edit</i>\n                                </button>\n                                <button routerLink=\"/create-company\"\n                                        routerLinkActive=\"active\"\n                                        mat-raised-button type=\"button\"\n                                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                    <i class=\"material-icons\">close</i>\n                                </button>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!--GRID PERMANENTE-->\n<form class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n    <table class=\"table table-hover\" class=\"table table-bordered table-striped mb-0\">\n        <thead class=\"text-warning\">\n        <tr>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let emolumentos of responseEmolumentos\">\n            <td>{{ emolumentos.negotiation }}</td>\n            <td>{{ emolumentos.records }}</td>\n            <td>{{ emolumentos.saleoff }}</td>\n            <td>{{ emolumentos.totalCustos }}</td>\n            <td>{{ emolumentos.walletFk }}</td>\n            <td class=\"td-actions text-right\">\n                <button [routerLink]=\"['/edit-emolumentos', emolumentos.id]\"\n                        class=\"btn btn-primary btn-link btn-sm btn-just-icon\" mat-raised-button\n                        matTooltip=\"Editar Corretora\" routerLinkActive=\"active\"\n                        type=\"button\">\n                    <i class=\"material-icons\">edit</i>\n                </button>\n                <button routerLink=\"/create-company\"\n                        routerLinkActive=\"active\"\n                        mat-raised-button type=\"button\"\n                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n        </tr>\n        </tbody>\n    </table>\n</form>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"nav-item nav-link\" routerLink=\"create-brokerage\">Novo\n    <span class=\"material-icons\">add_comment</span></a>\n<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Home</h4>\n    <div class=\"card-body\">\n        <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\n        <ul *ngIf=\"userFromApi\">\n            <li>{{userFromApi.firstName}} {{userFromApi.lastName}}</li>\n        </ul>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base href='/'>\r\n<div class=\"wrapper\">\r\n\r\n   <div class=\"sidebar\"\r\n         data-color=\"danger\"\r\n         data-background-color=\"white\"\r\n         data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\"\r\n             style=\"background-image:\r\n             url(https://firebasestorage.googleapis.com/v0/b/multbroker-img.appspot.com/o/logo.jpg?alt=media&token=3fe05428-7418-41b0-b3c3-6ef39405b1d3)\"></div>\r\n    </div>\r\n\r\n    <div class=\"main-panel\">\r\n        <router-outlet></router-outlet>\r\n        <app-footer></app-footer>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base href='/'>\r\n<div class=\"wrapper\">\r\n\r\n<div class=\"col-md-6 offset-md-3 mt-5\">\r\n    <div class=\"alert alert-info\">\r\n        <h4>MultBroker Login</h4>\r\n    </div>\r\n    <div class=\"card\">\r\n\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Nome do Usuario</label>\r\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\"\r\n                           [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.username.errors.required\">Username e Requerido</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Senha do Usuario</label>\r\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                           [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Senha e Requerida</div>\r\n                    </div>\r\n                </div>\r\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Entrar\r\n                </button>\r\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sector/sector.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sector/sector.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>sector works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"nav-item nav-link\" routerLink=\"create-brokerage\">Novo\r\n    <span class=\"material-icons\">add_comment</span></a>\r\n<div class=\"card mt-4\">\r\n    <h4 class=\"card-header\">User</h4>\r\n    <div class=\"card-body\">\r\n        <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\r\n        <ul *ngIf=\"userFromApi\">\r\n            <li>{{userFromApi.firstName}} {{userFromApi.lastName}}</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/create-wallet/create-wallet.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/create-wallet/create-wallet.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-danger\">\r\n                <p class=\"card-category\"></p>\r\n                <h4 class=\"card-title\">Cadastrar Empresa</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form class=\"form-group\" [formGroup]=\"walletForm\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Nome</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"name\"\r\n                                       formControlName=\"name\"\r\n                                       [(ngModel)]=\"request.name\"\r\n                                       name=\"name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Atividade</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"mainActivity\"\r\n                                       formControlName=\"mainActivity\"\r\n                                       [(ngModel)]=\"request.mainActivity\"\r\n                                       name=\"mainActivity\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Mercado</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"market\"\r\n                                       formControlName=\"market\"\r\n                                       [(ngModel)]=\"request.market\"\r\n                                       name=\"market\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">CNPJ</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"cnpj\"\r\n                                       formControlName=\"cnpj\"\r\n                                       [(ngModel)]=\"request.cnpj\"\r\n                                       name=\"cnpj\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">\r\n                                    Classificação setoria</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"setorialClassification\"\r\n                                       formControlName=\"setorialClassification\"\r\n                                       [(ngModel)]=\"request.setorialClassification\"\r\n                                       name=\"setorialClassification\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!--linha 2-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"name\">Site</label>\r\n                                <input type=\"text\"\r\n                                       class=\"form-control\"\r\n                                       id=\"site\"\r\n                                       formControlName=\"site\"\r\n                                       [(ngModel)]=\"request.site\"\r\n                                       name=\"site\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"status\">Status</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                       id=\"status\"\r\n                                       formControlName=\"status\"\r\n                                       [(ngModel)]=\"request.status\"\r\n                                       name=\"status\"></div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\" class=\"example-full-width\">\r\n                                <label for=\"sector\">Setor</label>\r\n                                <select class=\"form-control\"\r\n                                        id=\"sector\"\r\n                                        formControlName=\"sector\"\r\n                                        [value]=\"request.sector\"\r\n                                        [(ngModel)]=\"request.sector\">\r\n                                    <option  *ngFor=\"let sector of sectores | async\"\r\n                                             [value]=\"sector.id\">\r\n\r\n                                        {{sector.id}} => {{sector.description}}\r\n\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <!--              <div class=\"col-md-3\">\r\n                                          <div class=\"form-group\" class=\"example-full-width\">\r\n                                              <label for=\"name\">Setor</label>\r\n                                              <select formControlName=\"sector\" id=\"sector\" [(ngModel)]=\"request.sector\" name=\"sector\">\r\n                                                  <option *ngFor=\"let responseSector of responseSector; let i = index\" [value]=\"responseSector[i].id\">\r\n                                                         {{responseSector[i].description}}\r\n                                                  </option>\r\n                                              </select>\r\n                                          </div>\r\n                                      </div>-->\r\n\r\n                    </div>\r\n                    <!--botao-->\r\n                    <div class=\"dropdown show-dropdown\">\r\n                        <button data-toggle=\"dropdown\"\r\n                                aria-expanded=\"true\"\r\n                                (click)=\"save()\"\r\n                                class=\"btn btn-danger pull-right\">Salvar\r\n                        </button>\r\n                    </div>\r\n                    <!--botao-->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/edit-wallet/edit-wallet.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/edit-wallet/edit-wallet.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"nav-item nav-link\" routerLink=\"create-brokerage\">Novo\r\n    <span class=\"material-icons\">add_comment</span></a>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body table-responsive\">\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-danger\" role=\"status\">\r\n                    <span class=\"sr-only\"></span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-primary\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-secondary\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-success\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-danger\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-warning\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-info\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-light\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <div *ngIf='showSpinner' class=\"spinner-grow text-dark\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <form class=\"navbar-form\">\r\n                    <h1><span class=\"alert\">{{texto}}</span></h1>\r\n                    <div class=\"input-group no-border\">\r\n                        <input (keyup)=\"mudaTermo()\" placeholder=\"Digite o nome da carteira desejada...\"\r\n                               (keyup.enter)=\"onSearch()\"\r\n                               type=\"text\"\r\n                               id=\"pesquisar\"\r\n                               name=\"pesquisar\"\r\n                               class=\"form-control\"\r\n                               [formControl]=\"queryField\">\r\n                        <button (click)=\"onSearch()\"\r\n                                class=\"btn btn-white btn-round btn-just-icon\">\r\n                            <i class=\"material-icons\">search</i>\r\n                            <div class=\"ripple-container\"></div>\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n                <form>\r\n                    <table class=\"table table-hover\">\r\n                        <thead class=\"text-warning\">\r\n                        <tr>\r\n                            <th scope=\"col\">ID</th>\r\n                            <th scope=\"col\">Modalidade</th>\r\n                            <th scope=\"col\">Quantidade</th>\r\n                            <th scope=\"col\">Situação</th>\r\n                            <th scope=\"col\">Data da Compra</th>\r\n                            <th scope=\"col\">Date da Vend</th>\r\n                            <th scope=\"col\">Valor do Dia</th>\r\n                            <th scope=\"col\">Preço</th>\r\n                            <th scope=\"col\">Corretora</th>\r\n                            <th scope=\"col\">Ação</th>\r\n                            <th scope=\"col\">Usuario</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let wallet of results$ | async\">\r\n                            <td>{{ wallet.id }}</td>\r\n                            <td>{{ wallet.modality }}</td>\r\n                            <td>{{ wallet.amount }}</td>\r\n                            <td>{{ wallet.situation }}</td>\r\n                            <td>{{ wallet.purchaseData }}</td>\r\n                            <td>{{ wallet.saleDate }}</td>\r\n                            <td>{{ wallet.actionValueDay | currency}}</td>\r\n                            <td>{{ wallet.priceAction | currency}}</td>\r\n                            <td>{{ wallet.brokerage.name | uppercase }}</td>\r\n                            <td>{{ wallet.action.description | uppercase }}</td>\r\n                            <td>{{ wallet.userEntity.nomeCompleto | uppercase }}</td>\r\n                            <td class=\"td-actions text-right\">\r\n                                <button [routerLink]=\"['/edit-wallet', wallet.id]\"\r\n                                        class=\"btn btn-primary btn-link btn-sm btn-just-icon\"\r\n                                        mat-raised-button\r\n                                        matTooltip=\"Editar Carteira\" routerLinkActive=\"active\"\r\n                                        type=\"button\">\r\n                                    <i class=\"material-icons\">edit</i>\r\n                                </button>\r\n                                <button routerLink=\"/create-wallet\"\r\n                                        routerLinkActive=\"active\"\r\n                                        mat-raised-button\r\n                                        type=\"button\"\r\n                                        class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--GRID PERMANENTE-->\r\n<table class=\"table table-hover\">\r\n    <thead class=\"text-warning\">\r\n    <tr>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <!-- {{ dateObj | date }}               // output is 'Jun 15, 2015'\r\n     {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'\r\n     {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'\r\n     {{ dateObj | date:'mm:ss' }}       // output is '43:11'-->\r\n    <tr *ngFor=\"let wallet of responseWallet\">\r\n        <td>{{ wallet.id }}</td>\r\n        <td>{{ wallet.modality }}</td>\r\n        <td>{{ wallet.amount }}</td>\r\n        <td>{{ wallet.situation }}</td>\r\n        <td>{{ wallet.purchaseData }}</td>\r\n        <td>{{ wallet.saleDate }}</td>\r\n        <td>{{ wallet.actionValueDay | currency}}</td>\r\n        <td>{{ wallet.priceAction | currency}}</td>\r\n        <td>{{ wallet.brokerage.name | uppercase }}</td>\r\n        <td>{{ wallet.action.description | uppercase }}</td>\r\n        <td>{{ wallet.userEntity.nomeCompleto | uppercase }}</td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var user = this.authenticationService.userValue;
        if (user) {
            // TODO: verifique se a rota está restrita por função
            if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // TODO: autorizado para retornar verdadeiro
            return true;
        }
        // TODO: não conectado, redirecione para a página de login com o URL de retorno
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
                // TODO: logout automático se 401 Resposta não autorizada ou 403 Proibida retornada da API
                _this.authenticationService.logout();
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].User }
];
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var url = request.url, method = request.method, headers = request.headers, body = request.body;
        // TODO: agrupar observável atrasado para simular a chamada da API do servidor
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                default:
                    // TODO: passar por quaisquer solicitações não tratadas acima
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            var username = body.username, password = body.password;
            var user = users.find(function (x) { return x.username === username && x.password === password; });
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: "fake-jwt-token." + user.id
            });
        }
        function getUsers() {
            if (!isAdmin())
                return unauthorized();
            return ok(users);
        }
        function getUserById() {
            if (!isLoggedIn())
                return unauthorized();
            // somente administradores podem acessar outros registros do usuário
            if (!isAdmin() && currentUser().id !== idFromUrl())
                return unauthorized();
            var user = users.find(function (x) { return x.id === idFromUrl(); });
            return ok(user);
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'unauthorized' } });
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 400, error: { message: message } });
        }
        function isLoggedIn() {
            var authHeader = headers.get('Authorization') || '';
            return authHeader.startsWith('Bearer fake-jwt-token');
        }
        function isAdmin() {
            return isLoggedIn() && currentUser().role === _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin;
        }
        function currentUser() {
            if (!isLoggedIn())
                return;
            var id = parseInt(headers.get('Authorization').split('.')[1]);
            return users.find(function (x) { return x.id === id; });
        }
        function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // TODO: usar back-end falso no lugar do serviço Http para desenvolvimento sem back-end
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, AuthGuard, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // TODO: adicione cabeçalho de autenticação com jwt se o usuário estiver conectado e a solicitação for api url
        var user = this.authenticationService.userValue;
        var isLoggedIn = user && user.token;
        var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + user.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Role, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ "./src/app/_models/role.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return _role__WEBPACK_IMPORTED_MODULE_0__["Role"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




/***/ }),

/***/ "./src/app/_models/role.ts":
/*!*********************************!*\
  !*** ./src/app/_models/role.ts ***!
  \*********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "userValue", {
        get: function () {
            return this.userSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // TODO: armazenar detalhes do usuário e token jwt no armazenamento local para manter o usuário logado entre as atualizações da página
            localStorage.setItem('user', JSON.stringify(user));
            _this.userSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // TODO: remover usuário do armazenamento local para desconectar o usuário
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/acoes/acoes.component.ts":
/*!******************************************!*\
  !*** ./src/app/acoes/acoes.component.ts ***!
  \******************************************/
/*! exports provided: AcoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcoesComponent", function() { return AcoesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _acoes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./acoes.service */ "./src/app/acoes/acoes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AcoesComponent = /** @class */ (function () {
    function AcoesComponent(acoesService, http) {
        var _this = this;
        this.acoesService = acoesService;
        this.http = http;
        this.showSpinner = false;
        this.error = '';
        this.queryField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.texto = '';
        this.onSearch = function () {
            var value = _this.queryField.value.toUpperCase();
            if (value && (value = value.trim()) !== '') {
                _this.showSpinner = true;
                _this.results$ = _this.http
                    .get(_this.acoesService.acoesURLfindName + value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
                _this.showSpinner = false;
                _this.showNotificatioSearch();
            }
        };
    }
    AcoesComponent.prototype.mudaTermo = function () {
        this.texto = this.queryField.value;
    };
    AcoesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.acoesService.getAcoes().subscribe(function (results$) { return _this.responseAcoes = results$; });
        if (this.results$ == null) {
            setTimeout(function () {
                _this.showSpinner = false;
            }, 1000);
        }
    };
    AcoesComponent.prototype.showNotificatioSearch = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Busca Finlizada !<b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    AcoesComponent.ctorParameters = function () { return [
        { type: _acoes_service__WEBPACK_IMPORTED_MODULE_4__["AcoesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AcoesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acoes',
            template: __importDefault(__webpack_require__(/*! raw-loader!./acoes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/acoes/acoes.component.html")).default
        }),
        __metadata("design:paramtypes", [_acoes_service__WEBPACK_IMPORTED_MODULE_4__["AcoesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AcoesComponent);
    return AcoesComponent;
}());



/***/ }),

/***/ "./src/app/acoes/acoes.service.ts":
/*!****************************************!*\
  !*** ./src/app/acoes/acoes.service.ts ***!
  \****************************************/
/*! exports provided: AcoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcoesService", function() { return AcoesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AcoesService = /** @class */ (function () {
    function AcoesService(http) {
        this.http = http;
        this.acoesURListAll = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].acoesURListAll;
        this.acoesURLfindName = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].acoesURLfindName;
        this.acoesURLfindId = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].acoesURLfindId;
        this.acoesURLInsert = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].acoesURLInsert;
        this.acoesURLPut = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].acoesURLPut;
    }
    AcoesService.prototype.getAcoes = function () {
        return this.http.get(this.acoesURListAll);
    };
    AcoesService.prototype.get = function (id) {
        return this.http.get("" + this.acoesURLfindId + id);
    };
    AcoesService.prototype.createEmolumentos = function (request) {
        return this.http.post(this.acoesURLInsert, request);
    };
    AcoesService.prototype.update = function (id, data) {
        return this.http.put("" + this.acoesURLPut + id, data);
    };
    AcoesService.prototype.updateStatus = function (id, data) {
        return this.http.put("" + this.acoesURLPut + id, data);
    };
    AcoesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AcoesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AcoesService);
    return AcoesService;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService) {
        this.userService = userService;
        this.loading = false;
        this.users = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.loading = false;
            _this.users = users;
        });
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __importDefault(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/index.ts":
/*!********************************!*\
  !*** ./src/app/admin/index.ts ***!
  \********************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _models___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_models/ */ "./src/app/_models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.authenticationService.user.subscribe(function (x) { return _this.user = x; });
    }
    Object.defineProperty(AppComponent.prototype, "isAdmin", {
        get: function () {
            return this.user && this.user.role === _models___WEBPACK_IMPORTED_MODULE_2__["Role"].Admin;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _brokerages_create_brokerage_create_brokerage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./brokerages/create-brokerage/create-brokerage.component */ "./src/app/brokerages/create-brokerage/create-brokerage.component.ts");
/* harmony import */ var _brokerages_edit_brokerage_edit_brokerage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./brokerages/edit-brokerage/edit-brokerage.component */ "./src/app/brokerages/edit-brokerage/edit-brokerage.component.ts");
/* harmony import */ var _brokerages_brokerages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./brokerages/brokerages.component */ "./src/app/brokerages/brokerages.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _company_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./company/create-company/create-company.component */ "./src/app/company/create-company/create-company.component.ts");
/* harmony import */ var _company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company/edit-company/edit-company.component */ "./src/app/company/edit-company/edit-company.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _wallet_create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wallet/create-wallet/create-wallet.component */ "./src/app/wallet/create-wallet/create-wallet.component.ts");
/* harmony import */ var _wallet_edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wallet/edit-wallet/edit-wallet.component */ "./src/app/wallet/edit-wallet/edit-wallet.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _emolumentos_emolumentos_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./emolumentos/emolumentos.component */ "./src/app/emolumentos/emolumentos.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _sector_sector_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sector/sector.component */ "./src/app/sector/sector.component.ts");
/* harmony import */ var _acoes_acoes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./acoes/acoes.component */ "./src/app/acoes/acoes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










// used to create fake backend






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["SidebarComponent"],
                _brokerages_create_brokerage_create_brokerage_component__WEBPACK_IMPORTED_MODULE_13__["CreateBrokerageComponent"],
                _brokerages_edit_brokerage_edit_brokerage_component__WEBPACK_IMPORTED_MODULE_14__["EditBrokerageComponent"],
                _brokerages_brokerages_component__WEBPACK_IMPORTED_MODULE_15__["BrokeragesComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_16__["CompanyComponent"],
                _company_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_18__["CreateCompanyComponent"],
                _company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_19__["EditCompanyComponent"],
                _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_20__["WalletComponent"],
                _wallet_create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_21__["CreateWalletComponent"],
                _wallet_edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_22__["EditWalletComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_26__["AdminComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                _emolumentos_emolumentos_component__WEBPACK_IMPORTED_MODULE_28__["EmolumentosComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileComponent"],
                _sector_sector_component__WEBPACK_IMPORTED_MODULE_30__["SectorComponent"],
                _emolumentos_emolumentos_component__WEBPACK_IMPORTED_MODULE_28__["EmolumentosComponent"],
                _acoes_acoes_component__WEBPACK_IMPORTED_MODULE_31__["AcoesComponent"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_23__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_10__["fakeBackendProvider"]
            ],
            exports: [
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _brokerages_brokerages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brokerages/brokerages.component */ "./src/app/brokerages/brokerages.component.ts");
/* harmony import */ var _brokerages_create_brokerage_create_brokerage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brokerages/create-brokerage/create-brokerage.component */ "./src/app/brokerages/create-brokerage/create-brokerage.component.ts");
/* harmony import */ var _brokerages_edit_brokerage_edit_brokerage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brokerages/edit-brokerage/edit-brokerage.component */ "./src/app/brokerages/edit-brokerage/edit-brokerage.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/edit-company/edit-company.component */ "./src/app/company/edit-company/edit-company.component.ts");
/* harmony import */ var _company_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company/create-company/create-company.component */ "./src/app/company/create-company/create-company.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _wallet_edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wallet/edit-wallet/edit-wallet.component */ "./src/app/wallet/edit-wallet/edit-wallet.component.ts");
/* harmony import */ var _wallet_create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wallet/create-wallet/create-wallet.component */ "./src/app/wallet/create-wallet/create-wallet.component.ts");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin */ "./src/app/admin/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_models */ "./src/app/_models/index.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _emolumentos__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./emolumentos */ "./src/app/emolumentos/index.ts");
/* harmony import */ var _acoes_acoes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./acoes/acoes.component */ "./src/app/acoes/acoes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



















var routes = [
    {
        path: '',
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserProfileComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _login__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
    },
    {
        path: 'admin',
        component: _admin__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        data: { roles: [_models__WEBPACK_IMPORTED_MODULE_14__["Role"].Admin] }
    },
    {
        path: 'user',
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserProfileComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'home',
        component: _home__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'emolumentos',
        component: _emolumentos__WEBPACK_IMPORTED_MODULE_17__["EmolumentosComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    /*brokerages*/
    {
        path: 'brokerages',
        component: _brokerages_brokerages_component__WEBPACK_IMPORTED_MODULE_2__["BrokeragesComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'create-brokerage',
        component: _brokerages_create_brokerage_create_brokerage_component__WEBPACK_IMPORTED_MODULE_3__["CreateBrokerageComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'edit-brokerage/:id',
        component: _brokerages_edit_brokerage_edit_brokerage_component__WEBPACK_IMPORTED_MODULE_4__["EditBrokerageComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    /*company*/
    {
        path: 'company',
        component: _company_company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'edit-company/:id',
        component: _company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_6__["EditCompanyComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'create-company',
        component: _company_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_7__["CreateCompanyComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    /*wallet*/
    {
        path: 'wallet',
        component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_8__["WalletComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'edit-wallet/:id',
        component: _wallet_edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_9__["EditWalletComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'create-wallet',
        component: _wallet_create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_10__["CreateWalletComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    /*acoes*/
    {
        path: 'acoes',
        component: _acoes_acoes_component__WEBPACK_IMPORTED_MODULE_18__["AcoesComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'edit-acoes/:id',
        component: _wallet_edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_9__["EditWalletComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'create-acoes',
        component: _wallet_create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_10__["CreateWalletComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    /*full*/
    { path: '**',
        redirectTo: ''
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/brokerages/brokerage.model.ts":
/*!***********************************************!*\
  !*** ./src/app/brokerages/brokerage.model.ts ***!
  \***********************************************/
/*! exports provided: Brokerage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brokerage", function() { return Brokerage; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Brokerage = /** @class */ (function () {
    function Brokerage() {
    }
    return Brokerage;
}());



/***/ }),

/***/ "./src/app/brokerages/brokerages.component.css":
/*!*****************************************************!*\
  !*** ./src/app/brokerages/brokerages.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb2tlcmFnZXMvYnJva2VyYWdlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/brokerages/brokerages.component.ts":
/*!****************************************************!*\
  !*** ./src/app/brokerages/brokerages.component.ts ***!
  \****************************************************/
/*! exports provided: BrokeragesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokeragesComponent", function() { return BrokeragesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _brokerages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brokerages.service */ "./src/app/brokerages/brokerages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var BrokeragesComponent = /** @class */ (function () {
    function BrokeragesComponent(brokeragesService, http) {
        this.brokeragesService = brokeragesService;
        this.http = http;
        this.showSpinner = false;
        this.queryField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.texto = '';
    }
    BrokeragesComponent.prototype.mudaTermo = function () {
        this.texto = this.queryField.value;
    };
    BrokeragesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.brokeragesService.getBrokerages().subscribe(function (res) { return _this.responseBrokerages = res; });
        if (this.results$ == null) {
            setTimeout(function () {
                _this.showSpinner = false;
            }, 1000);
        }
    };
    BrokeragesComponent.prototype.onSearch = function () {
        var value = this.queryField.value.toUpperCase();
        if (value && (value = value.trim()) !== '') {
            this.showSpinner = true;
            this.results$ = this.http
                .get(this.brokeragesService.brokeragesURLfindName + value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
            this.showSpinner = false;
            this.showNotificatioSearch();
        }
    };
    ;
    BrokeragesComponent.prototype.showNotificatioSearch = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Busca Finlizada !<b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    BrokeragesComponent.ctorParameters = function () { return [
        { type: _brokerages_service__WEBPACK_IMPORTED_MODULE_4__["BrokeragesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    BrokeragesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brokerages',
            template: __importDefault(__webpack_require__(/*! raw-loader!./brokerages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brokerages/brokerages.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./brokerages.component.css */ "./src/app/brokerages/brokerages.component.css")).default]
        }),
        __metadata("design:paramtypes", [_brokerages_service__WEBPACK_IMPORTED_MODULE_4__["BrokeragesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BrokeragesComponent);
    return BrokeragesComponent;
}());



/***/ }),

/***/ "./src/app/brokerages/brokerages.service.ts":
/*!**************************************************!*\
  !*** ./src/app/brokerages/brokerages.service.ts ***!
  \**************************************************/
/*! exports provided: BrokeragesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokeragesService", function() { return BrokeragesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var BrokeragesService = /** @class */ (function () {
    function BrokeragesService(http) {
        this.http = http;
        this.brokeragesURLListarTodos = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].brokeragesURLListarTodos;
        this.brokeragesURLfindName = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].brokeragesURLfindName;
        this.brokeragesURLfindId = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].brokeragesURLfindId;
        this.brokeragesURLfindAccount = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].brokeragesURLfindAccount;
        this.brokeragesURLPut = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].brokeragesURLPut;
        this.brokeragesURLPutUpdate = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].brokeragesURLPutUpdate;
        this.brokeragesURLInsert = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].brokeragesURLInsert;
        this.brokeragesURLDelete = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].brokeragesURLDelete;
        this.brokeragesURLpainel = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].brokeragesURLpainel;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }
    BrokeragesService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    BrokeragesService.prototype.getBrokerageid = function (id) {
        return this.http.get("" + this.brokeragesURLfindId + id);
    };
    BrokeragesService.prototype.getBrokerages = function () {
        return this.http.get(this.brokeragesURLListarTodos);
    };
    BrokeragesService.prototype.getBrokeragesPainel = function () {
        return this.http.get(this.brokeragesURLpainel);
    };
    BrokeragesService.prototype.loadByID = function (id) {
        return this.http.get("" + this.brokeragesURLfindId + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    BrokeragesService.prototype.createBrokerage = function (request) {
        return this.http.post(this.brokeragesURLInsert, request);
    };
    BrokeragesService.prototype.create = function (brokerage) {
        return this.http.post(this.brokeragesURLInsert, brokerage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    BrokeragesService.prototype.searchBrokerageName = function (nome) {
        return this.http.get(this.brokeragesURLfindName + nome)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) { return err; }));
    };
    BrokeragesService.prototype.getBrokerageName = function (name) {
        return this.http.get("" + this.brokeragesURLfindName + name);
    };
    BrokeragesService.prototype.getBrokerageById = function (id) {
        var url = "" + this.brokeragesURLfindId + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("fetched BrokerageB id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getBrokerageById id=" + id)));
    };
    BrokeragesService.prototype.update = function (id, data) {
        return this.http.put(this.brokeragesURLPut + "/" + id, data);
    };
    BrokeragesService.prototype.updateBrokerage = function (id, value) {
        return this.http.put("" + this.brokeragesURLPut + id, value);
    };
    BrokeragesService.prototype.get = function (id) {
        return this.http.get(this.brokeragesURLfindId + "/" + id);
    };
    BrokeragesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BrokeragesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BrokeragesService);
    return BrokeragesService;
}());



/***/ }),

/***/ "./src/app/brokerages/create-brokerage/create-brokerage.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/brokerages/create-brokerage/create-brokerage.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb2tlcmFnZXMvY3JlYXRlLWJyb2tlcmFnZS9jcmVhdGUtYnJva2VyYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/brokerages/create-brokerage/create-brokerage.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/brokerages/create-brokerage/create-brokerage.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyErrorStateMatcher, CreateBrokerageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBrokerageComponent", function() { return CreateBrokerageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _brokerages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brokerages.service */ "./src/app/brokerages/brokerages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var CreateBrokerageComponent = /** @class */ (function () {
    function CreateBrokerageComponent(brokeragesService, formBuilder, router) {
        this.brokeragesService = brokeragesService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.showSpinner = false;
        this.statusString = ['INATIVO', 'ATIVO'];
        this.request = {
            name: '',
            cnpj: '',
            address: '',
            addressNeighborhood: '',
            addressCity: '',
            addressState: '',
            dayTrade: '',
            swingTrade: '',
            iss: '5',
            loginAccessCode: true,
            loginCpf: true,
            loginEmail: true,
            loginPassword: true,
            loginToken: true,
            status: 'ATIVO',
            tipo: '',
            phone: '',
            website: '',
            email: '',
            logo: '',
        };
    }
    CreateBrokerageComponent.prototype.gerarForm = function () {
        this.brokerageForm = this.formBuilder.group({
            name: [null],
            cnpj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: [null],
            addressNeighborhood: [null],
            addressCity: [null],
            addressState: [null],
            dayTrade: [null],
            swingTrade: [null],
            iss: '5',
            loginAccessCode: true,
            loginCpf: true,
            loginEmail: true,
            loginPassword: true,
            loginToken: true,
            status: 'ATIVO',
            tipo: [null],
            phone: [null],
            website: [null],
            email: [null],
            logo: [null]
        });
    };
    CreateBrokerageComponent.prototype.ngOnInit = function () {
        this.gerarForm();
        this.showSpinner = true;
    };
    CreateBrokerageComponent.prototype.save = function () {
        var _this = this;
        this.brokeragesService.createBrokerage(this.request)
            .subscribe(function (data) {
            _this.showNotificationSucesso();
            _this.limpa();
        }, function (err) {
            _this.showNotificationErro();
        });
    };
    CreateBrokerageComponent.prototype.limpa = function () {
        this.brokerageForm.reset();
    };
    CreateBrokerageComponent.prototype.showNotificationSucesso = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Salvo com Suceso !<b></b>'
        }, {
            type: type[color],
            timer: 2000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    CreateBrokerageComponent.prototype.showNotificationErro = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Servidor Retornou ERRO !<b></b>'
        }, {
            type: type[color],
            timer: 2000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    CreateBrokerageComponent.ctorParameters = function () { return [
        { type: _brokerages_service__WEBPACK_IMPORTED_MODULE_3__["BrokeragesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    CreateBrokerageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-brokerage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-brokerage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brokerages/create-brokerage/create-brokerage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create-brokerage.component.css */ "./src/app/brokerages/create-brokerage/create-brokerage.component.css")).default]
        }),
        __metadata("design:paramtypes", [_brokerages_service__WEBPACK_IMPORTED_MODULE_3__["BrokeragesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateBrokerageComponent);
    return CreateBrokerageComponent;
}());



/***/ }),

/***/ "./src/app/brokerages/edit-brokerage/edit-brokerage.component.css":
/*!************************************************************************!*\
  !*** ./src/app/brokerages/edit-brokerage/edit-brokerage.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb2tlcmFnZXMvZWRpdC1icm9rZXJhZ2UvZWRpdC1icm9rZXJhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/brokerages/edit-brokerage/edit-brokerage.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/brokerages/edit-brokerage/edit-brokerage.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditBrokerageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrokerageComponent", function() { return EditBrokerageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _brokerage_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brokerage.model */ "./src/app/brokerages/brokerage.model.ts");
/* harmony import */ var _brokerages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../brokerages.service */ "./src/app/brokerages/brokerages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var EditBrokerageComponent = /** @class */ (function () {
    function EditBrokerageComponent(brokeragesService, formBuilder, route, router) {
        this.brokeragesService = brokeragesService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.currentBrokerage = null;
        this.message = '';
        this.response = _brokerage_model__WEBPACK_IMPORTED_MODULE_3__["Brokerage"];
        this.statusString = ['INATIVO', 'ATIVO'];
    }
    EditBrokerageComponent.prototype.ngOnInit = function () {
        this.message = '';
        this.getBrokerangeX(this.route.snapshot.paramMap.get('id'));
    };
    EditBrokerageComponent.prototype.updateBrokerageX = function () {
        var _this = this;
        this.brokeragesService.update(this.currentBrokerage.id, this.currentBrokerage)
            .subscribe(function (response) {
            console.log(response);
            _this.message = 'ATUALIZADO';
        }, function (error) {
            console.log(error);
        });
    };
    EditBrokerageComponent.prototype.getBrokerangeX = function (id) {
        var _this = this;
        this.brokeragesService.get(id)
            .subscribe(function (data) {
            _this.currentBrokerage = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    EditBrokerageComponent.prototype.showNotificationSucesso = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'MODIFICADO COM SUCESSO <b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    EditBrokerageComponent.prototype.showNotificationErro = function (from, align) {
        var type = ['danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'ATUALIZADO COM SUCESSO <b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    EditBrokerageComponent.ctorParameters = function () { return [
        { type: _brokerages_service__WEBPACK_IMPORTED_MODULE_4__["BrokeragesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    EditBrokerageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-brokerage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-brokerage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brokerages/edit-brokerage/edit-brokerage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-brokerage.component.css */ "./src/app/brokerages/edit-brokerage/edit-brokerage.component.css")).default]
        }),
        __metadata("design:paramtypes", [_brokerages_service__WEBPACK_IMPORTED_MODULE_4__["BrokeragesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditBrokerageComponent);
    return EditBrokerageComponent;
}());



/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company.service */ "./src/app/company/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(companyService, http) {
        var _this = this;
        this.companyService = companyService;
        this.http = http;
        this.showSpinner = false;
        this.queryField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.texto = '';
        this.onSearch = function () {
            var value = _this.queryField.value.toUpperCase();
            if (value && (value = value.trim()) !== '') {
                _this.showSpinner = true;
                _this.results$ = _this.http
                    .get(_this.companyService.companyURLfindName + value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
                _this.showSpinner = false;
                _this.showNotificatioSearch();
            }
        };
    }
    CompanyComponent.prototype.mudaTermo = function () {
        this.texto = this.queryField.value;
    };
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.companyService.getCompany().subscribe(function (results$) { return _this.responseCompany = results$; });
        if (this.results$ == null) {
            setTimeout(function () {
                _this.showSpinner = false;
            }, 1000);
        }
    };
    CompanyComponent.prototype.showNotificatioSearch = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Busca Finlizada !<b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    CompanyComponent.ctorParameters = function () { return [
        { type: _company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __importDefault(__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html")).default
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/company.service.ts":
/*!********************************************!*\
  !*** ./src/app/company/company.service.ts ***!
  \********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.companyURListAll = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyURListAll;
        this.companyURLfindName = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyURLfindName;
        this.companyURLfindId = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyURLfindId;
        this.companyURLInsert = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyURLInsert;
        this.companyURLPut = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyURLPut;
    }
    CompanyService.prototype.getCompany = function () {
        return this.http.get(this.companyURListAll);
    };
    CompanyService.prototype.get = function (id) {
        return this.http.get("" + this.companyURLfindId + id);
    };
    CompanyService.prototype.createCompany = function (request) {
        return this.http.post(this.companyURLInsert, request);
    };
    CompanyService.prototype.update = function (id, data) {
        return this.http.put("" + this.companyURLPut + id, data);
    };
    CompanyService.prototype.updateStatus = function (id, data) {
        return this.http.put("" + this.companyURLPut + id, data);
    };
    CompanyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/company/create-company/create-company.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/company/create-company/create-company.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/company/create-company/create-company.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/company/create-company/create-company.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company/company.service.ts");
/* harmony import */ var _sector_sector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sector/sector.service */ "./src/app/sector/sector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CreateCompanyComponent = /** @class */ (function () {
    function CreateCompanyComponent(companyService, sectorService, formBuilder) {
        this.companyService = companyService;
        this.sectorService = sectorService;
        this.formBuilder = formBuilder;
        this.showSpinner = false;
        this.statusString = ['INATIVO', 'ATIVO'];
        // TODO: usado para salvar
        this.request = {
            cnpj: '',
            mainActivity: '',
            market: '',
            name: '',
            setorialClassification: '',
            site: '',
            status: '',
            sector: null
        };
    }
    // TODO: usado para gerar reconhecimento do combo
    CreateCompanyComponent.prototype.gerarForm = function () {
        this.companyForm = this.formBuilder.group({
            cnpj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            mainActivity: [null],
            market: [null],
            name: [null],
            setorialClassification: [null],
            site: [null],
            status: [null],
            sector: [null]
        });
    };
    CreateCompanyComponent.prototype.ngOnInit = function () {
        this.gerarForm();
        this.showSpinner = true;
        // TODO: Combo para Sector
        this.sectores$ = this.sectorService.getSector();
    };
    CreateCompanyComponent.prototype.save = function () {
        var _this = this;
        this.companyService.createCompany(this.request)
            .subscribe(function (data) {
            _this.showNotificationSucesso();
            _this.limpa();
        }, function (err) {
            _this.showNotificationErro();
        });
    };
    CreateCompanyComponent.prototype.limpa = function () {
        this.companyForm.reset();
    };
    CreateCompanyComponent.prototype.showNotificationSucesso = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Cadastrado com Sucesso <b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    CreateCompanyComponent.prototype.showNotificationErro = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Servidor Retornou ERRO !<b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    CreateCompanyComponent.ctorParameters = function () { return [
        { type: _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
        { type: _sector_sector_service__WEBPACK_IMPORTED_MODULE_3__["SectorService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-company',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/create-company/create-company.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create-company.component.css */ "./src/app/company/create-company/create-company.component.css")).default]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _sector_sector_service__WEBPACK_IMPORTED_MODULE_3__["SectorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/edit-company/edit-company.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company/edit-company/edit-company.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvZWRpdC1jb21wYW55L2VkaXQtY29tcGFueS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/company/edit-company/edit-company.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/edit-company/edit-company.component.ts ***!
  \****************************************************************/
/*! exports provided: EditCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyComponent", function() { return EditCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.service */ "./src/app/company/company.service.ts");
/* harmony import */ var _sector_sector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sector/sector.service */ "./src/app/sector/sector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var EditCompanyComponent = /** @class */ (function () {
    function EditCompanyComponent(companyService, sectorService, formBuilder, route, router) {
        this.companyService = companyService;
        this.sectorService = sectorService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.showSpinner = false;
        this.currentCompany = null;
        this.statusString = ['INATIVO', 'ATIVO'];
        // TODO: usado para salvar
        this.request = {
            cnpj: '',
            mainActivity: '',
            market: '',
            name: '',
            setorialClassification: '',
            site: '',
            status: '',
            sector: null
        };
    }
    // TODO: usado para gerar reconhecimento do combo
    EditCompanyComponent.prototype.gerarForm = function () {
        this.companyForm = this.formBuilder.group({
            cnpj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            mainActivity: [null],
            market: [null],
            name: [null],
            setorialClassification: [null],
            site: [null],
            status: [null],
            sector: [null]
        });
    };
    EditCompanyComponent.prototype.ngOnInit = function () {
        this.gerarForm();
        // TODO: Get para id/name... Company
        this.getCompany(this.route.snapshot.paramMap.get('id'));
        // TODO: Combo para Sector
        this.sectores$ = this.sectorService.getSector();
    };
    EditCompanyComponent.prototype.updateCompany = function () {
        var _this = this;
        this.companyService.update(this.currentCompany.id, this.currentCompany)
            .subscribe(function (response) {
            console.log(response);
            _this.showNotificationSucesso();
            console.log(response);
        }, function (error) {
            console.log(error);
            _this.showNotificationErro();
        });
    };
    EditCompanyComponent.prototype.getCompany = function (id) {
        var _this = this;
        this.companyService.get(id)
            .subscribe(function (data) {
            _this.currentCompany = data;
            console.log(data);
        }, function (error) {
            console.log(error);
            _this.showNotificationErro();
        });
    };
    EditCompanyComponent.prototype.showNotificationSucesso = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Atualizado com Sucesso !<b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    EditCompanyComponent.prototype.showNotificationErro = function () {
        var type = ['danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Tente Novamente, nada foi atualizado !<b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    EditCompanyComponent.ctorParameters = function () { return [
        { type: _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
        { type: _sector_sector_service__WEBPACK_IMPORTED_MODULE_4__["SectorService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    EditCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-company',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/edit-company/edit-company.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-company.component.css */ "./src/app/company/edit-company/edit-company.component.css")).default]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _sector_sector_service__WEBPACK_IMPORTED_MODULE_4__["SectorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditCompanyComponent);
    return EditCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ROUTES = [
    { path: '/brokerages', title: 'Listar Corretoras', icon: 'dialpad', class: '' },
    { path: '/create-brokerage', title: 'Nova Corretora', icon: 'border_color', class: '' },
    { path: '/company', title: 'Listar Empresas', icon: 'work', class: '' },
    { path: '/create-company', title: 'Nova Empresa', icon: 'border_color', class: '' },
    { path: '/wallet', title: 'Listar Carteiras', icon: 'attach_money', class: '' },
    { path: '/create-wallet', title: 'Nova Carteira', icon: 'monetization_on', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/emolumentos/emolumentos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/emolumentos/emolumentos.component.ts ***!
  \******************************************************/
/*! exports provided: EmolumentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmolumentosComponent", function() { return EmolumentosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _emolumentos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emolumentos.service */ "./src/app/emolumentos/emolumentos.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var EmolumentosComponent = /** @class */ (function () {
    function EmolumentosComponent(emolumentosService, http) {
        var _this = this;
        this.emolumentosService = emolumentosService;
        this.http = http;
        this.showSpinner = false;
        this.error = '';
        this.queryField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.texto = '';
        this.onSearch = function () {
            var value = _this.queryField.value.toUpperCase();
            if (value && (value = value.trim()) !== '') {
                _this.showSpinner = true;
                _this.results$ = _this.http
                    .get(_this.emolumentosService.emolumentosURLfindName + value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
                _this.showSpinner = false;
                _this.showNotificatioSearch();
            }
        };
    }
    EmolumentosComponent.prototype.mudaTermo = function () {
        this.texto = this.queryField.value;
    };
    EmolumentosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.emolumentosService.getEmolumentos().subscribe(function (results$) { return _this.responseEmolumentos = results$; });
        if (this.results$ == null) {
            setTimeout(function () {
                _this.showSpinner = false;
            }, 1000);
        }
    };
    EmolumentosComponent.prototype.showNotificatioSearch = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Busca Finlizada !<b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    EmolumentosComponent.ctorParameters = function () { return [
        { type: _emolumentos_service__WEBPACK_IMPORTED_MODULE_3__["EmolumentosService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmolumentosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emolumentos',
            template: __importDefault(__webpack_require__(/*! raw-loader!./emolumentos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/emolumentos/emolumentos.component.html")).default
        }),
        __metadata("design:paramtypes", [_emolumentos_service__WEBPACK_IMPORTED_MODULE_3__["EmolumentosService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmolumentosComponent);
    return EmolumentosComponent;
}());



/***/ }),

/***/ "./src/app/emolumentos/emolumentos.service.ts":
/*!****************************************************!*\
  !*** ./src/app/emolumentos/emolumentos.service.ts ***!
  \****************************************************/
/*! exports provided: EmolumentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmolumentosService", function() { return EmolumentosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var EmolumentosService = /** @class */ (function () {
    function EmolumentosService(http) {
        this.http = http;
        this.emolumentosURListAll = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emolumentosURListAll;
        this.emolumentosURLfindName = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emolumentosURLfindName;
        this.emolumentosURLfindId = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emolumentosURLfindId;
        this.emolumentosURLInsert = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emolumentosURLInsert;
        this.emolumentosURLPut = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emolumentosURLPut;
    }
    EmolumentosService.prototype.getEmolumentos = function () {
        return this.http.get(this.emolumentosURListAll);
    };
    EmolumentosService.prototype.get = function (id) {
        return this.http.get("" + this.emolumentosURLfindId + id);
    };
    EmolumentosService.prototype.createEmolumentos = function (request) {
        return this.http.post(this.emolumentosURLInsert, request);
    };
    EmolumentosService.prototype.update = function (id, data) {
        return this.http.put("" + this.emolumentosURLPut + id, data);
    };
    EmolumentosService.prototype.updateStatus = function (id, data) {
        return this.http.put("" + this.emolumentosURLPut + id, data);
    };
    EmolumentosService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    EmolumentosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmolumentosService);
    return EmolumentosService;
}());



/***/ }),

/***/ "./src/app/emolumentos/index.ts":
/*!**************************************!*\
  !*** ./src/app/emolumentos/index.ts ***!
  \**************************************/
/*! exports provided: EmolumentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emolumentos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emolumentos.component */ "./src/app/emolumentos/emolumentos.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmolumentosComponent", function() { return _emolumentos_component__WEBPACK_IMPORTED_MODULE_0__["EmolumentosComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.user = this.authenticationService.userValue;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.userService.getById(this.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (user) {
            _this.loading = false;
            _this.userFromApi = user;
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_5__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_5__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_5__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_5__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // TODO: redirecionar para home se já estiver logado
        if (this.authenticationService.userValue) {
            this.router.navigate(['/home']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // TODO: obter URL de retorno a partir dos parâmetros da rota ou padrão para '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // TODO: getter de conveniência para fácil acesso aos campos do formulário
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // TODO: pare aqui se o formulário for inválido
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/sector/sector.component.css":
/*!*********************************************!*\
  !*** ./src/app/sector/sector.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rvci9zZWN0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/sector/sector.component.ts":
/*!********************************************!*\
  !*** ./src/app/sector/sector.component.ts ***!
  \********************************************/
/*! exports provided: SectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorComponent", function() { return SectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SectorComponent = /** @class */ (function () {
    function SectorComponent() {
        this.φ = '1,61803398874988';
    }
    SectorComponent.prototype.ngOnInit = function () {
    };
    SectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sector',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sector/sector.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sector.component.css */ "./src/app/sector/sector.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SectorComponent);
    return SectorComponent;
}());



/***/ }),

/***/ "./src/app/sector/sector.service.ts":
/*!******************************************!*\
  !*** ./src/app/sector/sector.service.ts ***!
  \******************************************/
/*! exports provided: SectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorService", function() { return SectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SectorService = /** @class */ (function () {
    function SectorService(http) {
        this.http = http;
        this.companyURListAllSector = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyURListAllSector;
    }
    SectorService.prototype.getSector = function () {
        return this.http.get(this.companyURListAllSector);
    };
    SectorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SectorService);
    return SectorService;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.user = this.authenticationService.userValue;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.userService.getById(this.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (user) {
            _this.loading = false;
            _this.userFromApi = user;
        });
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __importDefault(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/wallet/create-wallet/create-wallet.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/wallet/create-wallet/create-wallet.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWalletComponent", function() { return CreateWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wallet.service */ "./src/app/wallet/wallet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CreateWalletComponent = /** @class */ (function () {
    function CreateWalletComponent(walletService, formBuilder, router) {
        this.walletService = walletService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.showSpinner = false;
        this.request = {
            modality: '',
            amount: '',
            situation: '',
            purchaseData: '',
            saleDate: '',
            actionValueDay: '',
            priceAction: '',
            brokerage: [],
            action: [],
            userEntity: [],
        };
    }
    CreateWalletComponent.prototype.gerarForm = function () {
        this.walletForm = this.formBuilder.group({
            modality: [null],
            amount: [null],
            situation: [null],
            purchaseData: [null],
            saleDate: [null],
            actionValueDay: [null],
            priceAction: [null],
            brokerage: [null],
            action: [null],
            userEntity: [null]
        });
    };
    CreateWalletComponent.prototype.ngOnInit = function () {
        this.gerarForm();
        this.showSpinner = true;
    };
    CreateWalletComponent.prototype.save = function () {
        var _this = this;
        this.walletService.createWallet(this.request)
            .subscribe(function (data) {
            _this.showNotificationSucesso();
            _this.limpa();
        }, function (err) {
            _this.showNotificationErro();
        });
    };
    CreateWalletComponent.prototype.limpa = function () {
        this.walletForm.reset();
    };
    CreateWalletComponent.prototype.showNotificationSucesso = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Cadastrado com Sucesso <b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    CreateWalletComponent.prototype.showNotificationErro = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Servidor Retornou ERRO !<b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    CreateWalletComponent.ctorParameters = function () { return [
        { type: _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CreateWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-wallet',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-wallet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/create-wallet/create-wallet.component.html")).default
        }),
        __metadata("design:paramtypes", [_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateWalletComponent);
    return CreateWalletComponent;
}());



/***/ }),

/***/ "./src/app/wallet/edit-wallet/edit-wallet.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/wallet/edit-wallet/edit-wallet.component.ts ***!
  \*************************************************************/
/*! exports provided: EditWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWalletComponent", function() { return EditWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var EditWalletComponent = /** @class */ (function () {
    function EditWalletComponent() {
    }
    EditWalletComponent.prototype.ngOnInit = function () {
    };
    EditWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-wallet',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-wallet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/edit-wallet/edit-wallet.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], EditWalletComponent);
    return EditWalletComponent;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.component.ts":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet.service */ "./src/app/wallet/wallet.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var WalletComponent = /** @class */ (function () {
    function WalletComponent(walletService, http) {
        var _this = this;
        this.walletService = walletService;
        this.http = http;
        this.showSpinner = false;
        this.queryField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.texto = '';
        this.onSearch = function () {
            var value = _this.queryField.value;
            if (value && (value = value.trim()) !== '') {
                _this.showSpinner = true;
                _this.results$ = _this.http
                    .get(_this.walletService.walletURLfindName + value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
                _this.showSpinner = false;
                _this.showNotificatioSearch();
            }
        };
    }
    WalletComponent.prototype.mudaTermo = function () {
        this.texto = this.queryField.value;
    };
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.walletService.getWallet().subscribe(function (res) { return _this.responseWallet = res; });
        if (this.results$ == null) {
            setTimeout(function () {
                _this.showSpinner = false;
            }, 1000);
        }
    };
    WalletComponent.prototype.showNotificatioSearch = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Busca Finlizada !<b></b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {},
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    WalletComponent.prototype.showNotificationLista = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Buscando no Servidor ... <b>MultBroker</b>'
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    WalletComponent.ctorParameters = function () { return [
        { type: _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __importDefault(__webpack_require__(/*! raw-loader!./wallet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.component.html")).default
        }),
        __metadata("design:paramtypes", [_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.service.ts":
/*!******************************************!*\
  !*** ./src/app/wallet/wallet.service.ts ***!
  \******************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var WalletService = /** @class */ (function () {
    function WalletService(http) {
        this.http = http;
        this.walletURListAll = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].walletURListAll;
        this.walletURLfindName = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].walletURLfindName;
        this.walletURLfindId = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].walletURLfindId;
        this.walletURLInsert = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].walletURLInsert;
        this.walletURLPut = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].walletURLPut;
    }
    WalletService.prototype.getWallet = function () {
        return this.http.get(this.walletURListAll);
    };
    WalletService.prototype.get = function (id) {
        return this.http.get("" + this.walletURLfindId + id);
    };
    WalletService.prototype.createWallet = function (request) {
        return this.http.post(this.walletURLInsert, request);
    };
    WalletService.prototype.update = function (id, data) {
        return this.http.put("" + this.walletURLPut + id, data);
    };
    WalletService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    WalletService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WalletService);
    return WalletService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: true,
    /*BROKERAGES   φ = '1,61803398874988'; */
    brokeragesURLInsert: 'http://177.47.18.202/zuul/brokerages/brokerages/',
    brokeragesURLListarTodos: 'http://177.47.18.202/zuul/brokerages/brokerages/ListaTodos/',
    brokeragesURLpainel: 'http://177.47.18.202/zuul//brokerages/brokerages/painel',
    brokeragesURLfindName: 'http://177.47.18.202/zuul/brokerages/brokerages/findbyname/',
    brokeragesURLfindId: 'http://177.47.18.202/zuul/brokerages/brokerages/findbyid',
    brokeragesURLfindAccount: 'http://177.47.18.202/zuul/brokerages/brokerages/findaccountsbyuser/',
    brokeragesURLPut: 'http://177.47.18.202/zuul/brokerages/brokerages/editar/',
    brokeragesURLPutUpdate: 'http://177.47.18.202/zuul/brokerages/brokerages/update/',
    brokeragesURLDelete: 'http://177.47.18.202/zuul/brokerages/brokerages/delete/',
    brokeragesURLStatus: 'http://177.47.18.202/zuul/brokerages/brokerages/status/check/',
    /*COMPANY*/
    companyURListAll: 'http://177.47.18.202/zuul/empresa/company/allResult/',
    companyURLfindName: 'http://177.47.18.202/zuul/empresa/company/findbyname/',
    companyURLfindId: 'http://177.47.18.202/zuul/empresa/company/findbyid/',
    companyURLInsert: 'http://177.47.18.202/zuul/empresa/company/insert',
    companyURLPut: 'http://177.47.18.202/zuul/empresa/company/edit/',
    companyURLPutStatus: 'http://177.47.18.202/zuul/empresa/company/edit/',
    companyURListAllSector: 'http://177.47.18.202/zuul/empresa/company/allResultSector/',
    /*WALLET*/
    walletURListAll: 'http://177.47.18.202/zuul/wallet/wallet/all',
    walletURLfindName: 'http://177.47.18.202/zuul/wallet/wallet/findbyname/',
    walletURLfindId: 'http://177.47.18.202/zuul/wallet/wallet/findbyid/',
    walletURLInsert: 'http://177.47.18.202/zuul/wallet/wallet/insert/',
    walletURLPut: 'http://177.47.18.202/zuul/wallet/wallet/edit/',
    /*LOGIN*/
    walletURlPost: 'http://177.47.18.202/zuul/users/users/login/',
    apiUrl: 'http://177.47.18.202/zuul/users/users/login/',
    /*EMOLUMENTOS*/
    emolumentosURListAll: 'http://177.47.18.202/zuul/emolumentos/emolumentos/all',
    emolumentosURLfindName: 'http://177.47.18.202/zuul/emolumentos/emolumentos/findbyname/',
    emolumentosURLfindId: 'http://177.47.18.202/zuul/emolumentos/emolumentos/findbyid/',
    emolumentosURLInsert: 'http://177.47.18.202/zuul/emolumentos/emolumentos/insert/',
    emolumentosURLPut: 'http://177.47.18.202/zuul/emolumentos/emolumentos/edit/',
    /*EMOLUMENTOS*/
    acoesURListAll: 'http://177.47.18.202/zuul/acoes/acoes/all',
    acoesURLfindName: 'http://177.47.18.202/zuul/acoes/acoes/findbyname/',
    acoesURLfindId: 'http://177.47.18.202/zuul/acoes/acoes/findbyid/',
    acoesURLInsert: 'http://177.47.18.202/zuul/acoes/acoes/insert/',
    acoesURLPut: 'http://177.47.18.202/zuul/acoes/acoes/edit/',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\usuario\Documents\Dev\multbrokerWebSkin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map