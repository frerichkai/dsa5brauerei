require('./brewItem.less');
const React = require('react');
const createClass = require('create-react-class');
const _     = require('lodash');
const cx    = require('classnames');
const moment = require('moment');
const request = require('../../../../utils/request-middleware.js');

const googleDriveIcon = require('../../../../googleDrive.svg');
const dedent = require('dedent-tabs').default;

const BrewItem = createClass({
	displayName     : 'BrewItem',
	getDefaultProps : function() {
		return {
			brew : {
				title       : '',
				description : '',
				authors     : [],
				stubbed     : true
			},
			reportError : ()=>{}
		};
	},

	deleteBrew : function(){
		if(this.props.brew.authors.length <= 1){
			if(!confirm('Are you sure you want to delete this brew? Because you are the only owner of this brew, the document will be deleted permanently.')) return;
			if(!confirm('Are you REALLY sure? You will not be able to recover the document.')) return;
		} else {
			if(!confirm('Are you sure you want to remove this brew from your collection? This will remove you as an editor, but other owners will still be able to access the document.')) return;
			if(!confirm('Are you REALLY sure? You will lose editor access to this document.')) return;
		}

		request.delete(`/api/${this.props.brew.googleId ?? ''}${this.props.brew.editId}`)
			.send()
			.end((err, res)=>{
				if(err) {
					this.props.reportError(err);
				} else {
					location.reload();
				}
			});
	},

	renderDeleteBrewLink : function(){
		if(!this.props.brew.editId) return;

		return <a className='deleteLink' onClick={this.deleteBrew}>
			<i className='fas fa-trash-alt' title='Löschen' />
		</a>;
	},

	renderEditLink : function(){
		if(!this.props.brew.editId) return;

		let editLink = this.props.brew.editId;
		if(this.props.brew.googleId && !this.props.brew.stubbed) {
			editLink = this.props.brew.googleId + editLink;
		}

		return <a className='editLink' href={`/edit/${editLink}`} target='_blank' rel='noopener noreferrer'>
			<i className='fas fa-pencil-alt' title='Edit' />
		</a>;
	},

	renderShareLink : function(){
		if(!this.props.brew.shareId) return;

		let shareLink = this.props.brew.shareId;
		if(this.props.brew.googleId && !this.props.brew.stubbed) {
			shareLink = this.props.brew.googleId + shareLink;
		}

		return <a className='shareLink' href={`/share/${shareLink}`} target='_blank' rel='noopener noreferrer'>
			<i className='fas fa-share-alt' title='Teilen' />
		</a>;
	},

	renderDownloadLink : function(){
		if(!this.props.brew.shareId) return;

		let shareLink = this.props.brew.shareId;
		if(this.props.brew.googleId && !this.props.brew.stubbed) {
			shareLink = this.props.brew.googleId + shareLink;
		}

		return <a className='downloadLink' href={`/download/${shareLink}`}>
			<i className='fas fa-download' title='Download' />
		</a>;
	},

	renderGoogleDriveIcon : function(){
		if(!this.props.brew.googleId) return;

		return <span>
			<img className='googleDriveIcon' src={googleDriveIcon} alt='googleDriveIcon' />
		</span>;
	},

	render : function(){
		const brew = this.props.brew;
		if(Array.isArray(brew.tags)) {               // temporary fix until dud tags are cleaned
			brew.tags = brew.tags?.filter((tag)=>tag); //remove tags that are empty strings
		}
		const dateFormatString = 'YYYY-MM-DD HH:mm:ss';

		return <div className='brewItem'>
			{brew.thumbnail &&
				<div className='thumbnail' style={{ backgroundImage: `url(${brew.thumbnail})` }} >
				</div>
			}
			<div className='text'>
				<h2>{brew.title}</h2>
				<p className='description'>{brew.description}</p>
			</div>
			<hr />
			<div className='info'>

				{brew.tags?.length ? <>
					<div className='brewTags' title={`Tags:\n${brew.tags.join('\n')}`}>
						<i className='fas fa-tags'/>
						{brew.tags.map((tag, idx)=>{
							const matches = tag.match(/^(?:([^:]+):)?([^:]+)$/);
							return <span key={idx} className={matches[1]}>{matches[2]}</span>;
						})}
					</div>
				</> : <></>
				}
				<span title={`Autoren:\n${brew.authors?.join('\n')}`}>
					<i className='fas fa-user'/> {brew.authors?.join(', ')}
				</span>
				<br />
				<span title={`Zuletzt angesehen: ${moment(brew.lastViewed).local().format(dateFormatString)}`}>
					<i className='fas fa-eye'/> {brew.views}
				</span>
				{brew.pageCount &&
					<span title={`Seitenzahl: ${brew.pageCount}`}>
						<i className='far fa-file' /> {brew.pageCount}
					</span>
				}
				<span title={dedent`
					Erstellt: ${moment(brew.createdAt).local().format(dateFormatString)}
					Bearbeitet: ${moment(brew.updatedAt).local().format(dateFormatString)}`}>
					<i className='fas fa-sync-alt' /> {moment(brew.updatedAt).fromNow()}
				</span>
				{/*this.renderGoogleDriveIcon()*/}
			</div>

			<div className='links'>
				{this.renderShareLink()}
				{this.renderEditLink()}
				{this.renderDownloadLink()}
				{this.renderDeleteBrewLink()}
			</div>
		</div>;
	}
});

module.exports = BrewItem;
