'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const db = use('App/Models/User')

Route.on('/').render('welcome');

//CRUD
Route.get('/getAllUsers', 'UsersController.readAll')
Route.get('/create', 'UsersController.create')
Route.get('/readById', 'UsersController.readById')
Route.get('/delete', 'UsersController.delete')