export interface IApiResponse<T> {
	error: boolean;
	message: string;
	data: T;
}
