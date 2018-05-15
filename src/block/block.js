/**
 * BLOCK: WordCamp Chicago Call to Action
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

/**
* Block dependencies
*/

import Inspector from './inspector';

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType, RichText, UrlInput,} = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component } = wp.element;
const { Button} = wp.components;

/**
 * Register:Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
	registerBlockType('wpjj/call-to-action-block', {
	title: __('Call to Action'), // Block title.
	icon: 'megaphone', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [

		__('Call to Action'),
		__('Shout Out'),
		__('wpjj-call-to-action-block'),
	],

	/* define the attributes to be used in our block*/
	attributes:{
		message:{
			type: 'array',
			source: 'children',
			selector: '.message-body',
		},
		title: {
			type: 'string',
			selector: 'h2',

		},
		BackgroundColor: {
			type: 'string',
			default: '#DDDDDD'
		},

		TitleColor: {
			type: 'string',
			default: '#FFFFFF'
		},
		MessageColor: {
			type: 'string',
			default: '#FFFFFF'
		},
		MessagePadding: {
			type: 'number',
			default: 10
		},
		MessageWidth: {
			type: 'number',
			default: 100
		},
		ButtonUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		ButtonText: {
			type: 'array',
			source: 'children',
			selector: 'span',
			default: ''
		},
		ButtonColor: {
			type: 'string',
			default: '#000000'
		},
		ButtonTextColor: {
			type: 'string',
			default: '#FFFFFF'
		},
		BorderWidth: {
			type: 'number',
			default: 1
		},
		BorderColor: {
			type: 'string',
			default: '#FFFFFF'
		},

	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {

		// handle changes
		//Color values

		const onChangeBackgroundColor = value => {
			props.setAttributes({ BackgroundColor: value });
		}

		const onChangeTitleColor = value => {
			props.setAttributes({ TitleColor: value });
		}

		const onChangeMessageColor = value => {
			props.setAttributes({ MessageColor: value });
		}

		//Text values
		const onChangeMessage = value => {
			props.setAttributes({ message: value });
		};

		const onChangeTitle = value => {
			props.setAttributes({ title: value });
		};

		const onChangeMessagePadding = value => {
			props.setAttributes({ MessagePadding: value });
		};

		const onChangeMessageWidth = value => {
			props.setAttributes({ MessageWidth: value });
		};

		const onChangeButtonUrl = value => {
			props.setAttributes({ ButtonUrl: value });
		};

		const onChangeButtonText = value => {
			props.setAttributes({ ButtonText: value });
		};

		const onChangeButtonColor = value => {
			props.setAttributes({ ButtonColor: value });
		};

		const onChangeButtonTextColor = value => {
			props.setAttributes({ ButtonTextColor: value });
		};

		const onChangeBorderWidth = value => {
			props.setAttributes({ BorderWidth: value });
		};

		const onChangeBorderColor = value => {
			props.setAttributes({ BorderColor: value });
		};


		return [

			!!focus && (


				<Inspector
					{...{
						onChangeBackgroundColor,
						onChangeTitleColor,
						onChangeMessageColor,
						onChangeMessagePadding,
						onChangeMessageWidth,
						onChangeButtonColor,
						onChangeButtonTextColor,
						onChangeButtonUrl,
						onChangeBorderWidth,
						onChangeBorderColor,
					 ...props } }
				/>
			),
			<div
				style = { {
					backgroundColor: props.attributes.BackgroundColor,
					padding: props.attributes.MessagePadding,
					width: props.attributes.MessageWidth + '%',
					borderWidth: props.attributes.BorderWidth,
					borderColor: props.attributes.BorderColor,
					borderStyle: 'solid',

				} }
				className={ props.className }>
				<RichText
					tagName="h2"
					placeholder={__('Add your Title')}
					onChange={onChangeTitle}
					value={props.attributes.title}
					focus={props.focus}
					onFocus={props.setFocus}
					style={{
						color: props.attributes.TitleColor
					}}
				/>
				<RichText
					tagName="div"
					placeholder={__('Add your custom message')}
					onChange={onChangeMessage}
					value={props.attributes.message}
					focus={props.focus}
					onFocus={props.setFocus}
					style={{
						color: props.attributes.MessageColor
					}}
				/>
				<div className="Button_Holder">
					<div className="CTA-Button"
						style={{
							backgroundColor: props.attributes.ButtonColor
						}}
					>
						<RichText
							tagName="span"
							placeholder={__('Put some text here')}
							onChange={onChangeButtonText}
							value={props.attributes.ButtonText}
							focus={props.focus}
							onFocus={props.setFocus}
							style={{
								color: props.attributes.ButtonTextColor
							}}
						/>
					</div>
				</div>
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
			<div className={ props.className }
				style={{
					backgroundColor: props.attributes.BackgroundColor,
					padding: props.attributes.MessagePadding,
					width: props.attributes.MessageWidth + '%',
					borderWidth: props.attributes.BorderWidth,
					borderColor: props.attributes.BorderColor,
					borderStyle: 'solid',
				}}
			>
				<h2
					style={{
						color: props.attributes.TitleColor
					}}
				>
				{props.attributes.title}
				</h2>

				<div class = "message-body"
					style = {{
							color: props.attributes.MessageColor
						}}
				>
				{ props.attributes.message}
				< /div>


					<div className="Button_Holder">
						<div className="CTA-Button"
							style={{
								backgroundColor: props.attributes.ButtonColor,
							}}
						>

							<span
								style={{
									color: props.attributes.ButtonTextColor
								}}
							>
							{props.attributes.ButtonText}
							</span>
						</div>
					</div>

			</div>
		);
	},
} );
