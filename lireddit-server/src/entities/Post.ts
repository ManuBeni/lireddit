import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {

//   [OptionalProps]?: 'createdAt' | 'updatedAt';
    
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  createdAt?: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt?: Date = new Date();

}