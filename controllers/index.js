var fn_index = async (ctx, next)=>{
	ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value=""></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
} 

var fn_signin = async (ctx, next)=>{
	console.log(ctx.request.body)
	var 
	  name = ctx.request.body.name || '',
	  password = ctx.request.body.password || ''
	console.log('singin with name: '+ name +',password: '+ password)
	if(name == 'lucien' && password == '123123'){
		ctx.response.body = '<h1>Welcome, '+ name +'</h1>'
	}else{
		ctx.response.body = '<h1>Login failed</h1> <p><a href="/">Try again</a></p>'
	}
}


module.exports = {
	'GET /':fn_index,//一定要空格
	'POST /signin':fn_signin
}