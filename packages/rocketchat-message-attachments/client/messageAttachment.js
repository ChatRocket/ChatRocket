import moment from 'moment';
import { fixCordova } from 'meteor/rocketchat:lazy-load';
const colors = {
	good: '#35AC19',
	warning: '#FCB316',
	danger: '#D30230',
};

/* globals renderMessageBody*/
Template.messageAttachment.helpers({
	fixCordova,
	parsedText() {
		return renderMessageBody({
			msg: this.text,
		});
	},
	markdownInPretext() {
		return this.mrkdwn_in && this.mrkdwn_in.includes('pretext');
	},
	parsedPretext() {
		return renderMessageBody({
			msg: this.pretext,
		});
	},
	loadImage() {
		if (this.downloadImages !== true) {
			const user = RocketChat.models.Users.findOne({ _id: Meteor.userId() }, { fields: { 'settings.autoImageLoad' : 1 } });
			if (RocketChat.getUserPreference(user, 'autoImageLoad') === false) {
				return false;
			}
			if (Meteor.Device.isPhone() && RocketChat.getUserPreference(user, 'saveMobileBandwidth') !== true) {
				return false;
			}
		}
		return true;
	},
	getImageHeight(height = 200) {
		return height;
	},
	color() {
		return colors[this.color] || this.color;
	},
	collapsed() {
		if (this.collapsed != null) {
			return this.collapsed;
		}
		return false;
	},
	mediaCollapsed() {
		if (this.collapsed != null) {
			return this.collapsed;
		} else {
			const user = Meteor.user();
			return RocketChat.getUserPreference(user, 'collapseMediaByDefault') === true;
		}
	},
	time() {
		const messageDate = new Date(this.ts);
		const today = new Date();
		if (messageDate.toDateString() === today.toDateString()) {
			switch (RocketChat.getUserPreference(Meteor.user(), 'clockMode', false)) {
				case 1:
					return moment(this.ts).format('h:mm A');
				case 2:
					return moment(this.ts).format('H:mm');
				default:
					return moment(this.ts).format(RocketChat.settings.get('Message_TimeFormat'));
			}
		} else {
			switch (RocketChat.getUserPreference(Meteor.user(), 'clockMode', false)) {
				case 1:
					return moment(this.ts).format('MMMM D, Y h:mm A');
				case 2:
					return moment(this.ts).format('MMMM D, Y H:mm');
				default:
					return moment(this.ts).format(RocketChat.settings.get('Message_TimeAndDateFormat'));
			}
		}
	},
	injectIndex(data, previousIndex, index) {
		data.index = `${ previousIndex }.attachments.${ index }`;
	},

	isFile() {
		return this.type === 'file';
	},
});
