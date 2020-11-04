import { Data } from '@angular/router'
import { Tema } from './Tema'

export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public data: Data
    public tema: Tema
}