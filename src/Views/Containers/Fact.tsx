import * as React from 'react';
import { Text, View } from 'react-native';
import { FactModel } from '../../Models/Containers/Fact';
import { StyleManager } from '../../Styles/StyleManager';

interface IProps {
    model: FactModel;
    theme: 'default' | 'emphasis';
}

export class FactView extends React.Component<IProps> {
    public render() {
        const { model, theme } = this.props;

        // if (!model || !model.isValid) {
        //     return DebugOutputFactory.createDebugOutputBanner(model.type + '>>' + model.title + ' is not valid', theme, 'error');
        // }

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignSelf: 'stretch'
                }}
            >
                <Text
                    accessible={true}
                    style={{
                        color: StyleManager.getFactTitleColor(theme),
                        fontSize: StyleManager.factTitleFontSize,
                        fontWeight: StyleManager.factTitleFontWeight,
                        flexWrap: StyleManager.factTitleWrap,
                        marginRight: 16,
                    }}
                >
                    {model.title}
                </Text>
                <Text
                    style={{
                        color: StyleManager.getFactValueColor(theme),
                        fontSize: StyleManager.factValueFontSize,
                        fontWeight: StyleManager.factValueFontWeight,
                        flexWrap: StyleManager.factValueWrap,
                        marginRight: 16,
                    }}
                >
                    {model.value}
                </Text>
            </View>
        );
    }
}
