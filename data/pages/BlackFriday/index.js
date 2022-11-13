const SocialNetworksData = [
    {
        url: 'https://www.facebook.com/HRnetronic/',
        icon: 'fa-square-facebook'
    },
    {
        url: 'https://www.instagram.com/hr_netronic/',
        icon: 'fa-instagram'
    },
    {
        url: 'https://www.youtube.com/channel/UCfQUCL7EoD5vjO1dTmKWAqw',
        icon: 'fa-youtube'
    },
    {
        url: 'https://www.linkedin.com/company/netronic-family/mycompany/',
        icon: 'fa-linkedin'
    },
    {
        url: '#',
        icon: 'fa-vk'
    },
]

const SliderData = [
    {
        title: (
            <>
                <span className='blue_selection'>FALCON STANDART</span> SET
            </>
        ),
        descr: 'Премиум тагеры с импульсной отдачей, цветным IPS дисплеем и прочным корпусом.',
        image: '/images/falcon-standart-kit.jpg',
        discount: '-15%',
        kitData: [
            {

                src: '/images/icons/tag-f1.svg',
                title: 'Тагер Falcon F1',
                count: '6 pcs'
            },
            {
                src: '/images/icons/sirius.svg',
                title: 'Станция Sirius',
                count: '6 pcs'
            },
            {
                src: '/images/icons/tag-f2.svg',
                title: 'Тагер Falcon F2',
                count: '6 pcs'
            },
            {
                src: '/images/icons/band.svg',
                title: 'Повязка Netronic',
                count: '6 pcs'
            },
            {
                src: '/images/icons/smart.svg',
                title: 'Контрольная точка Smart',
                count: '6 pcs'
            },

        ]
    },
    {
        title: (
            <>
                <span className='blue_selection'>GALAXY ECLIPSE</span>SET
            </>
        ),
        descr: 'Безопасная игра, уникальные режимы и дизайн, побуждающий к действию.',
        image: '/images/galaxy-eclipse-kit.jpg',
        discount: '-20%',
        kitData: [
            {
                src: '/images/icons/blaster.svg',
                title: 'Бластер Eclipse',
                count: '12 pcs'
            },
            {
                src: '/images/icons/vest.svg',
                title: 'Жилет Eclipse',
                count: '12 pcs'
            },
            {
                src: '/images/icons/sirius.svg',
                title: 'Станция Sirius',
                count: '2 pcs'
            },
            {
                src: '/images/icons/smart.svg',
                title: 'Контрольная точка Smart',
                count: '1 pcs'
            },
            {
                src: '/images/icons/ms.svg',
                title: 'Мультистанция',
                count: '1 pcs'
            },
        ]
    },
]

const LinkNames = [
    {
        text: 'Оборудование'
    },
    {
        text: 'Бизнес'
    },
    {
        text: 'Новости'
    },
    {
        text: 'О нас'
    },
    {
        text: 'Поддержка'
    },
    {
        text: 'Контакты'
    },
]

const FeedBackInfoData = [
    {
        field_name: 'Email',
        field_value: 'info@lasertag.**',
        style_name: 'email',
    },
    {
        field_name: 'Phone',
        field_value: '+380930140616',
        style_name: 'phone',
        data: [
            {
                url: '#',
                icon: 'fa-telegram'
            },
            {
                url: '#',
                icon: 'fa-viber'
            },
            {
                url: '#',
                icon: 'fa-whatsapp'
            },
        ]
    },
]

// export default LinkNames;
// export default MessangersData;
// export default sliderData;

export { SocialNetworksData, SliderData, LinkNames, FeedBackInfoData };