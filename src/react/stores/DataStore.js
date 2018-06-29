import { EventEmitter } from "events";
import dispatcher       from "../dispatcher";

class DataStore extends EventEmitter {

    constructor() {
        super();
    }

    getSomething(id) {
        return {};
    }

    handleActions(action) {
        switch(action.type) {
            case "RECEIVE_PUZZLES": {
                this.puzzles = action.puzzles;
                this.emit("change");
                break;
            }
        }
    }

}

const dataStore = new DataStore;
dispatcher.register(dataStore.handleActions.bind(dataStore));

export default dataStore;