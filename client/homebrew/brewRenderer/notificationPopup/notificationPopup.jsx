require('./notificationPopup.less');
const React = require('react');
const createClass = require('create-react-class');
const _     = require('lodash');
const cx    = require('classnames');	//Unused variable

const DISMISS_KEY = 'dismiss_notification12-04-23';

const NotificationPopup = createClass({
	displayName     : 'NotificationPopup',
	getInitialState : function() {
		return {
			notifications : {}
		};
	},
	componentDidMount : function() {
		this.checkNotifications();
		window.addEventListener('resize', this.checkNotifications);
	},
	componentWillUnmount : function() {
		window.removeEventListener('resize', this.checkNotifications);
	},
	notifications : {
		psa : function(){
			return (
				<>
					<li key='faq'>
						<em>Sichere deine Werke regelmäßig! </em> <br />
						Bitte bedenke, dass die Links der einzige Zugang zu deinen Gebräuen ist.
						Wenn du diese verlierst und sie auch nicht mehr unter "Letzte Gebräue" auftauchen,
						können wir nichts mehr für dich tun.
						Also speichere sie dir gut, zum Beispiel als Bookmarks, und mache auch regelmäßig lokale Backups der Inhalte.
					</li>
				</>
			);
		}
	},
	checkNotifications : function(){
		const hideDismiss = localStorage.getItem(DISMISS_KEY);
		if(hideDismiss) return this.setState({ notifications: {} });

		this.setState({
			notifications : _.mapValues(this.notifications, (fn)=>{ return fn(); })	//Convert notification functions into their return text value
		});
	},
	dismiss : function(){
		localStorage.setItem(DISMISS_KEY, true);
		this.checkNotifications();
	},
	render : function(){
		if(_.isEmpty(this.state.notifications)) return null;

		return <div className='notificationPopup'>
			<i className='fas fa-times dismiss' onClick={this.dismiss}/>
			<i className='fas fa-info-circle info' />
			<div className='header'>
				<h3>Hinweis</h3>
				<small>Diese Website befindet sich noch in arbeit, bitte beacht:</small>
			</div>
			<ul>{_.values(this.state.notifications)}</ul>
		</div>;
	}
});

module.exports = NotificationPopup;
