enum HeaderItem {
    home = 'Домой',
    exercises = 'Упражнения',
    reading = 'Чтение',
    theory = 'Теория',
    shop = 'Магазин',
    progress = 'Мой прогресс'
}

type HeaderRouteMapping = {
    [K in keyof typeof HeaderItem]: `/${K}`;
};

type HeaderConfig = {
    name: HeaderItem;
    navigateTo: HeaderRouteMapping[keyof HeaderRouteMapping];
    id: number;
};

export const HEADER_CONFIG: HeaderConfig[] = [
    {
        id: 1,
        name: HeaderItem.home,
        navigateTo: '/home'
    },
    {
        id: 2,
        name: HeaderItem.exercises,
        navigateTo: '/exercises'
    },
    {
        id: 3,
        name: HeaderItem.reading,
        navigateTo: '/reading'
    },
    {
        id: 4,
        name: HeaderItem.theory,
        navigateTo: '/theory'
    },
    {
        id: 5,
        name: HeaderItem.shop,
        navigateTo: '/shop'
    },
    {
        id: 6,
        name: HeaderItem.progress,
        navigateTo: '/progress'
    }
];