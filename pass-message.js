import { PassUp } from 'pass-up/pass-up.js';
import { def } from 'trans-render/lib/def.js';
/**
 * @element pass-message
 * @tag pass-message
 */
export class PassMessage extends PassUp {
    static is = 'pass-message';
    doSet(match, prop, lastVal) {
        match[prop](match, lastVal, this.lastEvent);
    }
}
def(PassMessage);
