import React from 'react';
import { useBehaviorSubjectState } from 'rxjs-awesome-hooks';
import { BehaviorSubject } from 'rxjs';

export function UseBehaviorSubjectState({
    behaviorSubjectStore$
}: {
    behaviorSubjectStore$: BehaviorSubject<number>;
}): JSX.Element {
    const value = useBehaviorSubjectState<number>(behaviorSubjectStore$);

    return <div>{value}</div>;
}
