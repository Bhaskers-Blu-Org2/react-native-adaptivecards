import React from 'react';
import {
    Text,
} from 'react-native';
import { FlexBox } from './FlexBox';

interface IProps {
    vIndex: number;
    hIndex: number;
    vSpacing?: number;
    hSpacing?: number;
    color?: string;
    backgroundColor?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: 'normal' | 'bold' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    wrap?: 'wrap' | 'nowrap';
    horizontalAlign?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    width: 'auto' | 'stretch';
    onPress?: () => void;
    numberOfLines?: number;
    boxStyle?: any;
    textStyle?: any;
}

export class TextBlock extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <FlexBox
                vIndex={this.props.vIndex}
                hIndex={this.props.hIndex}
                flexDirection='row'
                relativeWidth={false}
                width={this.props.width}
                vSpacing={this.props.vSpacing}
                hSpacing={this.props.hSpacing}
                alignSelf='stretch'
                alignItems='stretch'
                alignContent='stretch'
                justifyContent={'center'}
                onPress={this.props.onPress}
                style={[
                    {
                        backgroundColor: this.props.backgroundColor
                    },
                    this.props.boxStyle
                ]}
            >
                <Text
                    style={[
                        {
                            color: this.props.color,
                            fontFamily: this.props.fontFamily,
                            fontSize: this.props.fontSize,
                            fontWeight: this.props.fontWeight,
                            textAlign: this.props.textAlign,
                            flex: 1,
                            flexWrap: this.props.wrap,
                            backgroundColor: this.props.backgroundColor,
                        },
                        this.props.textStyle,
                    ]}
                    numberOfLines={this.props.numberOfLines}
                    onPress={this.props.onPress}
                >
                    {this.props.children}
                </Text>
            </FlexBox>
        );
    }
}