import * as React from 'react';
import { View } from 'react-native';
import { Touchable } from '../../Components/Basic/Touchable';
import { ColumnSetModel } from '../../Models/Containers/ColumnSet';
import { StyleManager } from '../../Styles/StyleManager';
import { ContentFactory } from '../Factories/ContentFactory';
import { ColumnView } from './Column';

interface IProps {
    index: number;
    model: ColumnSetModel;
    theme: 'default' | 'emphasis';
}

export class ColumnSetView extends React.Component<IProps> {
    public render() {
        const { model } = this.props;

        // if (!model || !model.isValid) {
        //     return DebugOutputFactory.createDebugOutputBanner(model.type + '>>' + model.id + ' is not valid', theme, 'error');
        // }

        if (model.selectAction) {
            return this.renderTouchableBlock();
        } else {
            return this.renderNonTouchableBlock();
        }
    }

    private renderTouchableBlock = () => {
        return (
            <Touchable
                onPress={this.onPress}
                style={{
                    flex: this.flex,
                    flexDirection: 'row',
                    alignSelf: 'stretch',
                    justifyContent: 'flex-start',
                    marginTop: this.spacing,
                }}
            >
                {this.renderContent()}
            </Touchable>
        );
    }

    private renderNonTouchableBlock = () => {
        return (
            <View
                style={{
                    flex: this.flex,
                    flexDirection: 'row',
                    alignSelf: 'stretch',
                    justifyContent: 'flex-start',
                    marginTop: this.spacing
                }}
            >
                {this.renderContent()}
            </View>
        );
    }

    private renderContent = () => {
        const { model } = this.props;

        if (!model) {
            return undefined;
        }

        const background = model.backgroundImage;

        if (background) {
            return ContentFactory.createBackgroundImageView(this.renderColumns(), background);
        }
        return this.renderColumns();
    }

    private renderColumns = () => {
        const { model } = this.props;

        if (!model || !model.columns || model.columns.length === 0) {
            return undefined;
        }

        return model.columns.map((column, index) => (
            <ColumnView
                key={index}
                index={index}
                model={column}
                theme={this.props.theme}
            />
        ));
    }

    private onPress = () => {
        const { model } = this.props;

        if (model && model.selectAction && model.selectAction.onAction) {
            model.selectAction.onAction(
                () => {
                    console.log('Action Success');
                },
                (error) => {
                    console.log('Action Failed >> ', error);
                }
            );
        }
    }

    private get flex() {
        const { model } = this.props;

        if (!model) {
            return 0;
        }

        if (model.height === 'stretch') {
            return 1;
        }

        return 0;
    }

    private get spacing() {
        if (this.props.index !== undefined && this.props.index > 0) {
            return StyleManager.getSpacing(this.props.model.spacing);
        }
        return 0;
    }
}
