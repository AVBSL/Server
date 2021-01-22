import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Project from "./Project";

@Entity()
class OAuthKeys {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column()
    public platform!: string;

    @Column()
    public key!: string;

    @Column()
    public secret!: string;

    @OneToMany(_ => Project, project => project.apiKeys)
    public project!: Project;
};

export default OAuthKeys;