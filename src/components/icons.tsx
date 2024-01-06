import React from 'react';
import Icon, { FontAwesome6IconProps } from 'react-native-vector-icons/FontAwesome6';

type IconType = Pick<FontAwesome6IconProps, 'size' | 'color' | 'solid'>;

export default {
    Action: {
        Add: (props: IconType) => (
            <Icon
                name={'circle-plus'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Remove: (props: IconType) => (
            <Icon
                name={'circle-minus'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Clear: (props: IconType) => (
            <Icon
                name={'circle-xmark'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Close: (props: IconType) => (
            <Icon
                name={'xmark'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Create: (props: IconType) => (
            <Icon
                name={'plus'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Edit: (props: IconType) => (
            <Icon
                name={'pencil'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Like: (props: IconType) => (
            <Icon
                name={'heart'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Share: (props: IconType) => (
            <Icon
                name={'share'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        StartChat: (props: IconType) => (
            <Icon
                name={'pen-to-square'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
    },
    Essentials: {
        Home: (props: IconType) => (
            <Icon
                name={'house-chimney'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Chat: (props: IconType) => (
            <Icon
                name={'comment'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Profile: (props: IconType) => (
            <Icon
                name={'user'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Doc: (props: IconType) => (
            <Icon
                name={'file'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Navigation: (props: IconType) => (
            <Icon
                name={'location-arrow'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Search: (props: IconType) => (
            <Icon
                name={'magnifying-glass'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Following: (props: IconType) => (
            <Icon
                name={'user-check'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Follower: (props: IconType) => (
            <Icon
                name={'user-plus'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Setting: (props: IconType) => (
            <Icon
                name={'gear'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
    },
    Status: {
        Pending: (props: IconType) => (
            <Icon
                name={'clock'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Approved: (props: IconType) => (
            <Icon
                name={'circle-check'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Rejected: (props: IconType) => (
            <Icon
                name={'circle-exclamation'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
    },
    Arrow: {
        Left: (props: IconType) => (
            <Icon
                name={'arrow-left'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Right: (props: IconType) => (
            <Icon
                name={'arrow-right'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Up: (props: IconType) => (
            <Icon
                name={'arrow-up'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Down: (props: IconType) => (
            <Icon
                name={'arrow-down'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
    },
    Chevron: {
        Left: (props: IconType) => (
            <Icon
                name={'chevron-left'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Right: (props: IconType) => (
            <Icon
                name={'chevron-right'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Up: (props: IconType) => (
            <Icon
                name={'chevron-up'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
        Down: (props: IconType) => (
            <Icon
                name={'chevron-down'}
                {...props}
                solid={props.solid ?? true}
                color={props.color ?? '#000'}
            />
        ),
    },
};
