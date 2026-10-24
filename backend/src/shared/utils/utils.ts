import * as bcrypt from 'bcrypt';
export class Utils {
  public static generateUUID(): string {
    return crypto.randomUUID();
  }
  
  public static async encryptPassword(password: string): Promise<string>{
    const salt = this.generateSalt();
    return bcrypt.hashSync(password, await salt);
  }
  
  public static comparePassword(password: string, hashedPassword: string
  ): boolean{
    return bcrypt.compareSync(password, hashedPassword);
  }
  
  private static async generateSalt(): Promise<string>{
    return await bcrypt.genSalt(1);
  }
}
