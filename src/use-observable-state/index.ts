import { useState } from 'react';
import { Observable } from 'rxjs';
import { useSelfDestructingSubscription } from '../use-self-destructing-subscription';

export function useObservableState<T = any>(observable: Observable<T>, initialValue: T): T {
    const [value, setValue] = useState<T>(initialValue);

    useSelfDestructingSubscription(() => observable.subscribe(setValue));

    return value;
}
