export const NDFL = 0.13;

interface WageProps {
	value?: number;
	type?: WageType;
	withNDFL?: boolean;
}

class Wage {
	public value?: number = 0;
	public type: WageType = 0;
	public withNDFL: boolean = false;

	constructor(value: number | undefined = undefined, type: WageType = 0, withNDFL: boolean = false) {
		this.value = value;
		this.type = type;
		this.withNDFL = withNDFL;
	}

	public copy({ value, type, withNDFL }: WageProps) {
		return new Wage(
			value === undefined ? this.value : value,
			type === undefined ? this.type : type,
			withNDFL === undefined ? this.withNDFL : withNDFL
		);
	}

	public getEmployeeSum() {
		return this.withNDFL ? (1 - NDFL) * (this.value || 0) : this.value || 0;
	}

	public getNDFLSum() {
		return this.withNDFL ? NDFL * (this.value || 0) : (NDFL / (1 - NDFL)) * (this.value || 0);
	}

	public getExpenses() {
		return this.withNDFL ? this.value || 0 : (this.value || 0) / (1 - NDFL);
	}
}

export default Wage;

export enum WageType {
	Month,
	MROT,
	Day,
	Hour
}
