import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdminsTable1724548034678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "admins",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "login",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable(`admins`);
    }

}
