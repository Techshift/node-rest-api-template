export interface ArrayDbModel<T> {
	items: T[];
	skip: number;
	limit: number;
	total: number;
	hasMore: boolean;
}
