import { IEncriptadoServices } from "../../application/Services/IEncriptadoServices";
import bcrypt from "bcrypt";

export class EncriptadoServices implements IEncriptadoServices {
  hashPassword(password: string): string {
    const pass = bcrypt.hashSync(password, 10);
    return pass;
  }
  authPassword(word: string, passwordHash: string): boolean {
    let result = bcrypt.compareSync(word, passwordHash);
    return result;
  }
}
