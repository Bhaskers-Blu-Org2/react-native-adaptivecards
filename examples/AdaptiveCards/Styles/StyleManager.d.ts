export declare class StyleManager {
    static getSpacing(spacing: 'small' | 'default' | 'medium' | 'large' | 'extralarge' | 'padding' | 'none'): number;
    static getFontSize(size: 'small' | 'default' | 'medium' | 'large' | 'extralarge'): number;
    static getFontWeight(weight: 'lighter' | 'default' | 'bolder'): "normal" | "bold" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    static getTextAlign(align: 'left' | 'center' | 'right'): "left" | "center" | "right";
    static getHorizontalAlign(align: 'left' | 'center' | 'right'): "center" | "flex-start" | "flex-end";
    static getWrap(wrap: boolean): "wrap" | "nowrap";
    static getImageSize(size: 'small' | 'medium' | 'large' | 'auto' | 'stretch' | number): number | "auto" | "stretch";
    static getColor(color: 'default' | 'dark' | 'light' | 'accent' | 'good' | 'warning' | 'attention', theme: 'default' | 'emphasis', isSubtle: boolean): string;
    static getBackgroundColor(theme: 'default' | 'emphasis'): string;
    static getFactTitleColor(theme: 'default' | 'emphasis'): string;
    static getFactValueColor(theme: 'default' | 'emphasis'): string;
    static getInputColor(theme: 'default' | 'emphasis'): string;
    static getInputFocusColor(theme: 'default' | 'emphasis'): string;
    static getInputBackgroundColor(theme: 'default' | 'emphasis'): string;
    static getInputFocusBackgroundColor(theme: 'default' | 'emphasis'): string;
    static getInputBorderColor(theme: 'default' | 'emphasis'): string;
    static getInputFocusBorderColor(theme: 'default' | 'emphasis'): string;
    static getCheckboxTitleColor(theme: 'default' | 'emphasis'): string;
    static getCheckboxBoxColor(theme: 'default' | 'emphasis', focused: boolean): string;
    static readonly inSetImageSize: "small" | "medium" | "large" | "auto" | "stretch";
    static readonly inSetImageMaxHeight: number;
    static readonly factSetSpacing: number;
    static readonly factTitleFontSize: number;
    static readonly factTitleFontWeight: "normal" | "bold" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    static readonly factTitleWrap: "wrap" | "nowrap";
    static readonly factValueFontSize: number;
    static readonly factValueFontWeight: "normal" | "bold" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    static readonly factValueWrap: "wrap" | "nowrap";
    static readonly fontFamily: string;
    static readonly separatorThickness: number;
    static readonly separatorColor: string;
    static readonly separatorSpacing: number;
    static readonly maxActions: number;
    static readonly actionSetSpacing: number;
    static readonly actionSpacing: number;
    static readonly actionDirection: "horizontal" | "vertically";
    static readonly actionAlignment: "left" | "center" | "right" | "stretch";
    static readonly subCardSpacing: number;
    static readonly subCardTheme: "default" | "emphasis";
}
