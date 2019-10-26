# RxJS Awesome Hooks

## Установка
>npm i rxjs-awesome-hooks
>
>yarn add rxjs-awesome-hooks

## Playground
>https://shevsky.github.io/rxjs-awesome-hooks/

## Доступные хуки
### useSelfDestructingSubscription
Хук создаст указанную подписку и сам ее уничтожит при размонтировании

```typescript jsx
import React, { useState } from 'react';
import { Observable, Subscription } from 'rxjs';
import { useSelfDestructingSubscription } from 'rxjs-awesome-hooks';

declare const fooStore$: Observable<number>;

function FooComponent(): JSX.Element {
  const [value, setValue] = useState<number>(-1);

  useSelfDestructingSubscription(() => fooStore$.subscribe(setValue));

  return <div>{value}</div>;
}
```

### useObservableState
Хук создаст отслеживаниемое состояние на основе Rx.Observable

```typescript jsx
import React from 'react';
import { Observable } from 'rxjs';
import { useObservableState } from 'rxjs-awesome-hooks';

declare const fooStore$: Observable<number>;

function FooComponent(): JSX.Element {
    const value = useObservableState<number>(fooStore$, -1);

    return <div>{value}</div>;
}
```

### useBehaviorSubjectState
Хук создаст отслеживаемое состояние на основе Rx.BehaviorSubject и задаст текущее значение BehaviorSubject как состояние по умолчанию

```typescript jsx
import React from 'react';
import { BehaviorSubject } from 'rxjs';
import { useBehaviorSubjectState } from 'rxjs-awesome-hooks';

declare const fooStore$: BehaviorSubject<number>;

function FooComponent(): JSX.Element {
  const value = useBehaviorSubjectState<number>(fooStore$);

  return <div>{value}</div>;
}
```
