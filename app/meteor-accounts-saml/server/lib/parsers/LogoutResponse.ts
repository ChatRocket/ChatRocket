import xmldom from 'xmldom';

import {
	SAMLUtils,
} from '../Utils';
import { IServiceProviderOptions } from '../../definition/IServiceProviderOptions';

export class LogoutResponseParser {
	constructor(serviceProviderOptions: IServiceProviderOptions) {
		this.serviceProviderOptions = serviceProviderOptions;
	}

	validate(xmlString: string, callback: (err: string | object | null, inResponseTo?: string) => void): void {
		SAMLUtils.log(`LogoutResponse: ${ xmlString }`);

		const doc = new xmldom.DOMParser().parseFromString(xmlString, 'text/xml');
		if (!doc) {
			return callback('No Doc Found');
		}

		const response = doc.getElementsByTagNameNS('urn:oasis:names:tc:SAML:2.0:protocol', 'LogoutResponse')[0];
		if (!response) {
			return callback('No Response Found', null);
		}

		// TBD. Check if this msg corresponds to one we sent
		let inResponseTo;
		try {
			inResponseTo = response.getAttribute('InResponseTo');
			SAMLUtils.log(`In Response to: ${ inResponseTo }`);
		} catch (e) {
			SAMLUtils.log(`Caught error: ${ e }`);
			const msg = doc.getElementsByTagNameNS('urn:oasis:names:tc:SAML:2.0:protocol', 'StatusMessage');
			SAMLUtils.log(`Unexpected msg from IDP. Does your session still exist at IDP? Idp returned: \n ${ msg }`);
		}

		const statusValidateObj = SAMLUtils.validateStatus(doc);
		if (!statusValidateObj.success) {
			return callback('Error. Logout not confirmed by IDP', null);
		}

		return callback(null, inResponseTo);
	}
}
