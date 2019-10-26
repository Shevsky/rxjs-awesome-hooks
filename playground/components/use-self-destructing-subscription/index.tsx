import React, { useState } from 'react';
import { useSelfDestructingSubscription } from 'rxjs-awesome-hooks';
import { Observable } from 'rxjs';

export function UseSelfDestructingSubscription({
    observableStore$,
    storeName
}: {
    observableStore$: Observable<number>;
    storeName: string;
}): JSX.Element {
    const [value, setValue] = useState<number>(-1);

    useSelfDestructingSubscription(() => observableStore$.subscribe(setValue), {
        onStart: (): void => console.log(`Start subscription on ${storeName}`),
        onStop: (): void => console.log(`Stop subscription on ${storeName}`)
    });

    return <div>{value}</div>;
}
