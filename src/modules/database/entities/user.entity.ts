import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async hashPasswordAndGenerateId() {
    this.id = randomUUID();
    this.password = await bcrypt.hash(this.password, 8);
  }
}
