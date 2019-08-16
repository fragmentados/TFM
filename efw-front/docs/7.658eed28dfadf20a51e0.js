(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{unvr:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),r=u("Ip0R"),o=u("xdv0"),a=u("z03L"),s=function(){function l(l,n,u){this.router=l,this.userService=n,this.ingredientService=u,this.warningText="The food category of this ingredient is currently banned by you",this.currentUser=this.userService.currentUserValue}return l.prototype.ngOnInit=function(){var l=this;this.ingredientService.getUserIngredients(this.currentUser.id).subscribe(function(n){l.ingredients=n}),this.userService.getUserConfs(this.currentUser.id).subscribe(function(n){l.bannedCategories=n.bannedCategories})},l.prototype.updateIngredient=function(l){this.router.navigate(["/ingredients/updateIngredient",l.id])},l.prototype.deleteIngredient=function(l){var n=this;this.ingredientService.deleteIngredient(l).subscribe(function(u){n.ingredients=n.ingredients.filter(function(n){return n!==l})})},l.prototype.isBanned=function(l){return this.bannedCategories.filter(function(n){return n.id===l.category.id}).length>0},l}(),g=u("ZYCi"),c=e.pb({encapsulation:2,styles:[],data:{}});function b(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Ib(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit.value)})}function d(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,0,"img",[["height","32px"],["src","assets/warning.png"],["width","32px"]],[[8,"title",0]],null,null,null,null))],null,function(l,n){l(n,0,0,e.tb(1,"",n.component.warningText,""))})}function p(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,17,"tr",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"td",[["class","hidden"]],null,null,null,null,null)),(l()(),e.Ib(2,null,["",""])),(l()(),e.rb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Ib(4,null,["",""])),(l()(),e.rb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Ib(6,null,["",""])),(l()(),e.ib(16777216,null,null,1,null,b)),e.qb(8,278528,null,0,r.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.rb(9,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,d)),e.qb(11,16384,null,0,r.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(12,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.rb(13,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateIngredient(l.context.$implicit)&&e),e},null,null)),(l()(),e.Ib(-1,null,["Update"])),(l()(),e.rb(15,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.rb(16,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.deleteIngredient(l.context.$implicit)&&e),e},null,null)),(l()(),e.Ib(-1,null,["Delete"]))],function(l,n){var u=n.component;l(n,8,0,n.context.$implicit.stats),l(n,11,0,u.isBanned(n.context.$implicit))},function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.category.name)})}function h(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,28,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Ingredient Details"])),(l()(),e.rb(3,0,null,null,25,"table",[["class","table"],["show-filter","true"]],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,21,"thead",[],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,20,"tr",[],null,null,null,null,null)),(l()(),e.rb(6,0,null,null,1,"th",[["class","hidden"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Id"])),(l()(),e.rb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Name"])),(l()(),e.rb(10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Category"])),(l()(),e.rb(12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Calories"])),(l()(),e.rb(14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Fats"])),(l()(),e.rb(16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Proteins"])),(l()(),e.rb(18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Carbohydrates"])),(l()(),e.rb(20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Warning"])),(l()(),e.rb(22,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Update"])),(l()(),e.rb(24,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Delete"])),(l()(),e.rb(26,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,p)),e.qb(28,278528,null,0,r.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,28,0,n.component.ingredients)},null)}function m(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-ingredient",[],null,null,null,h,c)),e.qb(1,114688,null,0,s,[g.k,o.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var f=e.nb("app-ingredient",s,m,{},{},[]),C=u("gIcY"),v=function(){return function(){}}(),A=u("9xxV"),I=function(){function l(l,n,u){this.userService=l,this.router=n,this.ingredientService=u,this.ingredient=new v,this.categorySelectedBanned=!1,this.currentUser=this.userService.currentUserValue}return l.prototype.ngOnInit=function(){var l=this;this.ingredientService.foodCategories().subscribe(function(n){return l.categories=n}),this.userService.getUserConfs(this.currentUser.id).subscribe(function(n){return l.bannedCategories=n.bannedCategories})},l.prototype.estimateNutrition=function(){var l=this;this.ingredientService.nutritionEstimate(this.ingredient.name).subscribe(function(n){return l.fillIngredientWithStats(n.stats)})},l.prototype.fillIngredientWithStats=function(l){this.ingredient.calories=l.filter(function(l){return"Calories"===l.name})[0].value,this.ingredient.fats=l.filter(function(l){return"Fats"===l.name})[0].value,this.ingredient.proteins=l.filter(function(l){return"Proteins"===l.name})[0].value},l.prototype.checkBannedCategory=function(){var l=this;this.categorySelectedBanned=this.bannedCategories.filter(function(n){return n.id===l.ingredient.categoryId}).length>0},l.prototype.clearForm=function(){this.ingredient.name="",this.ingredient.categoryId=null,this.ingredient.calories=null,this.ingredient.carbohydrates=null,this.ingredient.proteins=null,this.ingredient.fats=null},l.prototype.createIngredient=function(){var l=this;this.ingredient.userId=this.currentUser.id,this.ingredientService.createIngredient(this.ingredient).subscribe(function(n){n.errorCode===A.b?(l.clearForm(),alert("Ingredient created successfully.")):alert(n.message)})},l}(),y=e.pb({encapsulation:0,styles:[[".horizontal-div[_ngcontent-%COMP%]{display:flex}.margin-left-label[_ngcontent-%COMP%]{margin-left:10px}"]],data:{}});function k(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.qb(1,147456,null,0,C.l,[e.k,e.E,[2,C.m]],{ngValue:[0,"ngValue"]},null),e.qb(2,147456,null,0,C.r,[e.k,e.E,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),e.Ib(3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,2,0,n.context.$implicit.id)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function q(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"label",[["for","categorySelect"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Categories:"])),(l()(),e.rb(3,0,null,null,10,"select",[["class","form-control"],["id","Categories"],["name","CategoriesSelect"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,i=l.component;return"change"===n&&(t=!1!==e.Ab(l,4).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,4).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.categoryId=u)&&t),"ngModelChange"===n&&(t=!1!==i.checkBannedCategory()&&t),t},null,null)),e.qb(4,16384,null,0,C.m,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l){return[l]},[C.m]),e.qb(6,671744,[["CategoriesSelect",4]],0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(8,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(9,0,null,null,2,"option",[],null,null,null,null,null)),e.qb(10,147456,null,0,C.l,[e.k,e.E,[2,C.m]],null,null),e.qb(11,147456,null,0,C.r,[e.k,e.E,[8,null]],null,null),(l()(),e.ib(16777216,null,null,1,null,k)),e.qb(13,278528,null,0,r.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,6,0,"CategoriesSelect",u.ingredient.categoryId),l(n,13,0,u.categories)},function(l,n){l(n,3,0,e.Ab(n,8).ngClassUntouched,e.Ab(n,8).ngClassTouched,e.Ab(n,8).ngClassPristine,e.Ab(n,8).ngClassDirty,e.Ab(n,8).ngClassValid,e.Ab(n,8).ngClassInvalid,e.Ab(n,8).ngClassPending)})}function M(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"font",[["color","red"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The Food Category you have selected is currently banned by you!!!"]))],null,null)}function S(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,77,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"h2",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Add Ingredient"])),(l()(),e.rb(3,0,null,null,74,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Ab(l,5).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Ab(l,5).onReset()&&t),t},null,null)),e.qb(4,16384,null,0,C.p,[],null,null),e.qb(5,4210688,null,0,C.j,[[8,null],[8,null]],null,null),e.Fb(2048,null,C.c,null,[C.j]),e.qb(7,16384,null,0,C.i,[[4,C.c]],null,null),(l()(),e.rb(8,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(9,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Name:"])),(l()(),e.rb(11,0,null,null,8,"div",[["style","display:flex;"]],null,null,null,null,null)),(l()(),e.rb(12,0,null,null,5,"input",[["class","form-control"],["id","Name"],["name","Name"],["placeholder","Name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,13)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,13).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,13)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,13)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.name=u)&&t),t},null,null)),e.qb(13,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.Fb(1024,null,C.f,function(l){return[l]},[C.d]),e.qb(15,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(17,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(18,0,null,null,1,"button",[["class","btn btn-success"],["style","margin-left: 10px;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.estimateNutrition()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Estimate Stats"])),(l()(),e.ib(16777216,null,null,1,null,q)),e.qb(21,16384,null,0,r.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(22,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(23,0,null,null,1,"label",[["for","proteins"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Proteins:"])),(l()(),e.rb(25,0,null,null,9,"div",[["class","horizontal-div"]],null,null,null,null,null)),(l()(),e.rb(26,0,null,null,6,"input",[["class","form-control"],["id","proteins"],["name","proteins"],["placeholder","Proteins"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,27)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,27).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,27)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,27)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Ab(l,28).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,28).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,28).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.proteins=u)&&t),t},null,null)),e.qb(27,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.qb(28,16384,null,0,C.o,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l,n){return[l,n]},[C.d,C.o]),e.qb(30,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(32,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(33,0,null,null,1,"label",[["class","margin-left-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" / 100 grams"])),(l()(),e.rb(35,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(36,0,null,null,1,"label",[["for","calories"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Calories:"])),(l()(),e.rb(38,0,null,null,9,"div",[["class","horizontal-div"]],null,null,null,null,null)),(l()(),e.rb(39,0,null,null,6,"input",[["class","form-control"],["id","calories"],["name","calories"],["placeholder","Calories"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,40)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,40).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,40)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,40)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Ab(l,41).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,41).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,41).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.calories=u)&&t),t},null,null)),e.qb(40,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.qb(41,16384,null,0,C.o,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l,n){return[l,n]},[C.d,C.o]),e.qb(43,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(45,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(46,0,null,null,1,"label",[["class","margin-left-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" / 100 grams"])),(l()(),e.rb(48,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(49,0,null,null,1,"label",[["for","fats"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Fats:"])),(l()(),e.rb(51,0,null,null,9,"div",[["class","horizontal-div"]],null,null,null,null,null)),(l()(),e.rb(52,0,null,null,6,"input",[["class","form-control"],["id","fats"],["name","fats"],["placeholder","Fats"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,53)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,53).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,53)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,53)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Ab(l,54).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,54).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,54).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.fats=u)&&t),t},null,null)),e.qb(53,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.qb(54,16384,null,0,C.o,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l,n){return[l,n]},[C.d,C.o]),e.qb(56,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(58,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(59,0,null,null,1,"label",[["class","margin-left-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" / 100 grams"])),(l()(),e.rb(61,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(62,0,null,null,1,"label",[["for","fats"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Carbohydrates:"])),(l()(),e.rb(64,0,null,null,9,"div",[["class","horizontal-div"]],null,null,null,null,null)),(l()(),e.rb(65,0,null,null,6,"input",[["class","form-control"],["id","carbohydrates"],["name","carbohydrates"],["placeholder","Carbohydrates"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,66)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,66).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,66)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,66)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Ab(l,67).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,67).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,67).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.carbohydrates=u)&&t),t},null,null)),e.qb(66,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.qb(67,16384,null,0,C.o,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l,n){return[l,n]},[C.d,C.o]),e.qb(69,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(71,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(72,0,null,null,1,"label",[["class","margin-left-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" / 100 grams"])),(l()(),e.ib(16777216,null,null,1,null,M)),e.qb(75,16384,null,0,r.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(76,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.createIngredient()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Create"]))],function(l,n){var u=n.component;l(n,15,0,"Name",u.ingredient.name),l(n,21,0,u.categories),l(n,30,0,"proteins",u.ingredient.proteins),l(n,43,0,"calories",u.ingredient.calories),l(n,56,0,"fats",u.ingredient.fats),l(n,69,0,"carbohydrates",u.ingredient.carbohydrates),l(n,75,0,u.categorySelectedBanned)},function(l,n){l(n,3,0,e.Ab(n,7).ngClassUntouched,e.Ab(n,7).ngClassTouched,e.Ab(n,7).ngClassPristine,e.Ab(n,7).ngClassDirty,e.Ab(n,7).ngClassValid,e.Ab(n,7).ngClassInvalid,e.Ab(n,7).ngClassPending),l(n,12,0,e.Ab(n,17).ngClassUntouched,e.Ab(n,17).ngClassTouched,e.Ab(n,17).ngClassPristine,e.Ab(n,17).ngClassDirty,e.Ab(n,17).ngClassValid,e.Ab(n,17).ngClassInvalid,e.Ab(n,17).ngClassPending),l(n,26,0,e.Ab(n,32).ngClassUntouched,e.Ab(n,32).ngClassTouched,e.Ab(n,32).ngClassPristine,e.Ab(n,32).ngClassDirty,e.Ab(n,32).ngClassValid,e.Ab(n,32).ngClassInvalid,e.Ab(n,32).ngClassPending),l(n,39,0,e.Ab(n,45).ngClassUntouched,e.Ab(n,45).ngClassTouched,e.Ab(n,45).ngClassPristine,e.Ab(n,45).ngClassDirty,e.Ab(n,45).ngClassValid,e.Ab(n,45).ngClassInvalid,e.Ab(n,45).ngClassPending),l(n,52,0,e.Ab(n,58).ngClassUntouched,e.Ab(n,58).ngClassTouched,e.Ab(n,58).ngClassPristine,e.Ab(n,58).ngClassDirty,e.Ab(n,58).ngClassValid,e.Ab(n,58).ngClassInvalid,e.Ab(n,58).ngClassPending),l(n,65,0,e.Ab(n,71).ngClassUntouched,e.Ab(n,71).ngClassTouched,e.Ab(n,71).ngClassPristine,e.Ab(n,71).ngClassDirty,e.Ab(n,71).ngClassValid,e.Ab(n,71).ngClassInvalid,e.Ab(n,71).ngClassPending)})}function P(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"ng-component",[],null,null,null,S,y)),e.qb(1,114688,null,0,I,[o.a,g.k,a.a],null,null)],function(l,n){l(n,1,0)},null)}var F=e.nb("ng-component",I,P,{},{},[]),E=function(){return function(){}}(),T=function(){function l(l,n,u){var e=this;this.route=l,this.ingredientService=n,this.userService=u,this.ingredient=new E,this.route.params.subscribe(function(l){return e.ingredientId=l.id}),this.currentUser=this.userService.currentUserValue}return l.prototype.ngOnInit=function(){var l=this;this.ingredientService.foodCategories().subscribe(function(n){return l.categories=n}),this.ingredientService.getIngredient(this.ingredientId).subscribe(function(n){return l.ingredient=l.ingredientToUpdateIngredient(n)})},l.prototype.estimateNutrition=function(){var l=this;this.ingredientService.nutritionEstimate(this.ingredient.name).subscribe(function(n){return l.fillIngredientWithStats(n.stats)})},l.prototype.fillIngredientWithStats=function(l){this.ingredient.calories=l.filter(function(l){return"Calories"===l.name})[0].value,this.ingredient.fats=l.filter(function(l){return"Fats"===l.name})[0].value,this.ingredient.proteins=l.filter(function(l){return"Proteins"===l.name})[0].value},l.prototype.ingredientToUpdateIngredient=function(l){var n=new E;return n.name=l.name,n.calories=l.stats.filter(function(l){return"Calories"===l.name})[0].value,n.proteins=l.stats.filter(function(l){return"Proteins"===l.name})[0].value,n.fats=l.stats.filter(function(l){return"Fats"===l.name})[0].value,n.carbohydrates=l.stats.filter(function(l){return"Carbohydrates"===l.name})[0].value,n.categoryId=l.category.id,n.userId=this.currentUser.id,n},l.prototype.updateIngredient=function(){this.ingredientService.updateIngredient(this.ingredientId,this.ingredient).subscribe(function(l){l.errorCode===A.b?alert("Ingredient updated successfully."):alert(l.message)})},l}(),U=e.pb({encapsulation:0,styles:[[".horizontal-div[_ngcontent-%COMP%]{display:flex}.margin-left-label[_ngcontent-%COMP%]{margin-left:10px}"]],data:{}});function _(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.qb(1,147456,null,0,C.l,[e.k,e.E,[2,C.m]],{ngValue:[0,"ngValue"]},null),e.qb(2,147456,null,0,C.r,[e.k,e.E,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),e.Ib(3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,2,0,n.context.$implicit.id)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function x(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"label",[["for","categorySelect"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Categories:"])),(l()(),e.rb(3,0,null,null,7,"select",[["class","form-control"],["id","Categories"],["name","CategoriesSelect"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,i=l.component;return"change"===n&&(t=!1!==e.Ab(l,4).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,4).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.categoryId=u)&&t),t},null,null)),e.qb(4,16384,null,0,C.m,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l){return[l]},[C.m]),e.qb(6,671744,[["CategoriesSelect",4]],0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(8,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.ib(16777216,null,null,1,null,_)),e.qb(10,278528,null,0,r.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,6,0,"CategoriesSelect",u.ingredient.categoryId),l(n,10,0,u.categories)},function(l,n){l(n,3,0,e.Ab(n,8).ngClassUntouched,e.Ab(n,8).ngClassTouched,e.Ab(n,8).ngClassPristine,e.Ab(n,8).ngClassDirty,e.Ab(n,8).ngClassValid,e.Ab(n,8).ngClassInvalid,e.Ab(n,8).ngClassPending)})}function V(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,75,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"h2",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Update Ingredient"])),(l()(),e.rb(3,0,null,null,72,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Ab(l,5).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Ab(l,5).onReset()&&t),t},null,null)),e.qb(4,16384,null,0,C.p,[],null,null),e.qb(5,4210688,null,0,C.j,[[8,null],[8,null]],null,null),e.Fb(2048,null,C.c,null,[C.j]),e.qb(7,16384,null,0,C.i,[[4,C.c]],null,null),(l()(),e.rb(8,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(9,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Name:"])),(l()(),e.rb(11,0,null,null,8,"div",[["style","display:flex;"]],null,null,null,null,null)),(l()(),e.rb(12,0,null,null,5,"input",[["class","form-control"],["id","Name"],["name","Name"],["placeholder","Name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,13)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,13).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,13)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,13)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.name=u)&&t),t},null,null)),e.qb(13,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.Fb(1024,null,C.f,function(l){return[l]},[C.d]),e.qb(15,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(17,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(18,0,null,null,1,"button",[["class","btn btn-success"],["style","margin-left: 10px;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.estimateNutrition()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Estimate Stats"])),(l()(),e.ib(16777216,null,null,1,null,x)),e.qb(21,16384,null,0,r.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(22,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(23,0,null,null,1,"label",[["for","proteins"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Proteins:"])),(l()(),e.rb(25,0,null,null,9,"div",[["class","horizontal-div"]],null,null,null,null,null)),(l()(),e.rb(26,0,null,null,6,"input",[["class","form-control"],["id","proteins"],["name","proteins"],["placeholder","Proteins"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,27)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,27).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,27)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,27)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Ab(l,28).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,28).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,28).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.proteins=u)&&t),t},null,null)),e.qb(27,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.qb(28,16384,null,0,C.o,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l,n){return[l,n]},[C.d,C.o]),e.qb(30,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(32,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(33,0,null,null,1,"label",[["class","margin-left-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" / 100 grams"])),(l()(),e.rb(35,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(36,0,null,null,1,"label",[["for","calories"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Calories:"])),(l()(),e.rb(38,0,null,null,9,"div",[["class","horizontal-div"]],null,null,null,null,null)),(l()(),e.rb(39,0,null,null,6,"input",[["class","form-control"],["id","calories"],["name","calories"],["placeholder","Calories"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,40)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,40).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,40)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,40)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Ab(l,41).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,41).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,41).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.calories=u)&&t),t},null,null)),e.qb(40,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.qb(41,16384,null,0,C.o,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l,n){return[l,n]},[C.d,C.o]),e.qb(43,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(45,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(46,0,null,null,1,"label",[["class","margin-left-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" / 100 grams"])),(l()(),e.rb(48,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(49,0,null,null,1,"label",[["for","fats"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Fats:"])),(l()(),e.rb(51,0,null,null,9,"div",[["class","horizontal-div"]],null,null,null,null,null)),(l()(),e.rb(52,0,null,null,6,"input",[["class","form-control"],["id","fats"],["name","fats"],["placeholder","Fats"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,53)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,53).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,53)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,53)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Ab(l,54).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,54).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,54).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.fats=u)&&t),t},null,null)),e.qb(53,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.qb(54,16384,null,0,C.o,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l,n){return[l,n]},[C.d,C.o]),e.qb(56,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(58,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(59,0,null,null,1,"label",[["class","margin-left-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" / 100 grams"])),(l()(),e.rb(61,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(62,0,null,null,1,"label",[["for","fats"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Carbohydrates:"])),(l()(),e.rb(64,0,null,null,9,"div",[["class","horizontal-div"]],null,null,null,null,null)),(l()(),e.rb(65,0,null,null,6,"input",[["class","form-control"],["id","carbohydrates"],["name","carbohydrates"],["placeholder","Carbohydrates"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,66)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,66).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,66)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,66)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Ab(l,67).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,67).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,67).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.ingredient.carbohydrates=u)&&t),t},null,null)),e.qb(66,16384,null,0,C.d,[e.E,e.k,[2,C.a]],null,null),e.qb(67,16384,null,0,C.o,[e.E,e.k],null,null),e.Fb(1024,null,C.f,function(l,n){return[l,n]},[C.d,C.o]),e.qb(69,671744,null,0,C.k,[[2,C.c],[8,null],[8,null],[6,C.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,C.g,null,[C.k]),e.qb(71,16384,null,0,C.h,[[4,C.g]],null,null),(l()(),e.rb(72,0,null,null,1,"label",[["class","margin-left-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" / 100 grams"])),(l()(),e.rb(74,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateIngredient()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Update"]))],function(l,n){var u=n.component;l(n,15,0,"Name",u.ingredient.name),l(n,21,0,u.categories),l(n,30,0,"proteins",u.ingredient.proteins),l(n,43,0,"calories",u.ingredient.calories),l(n,56,0,"fats",u.ingredient.fats),l(n,69,0,"carbohydrates",u.ingredient.carbohydrates)},function(l,n){l(n,3,0,e.Ab(n,7).ngClassUntouched,e.Ab(n,7).ngClassTouched,e.Ab(n,7).ngClassPristine,e.Ab(n,7).ngClassDirty,e.Ab(n,7).ngClassValid,e.Ab(n,7).ngClassInvalid,e.Ab(n,7).ngClassPending),l(n,12,0,e.Ab(n,17).ngClassUntouched,e.Ab(n,17).ngClassTouched,e.Ab(n,17).ngClassPristine,e.Ab(n,17).ngClassDirty,e.Ab(n,17).ngClassValid,e.Ab(n,17).ngClassInvalid,e.Ab(n,17).ngClassPending),l(n,26,0,e.Ab(n,32).ngClassUntouched,e.Ab(n,32).ngClassTouched,e.Ab(n,32).ngClassPristine,e.Ab(n,32).ngClassDirty,e.Ab(n,32).ngClassValid,e.Ab(n,32).ngClassInvalid,e.Ab(n,32).ngClassPending),l(n,39,0,e.Ab(n,45).ngClassUntouched,e.Ab(n,45).ngClassTouched,e.Ab(n,45).ngClassPristine,e.Ab(n,45).ngClassDirty,e.Ab(n,45).ngClassValid,e.Ab(n,45).ngClassInvalid,e.Ab(n,45).ngClassPending),l(n,52,0,e.Ab(n,58).ngClassUntouched,e.Ab(n,58).ngClassTouched,e.Ab(n,58).ngClassPristine,e.Ab(n,58).ngClassDirty,e.Ab(n,58).ngClassValid,e.Ab(n,58).ngClassInvalid,e.Ab(n,58).ngClassPending),l(n,65,0,e.Ab(n,71).ngClassUntouched,e.Ab(n,71).ngClassTouched,e.Ab(n,71).ngClassPristine,e.Ab(n,71).ngClassDirty,e.Ab(n,71).ngClassValid,e.Ab(n,71).ngClassInvalid,e.Ab(n,71).ngClassPending)})}function z(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"ng-component",[],null,null,null,V,U)),e.qb(1,114688,null,0,T,[g.a,a.a,o.a],null,null)],function(l,n){l(n,1,0)},null)}var D=e.nb("ng-component",T,z,{},{},[]),N=u("t/Na"),O=function(){return function(){}}();u.d(n,"IngredientModuleNgFactory",function(){return w});var w=e.ob(t,[],function(l){return e.yb([e.zb(512,e.j,e.cb,[[8,[i.a,f,F,D]],[3,e.j],e.x]),e.zb(4608,r.l,r.k,[e.u,[2,r.v]]),e.zb(4608,C.q,C.q,[]),e.zb(4608,a.a,a.a,[N.c]),e.zb(4608,o.a,o.a,[N.c]),e.zb(1073742336,r.b,r.b,[]),e.zb(1073742336,C.n,C.n,[]),e.zb(1073742336,C.e,C.e,[]),e.zb(1073742336,g.m,g.m,[[2,g.s],[2,g.k]]),e.zb(1073742336,O,O,[]),e.zb(1073742336,t,t,[]),e.zb(1024,g.i,function(){return[[{path:"",component:s},{path:"addIngredient",component:I},{path:"updateIngredient/:id",component:T}]]},[])])})}}]);