
			-- select product_name , price 
			-- from products 
			-- 	where price >(
			-- 		select AVG(price)from products  
			-- 	);

			-- select customer_name from customers 
			-- where customer_id in (
			-- 	select distinct customer_id from orders 
			-- ) ; 

			-- transaction 
			-- begin ;

			-- insert into orders (customer_id,order_date)
			-- values (1,current_date);

			-- insert into order_details (order_id ,quantity)
			-- values 
			-- (currval('orders_order_id_seq'),1.2),
			-- (currval('orders_order_id_seq'),2.1);
			-- commit; 
			-- rollback ; 

					-- select * from customers 

			-- 			begin ;
			-- 			update products 
			-- 			set category_id = 2 
			-- 			where product_id = 1

			-- 			insert into testproducts (product_name  , category_id)
			-- 			select product_name , category_id from products 
			-- 			where product_id = 1 ;
			-- 			commit; 

			-- rollback ; 
					-- view 

					-- create view view_products as 
					-- select p.product_id,p.product_name , p.price , c.category_name 
					-- from products  as p
					-- join 
					-- categories as  c 
					-- on p.category_id =c.category_id;

					-- select * from view_products where price >50 ;

					-- create view order_with_customer as 
					-- select 
					-- o.order_id , o.order_date , c.customer_name , c.city 
					-- from orders o 
					-- join customers c 
					-- on o.customer_id = c.customer_id ; 

					-- select * from order_with_customer; 

					-- 	drop view order_with_customer ; 
					
					-- select * from order_with_customer; 


					-- functions & procedure 
					-- create or replace function calc_total_price (P_product_id int ,p_quantity int)
					-- returns decimal(10,2)
					-- language plpgsql 
					-- as $$ 
					-- declare 
					-- product_price decimal(10,2);
					-- total decimal(10,2);
					-- begin 
					-- select price into product_price from products 
					-- where product_id = P_product_id;

					-- total = product_price * p_quantity ; 
					-- return total ; 
					-- end; 
					-- $$;

					-- select calc_total_price(1,5) ;


					-- prcedure 
					-- create or replace procedure safe_delete (p_product_id int)
					-- language plpgsql 
					-- as $$ 
					-- declare 
					-- order_count int ; 
					-- begin 
					-- select count(*) into  order_count from order_details 
					-- where product_id =p_product_id ; 

					-- if order_count = 0 then 
					-- delete from products where product_id = p_product_id ;

					-- raise notice 'product % deleted successfully',p_product_id;
					-- else 
					-- raise exception 'cannot delete product %',p_product_id ;
					-- end if ; 
					-- end;
					-- $$;
					
					-- call safe_delete(5);

					-- trigger 

						-- create or replace function prevent_delete()
						-- returns trigger 
						-- language plpgsql
						-- as $$
						-- begin 
						-- if exists (
						-- 		select 1 from oreder_details where product_id = old.product_id )
						-- 		then 
						-- 		raise exception 'cannot delete product ';
						-- 		end if ; 
						-- 		return old ; 
						-- 		end ; 
						-- 	$$; 

						-- create trigger tg_prevent 
						-- before delete on products 
						-- for each row 
						-- execute function prevent_delete()

							-- create or replace function prevent_low_price()
							-- returns trigger 
							--  language plpgsql
							-- as $$
							-- begin 
							-- if new.price <1 then 
							-- raise exception 'product must be at least 1 '; 
							-- end if ; 
							-- return new ;
							-- end ; 
							-- $$; 
						
							-- create trigger trg_check_price 
							-- before update on products 
							-- for each row 
							-- execute function prevent_low_price();
					
					


				-- index 
				-- select * from products where price = 50.00 ; 



				-- create index idx on products (category_id , price) ;
				-- 	drop index idx ; 


				-- privilages 
					create user ahmed password '123456';

					alter user ahmed password '123456789';

					drop user ahmed ; 

			-- privlages to users >>>>>>		select , insert , update , delete , all 

				-- grant select on products to ahmed ; 
				-- grant insert , delete  on products to ahmed ; 

				-- grant all privileges  on products to ahmed ; 

				-- revoke select on products from ahmed ; 


				-- create table parent_table ( id primary key , name varchar(50));

				-- create table child_table (
				-- 	int age ) inherits (parent table );
					
				
						
				




					
					