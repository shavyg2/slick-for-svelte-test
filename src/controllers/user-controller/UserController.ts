import List from './user-list.svelte';
import userPage from "./user-display.svelte";
import Main from "../../layout/main.svelte";
import { Controller, View ,QUERYSTORE, CurrentParameter} from "slick-for-svelte";
import { GithubApi } from '../../services/github';




@Controller("/user")
export class UserController {
	@View("/all")
	async homepage(github:GithubApi) {
		return {
			view: List,
			preload:github.getPage(),
			layout:Main
		};
	}

	@View("/:username")
	async userpage(github:GithubApi){
		let username = CurrentParameter.value.username
		let user = await github.getUserByName(username)
		return {
			preload:user,
			view:userPage,
			layout:Main
		}
	}

	
}
