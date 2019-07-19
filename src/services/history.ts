import { Injectable } from "slick-for-svelte";
import { createBrowserHistory } from "history";


export const history = createBrowserHistory();
@Injectable()
export class HistoryProvider {
	getHistory() {
		return history;
	}
}
