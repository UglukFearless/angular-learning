import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {

    private data: string[] = ['АК-47', 'M-16', 'AR-15'];

    constructor(private logService: LogService) {}

    getData(): string[] {

        this.logService.info('Операция получения данных');
        return this.data;
    }

    addData(name: string) {

        this.logService.info('Операция добавления данных');
        this.data.push(name);
    }
}