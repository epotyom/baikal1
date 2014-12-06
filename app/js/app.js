'use strict';

// Declare app level module which depends on views, and components
angular.module('baikalApp', [
  'ngRoute',
  'baikalApp.home',
  'baikalApp.about',
  'baikalApp.photo',
  'baikalApp.version',
  'baikalApp.services',
  'baikalApp.controllers',
  'pascalprecht.translate',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}])
.config(function ($translateProvider) {
  $translateProvider.translations('ru', {
    TITLE: 'Лига Байкальских Капитанов',
    COPYRIGHT_TEXT: 'Все права защищены',
    COPYRIGHT_AUTHOR: 'Александр Бурмейстер',
    PHOTO: 'Фото',
    SPRING: 'Весна',
    SUMMER: 'Лето',
    AUTUMN: 'Осень',
    WINTER: 'Зима',
    ABOUT_US: 'О нас',
    FAMILY: 'Семья',
    MEDIA: 'СМИ',
    CREATIVE: 'Творчество',
    YOGA: 'Йога',
    OUR_GUESTS: 'Наши гости',
    JOURNEY: 'Путешествия',
    CONTACTS: 'Контакты',
  });
  $translateProvider.translations('en', {
    TITLE: 'Baikal Captain Ligue',
    COPYRIGHT_TEXT: 'All rights reserved',
    COPYRIGHT_AUTHOR: 'Alexander Burmeister',
    PHOTO: 'Photo',
    SPRING: 'Spring',
    SUMMER: 'Summer',
    AUTUMN: 'Autumn',
    WINTER: 'Winter',
    ABOUT_US: 'About us',
    FAMILY: 'Family',
    MEDIA: 'Media',
    CREATIVE: 'Creative',
    YOGA: 'Yoga',
    OUR_GUESTS: 'Our guests',
    JOURNEY: 'Journey',
    CONTACTS: 'Contacts',
  });
  $translateProvider.preferredLanguage('ru');
});
