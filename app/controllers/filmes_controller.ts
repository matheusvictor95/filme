import Filme from '#models/filme'
import type { HttpContext } from '@adonisjs/core/http'




export default class FilmesController {

    index({ }: HttpContext) {
        return Filme.query()
    }

    async show({ params }: HttpContext) {
        const id = params.id
        return await Filme.findOrFail(id)

    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'sinopse', 'duracao', 'classificacao', 'categoria_id'])
        return await Filme.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const dados = request.only(['nome', 'sinopse', 'duracao', 'classificacao', 'categoria_id'])
        const id = params.id
        const filme = await Filme.findOrFail(id)
        filme.merge(dados)
        await filme.save()
        return filme

    }

    async destroy({ params }: HttpContext) {
        const id = params.id
        const filme = await Filme.findOrFail(id)
        filme.delete()
    }
}