import generator from 'generate-password';

import { PasswordPolicyError } from './PasswordPolicyError';

export class PasswordPolicy {
	regex: {
		forbiddingRepeatingCharacters: RegExp;
		mustContainAtLeastOneLowercase: RegExp;
		mustContainAtLeastOneUppercase: RegExp;
		mustContainAtLeastOneNumber: RegExp;
		mustContainAtLeastOneSpecialCharacter: RegExp;
	};

	private enabled: boolean;

	private minLength: number;

	private maxLength: number;

	private forbidRepeatingCharacters: boolean;

	private mustContainAtLeastOneLowercase: boolean;

	private mustContainAtLeastOneUppercase: boolean;

	private mustContainAtLeastOneNumber: boolean;

	private mustContainAtLeastOneSpecialCharacter: boolean;

	private throwError: boolean;

	private forbidRepeatingCharactersCount: number;

	constructor({
		enabled = false,
		minLength = -1,
		maxLength = -1,
		forbidRepeatingCharacters = false,
		forbidRepeatingCharactersCount = 3, // the regex is this number minus one
		mustContainAtLeastOneLowercase = false, // /[A-Z]{3,}/ could do this instead of at least one
		mustContainAtLeastOneUppercase = false,
		mustContainAtLeastOneNumber = false,
		mustContainAtLeastOneSpecialCharacter = false,
		throwError = true,
	}) {
		this.regex = {
			forbiddingRepeatingCharacters: new RegExp('.*'),
			mustContainAtLeastOneLowercase: new RegExp('[a-z]'),
			mustContainAtLeastOneUppercase: new RegExp('[A-Z]'),
			mustContainAtLeastOneNumber: new RegExp('[0-9]'),
			mustContainAtLeastOneSpecialCharacter: new RegExp('[^A-Za-z0-9 ]'),
		};

		this.enabled = enabled;
		this.minLength = minLength;
		this.maxLength = maxLength;
		this.forbidRepeatingCharacters = forbidRepeatingCharacters;
		this.forbidRepeatingCharactersCount = forbidRepeatingCharactersCount;
		this.regex.forbiddingRepeatingCharacters = new RegExp(`(.)\\1{${this.forbidRepeatingCharactersCount},}`);
		this.mustContainAtLeastOneLowercase = mustContainAtLeastOneLowercase;
		this.mustContainAtLeastOneUppercase = mustContainAtLeastOneUppercase;
		this.mustContainAtLeastOneNumber = mustContainAtLeastOneNumber;
		this.mustContainAtLeastOneSpecialCharacter = mustContainAtLeastOneSpecialCharacter;
		this.throwError = throwError;
	}

	get passwordForbidRepeatingCharactersCount() {
		return this.forbidRepeatingCharactersCount;
	}

	error(
		error: string,
		message: string,
		reasons?: {
			error: string;
			message: string;
		}[],
	) {
		if (this.throwError) {
			throw new PasswordPolicyError(message, error, reasons);
		}

		return false;
	}

	// TODO: implement isLoading state?
	sendValidationMessage(password: string): {
		name: string;
		isValid: boolean;
		limit?: number;
	}[] {
		type validationMessage = {
			name: string;
			isValid: boolean;
			limit?: number;
		};

		const validationReturn: validationMessage[] = [];

		if (!this.enabled) {
			return [];
		}

		if (this.minLength >= 1) {
			validationReturn.push({
				name: 'get-password-policy-minLength',
				isValid: !!(password.length < this.minLength),
				limit: this.minLength,
			});
		}

		if (this.maxLength >= 1) {
			validationReturn.push({
				name: 'get-password-policy-maxLength',
				isValid: !!(password.length > this.maxLength),
				limit: this.maxLength,
			});
		}

		if (this.forbidRepeatingCharacters) {
			validationReturn.push({
				name: 'get-password-policy-forbidRepeatingCharactersCount',
				isValid: this.regex.forbiddingRepeatingCharacters.test(password),
				limit: this.forbidRepeatingCharactersCount,
			});
		}

		if (this.mustContainAtLeastOneLowercase) {
			validationReturn.push({
				name: 'get-password-policy-mustContainAtLeastOneLowercase',
				isValid: this.regex.mustContainAtLeastOneLowercase.test(password),
			});
		}

		if (this.mustContainAtLeastOneUppercase) {
			validationReturn.push({
				name: 'get-password-policy-mustContainAtLeastOneUppercase',
				isValid: this.regex.mustContainAtLeastOneUppercase.test(password),
			});
		}

		if (this.mustContainAtLeastOneNumber) {
			validationReturn.push({
				name: 'get-password-policy-mustContainAtLeastOneNumber',
				isValid: this.regex.mustContainAtLeastOneNumber.test(password),
			});
		}

		if (this.mustContainAtLeastOneSpecialCharacter) {
			validationReturn.push({
				name: 'get-password-policy-mustContainAtLeastOneSpecialCharacter',
				isValid: this.regex.mustContainAtLeastOneSpecialCharacter.test(password),
			});
		}

		return validationReturn;
	}

