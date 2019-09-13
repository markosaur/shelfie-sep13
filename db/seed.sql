create table productz(
id serial primary key,
name varchar(25),
price integer,
img text
);

insert into productz
(name, price, img)
values
('Honda Civic Type R', 37000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYulGXwgAxfM4NW4yJy6dQrAjGMItLLjRyYk7pVXJihgwcpDUEsw'),
('Jet Ski', 5000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeTTyhuWeBcyA1LGLK8x-JarlS9lpyYMFjCd2gjOLrm-UzHVSGw' ),
('Standing Desk', 300, 'https://images.app.goo.gl/HyTw4zc6WHovdBJGA');

select * from productz

update productz
set name = 'Ford Mustang GT'
where id = 3
;

update productz
set price = 37500
where id = 1;

select * from productz
order by id;