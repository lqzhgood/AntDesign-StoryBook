import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

type Props = {
    /**
     * # 这是标题
     *  我是描述不可以吗?
     * @default small
     */
    bSize?: 'small' | 'medium' | 'large';
} & ButtonProps;

const Test = (props: Props) => {
    return <Button {...props}>1123</Button>;
};

export default Test;

interface BaseButtonProps {
    ghost: boolean;
    danger: boolean;
}
enum Type {
    Title = 'Title',
    Input = 'Input',
}
type XX<T extends object, K extends keyof T = keyof T> = {
    [P in K]: T[K];
};

const x: XX<BaseButtonProps> = {
    ghost: true,
    danger: true,
};

console.log('x', x);

type ConfList = {
    [Type.Input]: string;
    [Type.Title]: number;
};

interface _A<T extends Type> {
    type: T;
    conf: ConfList[T];
}

type A<U = Type> = U extends Type ? _A<U> : never;

const ErrorTemplate: A = {
    type: Type.Input,
    conf: 'str',
};

console.log('ErrorTemplate', ErrorTemplate);
