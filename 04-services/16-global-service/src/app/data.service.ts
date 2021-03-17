import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

// @Injectable({providedIn: 'root'}) - установка глобального уровня
@Injectable()
export class DataService {

    private data: string[] = ['АК-47', 'M-16', 'AR-15'];

    constructor(@Optional() private logService: LogService) {}

    getData(): string[] {

        this.logInfo('Операция получения данных');
        return this.data;
    }

    addData(name: string) {

        this.logInfo('Операция добавления данных');
        this.data.push(name);
    }

    private logInfo(message: string) {
        	
        if (this.logService) {
            this.logService.info(message);
        }
    }
}