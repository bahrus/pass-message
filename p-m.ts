import {def} from 'trans-render/lib/def.js';
import {PassMessage} from './pass-message.js';

/**
 * @tag p-m
 * @element p-m
 */
export class PM extends PassMessage{
    static is = 'p-m';
}
def(PM);
declare global {
    interface HTMLElementTagNameMap {
        "p-m": PM,
    }
}