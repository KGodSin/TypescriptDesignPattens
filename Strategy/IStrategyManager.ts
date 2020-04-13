import Strategy from "./Strategy";
export default interface IStrategyManager {
	_strategy: Strategy | null | undefined;

	getStrategy: () => Strategy | undefined;
	setStrategy: (strategy: Strategy) => void;
}
