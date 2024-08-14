export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
  }
  
  export class UserModel {
    private db: any;
  
    constructor(db: any) {
      this.db = db;
    }
  
    async getUserByUsernameAndPassword(username: string, password: string): Promise<User | null> {
      const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
      const result = await this.db.query(query, [username, password]);
      return result.length > 0 ? result[0] : null;
    }
  }