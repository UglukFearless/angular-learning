export class DataService {
    private data: string[] = ['АК-47', 'M-16', 'AR-15'];

    getData(): string[] {
        return this.data;
    }

    addData(name: string) {
        this.data.push(name);
    }
}