import {Injectable} from '@angular/core';


@Injectable()

export class InternalDataService {
	private _setup:Object;
	get Data(): Object {
		return this._setup;
	}

	set Data(setupObj:Object) {
			this._setup = setupObj;
	}
}