	validate(password: string) {
		const reasons: {
			error: string;
			message: string;
		}[] = [];

		if (typeof password !== 'string' || !password.trim().length) {
			return this.error('error-password-policy-not-met', "The password provided does not meet the server's password policy.");
		}

		if (!this.enabled) {
			return true;
		}

		if (this.minLength >= 1 && password.length < this.minLength) {
			reasons.push({
				error: 'error-password-policy-not-met-minLength',
				message: 'The password does not meet the minimum length password policy.',
			});
		}

		if (this.maxLength >= 1 && password.length > this.maxLength) {
			reasons.push({
				error: 'error-password-policy-not-met-maxLength',
				message: 'The password does not meet the maximum length password policy.',
			});
		}

		if (this.forbidRepeatingCharacters && this.regex.forbiddingRepeatingCharacters.test(password)) {
			reasons.push({
				error: 'error-password-policy-not-met-repeatingCharacters',
				message: 'The password contains repeating characters which is against the password policy.',
			});
		}

		if (this.mustContainAtLeastOneLowercase && !this.regex.mustContainAtLeastOneLowercase.test(password)) {
			reasons.push({
				error: 'error-password-policy-not-met-oneLowercase',
				message: 'The password does not contain at least one lowercase character which is against the password policy.',
			});
		}

		if (this.mustContainAtLeastOneUppercase && !this.regex.mustContainAtLeastOneUppercase.test(password)) {
			reasons.push({
				error: 'error-password-policy-not-met-oneUppercase',
				message: 'The password does not contain at least one uppercase character which is against the password policy.',
			});
		}

		if (this.mustContainAtLeastOneNumber && !this.regex.mustContainAtLeastOneNumber.test(password)) {
			reasons.push({
				error: 'error-password-policy-not-met-oneNumber',
				message: 'The password does not contain at least one numerical character which is against the password policy.',
			});
		}

		if (this.mustContainAtLeastOneSpecialCharacter && !this.regex.mustContainAtLeastOneSpecialCharacter.test(password)) {
			reasons.push({
				error: 'error-password-policy-not-met-oneSpecial',
				message: 'The password does not contain at least one special character which is against the password policy.',
			});
		}

		if (reasons.length) {
			return this.error('error-password-policy-not-met', `The password provided does not meet the server's password policy.`, reasons);
		}

		return true;
	}

	getPasswordPolicy() {
		type dataType = {
			enabled: boolean;
			policy: [string, { [key: string]: number }?][];
		};

		const data: dataType = {
			enabled: false,
			policy: [],
		};

		if (this.enabled) {
			data.enabled = true;
			if (this.minLength >= 1) {
				data.policy.push(['get-password-policy-minLength', { minLength: this.minLength }]);
			}
			if (this.maxLength >= 1) {
				data.policy.push(['get-password-policy-maxLength', { maxLength: this.maxLength }]);
			}
			if (this.forbidRepeatingCharacters) {
				data.policy.push(['get-password-policy-forbidRepeatingCharacters']);
			}
			if (this.forbidRepeatingCharactersCount) {
				data.policy.push([
					'get-password-policy-forbidRepeatingCharactersCount',
					{ forbidRepeatingCharactersCount: this.forbidRepeatingCharactersCount },
				]);
			}
			if (this.mustContainAtLeastOneLowercase) {
				data.policy.push(['get-password-policy-mustContainAtLeastOneLowercase']);
			}
			if (this.mustContainAtLeastOneUppercase) {
				data.policy.push(['get-password-policy-mustContainAtLeastOneUppercase']);
			}
			if (this.mustContainAtLeastOneNumber) {
				data.policy.push(['get-password-policy-mustContainAtLeastOneNumber']);
			}
			if (this.mustContainAtLeastOneSpecialCharacter) {
				data.policy.push(['get-password-policy-mustContainAtLeastOneSpecialCharacter']);
			}
		}
		return data;
	}

	generatePassword() {
		if (this.enabled) {
			for (let i = 0; i < 10; i++) {
				const password = this._generatePassword();
				if (this.validate(password)) {
					return password;
				}
			}
		}

		return generator.generate({ length: 17 });
	}

	_generatePassword() {
		const length = Math.min(Math.max(this.minLength, 12), this.maxLength > 0 ? this.maxLength : Number.MAX_SAFE_INTEGER);
		return generator.generate({
			length,
			...(this.mustContainAtLeastOneNumber && { numbers: true }),
			...(this.mustContainAtLeastOneSpecialCharacter && { symbols: true }),
			...(this.mustContainAtLeastOneLowercase && { lowercase: true }),
			...(this.mustContainAtLeastOneUppercase && { uppercase: true }),
			strict: true,
		});
	}
}
