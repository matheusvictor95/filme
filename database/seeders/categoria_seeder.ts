import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Categoria.createMany([
      { nome: 'Ação' },
      { nome: 'Romance' },
      { nome: 'Comédia' },
      { nome: 'Terror' },
      { nome: 'Aventura' }
    ])
  }
}