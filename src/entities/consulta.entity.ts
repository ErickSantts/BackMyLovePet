import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pet } from "./pet.entity";
import { Pessoa } from "./pessoa.entity";

@Entity({ name: 'consulta' })
export class Consulta {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number

    @OneToOne(() => Pet)
    @JoinColumn({ name: 'pet_id' })
    pet?: Pet

    @OneToOne(() => Pessoa)
    @JoinColumn({ name: 'dono_id' })
    dono?: Pessoa

    @Column({ name: 'data_consulta', type: 'date' })
    dataConsulta?: Date

    @Column({ name: 'remedios', type: 'varchar', length: 500 })
    remedios?: String

    @Column({ name: 'valor', type: 'decimal' })
    valor?: number

    @Column({ name: 'detalhes', type: 'varchar', length: 1000 })
    detalhes?: String

    @OneToOne(() => Pessoa)
    @JoinColumn({name: 'veterinario_id'})
    veterinarioId?: Pessoa
}