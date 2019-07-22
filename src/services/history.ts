import { Injectable } from "slick-for-svelte";
import { createBrowserHistory } from "history";


export const history = createBrowserHistory({
	keyLength:6
});
@Injectable()
export class HistoryProvider {
	getHistory() {
		return history;
	}
}
