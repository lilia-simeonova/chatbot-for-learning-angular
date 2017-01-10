import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export abstract class ChatService {
	abstract send(message: string): Observable<Response>;
	abstract sendFeedback(listOfQuestions: any, listOfResults: any, value: any): Observable<Response>;
}

