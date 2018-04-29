/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    ColorPalette,
    UrlInput,
} = wp.blocks;
const {
    PanelColor,
    PanelBody,
    RangeControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor(props) {
        super(...arguments);
    }
    render() {

        return (
            <InspectorControls key="inspector">
                <PanelBody
                    title={__('Colors')}
                    initialOpen={false}
                >
                    <PanelColor
                        title={__('Background Color')}
                        colorValue={this.props.attributes.BackgroundColor}
                    >
                        <ColorPalette
                            value={ this.props.attributes.BackgroundColor }
                            onChange={ this.props.onChangeBackgroundColor }
                         />
                    </PanelColor>
                    <PanelColor
                        title={__('Title Color')}
                        colorValue={this.props.attributes.TitleColor}
                    >
                        <ColorPalette
                            value={this.props.attributes.TitleColor}
                            onChange={this.props.onChangeTitleColor}
                        />
                    </PanelColor>
                    <PanelColor
                        title={__('Message Color')}
                        colorValue={this.props.attributes.MessageColor}
                    >
                        <ColorPalette
                            value={this.props.attributes.MessageColor}
                            onChange={this.props.onChangeMessageColor}
                        />
                    </PanelColor>

                    <PanelColor
                            title={__('Button Color')}
                            colorValue={this.props.attributes.ButtonColor}
                    >
                            <ColorPalette
                                value={this.props.attributes.ButtonColor}
                                onChange={this.props.onChangeButtonColor}
                            />
                    </PanelColor>
                        <PanelColor
                                title={__('Button Text Color')}
                                colorValue={this.props.attributes.ButtonTextColor}
                         >
                        <ColorPalette
                             value={this.props.attributes.ButtonTextColor}
                            onChange={this.props.onChangeButtonTextColor}
                         />

                    </PanelColor>
                </PanelBody>
                <PanelBody
                    title={__('Dimensions')}
                    initialOpen={false}
                >
                    <RangeControl
                        label={__('Padding')}
                        value={this.props.attributes.MessagePadding}
                        onChange={this.props.onChangeMessagePadding}
                        min={0}
                        max={200}
                        allowReset
                    />
                    <RangeControl
                            label={__('Width')}
                            value={this.props.attributes.MessageWidth}
                            onChange={this.props.onChangeMessageWidth}
                            min={0}
                            max={100}
                            allowReset
                    />
                </PanelBody>
                <PanelBody
                    title={__('Url')}
                    initialOpen={false}
                >
                <UrlInput
                        value={this.props.attributes.ButtonUrl}
                        onChange={this.props.onChangeButtonUrl}
                />
                </PanelBody>
                <PanelBody
                    title={__('Border')}
                    initialOpen={false}
                >
                    <RangeControl
                        label={__('Border Width')}
                        value={this.props.attributes.BorderWidth}
                        onChange={this.props.onChangeBorderWidth}
                        min={0}
                        max={50}
                        allowReset
                    />
                    <PanelColor
                        title={__('Border Color')}
                        colorValue={this.props.attributes.BorderColor}
                    >
                        <ColorPalette
                            value={this.props.attributes.BorderColor}
                            onChange={this.props.onChangeBorderColor}
                        />
                    </PanelColor>

                </PanelBody>
            </InspectorControls>
        );
    }

}
