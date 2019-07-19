import { Injectable,CurrentQuery, CurrentParameter } from "slick-for-svelte";





@Injectable()
export class GithubApi{

    private apiUrl = "https://api.github.com"

    async getPage(){
        let res = await fetch(`${this.apiUrl}/users?since=${this.page}`)
        let users = await res.json()
        return users;
    }


    async getUserByName(username:string){
        let res = await fetch(`${this.apiUrl}/users/${username}`)
        let users = await res.json()
        return users;
    }

    private get page(){
        let since = (CurrentQuery.value.page || 1) -1;
        return since * 30;
    }


}