import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Project from "./Project";


@Entity()
class Device {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column()
    public name!: string;

    @OneToMany(_ => Project, project => project.devices)
    public project!: Project;
};

export default Device;