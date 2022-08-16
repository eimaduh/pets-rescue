CREATE TABLE form_adoption(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
name VARCHAR(100) NOT NULL,
birthday DATE NOT NULL,
residence VARCHAR(11) NOT NULL,
availability INT NOT NULL,
motivation VARCHAR(500) NOT NULL
);

CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
name VARCHAR(100) NOT NULL,
username VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL);

CREATE TABLE pets(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
name VARCHAR(50) NOT NULL,
type VARCHAR(50) NOT NULL,
breed VARCHAR(50) NOT NULL,
image VARCHAR(100) NOT NULL
);

INSERT INTO pets(name, type, breed, image)
VALUES("Juninho Caramelo", "dog", "SRD Caramelho", "juninho_caramelo.jpg"),
("Duque", "dog", "SRD", "duque.jpg"), ("Ralph", "dog", "Rottweiler", "ralph.jpg"),
("Neve", "cat", "SRD", "neve.jpg"), ("Titan", "dog", "Rottweiler", "titan.jpg"),
("Sirus", "cat", "Norueguês da Floresta", "sirus.jpg"), ("Luke", "dog", "Pincher", "luke.jpg"),
("Lolla", "cat", "SDR", "lolla.jpg"), ("Venus", "dog", "Beagle", "venus.jpg"),
("Jujuba", "cat", "SRD", "jujuba.jpg"), ("Doddge", "dog", "PitBull", "doddge.jpg"),
("Lilly", "cat", "Siamês", "lilly.jpg"), ("Bob", "dog", "Pincher", "bob.jpg"),
("Baguera", "cat", "SRD", "baguera.jpg"), ("Savanna", "dog", "PitBull", "savanna.jpg"),
("Nina", "cat", "Angorá", "nina.jpg"), ("Loki", "dog", "SDR", "loki.jpg"),
("Suga", "cat", "SDR", "suga.jpg"), ("Taurus", "dog", "Bulldog", "taurus.jpg"),
("Baby", "cat", "SDR", "baby.jpg");



