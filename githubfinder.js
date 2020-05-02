

const searchUser=document.querySelector("#searchUser");
const ui=new UI();


const getResult=async ()=>{
	ui.clearProfile();
	ui.clearAlertDOM();
	const inputText=searchUser.value;
	if(inputText!==""){
		ui.clearAlertDOM();
		const user=new Github();
		await user.getUser(inputText);
		const userObj=user.result;
		const userRepos=user.repos;
			if(userObj.message==="Not Found"){
					ui.showAlert("User not found", "alert alert-danger");
			}else{
				ui.showProfile(userObj);
				ui.showRepos(userRepos);
			}
	}else{
		ui.clearProfile();
	}
	
	
}

searchUser.addEventListener("input", e=>{
	getResult();
	
	
})