

class Github {
	constructor(){
		this.client_id = 'b8e7d09f8ea9f147b706';
		this.client_secret = 'fb264162e5b3ab366a5dd9be3d974b54cb7bb890';
		this.repos_count=5;
		this.repos_sort="created: asc";

	}

	async getUser(user){
		let url=`https://api.github.com/users/${user}?client_id=b8e7d09f8ea9f147b706&client_secret=fb264162e5b3ab366a5dd9be3d974b54cb7bb890`;
		let url2=`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=b8e7d09f8ea9f147b706&client_secret=fb264162e5b3ab366a5dd9be3d974b54cb7bb890`;
		
		// let url=`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
		 let obj = await (await fetch(url)).json();
		 let obj2=await (await fetch(url2)).json();
			this.result=obj;
			this.repos=obj2;
	}
}