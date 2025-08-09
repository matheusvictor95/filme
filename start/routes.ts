/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import CategoriasController from '#controllers/categorias_controller'
import FilmesController from '#controllers/filmes_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/categorias',CategoriasController).apiOnly()
router.resource('/filmes',FilmesController).apiOnly()
//router.post('/filmes',[FilmesController,'store'])
