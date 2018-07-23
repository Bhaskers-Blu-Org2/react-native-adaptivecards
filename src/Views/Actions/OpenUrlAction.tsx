import * as React from 'react';

import { Button } from '../../Components/Inputs/Button';
import { ActionContext } from '../../Contexts/ActionContext';
import { OpenUrlActionElement } from '../../Schema/Actions/OpenUrlAction';
import { ActionHook } from '../../Shared/Types';
import { StyleManager } from '../../Styles/StyleManager';
import { IElementViewProps } from '../Shared/BaseProps';

interface IProps extends IElementViewProps<OpenUrlActionElement> {
    actionHooks?: ActionHook[];
}

export class OpenUrlActionView extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { element } = this.props;

        if (!element || !element.isValid) {
            return null;
        }

        const hostStyle = StyleManager.getInstance().getActionStyle();

        return (
            <Button
                vIndex={this.props.vIndex}
                hIndex={this.props.hIndex}
                vSpacing={hostStyle.marginTop}
                hSpacing={hostStyle.marginLeft}
                title={this.props.element.title}
                onPress={this.onPress}
                color='white'
                backgroundColor='#277BDF'
                borderColor='#277BDF'
                borderRadius={4}
                textAlign='center'
            />
        );
    }

    private onPress = () => {
        let callback = ActionContext.getGlobalInstance().getActionEventHandler(this.props.element);
        if (callback) {
            if (this.props.actionHooks) {
                callback(...this.props.actionHooks);
            } else {
                callback();
            }
        }
    }
}