import "reflect-metadata";

import Template from "./Template.svelte";
import Error404 from "./404.svelte";
import {SlickForSvelteFactory,Injectable,Module,} from "slick-for-svelte";
import { UserController } from './controllers/user-controller/UserController';
import { HistoryProvider,history } from "./services/history";
import { GithubApi } from "./services/github";






@Module({
	controllers:[UserController],
	provider:[GithubApi]
})
export class ApplicationModule{

}


const app = SlickForSvelteFactory.create(ApplicationModule,{
	base:Template,
	history,
	component404:Error404,
	target:document.body
})

app.Initialize();
