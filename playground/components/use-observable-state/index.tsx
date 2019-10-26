import React from 'react';
import { useObservableState } from 'rxjs-awesome-hooks';
import { Observable } from 'rxjs';

export function UseObservableState({
    observableStore$
}: {
    observableStore$: Observable<number>;
}): JSX.Element {
    const value = useObservableState<number>(observableStore$, -1);

    return <div>{value}</div>;
}
