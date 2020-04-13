import IStrategyManager from "./IStrategyManager";
import Strategy from "./Strategy";

export default class StrategyManager implements IStrategyManager {
	_strategy: Strategy | undefined;

	getStrategy(): Strategy | Strategy | undefined {
		try {
			if (this._strategy instanceof Strategy) {
				return this._strategy;
			}
		} catch (err) {
			console.error("_strategy is undefined");
		}
	}

	setStrategy(strategy: Strategy) {
		this._strategy = strategy;
	}
}
