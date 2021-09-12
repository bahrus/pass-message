import {PassUp} from 'pass-up/pass-up.js';
import {def} from 'trans-render/lib/def.js';

/**
 * @element pass-message
 * @tag pass-message
 */
export class PassMessage extends PassUp{
    static is = 'pass-message';
    override doSet(match: any, prop: string, lastVal: any){
        match[prop](match, lastVal, this.lastEvent);
    }
}
def(PassMessage);
declare global {
    interface HTMLElementTagNameMap {
        "pass-message": PassMessage,
    }
}