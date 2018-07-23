import * as React from 'react';
import { View } from 'react-native';

import { FlexBox } from '../Basic/FlexBox';
import { TextBlock } from '../Basic/TextBlock';

interface IProps {
    vIndex: number;
    hIndex: number;
    vSpacing?: number;
    hSpacing?: number;
    title: string;
    onPress: () => void;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    boxStyle?: any;
    textStyle?: any;
}

export class Button extends React.Component<IProps> {
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
                flex={1}
                alignSelf='stretch'
                alignItems='stretch'
                alignContent='stretch'
                justifyContent='center'
                width='stretch'
                hSpacing={10}
                style={[
                    {
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderRadius: this.props.borderRadius,
                        backgroundColor: this.props.backgroundColor,
                        borderColor: this.props.borderColor,
                        borderWidth: this.props.borderWidth,
                    },
                    this.spacing,
                    this.props.boxStyle
                ]}
                onPress={this.props.onPress}
            >
                <View
                    pointerEvents='none'
                    flex={1}
                >
                    <TextBlock
                        vIndex={0}
                        hIndex={0}
                        width='stretch'
                        horizontalAlign='center'
                        textStyle={[
                            {
                                textAlign: this.props.textAlign,
                                color: this.props.color,
                            },
                            this.props.textStyle,
                        ]}
                        numberOfLines={1}
                    >
                        {this.props.title}
                    </TextBlock>
                </View>
            </FlexBox>
        );
    }

    private get spacing() {
        let result = {
            marginTop: 0,
            marginLeft: 0,
        };
        if (this.props.vIndex > 0 && this.props.vSpacing) {
            result.marginTop = this.props.vSpacing;
        }
        if (this.props.hIndex > 0 && this.props.hSpacing) {
            result.marginLeft = this.props.hSpacing;
        }
        return result;
    }
}