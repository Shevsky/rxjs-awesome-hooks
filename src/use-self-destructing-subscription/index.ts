import { useEffect } from 'react';
import { Subscription } from 'rxjs';

interface IHandlers {
    onStart?: VoidFunction;
    onStop?: VoidFunction;
}

export function useSelfDestructingSubscription(
    subscriptionHandler: () => Subscription,
    handlers?: IHandlers
): void {
    useEffect((): VoidFunction => {
        handlers && handlers.onStart && handlers.onStart();

        const subscription = subscriptionHandler();

        return (): void => {
            handlers && handlers.onStop && handlers.onStop();

            subscription.unsubscribe();
        };
    }, []);
}
