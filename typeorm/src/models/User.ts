import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @CreateDateColumn({
    type: "timestamp", default: () => "CURRENT_TIMESTAMP()"
  })
  public created_at: Date | undefined;

  @Column()
  @UpdateDateColumn({
    type: "timestamp", default: () => "CURRENT_TIMESTAMP()",
    onUpdate: "CURRENT_TIMESTAMP()"
  })
  public updated_at: Date | undefined;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export default User;