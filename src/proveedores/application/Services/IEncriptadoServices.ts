export interface IEncriptadoServices{
    hashPassword(password:string):string
    authPassword(word:string, passwordHash:string):boolean
}