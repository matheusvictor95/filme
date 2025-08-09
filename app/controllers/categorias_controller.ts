 import Categoria from '#models/categoria'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriasController {

     index({ }: HttpContext) {
            return Categoria.query()
        }
    
        async show({ params }: HttpContext) {
            const id = params.id
            return await Categoria.findOrFail(id)
    
        }
    
        async store({ request }: HttpContext) {
            const dados = request.only(['nome'])
            return await Categoria.create(dados)
        }
    
        async update({ params, request }: HttpContext) {
            const dados = request.only(['nome'])
            const id = params.id
            const categoria = await Categoria.findOrFail(id)
            categoria.merge(dados)
            await categoria.save()
            return categoria
    
        }
    
        async destroy({ params }: HttpContext) {
            const id = params.id
            const categoria = await Categoria.findOrFail(id)
            categoria.delete()
        }
}