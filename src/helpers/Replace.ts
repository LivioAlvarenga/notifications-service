/*
! Faz um replace da Tipagem passando T (Tipagem original) R(Tipagem replace)
. exemplo:
    constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }
*/
export type Replace<T, R> = Omit<T, keyof R> & R;
