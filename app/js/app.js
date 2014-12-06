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
  'ngCookies',
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
    VOLUNTEERS: 'Волонтёры',
    CONTACTS: 'Контакты',
    BAIKAL_JOURNEY_TITLE: 'Путешествие по Байкалу',
    BAIKAL_JOURNEY_DESCRIPTION: 'Откройте для себя мир красоты, чистого воздуха, птичек и цветочков.',
    BAIKAL_JOURNEY_BUTTON: 'ОТПРАВИТЬСЯ В ПУТЕШЕСТВИЕ',
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
    VOLUNTEERS: 'Volunteers',
    CONTACTS: 'Contacts',
    BAIKAL_JOURNEY_TITLE: 'Baikal Journey',
    BAIKAL_JOURNEY_DESCRIPTION: 'Discovery the world of beauty, fresh air, birds and flours.',
    BAIKAL_JOURNEY_BUTTON: 'GO TO JOURNEY',
  });
  $translateProvider.preferredLanguage('ru');
  $translateProvider.useLocalStorage();
});
