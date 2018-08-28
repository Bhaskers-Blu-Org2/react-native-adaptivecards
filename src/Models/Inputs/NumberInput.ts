import { CardContext } from '../../Contexts/CardContext';
import { FormField } from '../../Contexts/FormStore';
import { NumberUtils } from '../../Utils/NumberUtils';
import { AbstractModel } from '../Abstract/AbstractModel';
import { InputModel } from '../Abstract/InputModel';

export class NumberInputModel extends InputModel {
    public max: number;
    public min: number;

    public constructor(json: any, parent: AbstractModel, context: CardContext) {
        super(json, parent, context);

        this.max = json.max;
        this.min = json.min;

        if (this.context.form) {
            this.context.form.registerListener(this.id, this.storeListener);
        }
    }

    public onInput = (value: string) => {
        if (value !== undefined) {
            this.input = value;
            if (this.context && this.context.form) {
                this.context.form.write({
                    id: this.id,
                    value: value,
                    isValid: this.isValueValid(this.input),
                });
            }
        }
    }

    public storeListener = (field: FormField) => {
        if (field) {
            this.value = field.value;
            if (this.onStoreUpdate) {
                this.onStoreUpdate(this.value);
            }
        }
    }

    public isValueValid = (value?: string) => {
        let target = value !== undefined ? value : this.value;
        if (target && target.length !== 0) {
            if (NumberUtils.isNumberStrict(target)) {
                return NumberUtils.isInRange(Number(target), this.min, this.max);
            }
        }
        return true;
    }
}
