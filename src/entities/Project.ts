import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Device from "./Device";
import OAuthKeys from "./OAuthKey";

@Entity()
class Project {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column()
    public name!: string;

    @OneToMany(_ => OAuthKeys, key => key.project)
    public apiKeys: OAuthKeys[] = [];

    @OneToMany(_ => Device, device => device.project)
    public devices: Device[] = [];
};

export default Project;