import { CardContext } from '../../Contexts/CardContext';
import { TreeNode } from '../../Shared/Types';

export abstract class AbstractModel extends TreeNode<AbstractModel> {
    public readonly type: string;
    public context: CardContext;
    public children: AbstractModel[] = [];

    constructor(json: any, parent: AbstractModel, context: CardContext) {
        super(parent);
        this.context = context;

        this.type = json.type;
    }
}
