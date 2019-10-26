import { BehaviorSubject, timer } from 'rxjs';

const behaviorSubjectStore$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

timer(0, 2000).subscribe((value: number) => behaviorSubjectStore$.next(value));

export { behaviorSubjectStore$ };
