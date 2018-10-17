export const UPDATE_GREETING = 'UPDATE_GREETING';
export const REWSET_GREETING = 'RE_GREETING';

export function updateGreeting(greeting) {
    return {
        type: UPDATE_GREETING,
        payload: greeting
    }
}