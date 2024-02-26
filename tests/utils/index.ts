import { DataSource } from "typeorm";

export const truncate = async (connection: DataSource) => {
    const entites = connection.entityMetadatas;
    for (const entity of entites) {
        const repository = connection.getRepository(entity.name);
        await repository.clear();
    }
};
