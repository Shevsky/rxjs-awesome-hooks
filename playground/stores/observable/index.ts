import { Observable, timer } from 'rxjs';
import { share } from 'rxjs/internal/operators';

export const observableStore$: Observable<number> = timer(0, 1000).pipe(share());
