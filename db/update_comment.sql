update posts
set topic = $2, text = $3
where id = $1;

select * from posts;