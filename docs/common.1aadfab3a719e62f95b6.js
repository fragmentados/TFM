(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{z03L:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),new(e("t/Na").g)({"Content-Type":"application/json"});var i=function(){function t(t){this.http=t,this.ingredientUrl="http://192.168.0.15:8080/efw-back/ingredients"}return t.prototype.getIngredients=function(){return this.http.get(this.ingredientUrl)},t.prototype.deleteIngredient=function(t){return this.http.delete(this.ingredientUrl+"/"+t.id)},t.prototype.createIngredient=function(t){return this.http.post(this.ingredientUrl,t)},t}()}}]);