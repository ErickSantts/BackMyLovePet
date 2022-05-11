import { Column, Entity , PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'pessoa'})
export class Pessoa{

    @PrimaryGeneratedColumn({name: 'id'})
    id?: number

    @Column({name: 'nome', type: 'varchar', length: 50})
    name?: String

    @Column({name: 'email', type: 'varchar', length: 50})
    email?: String

    @Column({name: 'contato', type: 'varchar', length: 15})
    contato?: String

    @Column({name: 'datanascimento', type: 'date'})
    dataNascimento?: Date | String

    @Column({name: 'senha', type: 'varchar', length: 20})
    senha?: String

    @Column({name: 'perfil', type: 'varchar', length: 20})
    perfil?: String

    @Column({name: 'data_insercao', type: 'date'})
    dataInsercao?: Date | String

    @Column({name: 'data_remocao', type: 'date'})
    dataRemocao?: Date | String

    
}