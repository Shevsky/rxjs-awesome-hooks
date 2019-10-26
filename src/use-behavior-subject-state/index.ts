import { BehaviorSubject } from 'rxjs';
import { useObservableState } from '../use-observable-state';

export function useBehaviorSubjectState<T = any>(subject: BehaviorSubject<T>): T {
    return useObservableState<T>(subject, subject.getValue());
}
