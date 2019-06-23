import pubsub from "../pubsub";
import {MUTATION_EVENT_TYPES} from "../events";
 export const linkMutated = {
    subscribe: ()=> pubsub.asyncIterator([MUTATION_EVENT_TYPES.LINK_MUTATED])
};