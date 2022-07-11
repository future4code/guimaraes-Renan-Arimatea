import { connection } from "./connections";

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

const createTables = () =>
  connection
    .raw(
      `
    CREATE TABLE IF NOT EXISTS labecommerce_users(
        id VARCHAR(45) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(45) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS labecommerce_products(
        id VARCHAR(45) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DOUBLE NOT NULL,
        image_url VARCHAR(255) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS labecommerce_purchases(
        id VARCHAR(45) PRIMARY KEY,
        user_id VARCHAR(45) NOT NULL,
        product_id VARCHAR(45) NOT NULL,
        quantity DOUBLE NOT NULL,
        total_price DOUBLE NOT NULL,
        FOREIGN KEY (user_id)
        REFERENCES labecommerce_users(id),
        FOREIGN KEY (product_id)
		REFERENCES labecommerce_products(id)
            ON UPDATE RESTRICT ON DELETE CASCADE
    );
`
    )
    .then(() => {
      console.log("Tabelas criadas");
    })
    .catch(printError);
const closeConnection = () => {
  connection.destroy();
};

createTables().finally(closeConnection);
