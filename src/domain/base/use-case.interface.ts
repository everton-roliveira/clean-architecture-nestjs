export interface IUseCase<T> {
  execute(...args: any[]): Promise<T>;
}
