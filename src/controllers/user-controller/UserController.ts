import List from './user-list.svelte';
import userPage from "./user-display.svelte";
import Layout from "./layout.svelte";
import ErrorLayout from "../../layout/error.svelte";
import Loading from "../../layout/loading.svelte";
import { Controller, View ,QUERYSTORE, CurrentParameter, Inject} from "slick-for-svelte";
import { GithubApi } from '../../services/github';




@Controller("/user",{
	layout:Layout,
	loading:Loading,
	error:ErrorLayout,
	pause:400
})
export class UserController {

	constructor(@Inject(GithubApi) private api:any){

	}

	@View("/all")
	async homepage(github:GithubApi) {

		let users = await github.getPage()
		return {
			view: List,
			users
		};
	}

	@View("/:username")
	async userpage(github:GithubApi){
		
		let username = CurrentParameter.value.username
		let user = await github.getUserByName(username)
		return {
			user,
			view:userPage
		}
	}
}
