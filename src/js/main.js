// Import Angular
import angular from 'angular';
import 'angular-ui-router';

// Import config and constants
import {config} from './config';
import {serverConstant} from './constants/server.constant';

// Import controllers
import {AddPhotoController} from './controllers/addphoto.controller.js';
import {HomeController} from './controllers/home.controller.js';


angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('AddPhotoController', AddPhotoController)
  .controller('HomeController', HomeController);
