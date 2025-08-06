import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { HasMany } from '@adonisjs/lucid/types/relations'
import Categoria from './categoria.js'

export default class Filme extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string
  declare classificacao: string
  declare sinopse: string
  declare duracao: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Categoria )
    declare categorias: HasMany<typeof Categoria>
  }
