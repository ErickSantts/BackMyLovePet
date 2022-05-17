import { Column, Entity , JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Pessoa } from "./pessoa.entity";

@Entity({ name: 'pet'})
export class Pet{

    @PrimaryGeneratedColumn({name: 'id'})
    id?: number

    @Column({name: 'nome', type: 'varchar', length: 50})
    nome?: String

    @Column({name: 'raca', type: 'varchar', length:20})
    raca?: String

    @OneToOne(() => Pessoa, { eager:true })
    @JoinColumn({name:'dono_id'})
    dono?: Pessoa

    @Column({name: 'idade', type:'decimal'})
    idade?: number
}