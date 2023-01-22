class Car{
	constructor(name)
	{
		this.brand = name;
	}
	
	present()
	{
		console.log('I have a '+ this.brand);
	}
	
	genStrongPass(){
		 var password = '';

        var chars = '$@%_&!';
        var latters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var latters2 = "abcdefghijklmnopqrstuvwxyz";
        var numbers = "0123456789";

        for (var i = 0; i < 16; i++) {

            if (i == 0) {

                password += latters1.charAt(Math.floor(Math.random() * latters1.length));
                password += latters2.charAt(Math.floor(Math.random() * latters2.length));
                password += chars.charAt(Math.floor(Math.random() * chars.length));
                password += numbers.charAt(Math.floor(Math.random() * numbers.length));

            } else {

                var subpass = '';
                subpass += latters1.charAt(Math.floor(Math.random() * latters1.length));
                subpass += latters2.charAt(Math.floor(Math.random() * latters2.length));
                subpass += chars.charAt(Math.floor(Math.random() * chars.length));
                subpass += numbers.charAt(Math.floor(Math.random() * numbers.length));
                password += subpass.charAt(Math.floor(Math.random() * chars.length));

            }

        }
		
		return password;
	}
	
}

const mycar = new Car("Honda");
mycar.present();