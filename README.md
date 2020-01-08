# Library FormField for Angular

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## About this library

This library include:;
   * Button Component;
   * Checkbox Component;
   * Label and Desc Component (base include on other component);
   * Input Component;
   * Input-error Component (base include on Input component;
   * Select Component;
   * Textarea Component.
   
>Input component has different selector. This done for make your code more readable and short.

## Button Component

Button Component is directive, which can add on tags `button` and `a`. This directive input one variable. This variable can take three value: `basic`, `primary` and `link`.
For example: `<button nrBtn='basic' (click)='doSomething()'>Click</button>`.
This component allow you set on button some svg-icon and text.

## CheckBox Component

CheckBox Component is component, which allow set `true` or `false` value for same control on your form.
This component input one variable. It is `name`, on this variable you must input name of formControl.
For example: `<nr-checkbox name='savePassword'><nr-fc-label>Сохранить пароль</nr-fc-label><nr-fc-desc>Если поле не выбрано, то пароль не будет сохранен в базу</nr-fc-descl></nr-checkbox>`

## Label and Desc Component

This component allow you add name and description for different fields.

###Label

For use this component you must use tag `nr-fc-label`. For example: `<nr-fc-label>Hi, world!</wm-fc-label>` 

###Desc

For use this component you must use tag `nr-fc-desc`. For example: `<nr-fc-desc>Goodbye, world!</wm-fc-desc>` 

## Input Component

Input Component is component for input some text and number. This component include different selector, which use different style for input field:
* `<nr-input-text>` allow you input text on this field;
* `<nr-input-email>` allow you input email address on this field;
* `<nr-input-password>` allow you input password on this field;
* `<nr-input-number>` allow you input number on this field.

This component input three variable:
* `name` - name your formControl;
* `placeholder` - placeholder which set on this field;
* `appearance` - input two value `standard` and `outline`. Base is `outline`.

For example: `<nr-input-text name="name" placeholder="Your Name" appearance="standart">...</nr-input-text>`

##Input-error Component

This component include on Input Component. For use it, you need set Validator params on your formControl.

##Select Component

This component allow you make custom selector with svg-icon, image and div-blocks. This component input:
* `items` - array with object (use class `Item`, for correct work);
* `selectedItem` - it is object, which include in `items` (base this value is `null`);
* `multiple` - select your component can select many items or not (base this value is `false`);
* `placeholder` - placeholder for this field, which display when `selectedItem = false`.

You must use tag `nr-select-item` for put items on `nr-select-template`.

For example: `<nr-select-template [items]="yourItems" [selectedItem]="currentItem"><nr-select-item *ngFor="let item of items">{{item.title}}</nr-select-item></nr-select-template>`

##Textarea Component
This component such as `InputComponent` and allow you input long message.
