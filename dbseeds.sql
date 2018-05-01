DROP DATABASE IF EXISTS storefront_DB;
CREATE DATABASE storefront_DB;

USE storefront_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);