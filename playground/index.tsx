import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { UseSelfDestructingSubscription } from './components/use-self-destructing-subscription';
import { UseObservableState } from './components/use-observable-state';
import { UseBehaviorSubjectState } from './components/use-behavior-subject-state';
import { observableStore$ } from './stores/observable';
import { behaviorSubjectStore$ } from './stores/behavior-subject';
import { getVarName } from './helpers/get-var-name';

function App(): JSX.Element {
    const [
        selfDestructingSubscriptionMountState,
        selfDestructingSubscriptionMountStateChange
    ] = useState<boolean>(true);

    function handleClickToggleUseSelfDestructingSubscription(): void {
        selfDestructingSubscriptionMountStateChange(!selfDestructingSubscriptionMountState);
    }

    const [
        selfDestructingSubscriptionBehaviorSubjectMountState,
        selfDestructingSubscriptionBehaviorSubjectMountStateChange
    ] = useState<boolean>(true);

    function handleClickToggleUseSelfDestructingBehaviorSubjectSubscription(): void {
        selfDestructingSubscriptionBehaviorSubjectMountStateChange(
            !selfDestructingSubscriptionBehaviorSubjectMountState
        );
    }

    return (
        <div>
            <h1>RxJS Awesome Hooks Playground</h1>

            <p>
                <a href="https://github.com/Shevsky/rxjs-awesome-hooks">github.com/Shevsky/rxjs-awesome-hooks</a>
            </p>

            <div>
                <h3>Stores</h3>

                <ul>
                    <li>
                        <b>{getVarName({ observableStore$ })}</b> emits every 1 sec.
                    </li>
                    <li>
                        <b>{getVarName({ behaviorSubjectStore$ })}</b> emits every 2 sec.
                    </li>
                </ul>
            </div>

            <div>
                <h3>Components based on {getVarName({ observableStore$ })}</h3>

                <ul>
                    <li>
                        <div>
                            useSelfDestructingSubscription
                            <button onClick={handleClickToggleUseSelfDestructingSubscription}>
                                Toggle
                            </button>
                        </div>

                        {selfDestructingSubscriptionMountState && (
                            <UseSelfDestructingSubscription
                                observableStore$={observableStore$}
                                storeName={getVarName({ observableStore$ })}
                            />
                        )}
                    </li>
                    <li>
                        <div>useObservableState</div>

                        <UseObservableState observableStore$={observableStore$} />
                    </li>
                </ul>
            </div>

            <div>
                <h3>Components based on {getVarName({ behaviorSubjectStore$ })}</h3>

                <ul>
                    <li>
                        <div>
                            useSelfDestructingSubscription
                            <button
                                onClick={
                                    handleClickToggleUseSelfDestructingBehaviorSubjectSubscription
                                }
                            >
                                Toggle
                            </button>
                        </div>

                        {selfDestructingSubscriptionBehaviorSubjectMountState && (
                            <UseSelfDestructingSubscription
                                observableStore$={behaviorSubjectStore$}
                                storeName={getVarName({ behaviorSubjectStore$ })}
                            />
                        )}
                    </li>
                    <li>
                        <div>useBehaviorSubjectState</div>

                        <UseBehaviorSubjectState behaviorSubjectStore$={behaviorSubjectStore$} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
