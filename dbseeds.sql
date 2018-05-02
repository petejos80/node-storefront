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

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity) 
VALUES 
    (1,"Carpet", "Home & Garden", 40, 2400),
    (2,"Cast Iron Pot", "Kitchen", 60, 6830),
    (3,"Swivel Chair", "Office", 80, 7900),
    (4,"Sunglasses", "Apparel", 120, 9040),
    (5,"Sofa", "Home & Garden", 40, 3840),
    (6,"Table", "Office", 80, 6250),
    (7,"Dish Cloth", "Kitchen", 120, 7340),
    (8,"Spray Bottle", "Home & Garden", 60, 8790),
    (9,"Lamp", "Office", 800, 9580),
    (10,"Herb Garden", "Home & Garden", 400, 2830);
